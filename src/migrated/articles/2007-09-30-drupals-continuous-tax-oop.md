---
id: article.ejHWRWAq
type: Article
name: 'Drupal''s Continuous Tax, or: Should We OOP?'
url: 'https://www.lullabot.com/articles/drupals-continuous-tax-or-should-we-oop'
date: 2007-09-30T00:00:00.000Z
publisher: org.lullabot
---
Blogger Crazy Bob recently commented on something he calls ["The Continuous Tax"](http://crazybob.org/2007/09/gavin-king-on-activerecord.html#9100660737606468207) -- the time and energy that must be invested in building and maintaining APIs to do something your programming language doesn't handle for you automatically.

The discussion in question focused on the nature of ActiveRecord in Ruby On Rails and how it compares to strongly-typed ORM systems in Java. That won't mean much to most people in the Drupal community, but the underlying conflict mirrors a hot debate currently brewing in our neighborhood. Specifically, should Drupal use PHP's new OOP features?

Traditionally, Drupal has used plain vanilla procedural PHP to acomplish a wide variety of cool tricks. (It's a good lesson for those who say that design patterns can only be used with OOP languages; Drupal's hook system and theming system use naming conventions to implement visitor patterns, chains of responsibility, and so on. The entire FormAPI system is, as many have argued, a lightweight object oriented system implemented with arrays.) While many underlying concepts of object orientation are embraced, Drupal was also written when PHP's OOP features, well... kind of sucked.

That will change about a year from now, when Drupal 7 is slated for release. We're dropping support for versions of PHP earlier than 5.2, which means that a host of OOP improvements in the language will be at our disposal. Some obvious candidates for OOP refactoring are already in the pipeline: PHP 5's improved PDO database library is OOP by nature, so we'll be using it under the hood. There are, though, dozens of other parts of Drupal that might benefit from an OOP refactoring. Should we take advantage of that in Drupal 7? Why not make 2008 "The Year Drupal Goes OOP?"

The easy answer is, "It already works." One of geek guru Joel Spolsky's cardinal rules is, ["Rewriting from scratch is a mistake."](http://www.joelonsoftware.com/articles/fog0000000069.html) All the gains you think you'll make by tossing out your old crufty code and starting fresh are usually wiped out by the energy needed to recreate years of tricky debugging and carefully balanced edge cases. And make no mistake -- reimplementing Drupal with PHP's OOP language features would be a complete rewrite. Because so much of Drupal's code is dedicated to achieving OOP-like functionality in procedural code, it will require fundamental rethinking of core architectural issues like "hooks" and "nodeapi" and "how we store data."

So, does that mean we shouldn't use OOP? No. The flip side of the coin is Crazy Bob's comment about the "Continuous Tax." Drupal's use of PHP makes sense for a CMS that needs to be accessible to a wide audience. But the lack of language features in earlier versions forced Drupal's developers to roll their own solutions to the problems OOP is often used to solve. The developer time we need to invest in ongoing maintenance and enhancement of these custom solutions is the "Continuous Tax."

How do we balance these two imperatives? That's an excellent question -- and a lot of great answers came out of the sessions and conversations at Drupalcon Barcelona. In my next post, I'll take a stab at summarizing some of them.
