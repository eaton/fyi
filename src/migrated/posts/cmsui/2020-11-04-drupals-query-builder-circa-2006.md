---
id: post.4TazT3Z
type: BlogPosting
name: 'Drupal''s Query Builder, Circa 2006'
url: 'http://cmsui.org/post/drupal-query-builder-2006'
keywords:
  - drupal
  - sql
  - metadata
  - nocode
isPartOf: blog.cmsui
date: 2020-11-04T00:00:00.000Z
---
![](media://reprints/cmsui/drupal-query-builder-2006.png)

In late 2005, Mambo (and its fork, Joomla!) dominated open-source content management; Wordpress had yet to dethrone [Movable Type](https://www.bowjamesbow.ca/2004/05/16/movable-type-30.shtml), and the "social" web was still ruled by community news portals and discussion boards. Drupal was an up-and-comer with promising ideas about flexible content organization, but few killer features to make it stand out in head to head evaluations.

Two third-party plugins that emerged that year, however, would shape the platform's direction for the next decade. The first one — Content Construction Kit — was developed by a cluster of [Radio UserLand](https://en.wikipedia.org/wiki/Radio_UserLand) expats. They envisioned a metadata-driven system that would allow site adminstrators to defined and manage different types of strctured content without writing any code. It would go on to become wildly successful — to the point that no modern Drupal sites are built without it, and tools that added custom content type management to Wordpress were often marketed as "CCK for Wordpress."

The second plugin — Views — was written by Earl Miles, a newcomer to Drupal's growing commuinty of developers. He was intrigued by CCK's flexibility but frustrated by the amount of custom code that was still needed to integrate its content into a fully realized site. Building "recent posts" widgets, tables of user data, filtered RSS feeds, and so on from CCK's click-together content types still demanded custom PHP and SQL, as well as familiarity with its automatically-generated database schemas.

Views hid that complexity from site builders, allowing them to create a new page on the site, choose the kinds of content that should populate it, apply filters based on the fields defined with CCK, and customize the appearance of the resulting page. In addition, had its own plugin architecture, allowing developers to add new display styles (Javascript rotators, XML feeds, CSV downloads) while piggybacking on the Views query-builder.

By 2006, Views and CCK had taken the Drupal world by storm. Although complex queries were unwieldy to create and modify with the initial Views UI, work quickly began on an AJAX-powered followup. By 2007, the majority of Drupal sites were using it and calls to roll Views into the official "Drupal Core" CMS begean in earnest.
