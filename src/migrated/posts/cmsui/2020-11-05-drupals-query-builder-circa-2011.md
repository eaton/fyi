---
id: post.hb_qZ7E
type: BlogPosting
name: 'Drupal''s Query Builder, Circa 2011'
url: 'http://cmsui.org/post/drupal-query-builder-2011'
keywords:
  - drupal
  - sql
  - history
isPartOf: blog.cmsui
date: 2020-11-05T00:00:00.000Z
---
![](/_media/reprints/cmsui/drupal-query-builder-2011.png)

The past two posts have looked at the evolution of a particular administration screen in Drupal — the Views query-builder. From its birth as a third-party plugin during the early years of Drupal's evolution, to its current role as a foundation Drupal site architecture, it's gone through quite a few iterations.

Drupal 6 shipped in mid-2008 and the second major version of the Views interface followed shortly thereafter. Drupal 7 took about two and a half years to work its way through development, beta, and final release; in that time, the project's growth took off like a rocket and the small team of Views developers worked in parallel on a compatible version of the popular plugin. Views' importance to the Drupal ecosystem was undeniable at that point: the majority of developers, site builders, and project stakeholders had never even see a Drupal site that _wasn't_ built with it. Many community members (and investors at Acquia, the new VC-funded startup positioning itself as the Red Hat of Drupal) worried that Drupal 7 adoption would suffer if a compatible version of Views wasn't ready at launch.

With considerable elbow grease from the Views team, and engineering assistance from a number of other Drupal development shops, version 3.0 of the plugin was ready to roll out almost immediately after Drupal 7 shipped. It changes were nowhere near as radical as the 1.0 to 2.0 upgrade, but it integrated a few key lessons from the years of community feedback. In order to match Drupal 7's new backend administrative UI, it used modal popups to manage and edit individual settings in the query builder. It came "bundled" with Views that overrode most of Drupal's backend and frontent content listing pages; site builders could customize a new Drupal site simply by installing Views, turning it on, and tweaking its versions of those pages. And — most importantly — it came with the promise that the codebase was being prepped for eventual inclusion in the _next_ version of Drupal's core release.
