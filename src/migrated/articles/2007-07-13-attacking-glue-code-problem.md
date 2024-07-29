---
id: article.s8C9oqdL
type: Article
name: Attacking the Glue Code Problem
url: 'https://www.lullabot.com/articles/attacking-the-glue-code-problem'
keywords:
  - Drupal Development
date: 2007-07-13T00:00:00.000Z
publisher: org.lullabot
---
My last couple of posts to the Lullablog have mostly been rumination about the state of Drupal site-building, and the need to make certain kinds of tweaky tasks easier for folks without PHP skills. Some of these gaps are difficult to close, but others are pretty simple once you realize them. The key is isolating the specific problem that is common to lots of sites, and figuring out how to solve it in a simple, easy-to-reuse fashion. Want an example? Yes, I thought so.

Over the last year or two several large-scale Drupal projects (including MTV UK and the New York Observer) have used custom CCK content types for their section 'landing' pages, daily cover pages, and so on. This technique works really well: it lets editors and content managers tweak the details of "The Front Page" without disturbing the 'live' version, tools like Scheduler and Actions/Workflow can be used to put additional editorial workflow controls on the new front page layouts, and there's no need to whip up a special maintenance UI for the various topical/sectional landing pages. Since they're nodes, you get them for free.

The trick is that you want the url for your section, or your landing page, to always display the right node. For example, http://www.newspaper.com/section/entertainment should always display the latest published 'front\_page' node in the entertainment category. Without manually mucking around with path aliases every time you make a new node, there's no way to do that without custom code. This kind of stuff is easy to tuck into a single function or two in a custom module, but it's still a hurdle for folks that don't have PHP experience.

So! There's our problem: make it possible to set up custom url paths that display the latest node of a particular type, at a standard bookmarkable location. I took a look through code that we've written for clients in the past to do similar things, and found a snippet that I could re-use. When a user hit the module's custom url path, it loaded a pre-defined view, picked the top node, and displayed it. I gave it a bare-bones UI and added a couple of convenience features (like support for caching, to reduce load on high traffice sites). The result? [The Top Node module.](http://drupal.org/project/top_node)

The heart of the module is only 50 lines or so of code; the complicated part was putting a nice editing interface onto it. (This demonstrates the proof of my earlier comment: most 'glue code' tasks are pretty simple, to the point that it takes more code to give them a user interface.) There are already a couple of feature requests for it, and a handful of people are interested in helping add them.

Overcoming the challenge of 'glue code' in Drupal doesn't have to be painful. It just requires developers to step back, identify the common things that we have to tweak and hack on every site, and spend a bit of time to make it reusable. Let's brainstorm -- what small, granular bits of functionality do YOU find yourself hacking together on every Drupal site you build? And how can you turn that 'glue' into a useful tool?
