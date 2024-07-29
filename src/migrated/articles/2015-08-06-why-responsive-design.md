---
id: article.sjZgjZTf
type: Article
name: Why Responsive Design?
description: >-
  It's a design philosophy that's sweeping the web, but misconceptions still
  abound. What is responsive design, and should your site use it?
url: 'https://www.lullabot.com/articles/why-responsive-design'
keywords:
  - Mobile
  - UX & Design
date: 2015-08-06T00:00:00.000Z
publisher: org.lullabot
---
If you've built a website in the past several years, you've probably heard of Responsive Design. Coined in 2010 by designer Ethan Marcotte, the term covers a set of techniques that allow one flexible web design to serve many different screen sizes.

In the years since it hit the scene, "responsive" has become the default choice for [modern, mobile-friendly sites](http://blog.aids.gov/2014/07/aids-gov-mobile-success-story.html). With that visibility, though, comes misunderstanding and controversy! Some proponents treat responsive design as a silver bullet for every project's tough problems, while detractors complain it will limit their grand vision. Some clients believe they have to choose between a responsive site or a native mobile app as if one ruled out the other. And in a few frustrating situations, we've seen totally separate mobile, tablet, and desktop mockups passed off as a "responsive" approach.

At Lullabot, we believe that [responsive design is a critical part of future-friendly web publishing](https://www.lullabot.com/articles/responsive-adaptive-web-design). Making the most of it requires understanding which problems it solves, which ones it doesn't, and how it fits your project's needs. In this article, we'll take a look at how we build responsive sites, correct some common misconceptions, and explain the real benefits for your projects.

## What is "Responsive," anyway?

Ethan Marcotte's [seminal article](http://alistapart.com/article/responsive-web-design/) and follow-up book define specific techniques that make a site responsive. Both make great reading for anyone who wants to dig into the details. At a high level, we can boil it down to a handful of principles.

### Build a fluid, flexible layout.

Ever since the first Photoshop mockup was used to sell a site design, web developers have been creating "fixed width" layouts that target specific screen sizes. When space-constrained mobile browsers hit the market, they had to create custom mobile sites with stripped-down designs. Responsive design starts with a layout that [stretches and squishes](http://alistapart.com/article/fluidgrids) to fit any screen, often relying on [percentages and ratios](http://www.smashingmagazine.com/2009/06/02/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/) rather than fixed sizes and positions.

### Media queries tweak elements when the layout breaks.

Stretchable, squeezable fluid layouts can't cover every extreme: a design that looks great on a 27" desktop monitor might look impossibly cluttered on a 4" phone. Designers identify situations where the fluid design breaks, and use [conditional CSS rules](http://cssmediaqueries.com/) to add special styling instructions for those "[breakpoints](http://alistapart.com/article/designing-for-breakpoints)." On a tall-but-skinny smartphone, for example, sidebars might be moved to the bottom of an article to leave more space for text. On a wide desktop screen, photo captions might be moved beside images to take advantage of the extra room.

### Images and media must be flexible.

Giant fixed-width images, embedded media players, and clunky widgets can all break your smooth, fluid layouts. Styling for these elements should use percentages and ratios, too—ensuring that they conform to fit the responsive layout they're placed in. Tools like [FitVid.js](http://fitvidsjs.com/) and the new [HTML Picture element](http://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015) can make this part easier.

### Respond to capabilities, not specific devices.

The most important principle is simple: responsive design plans for scenarios and capabilities, rather than specific hardware devices. Instead of "sniffing" for iPhones and generating custom HTML and CSS, a responsive site uses one standard set of HTML. Conditional CSS rules and client-side scripts account for the special cases like low-resolution portrait displays, mobile devices with GPS capabilities, and so on. That ensures the design will respond intelligently to any device that matches the right criteria—including newly released ones—and the long tail of older devices often ignored by the latest design trends.

Although device detection, tailored markup, and other techniques can be layered on top of a responsive design, a strong responsive foundation is the most reliable starting point.

![Mobile and desktop versions of a responsive site](media://reprints/lullabot/responsive-side-by-side_0.jpg "responsive-side-by-side.jpg")

## Complementary techniques

In addition to those core principles, our team has discovered that certain approaches blend well with responsive techniques. Not every responsive design project works this way, but the ones that do are much more likely to succeed.

### Plan the content before the presentation.

This is good advice for any project, but it's [especially important for responsive sites](http://alistapart.com/column/responsive-design-wont-fix-your-content-problem). Before we start wire framing, we want to understand the site's most important messages, know just what kinds of content will be used to communicate them, and decide how each element will be prioritized. We use content like building blocks to construct pages, rather than pouring it into the design like cake batter.

### Design for mobile.

"Mobile-first" design doesn't mean that every site needs to look like a skinny river of text. Rather, it means keeping the most constrained scenario in mind as the design evolves. Planning around those limitations first forces important decisions about priorities and the relationships that connect each element in the design. It's much easier to start with a streamlined mobile layout, layering additional elements as screens get larger, than it is to squeeeeeeeze a busy desktop design onto a tiny touch screen.

### Design components, not just pages.

Identifying the shared visual components that are used throughout the design, then planning how those components will behave in different contexts, can pay off handsomely. This modular approach can help separate the high-level work of building responsive layouts from the fiddly tweaking and testing needed for each reusable component. Techniques like [Style Tiles](http://alistapart.com/article/style-tiles-and-how-they-work) can be used to explore the aesthetics while the components are being built

### Build working wireframes.

Napkins and PDFs are great for rough concept sketches, but once a responsive design gets serious, nothing beats HTML and CSS. Viewing the wireframes on several devices, rather than flipping through separate wireframes for each breakpoint, helps stakeholders envision how the design will work in the real world. It also helps keep a design team honest, ensuring that the ideas they come up with will really work in a browser.

### Use server-side tweaks to lighten the load.

Although responsive design is defined by its use of browser technologies like CSS, server-side logic can still help. When a layout needs to be personalized for the logged-in user, for example, conditional logic on the server can still supply a different layout template. Client-side scripts can also request specific widgets or content from the server if they're needed, avoiding the cost of downloading every piece of content and media on devices that will only show a smaller subset. Designer Luke Wroblewski calls this technique RESS: [Responsive design and Server Side components](http://www.lukew.com/ff/entry.asp?1392).

## Understanding the challenges

Like many other techniques, Responsive Design is an important tool in our toolbox, not a cure-all for every problem ailing the web. Before diving into your first responsive project, it's important to keep some caveats in mind.

### Building a desktop-only site is still cheaper… in the short term.

Creating a design around a single screen size will always take less time than one that accounts for many sizes. In some cases, a skilled team can also produce a stripped down "mobile design" without breaking the bank. The economics of responsive design make the most sense when additional screen sizes (like tablets) enter the mix, and when your desktop and mobile sites must offer equivalent functionality.

### It isn't as flexible as designing one-off sites for every device.

A design that accounts for multiple displays and resolutions can't handle extreme variations in layout and content from one size to another. Some design choices—like a hard and fast reliance on mouseover effects or swipe gestures—won't work on every device, either. Nevertheless, few organizations have the resources and coordination to build a truly custom experience for every display size and device type. In addition, [Google's own research](http://think.withgoogle.com/mobileplanet/en/) demonstrates that most users want consistency across devices when they use a website; the more your mobile and desktop sites differ, the more difficult it can be to switch from one to the other.

### Speed and mobile-friendliness aren't automatic.

Responsive design can bring lots of benefits for mobile users, but making sure the site loads quickly still takes work. There's nothing preventing a bad responsive implementation from burying low-bandwidth mobile users under high-res images, auto-play videos, and third-party Javascript. Techniques like conditional loading of media assets, testing [restricted-bandwidth scenarios](http://web-design-weekly.com/2014/03/27/throttle-bandwidth-testing/), and [setting a clear performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget/) before you build, are all critical.

### Integrating ads takes extra planning.

For sites that rely on ad revenue, responsive design can complicate matters. Although there's nothing preventing you from scaling ads up and down or shuffling them around on the page as the layout changes, their aesthetic impact can be tougher to predict without extensive testing. The density of advertisements users have grown to accept on some desktop sites can be overwhelming on a small screen, and advertisers who pay a premium for specific spots on the page [may need hand-holding](http://www.markboulton.co.uk/journal/responsive-advertising) to understand the breakpoint-to-breakpoint changes in a responsive layout.

### Don't be distracted by the app argument.

Mobile developers have been locked in a "Web apps versus native apps" tug-of-war ever since the iOS App Store launched in 2008. Responsive design is often roped into that argument, even though it's a separate issue. These days, even native mobile apps use responsive design principles as often as websites: the average Android app needs to cope with hundreds of different display sizes and resolutions, after all. Whether your organization needs a mobile app shouldn't change the way your web site handles device and screen-size proliferation.

## Should your site be responsive?

Let's keep this one simple: Yes. Responsive design is the most cost-effective way to deal with the widest possible array of devices, and the simplest way to future-proof your website. On their [Responsive Design Podcast](http://responsivewebdesign.com/podcast/), Karen McGrane and Ethan Marcotte have talked to dozens of organizations about the challenges and the payoffs: there's no denying its effectiveness.

"I can tell you that [it worked way more emphatically than I would have—even in my wildest dreams—have hoped](http://responsivewebdesign.com/podcast/audubon.html)," said Mark Jannot of the National Audubon Society on a recent episode. "The percentage of mobile \[traffic\] doubled, from fifteen percent to thirty percent, essentially immediately."

Of course, that doesn't mean that you can't or shouldn't pair it with techniques like native mobile apps, device and feature detection to enable additional features, server-side tailoring of site markup, and so on. Responsive techniques allow you to build a solid foundation for your web presence, one that will handle a wide range of scenarios as gracefully as possible. When that baseline is established, you can focus your customization resources where they'll do the most good, rather than scrambling to catch up whenever a new device comes into vogue.
