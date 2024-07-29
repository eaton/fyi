---
id: post.vpd-1938
type: BlogPosting
name: Beginning to suspect I might be a Drupal nerd
isPartOf: blog.viapositiva
date: 2008-10-10T18:43:08.000Z
commentCount: 19
slug: beginning-suspect-drupal-nerd
---
Over the past couple of weeks, a few friends and colleagues asked me to give a run-down of what modules and projects I created or contribute to in the Drupal world. I started picking my way through them, and it was pretty sobering. (I think I'm going to need an intervention if I release even one more module...) This list leaves out the work that I do on Drupal Core, and doesn't include patches or enhancements to other modules, but it's a nice birds-eye view of what kind of stuff I'm doing in my copious free time. Ahem.  

### The Heavy Hitters

- **[VotingAPI](http://drupal.org/project/votingapi)** - This one was my first real splash in the Drupal community. When I first started using Drupal, I wanted a simple rating widget with nice statistics. One module had the pretty widget, another had the statistics... and they couldn't work with each other. Frustrated, I started work on VotingAPI, a generic storage and calculation engine for rating and voting on content. In the years since, it's grown and matured. There are piles of modules based on it now, and I'm really pleased with what it's become.
- **[Fivestar](http://drupal.org/project/fivestar)** - Nate Haug and I originally built this one for SonyBMG's suite of artist web sites. It was one of the first slick AJAX based VotingAPI modules, and under Nate's steady hand it's grown into a really flexible tool. Spotting it on random sites is always fun.
- **[SimpleViews](http://drupal.org/project/simpleview)** - I've been working on this for one of our Top Secret Clients, and I posted about it just a week or two ago. It's a streamlined tool designed to give newcomers and clients a simple way to build their own content listing pages without mastering the full complexity of Views.
- **[Amazon](http://drupal.org/project/amazon)** - One of the first modules I started using when I migrated my blog to Drupal was the Amazon Associates tools. It allowed me to link to books, import cover images, and other nice stuff. This module is a ground-zero rewrite, built on top of Drupal 6's new APIs and the awesome features in Views 2 and CCK.
- **[Token](http://drupal.org/project/token)** - While building some modules for a client, I realized that I was duplicating certain chunks of code -- stuff to extract the title and type of a given node, pulling the name of the currently logged in user, etc. Token abstracts this kind of code, allowing modules to use simple snippets of text like \[title\] and \[date\] with dynamic data. A year and a half later, dozens of other modules integrate with it. Woo! Greg Knaddison is the primary maintainer these days, and he does an awesome job.
- **[Twitter](http://drupal.org/project/twitter)** - Walkah, the godfather of external API integration with Drupal, wrote the initial version of this module. Some late-night conversations turned into a monster patch, and today Twitter Module 2.0 offers hardcore integration with Views 2, automation actions, and other cool Drupal 6 features. It's what I use to drive my automatic Twitter announcements, and my Microblog sidebar.

### Themes

- **[Gutenberg](http://drupal.org/project/gutenberg)** is a proof-of-concept Drupal 5 theme that finesses Drupal's HTML output to match that of a Movable Type 3 installation. That means that Movable Type skins can be dropped in without modification, giving cheeky bloggers a quick boost.
- **[I Feel Dirty](http://drupal.org/project/ifeeldirty)** is a grungy-looking Wordpress theme that has really, really cool sidebar blocks. The Drupal port is a bit rough, but I'm pleased with it.
- **[Scruffy](http://drupal.org/project/scruffy)** is another grungy theme -- way grungier -- and the designer had the foresight to build all kinds of cool bits into the CSS. It works surprisingly well in a variety of settings, and I think it's a great addition to the community's theming toolbox.

### General Purpose Stuff

- **[Custom Breadcrumbs](http://drupal.org/project/custom_breadcrumbs)** lets administrators customize the breadcrumb trail that appears for each type of content on the site, syncing them with path aliases and views, etc.
- **[Custom Links](http://drupal.org/project/custom_links)** is a related tool that lets administrators add links to the footer of each Drupal node. Stuff like 'Other articles by this author' are pretty easy with it.
- **[Custom Pagers](http://drupal.org/project/custom_pagers)** - This one is the third entry in the "Custom Stuff" suite, all of which were built for the SonyBMG sites. This one allows administrators to define custom previous/next pagers for lists of nodes, not unlike Flickr's in-set pagers. While all three of the Custom Thing modules could be built using hand-rolled code for a given site, they're a nice set of tools for admins who don't want to spin off custom modules unless they need to.
- **[Wordpress Comments](http://drupal.org/project/wp_comments)** - A simple little hack that makes Drupal's comment form look like Wordpress, with form titles floated to the right and a slightly tidier layout.
- **[Tumblr API](http://drupal.org/project/tumblr)** - After putting Twitter 2.0 together, I took a stab at Tumblr.com's APIs as well. Like Twitter, this one lets you post content to a Tumblr account or import it to Drupal, connecting it using Views and other slick tools.
- **[Top Node](http://drupal.org/project/top_node)** is a simple one-shot module that lets you define a URL that always shows the latest post of a particular content type. Hooking it up to Views means that you can show a random node, the oldest node, and so on.
- **[CSS Injector](http://drupal.org/project/css_injector)** was originally built for Using Drupal, so I could includes CSS tweaks in tutorials without talking people through the intricacies of building a custom theme. It lets administrators add snippets of CSS via the UI, which is cool when you want to customize a theme without hacking its "real" files.
- **[HTTP Action](http://drupal.org/project/http_action)** - a tweaky little tool that lets Drupal events (account creation, content posting, etc) fire off arbitrary HTTP requests to other web sites.
- **[Postblock](http://drupal.org/project/postblock)** is what I use on my own blog to provide quick links to create content. It just adds a sidebar block with links to the content posting forms for each kind of node I have permission for. It's themeable via a tidy little template file, so it can serve as a nice replacement for the cluttered node/add page on community sites.
- **[Mirror](http://drupal.org/project/mirror)** is a swiss-army knife module that pulls in external image files and saves them locally, where tools like ImageCache can properly manipulate them. I use it to power my blog's Flickr integration, and other modules like Emfield may be using it for thumbnail tweaking in the future.
- **[Private](http://drupal.org/project/private)** - a quick and dirty "privacy" flag for nodes, based almost entirely on the Drupal.org demo code for the node access system. I wrote this one for my Mom's blog, so it *has* to be simple!
- **[Clickpath](http://drupal.org/project/clickpath)** lets administrators replace Drupal's normal structure-based breadcrumbs with a Wikipedia style trail of pages-you've-visited-recently. It's not right for every site, but it is handy.
- **[Views Cloud](http://drupal.org/project/views_cloud)** lets site builders output any view as a weighted tag-cloud style display. Headlines weighted by popularity, visitors weighted by age... you get the idea.
- **Extra Displays** provides a few handy add-ons for views, including a "Profile" display type that puts the contents of a view inside a user's profile page. Want to put the latest 20 posts from each user on their profile page? Totally doable. This one is currently only in CVS, as it's likely to be merged with the [Views Bonus Pack](http://drupal.org/project/views_bonus) project.

### Old Stuff

- **[Voting Actions](http://drupal.org/project/voting_actions)** is a cool idea, but I haven't had time to focus on it for quite a while. Whenever content is rated by users, it can perform checks on the results and take actions -- promoting stories if more than 10 people rate it five stars, for example. It's neglected, and could use some serious lovin'.
- **[Akismet](http://drupal.org/project/akismet)** Before Dries launched the Mollom anti-spam tool, I was the maintainer of the Akismet module. It scans new nodes, comments, and trackbacks for spam and kicks the bad stuff out. I'm using Mollom now, so other folks have kindly stepped in to keep it going.
- **[Related Nodes](http://drupal.org/project/related_nodes)** was a quick hack to display lists of nodes that share similar tags with the current article.
- **[Simple Vote](http://drupal.org/node/42905)** was my first "API demo" for the VotingAPI. It was passable, but also pretty limited. It's nowhere near as cool as Fivestar.
- **[Node Moderation](http://drupal.org/project/nmoderation)** was one of the freelance projects that gave me some time to develop VotingAPI; it implemented Slashdot style comment moderation on top of VAPI, and was pretty cool. It's a bit neglected now, as the world seems to have moved to the Digg/Reddit model...
- **[Loves and Hates](http://drupal.org/project/loves_and_hates)** was *another* freelance voting-based project that let users on MTV UK's web site rate taxonomy terms. Things they loved showed up on their profile, and the site's most popular ("loved") tags were used to display hot articles.
- **[Latest and Greatest](http://drupal.org/project/latest_and_greatest)** is (you guessed it) another voting module. It let site visitors vote on incoming RSS news items, bubbling the popular stuff up to the top of the site's feeds while less interesting stuff scrolled off. In case you're wondering, yes, I wrote something like eighty-jillion modules on top of VotingAPI at one time.
- **[Debate](http://drupal.org/project/debate)** - I put this one together way back in the dark ages of Drupal 4.6, and the patch that it needed to work properly was the reason I started tinkering with core. The purpose was to turn certain comment threads into structured debates where participants were assigned a position and required to argue for it. Fun idea, clunky implementation.
- **[Webcomic](http://drupal.org/project/webcomic)** was my attempt to put together a "turnkey" webcomic management module for Drupal. It was never really completed, but today's Views and CCK tools are more than capable of putting together something that's ten times better.
- **[Amazon Filter](http://drupal.org/project/amazon_filter)** was a simple input filter built on the Amazon Associates Tools that replaced inline tags in a post with Amazon links and book covers.
- **[ASIN Field](http://drupal.org/project/asin)** let administrators build CCK content types with Amazon products, and like Amazon Filter it's been rolled into the new Amazon module for Drupal 6.
- **[CCK Extras](http://drupal.org/project/cck_extras)** is a grab-bag of neat CCK hacks. Link field formatters that output web site thumbnails, simpler input widgets for node references, and so on. It also contains the infamous "Redirect" formatter for the link field, an idea so horribly wrong that it uses debug\_backtrace() in the theming layer.

### Horrible Jokes Gone Wrong

- **[Encheferizer](http://drupal.org/project/encheferizer)** was my first novelty module. It turns text into Swedish Chef talk. Know it, love it, bork it.
- **[Dialectic](http://drupal.org/project/dialectic)** is like Encheferizer onf steroids. It does Rot13! Morse code! Jive talk! UTF upside-down text! It's definitely a novelty module, but I love it.
- **[Hooker](http://drupal.org/project/hooker)** is really the worst idea EVER. It lets administrators past chunks of code into the admin UI and execute them whenever internal Drupal events (hooks) fire. It's like taking all your important business logic, and keeping it on the back of a napkin! This module does conclusively prove that clean code does not mean something was a good idea.
- **[Imagemap Element](http://drupal.org/cvs?commit=145185)** is the best of the worst of both worlds... or.. something. It's a fully renderable, customizable Drupal element that outputs clickable client-side imagemaps. Also, this module is the only place that the blink tag appears in all of Drupal contrib.

Anyone interested in keeping up with the crazy, silly things I'm doing in Drupal-land can also check the [list of my latest CVS commits](http://drupal.org/user/16496/track/code) -- if you see the words 'THIS IS A BAD IDEA' scroll by on that page, it's a sure sign I'm working on a crazy new hack.
