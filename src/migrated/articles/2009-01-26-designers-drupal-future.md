---
id: article.rlF1ARJ
type: Article
name: 'Designers, Drupal, and the Future'
url: 'https://www.lullabot.com/articles/designers-drupal-and-the-future'
date: 2009-01-26T00:00:00.000Z
publisher: org.lullabot
---
First, a disclaimer. It's been a long, long time since I've done real design work for the web. ([One of my earliest sites](http://www.howardconcrete.com/) is still standing, a monument to the days of hand-optimized GIFs and table-based layouts...) I'm not a CSS guru, and I tend to get frustrated quickly when I leave the world of *code* and muddle into the cobwebbed *design* parts of my brain. I do my share of converting existing themes and CSS/HTML templates to Drupal, though, and I chat with enough Joomla!, Wordpress, Movable Type, and ExpressionEngine folks to have a few thoughts on what's up in Drupal Theme Land.

### The Past

Drupal has long had a reputation for baffling designers, and for years it was deserved. First, Drupal's approach to generating an HTML page is a bit different than the standard Wordpress/Movable Type approach. Rather than asking the CMS for a piece of data and doing things with it, a Drupal theme is handed small pre-rendered chunks of text (like a title, an author's name, etc.) and is responsible for 'wrapping' them in the appropriate HTML markup. It's a subtle difference, but it requires a shift in thinking.

In addition, making a custom theme for Drupal that deviated from the normal markup in a significant way used to require nontrivial PHP skills. While the big pieces (like the page-level markup and individual pieces of content) could be tweaked using editable template files, overriding smaller bits like navigation menus and the details of a post's attribution line required wading into the depths of Drupal's theming APIs and writing code. If you remember the days of the \_phptemplate\_variables() function, you know what I'm talking about. In addition, changing markup created by third-party modules required digging through the source code, finding where they generated their HTML, and implementing your own override functions in PHP. It worked, and it didn't require hacking third-party code, but it was hell for folks whose comfort zone was pure HTML and CSS.

### The Present

Thanks to some awesome work in Drupal 6, a lot of those hassles are in the past. More markup now lives in editable template files instead of PHP functions, and third-party modules can expose their own markup as editable template files. Developers on large projects coordinating with designers can use hardcore PHP code to finesse data before it makes it to the template files, but the templates still say clean and easy to edit. It's also possible to build "pure" CSS themes that rely on Drupal's default markup.

The down side, though, is that not many people outside of the Drupal *development* community know about these changes. The information is there in Drupal 5 to 6 changelogs, and there are bits and pieces of knowledge scattered in blog posts and articles. The little-known but information-rich [Drupal 6 theming guide](http://drupal.org/theme-guide/6) also helps. However, the fundamental shift in Drupal design that took place hasn't resulted in an new wave of non-programmers designing for Drupal.

Some of that is inertia -- it's "well known" that Drupal is hard for designers, the same way that it's "well known" that it's impossible to make accessible Joomla! themes. (Both have been true in the past, but that's changed -- witness [Beez](http://www.joomla-beez.com/).) Part of the problem is also cultural. Drupal requires that designers learn to use CVS for version control before contributing their work back to the community. Addons and themes the live outside of the Drupal.org downloads section tend to languish in obscurity, like books that can't be found on Amazon.com.

The biggest issue, though (at least in my opinion) is the lack of good theming examples *in the Drupal core download*. Developers looking to learn best practices can pop open any core module, poking around to see how things are done. While few are perfect, they demonstrate lots of useful techniques and can be used as starting points for almost any project.

Drupal's bundled themes fail on that count, in a big way. The default Garland theme, while attractive and customizable via the admin interface, is notoriously confusing for newcomers to use as a starting point in their own custom designs. Older themes, like Bluemarine and Pushbutton, are holdovers from the days of tabled layout and 2004 era design. *None* of the core themes demonstrate the capabilities in Drupal 6: CSS-only themes that use the 'default' markup, easy creation of new content regions without custom code, and the use of template files to override lesser known HTML like the poll module's graph of survey results.

When Lullabot teaches its workshops on Drupal theming, we've found that taking people through those steps is one of the best recipes for success. Start with nothing but an .info file, to define a theme that uses the default markup and no CSS. Start adding your own CSS files and images to customize the layout, and then begin pulling over templates like page.tpl.php when you find that the markup needs tweaking. Eventually, we can lead them through the complexities of template.php code overrides, but this progression makes for an actual learning *curve* rather than a wall that needs scaling.

### The Future?

Drupal 7 is still under development, and a lot of energy is crackling around how to improve the bundled themes that come with it. Several people have proposed using a grid system like [960](http://960.gs/) to enable rapid theme development. While I'd love to see some cutting-edge CSS coolness make it into core, I think that we need to ensure that the basics are there, too.

What would I love to see included in Drupal 7?

1.  **Make sure all of Drupal's tpl.php template files contain usable, standards-compliant markup.** This came a long way in Drupal 6, but there are still a couple of rough edges. Content-first ordering in the default page.tpl, for example, would be great.
2.  **Include a layout.css file in Drupal's System module that does *nothing* but position the header, sidebars, and content correctly.** Overriding these core CSS files is easy; just add a CSS file with the same name into your theme. For newcomers, though, it would help clarify how the default template files work in a minimalist layout.
3.  **Provide a core theme that is *nothing* but an .info file.** With default markup and a layout.css file provided by core, this theme would serve as an example of what "stripped down Drupal" gives a designer to work with.
4.  **Provide one or two core themes that are *only* CSS and images decorating the standard markup.** This has been done in contrib for Drupal 6 (See dvessel's [Skyliner](http://colorovfire.com/) theme), but very few realize it's possible. If we discover that Drupal's default markup isn't flexible or clean enough to theme with pure CSS, we should fix it.
5.  **Provide a theme that adds one or two additional content regions** to implement the newsier appearance that's common in Joomla! and advanced Wordpress themes. This theme should also override one or two of the less common templates from a core Drupal module: user-profile.tpl.php is one possibility, as few realize it can be tweaked so easily.
6.  **Provide a theme that uses template.php code overrides and/or jQuery to implement exotic functionality.** This doesn't have to be insane; it could be as simple as turning one region into a slide-out panel using jQuery, adding daytime and nighttime CSS, or adding extra "template suggestions" so comments by the author of a post show up differently. The important part is to point people in the direction of advanced techniques.
7.  **README.txt files inside each of these themes' directories should explain what they do and how.** (Regions are added by putting a line of text in a theme's info file, module templates are overridden by copying a tpl.php file into the theme's directory and editing, etc.)

### Can it be done?

This is a big set of wishes: it implies at least two *completely new* themes for core, with specific requirements. If we were to hit those goals, though, I think we'd have a much better collection of examples to point designers to when they learn the Drupal ropes. In addition, designers exploring a new Drupal install for clues would have something to go on *before* they start posting confused questions on the support forums.

So, what do you think, fellow Drupal developers? Can we make this happen? Even more important... should we?
