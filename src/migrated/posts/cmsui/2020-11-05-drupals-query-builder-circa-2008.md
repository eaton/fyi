---
id: post.eEdMGsHE
type: BlogPosting
name: 'Drupal''s Query Builder, Circa 2008'
url: 'http://cmsui.org/post/drupal-query-builder-2008'
keywords:
  - drupal
  - sql
  - history
isPartOf: blog.cmsui
date: 2020-11-05T00:00:00.000Z
---
![](/_media/reprints/cmsui/drupal-query-builder-2008.png)

In the [previous post](https://cmsui.org/post/drupal-query-builder-2006), a quick tour of Drupal's earliest click-and-drag SQL query building tool turned into a history of the CMS's early years. Drupal's 4.7 and 5.0 releases (shipping in 2006 and 2007, respectively) were average launches in terms of core functionality and editorial UX, but the Views and CCK plugins were fueling a period of rapid evolution in the user and developer communities.

By the time Drupal 6 launched in mid-2008, the two modules were the most popular third-party addons, period. Roughing out a site's content types in CCK, then its listing and archive pages in Views, was taught as the first step of building a Drupal site. O'Reilly & Associates' bestselling _Using Drupal_ focused on those content-types-and-views recipes rather than API tutorials. A robust second-tier ecosystem of Views plugins added additional features like Calendar displays, endless scrolling, and the ability to build Views-powered backend screens for content moderators and managers.

Unfortunately, Views' dropdowns-and-buttons heavy query building UX crumpled under the weight of that functionality. Within a few months of Drupal 6's release, Views 2.0 brough a complete rewrite. Its AJAX powered interface focused on giving site builders a birds' eye view of the settings that mattered when editing a View.

Views 2.0 also added a host of extra features. A SQL query analyzer warned builders if they'd created a monstrous, site-killingly slow View. Limited inheritance allowed builders to define a single content query — e.g., all published event posts created within the last week and tagged with 'party' — then layer multiple displays on top of it. A table-based calendar, RSS feed, site-wide sidebar widget, and endlessly scrolling list could then spring from the same set of results. Critically, content lists built in the Views UI could also be exported as PHP code and added to a developer's custom Drupal plugin — a feature that dramatically simplified source control and deployment of Views on mission-critical sites.

At the same time, Drupal 6's release brought performance improvements for large sites, and other plugin developers were rounding out its traditionally weak media management and ecommerce features. Between 2008 and 2010, a host of high-profile media, technology, and government sites (including the high-profile Whitehouse.gov launch in Obama's first term) would move to the CMS. Views, CCK, and the platform's growing emphasis on complex relational content would power its growth for the next several years.
