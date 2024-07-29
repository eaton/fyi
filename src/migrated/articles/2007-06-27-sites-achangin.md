---
id: article.eymUN3te
type: Article
name: 'The sites, they are a''changin'''
url: 'https://www.lullabot.com/articles/the-sites-they-are-achangin'
keywords:
  - News
date: 2007-06-27T00:00:00.000Z
publisher: org.lullabot
---
The past several weeks have been pretty busy, hopping around with various clients and helping them iron out architectural issues in the early plans for their sites. With each new site project we work on, it seems like all of the Lullabots have been watching the 'hot spots' of work move from pure code (writing custom modules, etc.) to architecture and configuration.

Drupal has reached a point where 80-90% of the functionality of most sites can be built using nothing but Drupal core, CCK, Views, and a few dozen third-party modules. That impressive stat is made possible by Drupal's architecture, and the steadily increasing quality of many key modules in the contrib section. Unfortunately, it also means that Drupal is currently in a scary 'gray zone' between roll-your-own and plug-and-play.

In the dark ages of Drupal 4.6, and even 4.7, if you wanted your site to offer a news section, a free job posting section, and a photo gallery, the answer was simple if sometimes frustrating. You installed image.module, you hunted around in contrib for a Classified Ads module, and you used something like Taxonomy to organize story nodes into a news section. There were rough edges, of course. If you wanted to do something slightly different -- say, listing the location of a particular job when the Classified Ads module didn't support it -- you had to dive right into the code and start hacking. Photo galleries grouped by month rather than taxonomy term? Same issue. Functionality for sites was implemented by relatively 'monolithic' modules that provided custom content types, pages to display and organize them, etc. in one package. If you needed something that worked differently, you hacked one of those modules or you rolled your own from scratch.

Today, the situation is quite a bit different. While those kinds of modules still exist, much more emphasis is put on designing your own content types from scratch using CCK and a bag full of Field Type plugins. Then, you roll your own listing pages and filtered RSS feeds using Views module. In almost all cases, the resulting functionality is the same or better, and you can tailor the data model and presentation to your site's specific needs. It makes it quite a bit easier to build your site just so without re-inventing the wheel.

The trade-off, though, is increased complexity for the folks who don't need that high level of customization. If all you want to do is add a browsable gallery to your blog, installing CCK, Views, Imagecache, Imagefield, Views\_Grid, and so on, then configuring each of them to work together an produce your Perfect Image Gallery... Well, that's a daunting task. Building a wiki in Drupal is similar -- you combine six or seven modules, configure them to taste, and voila! Wiki! To do that, though, you need to figure out how they all work together and what the correct 'recipe' is.

As Drupal grows, and this trend towards LEGO-block style customization continues to dominate, a new class of modules to mange these configuration tasks will have to emerge. We've built a few modules like this for our clients - the much-discussed [Chris Daughtry](http://www.daughtryofficial.com) site, for example, uses a custom 'Photo Gallery' module to manage some of the settings for Views, CCK, Imagecache, and so on that produce the site's browsable galleries. It doesn't implement much on its own, but it encapsulates some of the more complex configuration code.

Because the module was designed specifically for that site's needs, it makes a lot of assumptions about the environment it'll be running in and doesn't bother with features we knew wouldn't be needed. It's unlikely that that specific module will ever see a public release, but that general approach shows a lot of promise. As we all scurry around building sites with the new tweakable tools, we need to identify ways that our custom solutions can be bundled up and shared with the rest of the community, too...

What challenges have you run into with this new 'more granular' approach to site building with Drupal? What solutions have you found? Sound off, folks. It's brainstorming time!
