---
id: post.vpd-495
type: BlogPosting
name: Security misunderstandings. Argh.
isPartOf: blog.viapositiva
date: 2007-04-13T19:01:06.000Z
commentCount: 11
slug: security-misunderstandings-argh
---
This morning, someone wrote up a rather [alarming little article](http://www.buildcms.com/cms_news/drupal_struggle_with_security_issues) that made it to Digg and subsequently hit the Drupal newsfeed. "Drupal struggle with security issues," it read, and proceeded to point out the alarming number of security advisories (14) published by Drupal's security team in 2007.

While it's true that security holes are bad, only three of those fourteen were bugs in *Drupal*. 11 of the 14 were bugs in third-party addon modules found by the Drupal security team crawling through the hundreds of addons, hunting for secholes. One was a bug in the *previous* version of a third-party library used by an even older version of a third-party Drupal plugin module. Three degrees of separation from Drupal's actual code, but the Drupal security team still sent out an advisory so that Drupal sites that happen to be running it would be aware of the potential danger.

The article, basically, doesn't seem to get it. It even implies that the latest bug in a third-party module is part of Drupal's core Forms API:

> A critical security flaw was found in the database administration module and in the Drupal Form API.

In fact, the security advisory makes clear that the problem lay in dba module *not* using Forms API to build its forms. Modules that DO use Forms API don't experience the problem that was found. Did the folks at BuildCMS not read the advisory? Or do they just not understand the differences?

The Drupal security team is a serious gang of nitpickers, and I mean that in the best possible way: I've been contacted by them about modules I wrote, just to answer questions about the intended purpose of several functions and how they were used in other areas. They had seen it in CVS, and wanted to double-check with me that I was only using certain APIs in the proper fashion to avoid potential secholes. And when they DO find problems in one of those third party modules, they generally try to work with the author to ensure that patches are released quickly. It's frustrating to see the monumental work they're doing for the community spun as 'a struggle with security.'

The article concludes with some silly FUD:

> Community members are concerned Drupal, and start to wonder if security and documentations are left behind in an eager for new functionalities.

Aside from the stilted grammar, it's obvious that the author was phoning this article in. The security issues found by the secteam are universally cases of modules *not using the existing secure APIs* that are well-documented.

There *are* important security issues to be discussed in the Drupal community. There *are* sometimes high-priority security holes that are discovered and announced, along with fixes. There *are* important best practices for module developers to follow. And security IS an important consideration site-builders when evaluating third-party plugins, as with any other project that supports addon modules.

But spinning the security team's diligence in hunting down issues and broadcasting alerts as 'big changes are making things less secure, Drupal is struggling!' indicates that the writer of the article is either clueless, or more concerned about grabbing page-views than educating readers.
