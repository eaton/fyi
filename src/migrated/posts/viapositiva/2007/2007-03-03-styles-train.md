---
id: post.vpd-486
type: BlogPosting
name: Styles On a Train
isPartOf: blog.viapositiva
date: 2007-03-03T00:53:33.000Z
commentCount: 19
slug: styles-train
---
This week, [Matt](http://www.asitis.org) and I have been in Chicago working with the folks from [After School Matters,](http://www.afterschoolmatters.org) an amazing organization that puts together tons of after school learning projects for the city's high school students. As part of the process, we took them through building Drupal modules, converting a static HTML/CSS design to an active Drupal theme, and so on. I'd never seen the latter in action (or at least, I'd never seen it done as quickly as Matt was able to) and I was impressed. So, I decided I'd do something I've been meaning to for a while.

Movable Type is a venerable blogging/web publishing tool that's been around since the early days of blogging. TypePad runs on it, and until I found Drupal, it's what ran [Via Positiva](http://www.viapositiva.net) as well. It has a lot of downsides, but one *real* strength is an active community of CSS designers cranking out new layout styles for it. Since Movable Type tends to have a very structured HTML output, and most people stick to skinning that with CSS, I always thought it should be *relatively* easy to make a Drupal theme that outputs the right MT-compatible HTML to use those styles.

So. On the train rides to and from the city, I did it. Most of the tricky stuff involved overriding certain Drupal theme functions in template.php to ensure our 'helpful' default styles didn't collide with Movable Type's. Once that was in place, though, I started downloading MT styles from sites like [The Style Archive](http://www.thestylearchive.com) and dropping them in. Lo and behold... [they worked!](http://www.drupal.org/project/gutenberg)

A few styles are unhappy when they don't see VERY specific MT structures there (like the 'categories' sidebar) but the vast majority work nicely, and many even intelligently adjust to Drupal's flexible appearing-and-disappearing sidebars. The net result is that hundreds of existing Movable Type visual styles can now be used with Drupal.

It's a really awesome example of how Drupal's flexible templating system allows it to adapt, squeezing into more restrictive structures when necessary. And tinkering with it has helped me feel a bit more confident when messing around with complicated bits in the templating system. Hooray for open source!

\[inline:sites/jeff.viapositiva.net/files/styles.gif\]
