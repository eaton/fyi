---
id: post.vpd-408
type: BlogPosting
name: Drupal and the GPL (as I understand it)
isPartOf: blog.viapositiva
date: 2006-02-06T17:57:18.000Z
commentCount: 12
slug: drupal-gpl-understand
---
As Drupal has grown in popularity, more and more people have started using it for consulting work, and more people are beginning to evaluate Drupal-based business models. Since Drupal is released under the GPL software license, all derivitive software (including plugin modules) is also covered under the GPL. There's a lot of confusion over what's kosher and what's not. I've spent the last couple of days chatting with some of the core Drupal developers and reading up on the GPL license. I think I've figured out the basics -- My words are not canon, and anyone is free to correct me if I am factually incorrect...

The following are automatically released under the GPL license:

1. Any files checked into the Drupal CVS repository
2. Any Drupal modules, even if they are not checked into the CVS
3. CODE from Drupal themes (ie, the page.tpl.php, template.php, and so on)

As long as they are not checked into the Drupal CVS repositiry, the following are NOT automatically released under the GPL license:

1. CSS files, image files, media files, and any other non-PHP files
2. Programs (including PHP code) that do not directly interface with Drupal. (For example, the TinyMCE text editor project is a separate program, with a Drupal module that 'connects' it to Drupal. The module is automatically GPL'd, but the TinyMCE project is not.)

Now, what does it mean to say that something is 'released under the GPL license?' There are a lot of lawyer-ish terms to throw around, but after much discussion, it seems to boil down to this:

1. You can charge a client for your work that is released under the GPL.
2. You can host GPL-licensed stuff on your web site and charge people for downloading it.
3. You cannot control what someone ELSE does with software released under the GPL once they have it. (This is because anyone who has a copy of GPL-covered software has the right to modify it or give it away to anyone else.).
4. You CAN control, via licenses or agreements or what not, stuff that isn't covered by GPL. (images, css layouts, media, and 'helper' programs like TinyMCE that don't directly connect to Drupal). This distinction is important.

What it boils down to is this. If you want to make money off of your work with Drupal, there are a couple of options:

1. Charge consulting clients for the time it takes you to do the work
2. Petition the community for 'sponsors' if you think a project would be valuable, but can't afford to donate the time (this is sometimes called a reverse auction)
3. Sell your Drupal modules and themes. After people purchase them, they can give away \*anything that's covered by the GPL.\* You, though, don't have to give technical support or accept feature requests from those who didn't pay.
4. Write your custom software as an external program (in PHP or some other language) that can be used without Drupal. Then write a simple module that 'connects' it to Drupal. The module is GPL'd, but people can't distribute the separate program without your permission.
5. For themes, the basic template files and php files will be GPL'd. Anyone who has your theme can hand those files to their friends willy-nilly, but they must still obtain your permission to redistribute the images, media, and CSS files that make your theme distinctive.

I may be wrong -- if I've gotten the facts wrong (not 'what you would like to be different,' just the facts), please correct me.
