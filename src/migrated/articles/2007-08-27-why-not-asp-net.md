---
id: article.sRZZaXfh
type: Article
name: Why not ASP.Net?
url: 'https://www.lullabot.com/articles/why-not-aspnet'
keywords:
  - Drupal Development
date: 2007-08-27T00:00:00.000Z
publisher: org.lullabot
---
A few days ago, developer Sasha Sydoruk asked [why there aren't more cool startups building web sites based on ASP.Net.](http://www.sashasydoruk.com/2007/08/19/where-are-all-the-cool-startups-that-run-on-aspnet/)

> ...If you checkout the new startups on TechCrunch, it seems like every new startup is something Linux based and is not ASP.NET.
> 
> And I really want to know why. If you are a new startup, you have only one shot at it, so you really want to use the best tools available. And it seems like everybody picks anything but ASP.NET, unless you are doing corporate development.

It's an interesting question, and it's a lot different than the usual "Why doesn't everyone use LISP/Eiffel/SmallTalk/My Cool Language" head-scratchers. Microsoft has poured huge amounts of energy into building the .NET framework, and it's fair to say that most Windows software written in the past half a decade or so uses it. Lots of .NET code is being written every day: it is the very opposite of a dead language. It's got a very robust and feature-rich web framework called ASP.NET, designed to compete with Java as a platform for building web applications. It's very powerful. As Sasha observes, though, you just don't hear about new sites being launched on it. Outside of the corporate world, and a handful of select projects like DotNetNuke, it's a pink unicorn: no one's ever seen it f'real. Sasha continues:

> Is it the cost of tools? Hosting cost? Restrictive licensing? Or maybe ASP.NET became "the van" of web development. Safe, bulky and definitely not sexy.

I think it's a little of each, and more. I spent about four years with two companies, first building .NET web apps for the real estate market then building desktop client/server apps for a vertical market. .NET is Java done better: a framework for large carefully deployed vertical solutions. Today I'm a Drupal/LAMP guy and -- despite the kinds of frustrations that any language or platform will give you -- I'm loving it.

ASP.Net faces a couple of key disadvantages.

1.  **Cost.** A solid .NET development setup for a team of three or four, plus the licenses for all the server-side software you'll need to run things, can probably buy you half a man-year of developer time. This isn't a HUGE issue if you're launching a startup with funding, but quite a few of the groundbreaking sites out there started out as experimental skunk-works projects. You can cut costs by using free development tools (the C# compiler, after all, is a free download) but you lose a lot of the benefits that come with the platform.
2.  **Fewer hackers.** This is very close to the first point, but it's a bit different. The barrier for entry for most of the 'hot' languages on the \*NIX side is low, closer to old-school ASP than the heavy-duty stuff of ASP.NET. That means a smaller pool of hobbyists-turned-coders to feed the project mill. While you probably don't mind the higher barrier for entry if you're hiring a team to develop some enterprise software, most startups don't happen that way. This isn't even a .Net specific issue -- it's more about the changing view of 'scripting languages' when compared to 'real languages' like C, Java, C#, C++, and... well. Whatever flavor of C you can think of.
3.  **Not the best fit for web RAD.** .NET is an amazing platform for developing Windows applications. Truly awesome. Unfortunately, ASP.NET tends to err on the side of 'making the web work like WinForms'. When it comes time to web-enable your .NET based client/server application, you'll thank your lucky stars for ASP.NET's familiarity. When you're trying to pound out a prototype of a new social networking site, however, you'll feel like you're dragging a Volvo uphill. It just doesn't make as much sense.
4.  **The people are the platform.** It's obviously not universal, but the GPL/MIT/Creative Commons influence that permeates the non-corporate \*NIX side of the development world affects a lot more than just the software itself. Rapid dissemination of best practices, novel tools, and open-sourced solutions to common problems are standard operating procedure in the \*NIX side of the fence. **Ultimately, this is far more important than the details of the specific software platform.** The Open Source world is a 'gift economy' -- you gain karma and status by giving people things of value. Whether that's a new caching API, patches for bugs in an existing framework, or hard-won knowledge about esoteric optimization issues, sharing is built into that development community's fabric. This makes life hell if you're trying to figure out how to sell boxed software, but if you're trying to implement a cool idea and launch a startup in your spare time, the difference is night and day.

When an OSS project or a large-scale LAMP site goes down in flames, knowledge of how to avoid the problem in the future tend to spread fast, benefiting every other site built with the same tools. This accumulated knowledge exists in the .Net world, certainly, but on a much different scale. Microsoft publishes incredibly high-quality materials, and they've engaged the development community in great ways over the past several years. Their podcasts, blogs, publications, and so on are great for .NET developers They still can't compete on the knowledge-sharing front, though, because of the fundamental difference between *Microsoft Publishing Stuff*, and *Lots Of Developers Talking About Stuff.*

These are obviously pretty sweeping generalizations. I don't mean to imply that .Net is bad, or that the languages/platform are inherently flawed. I work primarily with PHP, and man do I miss a lot of the powerful language constructs that I took for granted in C#. In addition, a lot of the above problems become less important if you're part of an organization that already has a major investment in .Net, or an existing talent pool of developers to tap. If I were trying to bootstrap a startup without quite a bit of seed funding, though, I'd be hard-pressed to justify .Net.

Am I talking out of my hat? Do I have blinders on? Have I missed fundamental improvements in the framework made over the last year or two? Quite possibly. But the question was asked, and that's how I see it.

***Update:** Over on TechToolBlog, a poster named Tim has published [some interesting stats on advertised job openings for various platforms.](http://www.techtoolblog.com/archives/ruby-php-aspnet-job-comparison) In his area, there are at least twice as many ASP.NET openings as there are PHP/Rails jobs. A quick peek around the Chicago area confirmed the same numbers, though it might just be a midwest thing. Perhaps that means that there are quite a few large-scale corporate gigs, but fewer high-visibility "Cool Startups" using the platform?*
