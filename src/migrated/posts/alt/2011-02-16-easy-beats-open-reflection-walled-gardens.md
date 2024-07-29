---
id: post.alt6
type: BlogPosting
name: 'Easy beats open: a reflection on walled gardens'
isPartOf: blog.alt
date: 2011-02-16T01:46:26.000Z
commentCount: 13
---
This week, Apple's updated requirements for the iOS App Store have sparked another round of debate about "Walled Garden" software platforms and the dangers they pose. For those who don't hang around Mashable and Slashdot waiting for Free Software debates, I'll summarize.

### 2008 to 2011: The App Store in review

When the [iPhone App Store debuted in 2008](http://www.macworld.com/article/132402/2008/03/appstore.html), Apple announced it would take a 30% cut of all sales in the store. There was some grumbling, but for the most part it was the price of access to a large market. It also maintained Apple's place as gatekeeper for the iPhone experience: although it was unevenly enforced, apps routinely got kicked out for doing things that Apple argued would be bad for users.

About a year or so later, Apple added an in-app purchasing API, allowing apps to offer premium add-ons or in-app stores without linking to any external purchasing screens. Today, an iOS user looking to get premium stuff just clicks a "Purchase" button inside the app, the user's iTunes account is charged, the app gets purchase confirmation, and the user gets their goodies without any other interruptions. It's used by lots of games to provide additional "premium" maps, unlock special abilities, and so on. However, those in-app purchases are subject to the same 30% cut that Apple takes of new app sales.

Now, Apple has added [support for recurring subscriptions](http://www.wired.com/epicenter/2011/02/apple-subscriptions) to the API. Magazine publishers are obviously intrigued by this addition, because it matches their traditional distribution model much better than creating and distributing a completely new app for each issue. As with App Store purchases and in-app purchases, though, these subscriptions are subject to the same 30% cut for Apple.

The real kicker is that Apple now makes it very clear that [*anyone providing in-app sales or subscriptions* must use the Apple payment APIs](http://futurebook.net/content/official-apple-locks-down-kindle-app). No work-arounds, no links off to web sites that handle payment, no sneaky tricks. Either you use Apple's payment APIs or you don't offer in-app content purchases. And if content can be purchased in two places -- inside the app and via a web site, for example -- it has to be offered at the same price. No 30% markups for the in-app version of a book, for example. In that way it's similar to [Facebook's new CreditsAPI](http://blog.programmableweb.com/2011/01/27/facebook-credits-comes-out-of-beta-unveils-a-very-real-api-for-somewhat-less-real-money/) -- all Facebook games that process credits are *required* to use it.

Some people are very angry about this, some people don't care, and some people are just trying to figure out how to [parse the App Store guidelines document to get a straight answer about edge cases](http://techcrunch.com/2011/02/15/apple-in-app-subscriptions). (Does the Netflix app qualify as a "content subscription?" Does a monthly Skype subscription? Probably not, but there are lots of arguments popping up around the web about the legalese.)

### Richard Stallman is laughing at us all

Ever since the launch of the App Store, Free Software advocates have been telling us that it was Bad News with a capital B. It turned the iPhone -- already a relatively closed device thanks to Apple's control over iOS -- into a closed ecosystem for apps, too. Instead of developing open web apps that ran well on the iPhone, many developers scrambled to develop native iOS-only apps that could be sold in Apple's store. Why wouldn't they? At the time it was one of the only really capable smartphones with a browser beefy enough to run real web apps, and writing native iOS apps would allow them to turn the mobile apps into a revenue stream instead of a loss-leader for web ads.

Of course, [Richard Stallman has been warning about this kind of stuff for years.](http://www.gnu.org/philosophy/right-to-read.html) The problem with walled gardens -- software ecosystems where one vendor controls access and only those who play with them can distribute their work -- is that eventually things go south. Features you want get turned into premium add-ons, innovative developers run afoul of the legalese and can't compete with the big guys, and so on and so forth. Looking back at Steve Jobs' promises from 2008, it's not hard to see that the warnings were correct:

> [“We don’t intend to make any money off the App Store,” Jobs said. “We’re basically giving all the money to the developers and the 30 percent that pays for running the store, that’ll be great.”](http://www.macworld.com/article/132402/2008/03/appstore.html)

That's a little of the Reality Distortion Field in action: it seemed plausible at the time, but as Apple makes the use of their purchasing APIs *mandatory* for iOS apps, it's hard to pretend this isn't about protecting a revenue stream.

The problem, of course, is that none of this matters. Magazine publishers like Wired and GQ were already releasing each issue as a separate app and paying the 30% cut to Apple. In-app subscriptions *simplify* things for them. Existing subscriber-only services like Netflix never offered in-app purchasing to begin with, only linking of the app to an existing subscriber account. And Amazon won't kill its Kindle app for iOS; it will simply remove the 'Store' button from it to comply with Apple's guidelines. Heck, [the Kindle Store itself runs into the same DRM walled garden problems](http://news.cnet.com/8301-13860_3-10289983-56.html): anyone who's complaining about *this particular change* to the guidelines is already in bed with the enemy, as far as Free Software advocates are concerned.

### The heart of the problem: Open Is Hard

Given that background, it's predictable that Apple's latest announcements have triggered a lot of "Open is better! See?" comments from free software advocates and DRM critics. To some extent, they're right: if the iPhone were an open device, people could use any operating system they desired to power their phones. If the iOS were free-as-in-freedom software, unencumbered by Apple's onerous terms of services and so on, people could use any app store they liked and developers could thumb their noses at Apple's 30% cut. But that's not the case, and people continue to use iOS devices like iPhones, iPads, and iPods despite the burdens of a tightly controlled system.

Many open-systems advocates and Apple critics are baffled. *Why* do people use iOS devices when open alternatives exist? *Why* are most people untroubled by this stuff even though it looms so large in developer discussions? The answer is simple: Apple has focused its energy on making iOS really easy to use, and when the credit cards come out, "easy to use" almost always trumps "philosophically open." Let me repeat that, just in case I'm unclear:

### Easy always trumps Open. Closed only loses when it is cumbersome.

Apple learned this lesson when it launched the iTunes store in 2003 and started selling DRM'd digital music. Other companies had been doing the same thing for years, and the prevailing opinion was that no one would be able to complete with "free" pirated mp3s. Apple proved to the music industry that few people cared about DRM and open formats -- they wanted a huge selection, track-by-track purchasing, and a simple shopping experience. Apple delivered all of those things in spades, and they laughed all the way to the bank.

There will always be people who demand their music in un-DRM'd OGG Vorbis files, just as there are people who refuse to use hardware they can't hack. For those people, "Open" is a feature that matters just as much as performance or ease of use. For the vast majority of the public, however, "Open" is just another word that gets tacked onto product pitches and can be safely ignored. What matters is *the stuff you can do with it*. If something is hard, or cumbersome, or annoying? That's no better than it being impossible due to licensing restrictions.

### No, seriously, *Open* always fails.

The OpenID standard, for all of its technical advantages and all of its benefits for heavy duty web nerds, is suffering compared to closed alternatives like Facebook Connect. Recently a number of blistering blog posts have outlined the most popular explanation: simply put, [it's *really confusing* and *really complicated* compared to a login form.](http://www.webmonkey.com/2011/01/openid-the-webs-most-successful-failure/) Although [smart folks disagree](http://www.webmonkey.com/2011/01/openid-the-webs-most-successful-failure/) that OpenID is a *failure*, the important point remains. Open Stuff that promises hypothetical benefits but makes day-to-day tasks harder will always be a hard sell. Similarly, Open Stuff that delivers additional functionality that is *only interesting* to hardcore developers or advanced users will always be a hard sell. A device that automatically works for 90% of the market is more useful *to most people* than a device that *can be made to work* for 100% of the market but requires arcane tinkering.

Apple has succeeded not because of Steve Jobs' famous reality distortion field, but because it makes things *really easy to use*. Easy enough, in fact, to overcome customers' aversion to paying for stuff. Easy enough to make most people ignore the hypothetical benefits of open standards, because the implementations of those open standards are clunkier, more complicated, less established.

### Sooooo... Where to from here?

The answer isn't to lecture people who choose ease of use and simplicity. The answer isn't to talk about what things *might be possible* with open systems that can't be done on closed ones. The solution isn't to show non-technical users all of the arcane and complicated geek games that can be played with open systems, either. What *can* we do? The answer is straightforward, but it takes a lot more work than wagging our fingers at Apple users.

1. We have to make open solutions just as useful and easy as closed ones *for non-developers*.
2. We have to win users over with *specific solutions* to problems closed systems aren't addressing, rather than the hypothetical benefits of openness.
3. We have to accept that the vast majority of users want to be *served* by their software, not *converted to a cause*.

Open Source has traditionally succeeded when the closed source alternative is *too inflexible* or *too expensive* to serve the needs of important markets. If we as OSS developers want to tackle markets where most users aren't yet feeling those problems, we'll have to learn to compete on more than ideology.
