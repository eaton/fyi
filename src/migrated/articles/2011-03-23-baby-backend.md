---
id: article.aXUv9EO-
type: Article
name: Baby Got Backend
description: Spinning up an awesome experience for your site's content editors
url: 'https://www.lullabot.com/articles/baby-got-backend'
date: 2011-03-23T00:00:00.000Z
publisher: org.lullabot
---
Drupal's flexible theming system has made [](http://mogdesign.eu/blog/70-beautiful-drupal-sites/)lots of amazing site designs possible, from the respectably contemporary [White House web site](http://www.whitehouse.gov) to [Pete Droge's Drupal-driven Flash masterpiece](http://droge.com/flash). What most Drupal sites don't show off, however, is what content editors work with every day: the notoriously unglamorous content creation, editing, and management screens. Tools for *those* users are often neglected, even though their success is critical for any content-driven site.

At this year's [DrupalCon in Chicago](http://chicago2011.drupal.org/sessions/baby-got-backend-content-administrators-are-users-too) (and last year's [Web Content Conference](http://www.webcontent2010.com/videos.html#mcgrane-eaton)), [Karen McGrane](http://karenmcgrane.com/) and I co-presented on content strategy and the importance of the backend experience for successful sites. In both presentations, we focused on techniques for discovering what pain points are most acute for a site's editors, and common patterns for solving those problems. The response we've received at both conferences has been unanimous: "Once we know what kind of tools are needed, *how* can we build them in Drupal?"

The great news is that there are quite a few flexible tools to streamline your Drupal site's day-to-day content management workflow *without* writing any custom code. In this article we'll explore a couple of the easy wins, highlight modules that can be used to build out more complex tools, and give you some useful next steps for taming the backend beast.

## Making the the admin section stand out

Back in the dark ages, Drupal had a dedicated administration section. It used its own layout, locked out non-administrators, and (like most web apps) it made the split between visitor-facing content and admin-facing management tools very explicit. In 2004, Drupal 4.3 abandoned that approach in favor of "in place" administration. Settings forms, content editing tools, and so on all used the same visual styling as the front end, and user permissions controlled who had access to actions like editing and deleting content.

The downside, of course, is that separating the backend is sometimes a *good* thing. Highly customized sites often have themes that are badly suited for heavy duty management screens, and the visual cue that you're "behind the scenes" is useful for many site maintainers. Since Drupal 5, it's been possible to manually choose a separate theme for administration pages, but Drupal hasn't taken advantage of it out of the box.

Drupal 7, released this January, brings back dedicated administration tools in a big way. It ships with a new admin theme called "Seven" that sports a clean, neutral appearance and actually makes Drupal tabs and subtabs (the achilles heel of most themes) look nice. If you're using Drupal 6, [the Seven theme is available as a separate download](http://drupal.org/project/seven). A number of other dedicated administration themes are also available if Seven isn't to your liking: [I prefer Rubik](http://drupal.org/project/rubik), a lesser-known theme that's been gaining popularity over the past year. I like Rubik's clean appearance, its slick handling of collapsed fieldsets, and the fact that it hides Drupal's often-verbose field descriptions until the appropriate one has focus.

If you need more control over where the administration theme is used, check out the [Administration Theme module](http://drupal.org/project/admin_theme) for Drupal 5, 6, and 7. It lets you specify specific paths that should use the admin theme even if they're located in other sections of the site. The similar Administrative Pages module also lets you change what paths should appear in Drupal 7's "Overlay" popup window.

## Navigation for editors and administrators

Most administration themes hide things like Primary Links, sidebars, and so on to make room for edit forms and content lists. That means you'll need to use another tool to handle navigation while you're in the admin area. The [Admin Menu](http://drupal.org/project/admin_menu) module has long been a favorite: it puts a tidy dropdown menu at the top of every page, giving administrators quick access to the full navigation tree, including content creation. Using Drupal's default Menu module, you can also rearrange the options.

Drupal 7 includes a customizable administration toolbar as a compliment to the Seven theme: it hovers at the top of the page when browsing the site's normal content, and allows quick access to to the top-level administration links. A similar module, [Toolbar](http://drupal.org/project/toolbar), is available for Drupal 6. Although it isn't a direct port of Drupal 7's toolbar, it offers a similar look and feel.

My personal favorite for both versions of Drupal is the [Admin](http://drupal.org/project/admin) module. It's a bit bulkier than Admin Menu, but its navigation panel is tucked behind an inconspicuous tab when it's not in use. Admin also allows admins to stick entire blocks into the flyout panel: the result is a customizable "dashboard" that's accessible on any page. While there are a handful of other modules that provide persistent navigation palettes and menus, [Admin](http://drupal.org/project/admin), [Admin Menu](http://drupal.org/project/admin_menu), and [Toolbar](http://drupal.org/project/toolbar) are all mature and well-maintained; pick the one you like and run with it.

## Taming the node form: The easy stuff

With a fresh new look for the administration section and a consistent navigation system in place, it's time to look at Drupal's node form. It packs in a lot of functionality, but this workhorse can be overwhelming once features like revision control, extra input formats, and additional CCK fields have been added to the mix.

Your first line of defense is the [Vertical Tabs](http://drupal.org/project/vertical_tabs) module. This quick-and-easy fix turns the node form's multitude of collapsible fieldsets into a single "preferences panel" with a tab for each group of fields. It's a simple fix, but it can cut down quite a bit of clutter quickly. For those using Drupal 7, it's already built in.

Next up is the [Node Form Settings](http://drupal.org/project/nodeformsettings) module: it's a fantastic tool that smooths out a number of the node form's common annoyances. On a per-content-type basis, it can hide the "Revision Log" field, hide the "Input format instructions" that appear beneath every textarea, control the size of the node's Body field textarea, hide the Preview button, change the text of the Submit button, hide the confusing "Split summary" link that hovers above every body field, and more. It can also make many of the same tweaks to the comment form, and hide the Input Format fieldset beneath CCK-generated text fields. None of the changes are impressive alone, but together they eliminate a lot of visual clutter. Although it's not yet available for Drupal 7, a port is planned soon.

## Taming the node form: Advanced techniques

Once those two modules have taken care of the low hanging fruit, a trickier problem remains: content types with lots of custom fields. Although CCK, Drupal's FieldAPI, and related modules give us a lot of flexibility, they add to the problem of widget overload when it comes time for a writer or editor to pound out new content. Three modules, [Field Group](http://drupal.org/project/field_group), [Auto Node Titles](http://drupal.org/project/auto_nodetitle) and [Conditional Fields](http://drupal.org/project/conditional_fields), allow us to hide fields that aren't needed, populating them automatically or revealing them when appropriate.

The [Field Group](http://drupal.org/project/field_group) module allows you to cluster related fields together for each node type, even wrapping them in a collapsible fieldset that tucks them out of the way unless they're needed. Although this seems like a simple thing, properly naming and grouping input fields is one of the easiest ways to help content editors make sense of potentially confusing forms. In Drupal 7, the module also allows you to group fields differently depending on whether you're viewing or editing a node and can take advantage of the Vertical Tabs display style mentioned earlier. Field Group is included with the core CCK downloaded in Drupal 6, but is maintained as a separate project for Drupal 7.

[Auto Node Titles](http://drupal.org/project/auto_nodetitle) is straightforward: for each content type, you can hide the built-in Title field on the edit form and specify a pattern-based default that Drupal should use to populate it. This can be useful when you're using several small CCK fields for values like First Name and Last Name, or Event Date and Event Location, but want the visible title of the node to be a combination of several fields. It eliminates clutter *and *makes titles more consistent.**

**

[Conditional Fields](http://drupal.org/project/conditional_fields), meanwhile, is best used when you have large groups of CCK fields that only make sense in the presence of other selections. For example, the Street Address field on an event doesn't make sense if it's taking place online. Using Conditional Fields, you could create a Meeting Type field with several options: Conference Call, IRC Chat, or Physical Meeting. Phone Number, URL, and Street Address fields could be hidden or revealed based on the user's Meeting Type selection. This trick only makes sense when you have relatively complex content types, but it can help reduce confusion for new users quite a bit by hiding options that they don't need to worry about. Although Conditional Fields isn't yet available for Drupal 7, a similar module called [Field Conditional State](http://drupal.org/sandbox/peem/1073388) is currently under development. Keep an eye out for it as it evolves.

## Custom tools for your team

Most of the modules mentioned above focus on streamlining existing edit forms inside of Drupal, but on large sites, several other problems arise. Often, different teams or individuals have different pools of content they're responsible for; simply *finding* what you need to work on can be a chore with Drupal's one-size-fits-all content administration screen. In addition, many tasks like publishing lists of approved content are painfully cumbersome with the default admin screens. Other tasks, like editing metadata for multiple articles simultaneously, are impossible.

Fortunately, an old standby can come to the rescue. Using the [Views](http://drupal.org/project/views) module, it's easy to to create customized content listings, stick them onto a custom page in the administration section, and restrict access to users with specific roles. Using Views' Exposed Filters, editors and admins can also drill down on these lists to find content that matches just the criteria they care about.

With a tool like [Panels](http://drupal.org/project/panels), you can combine multiple Views (as well as other widgets) into highly customized dashboards for your content team, even building separate dashboards with different features for users with different responsibilities. Here on Lullabot.com, we have a simple dashboard with just two views. One lists the latest five articles published on the site, along with statistics like how many page views and comments they've received. The other view lists unpublished articles, sorted by the date they're slated for publication. That view also lists who's responsible for finishing each article, and any revision notes that have been made during the editing process.

We've used the [Login Destination](http://drupal.org/project/login_destination) module to ensure that we're taken to the dashboard as soon as we log in. On one screen, we can see what's live, what's coming up, and what steps need to be taken to finish any articles that are in the queue. If you're looking for a solution that's a bit lighter than Panels, or you need to give individual users the ability to customize their own dashboards, check out [HomeBox](http://drupal.org/project/homebox) module. It's used on Drupal.org itself, and allows users to add any blocks to their own dashboards with a drag-and-drop interface.

Finally, there's the venerable [Views Bulk Operations](http://drupal.org/project/views_bulk_operations) module. It allows you to turn any view into an administration tool that actually *makes changes* to content en masse. The available actions included publishing and deleting content, changing field values, changing authors, and more: other modules can expose additional actions as well. The available actions can be changed for each View, and dangerous actions can be hidden from users with insufficient permissions. It's an amazing Swiss Army Knife that can be used to build a wide variety of flexible, task-focused content tools.

## A world of possibilities...

Amazingly enough, we've only scratched the surface of what can be done to streamline the content management experience. In future articles I'd like to look at how modules like [Flag](http://drupal.org/project/flag) and [Prepopulate](http://drupal.org/project/prepopulate) can be used to smooth out complicated workflows; the use of [Features](http://drupal.org/project/features) to capture these administrative features and share them between sites; and upcoming projects like [Workbench](http://drupal.org/project/workbench) that capture some of the most common solutions in a single package.

As Karen and I mentioned in our [DrupalCon session](http://www.slideshare.net/KMcGrane/baby-got-backend-content-administrators-are-users-too), the real challenge is *figuring out what your site's content editors want and need.* These modules can eliminate most of the coding, but nothing can replace talking to the people who'll be using the site every day.

**

**What kinds of solutions have *you* found work best for the sites you've built?**
