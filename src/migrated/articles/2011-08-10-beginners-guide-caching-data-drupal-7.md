---
id: article.s1DuE1vh
type: Article
name: A Beginner's Guide to Caching Data in Drupal 7
url: >-
  https://www.lullabot.com/articles/a-beginners-guide-to-caching-data-in-drupal-7
keywords:
  - Performance and Scalability
  - System Administration
date: 2011-08-10T00:00:00.000Z
publisher: org.lullabot
---
Building complicated, dynamic content in Drupal is easy, but it can come at a price. A lot of the stuff that makes a site engaging can spell 'performance nightmare' under heavy load, thrashing the database to perform complex queries and expensive calculations every time a user looks at a node or loads a particular page.

One solution is to turn on page caching on Drupal's performance options administration page. That speeds things up for anonymous users by caching the output of each page, greatly reducing the number of DB queries needed when they hit the site. That doesn't help with logged in users, however: because page level caching is an all-or-nothing affair, it only works for the standardized, always-the-same view that anonymous users see when they arrive.

Eventually there comes a time when you have to dig in to your code, identify the database access hot spots, and add caching yourself. Fortunately, Drupal's built-in caching APIs and some simple guidelines can make that task easy.

### The basics

The first rule of optimization and caching is this: never do something time consuming twice if you can hold onto the results and re-use them. Let's look at a simple example of that principle in action:

```php
function my_module_function() {
  $my_data = &drupal_static(__FUNCTION__);
  if (!isset($my_data)) {
    // Do your expensive calculations here, and populate $my_data
    // with the correct stuff..
  }
  return $my_data;
}
```

The important part to look at in this function is the variable named $my\_data; we're initializing it with an odd-looking call to `drupal_static()`. The `drupal_static()` function is new to Drupal 7, and provides functions with a temporary "storage bin" for data that should stick around even after they're done executing. `drupal_static()` will return an empty value the first time we call it, but any changes to the variable will be preserved when the function is called again. That means that our function can check if the variable is already populated, and return it immediately without doing any more work.

This pattern appears all over the place in Drupal -- including important functions like node\_load(). Calling node\_load() for a particular node ID requires database hits the first time, but the resulting information is kept in a static variable for the duration of the page load. That way, displaying a node once in a list, a second time in a block, and a third time in a list of related links (for example) doesn't require three full trips to the database.

In Drupal 6, these static variables were created using the PHP 'static' keyword rather than the drupal\_static() function (see the [Drupal 6 version of this article](http://www.lullabot.com/articles/beginners-guide-caching-data-d6) for an example). It was also common to provide a $reset parameter on each function that used this pattern, giving modules that needed the freshest information a way to bypass the caching code. While that approach still works in Drupal 7, drupal\_static() allows the process to be centralized. When modules need absolutely fresh data, they can call drupal\_static\_reset() to clear out any temporarily cached information.

### Making it stick: Drupal's cache functions

You might notice that the static variable technique only stores data for the duration of a single page load. For even better performance, it's often possible to cache data in a more permanent fashion...

```php
function my_module_function() {
  $my_data = &drupal_static(__FUNCTION__);
  if (!isset($my_data)) {
    if ($cache = cache_get('my_module_data')) {
      $my_data = $cache->data;
    }
    else {
      // Do your expensive calculations here, and populate $my_data
      // with the correct stuff..
      cache_set('my_module_data', $my_data, 'cache');
    }
  }
  return $my_data;
}
```

This version of the function still uses the static variable, but it adds another layer: database caching. Drupal's APIs provide three key functions you'll need to be familiar with: [cache\_get()](http://api.drupal.org/cache_get), [cache\_set()](http://api.drupal.org/cache_set), and [cache\_clear\_all()](http://api.drupal.org/cache_clear_all). Let's look at how they're used.

After the initial check of the static variable, this function looks in Drupal's cache for data stored with a particular key. If it finds it, $my\_data is set to $cache->data and we're done. Combined with the static variable, future calls during this page request won't even need to call cache\_get()!

If no cached version is found, the function does the actual work of generating the data. Then it saves it TO the cache so future requests will find it. The key that you pass in as the first parameter can by anything you choose, though it's important to avoid colliding with any other modules' keys. Starting the key with the name of your module is always a good idea.

The end result? A slick little function that saves time whenever it can -- first checking for an in-memory copy of the data, then checking the cache, and finally calculating it from scratch if necessary. You'll see this pattern a lot if you dig into the guts of data-intensive Drupal modules.

### Keeping up to date

What happens, though, if the data that you've cached becomes outdated and needs to be recalculated? By default, cached information stays around until some module explicitly calls the cache\_clear\_all() function, emptying out your record. If your data is updated sporadically, you might consider simply calling cache\_clear\_all('my\_module\_data', 'cache') each time you save the changes to it. If you're caching quite a few pieces of data (perhaps versions of a particular block for each role on the site), there's a third 'wildcard' parameter:

<?php cache\_clear\_all('my\_module', 'cache', TRUE); ?>

This clears out all the cache values whose keys start with 'my\_module'.

If you don't need your cached data to be perfectly up-to-the-second, but you want to keep it reasonably fresh, you can also pass in an expiration date to the cache\_set() function. For example:

<?php cache\_set('my\_module\_data', $my\_data, 'cache', time() + 360); ?>

The final parameter is a unix timestamp value representing the 'expiration date' of the cache data. The easiest way to calculate it is to use the time() function, and add the data's desired lifetime in seconds. Expired entries will be automatically discarded as they pass that date.

### Controlling where cached data is stored

You might have noticed that cache\_set()'s third parameter is 'cache' -- the name of the table that stores the default cache data. If you're storing large amounts of data in the cache, you can set up your own dedicated cache table and pass its name into the function. That will help keep your cache lookups speedy no matter what other modules are sticking into their own tables. The Views module uses that technique to maintain full control over when its cache data is cleared.

The easiest place to set up a custom cache table is in your module's install file, in the `hook_schema()` function. It's where all of the custom tables used by your module are defined, and you can even make use of one of Drupal's internal helper functions to simplify the process.

```php
function mymodule_schema() {
  $schema['cache_mymodule'] = drupal_get_schema_unprocessed('system', 'cache');
  return $schema;
}
```

Using the `drupal_get_schema_unprocessed()` function, the code above retrieves the definition of the System module's standard Cache table, and creates a clone of it named 'cache\_mymodule'. Prefixing the name of custom cache tables with the word 'cache' is common practice in Drupal, and helps keep the assorted cache tables organized.

If you're really hoping to squeeze the most out of your server, Drupal also supports the use of alternative caching systems. By changing a single line in your site's settings.php file, you can point it to different implementations of the standard cache\_set(), cache\_get(), and cache\_clear\_all() functions. The most popular integration is with the open source [memcached](http://drupal.org/project/memcache) project, but other approaches are possible (such as a file-based cache or against PHP's APC). As long as you've used the standard Drupal caching functions, your module's code won't have to be altered.

### Advanced caching with renderable content

In Drupal 7, "renderable arrays" are used extensively when building the contents of each page for display. Modules can define page elements like blocks, tables, forms, and even nodes as structured arrays; when the time comes to render the page to HTML, Drupal automatically uses the `drupal_render()` function to process them, calling the theme layer and other helper functions automatically. Some complex page elements, though, can take quite a bit of time to render into HTML. By adding a special #cache property onto the renderable element, you can instruct the `drupal_render()` function to cache and reuse the rendered HTML each time the page element is built.

```php
$content['my_content'] = array(
  '#cache' => array(
    'cid' => 'my_module_data',
    'bin' => 'cache',
    'expire' => time() + 360,
  ),
  // Other element properties go here...
);
```

The #cache property contains a list of values that mirror the parameters you would pass to the `cache_get()` and `cache_set()` if you were calling them manually. For more information on how caching of renderable elements works, check out the detailed documentation for [the drupal\_render() function on api.drupal.org](http://api.drupal.org/api/drupal/includes--common.inc/function/drupal_render/7).

### A few caveats

Like all good things, it's possible to overdo it with caching. Sometimes, it just doesn't make sense -- if you're looking up a single record from a table, saving the result to a database cache is silly. Using the [Devel](http://drupal.org/project/devel) module is a good way to spot the functions where caching will pay off: it can log the queries that are used on your site and highlight the ones that are slow, or the ones that are repeated numerous times on each page.

Other times, the data you're using will just be a bad fit for the standard caching system. If you need to join cached data in SQL queries, for example, cache\_set()'s practice of string data as a serialized string will be a problem. In those cases, you'll need to come up with a solution that's specific to your module. VotingAPI maintains one table full of individual votes and another table full of calculated results (averages, sums, etc.) for quick joining when sorting and filtering nodes.

Finally, it's important to remember that the cache is not long term storage! Since other modules can call cache\_clear\_all() and wipe it out, you should never put something into it if you can't recalculate it again using the original source data.

### Go west, young Drupaler!

Congratulations: you now have a powerful set of tools to speed up your code! Go forth, and optimize.

*Note: This article is an updated version of an earlier article, and deals specifically with the Drupal 7 API. If you're working with an older version of Drupal, [see the Drupal 4 and 5](http://www.lullabot.com/articles/a-beginners-guide-to-caching-data-d5) or [Drupal 6](http://www.lullabot.com/articles/beginners-guide-caching-data-d6) of this article.*
