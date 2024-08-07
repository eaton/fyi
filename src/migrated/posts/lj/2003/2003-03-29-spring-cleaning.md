---
id: post.lj649
type: BlogPosting
name: Spring Cleaning
isPartOf: blog.lj
date: 2003-03-29T12:06:00.000Z
commentCount: 1
---
**Warning: Geekery Ahead. If the words 'CVS Repository' make you want to cry and/or run away, *read no further.***

I do software. Both professionally and recreationally, I churn out tiny and medium sized chunks of code that do nifty stuff. Most of it is written in a .Net language like Visual Basic.Net or C#, so Visual Studio is definitely my friend. Either that, or I'm it's bitch -- sometimes it's hard to tell. Over the course of a long project, you always end up coming up with better ways to streamline your development processes, integrate best practices and fun stuff like that.

A couple things that have popped out at me over the last six months or so:

- Unit testing is a good, good thing
- Logging frameworks are also a good, good thing.
- Error handling frameworks are a good, good thing.
- Automatic generation of documentation? Also good!
- Automatic generation of code from templates? Even spiffier.
- Source control systems are not good. They are morally obligatory.
- Things that are cool are rarely cool in portable or easily adaptable ways.

I've tinkered with a few tools -- things like NUnit, Nkarta, and various .Net ports of nice Java development tools. They're good, but I want to integrate them into my standard development process better. At the moment, it's a hodgepodge of adding references and tweaking whenever I realize a project is getting big enough that it 'probably needs unit tests' and so on. So I've spent part of the morning browsing through SourceForge and GotDotNet, downloading the latest versions of various frameworks, utility packages, and stuff like that. All stuff I've used before in an ad-hoc fashion. I'm trying to get some of my development directories cleared out, set up some standard project templates that will reduce the work necessary to start a project 'the right way,' and so on. So far it's been satisfying and fun, in that geeky propeller-hat sort of way. We'll see how it goes.

While I'm at it, does anyone know of a decent CVS integration tool for Visual Studio? Visual SourceSafe is fine and all, but it's not the most flexible of beasts -- I'd like to set up a SourceForge project, and I don't like the idea of mucking around with the source control manually. I'm lazy that way.
