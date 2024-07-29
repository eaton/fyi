---
id: article.g7eKKMA
type: Article
name: Deblobbing your chunks
description: Tips for Grouping and Organizing Drupal Content
url: >-
  https://www.lullabot.com/articles/deblobbing-your-chunks-building-a-flexible-content-model
keywords:
  - Digital & Content Strategy
  - Drupal Site Building
date: 2012-10-09T00:00:00.000Z
headline: 'Deblobbing your chunks: Building a flexible content model'
publisher: org.lullabot
---
There is a temptation and danger to fall into the "Dreamweaver Field" content model. When content types are just wrappers around giant chunks of hand-formatted HTML, editors have lots of flexibility but it's all but impossible to repurpose the hard-coded content for new designs and publishing channels.

In presentations, articles, and her upcoming book, [*Content Strategy for Mobile*](http://www.abookapart.com/products/content-strategy-for-mobile), Karen McGrane describes the problem as a war of "Blobs" versus "Chunks." The challenge is figuring out how to decompose a site full of inflexible HTML blobs into discrete, bite-sized fields. There's no magic bullet (a model that works for one project can fail miserably for another), but over the past several years we've accumulated a few useful rules of thumb for "deblobbing" a site's content.

### The Basics

**Don't skimp on the [content inventory and auditing process](https://www.lullabot.com/articles/a-toolset-for-enterprise-content-inventories).** Figure out what's there, what's going to be tossed, and what you *want* to have on the site. This is step zero, really: the modeling process is infinitely harder if you're dragging around piles of HTML that don't match what your're trying to build.

**Clump similar content.** If your existing site doesn't have discrete content types, figuring out which pages are similar to each other is the next stage. Product reviews, staff bios, press releases, blog entries, portfolio slideshows… You know the drill. Remember to look for pages and content types that are really composites of other, smaller units of content. Often, some of the most complex pages and content types can be implemented as rule-based or curated collections of smaller, more management content types.

**Look for common "chunk" types.** Once you've grouped your blobby content types into similar pools, zoom in and look for patterns that are unique to each content type. These are are potential candidates for dedicated fields. Some of the common field types we encounter include:

- Links to related content
- Links to downloadable files and embedded media that occur at consistent locations
- Publication or event dates
- Pull quotes, hand-written taglines, author bios, and summaries
- Business and event addresses
- Geographical locations and maps
- Lists of information like features or rules and requirements
- Ratings, prices, and product codes

Most CMS's support multi-value fields that can be used to model repeating elements like feature lists or multiple file attachments. Be sure to note which elements occur once, and which ones repeat.

**Rinse and Repeat.** Once you've broken things into multiple content types and identified the discrete fields on each one, look for overlaps. Are there several content types that share the same list of fields? Consolidating them into a single type might simplify things. Is there one "Godzilla" content type with dozens and dozens fields? It might really be several types that should be teased apart. The first pass of a content model is a lot like the first draft of an essay: there are *always* rough edges and awkward parts that need work.

### The Tricky Bits

After identifying all of that *easy* stuff, large and complex sites usually have quite a few ugly blobs that still need to be broken down.

**Identify composite content.** Sometimes, elements of one content type need to be broken out into their own sub-content-types, with simple parent-child relationships connecting them. Galleries that contain multiple photos, albums that contain multiple songs, and curated pages that include teasers for other content are common examples. If several content types in your model contain the same cluster of fields (like photo, caption, byline, and link, consider splitting out the cluster into a its own dedicated content type. Treating those scenerios as relationships between discrete elements can often simplify complex models.

**Look for common formatting complexities.** If you have wireframes or existing pages, look for complex visual formatting around certain elements, in particular the stuff that requires lots of hand-written HTML to implement in a "content blob." Comparison tables are a common offender here. Breaking these out into dedicated fields whenever possible can help prevent massive pain when a piece of content needs to be displayed differently in new channels.

**Watch for design elements that change based on context.** If you're building a responsive or adaptive site, or have access to designs for mobile apps or other output channels, keep an eye out for elements that appear differently or conditionally based on breakpoints, target device, and so on. It seems obvious, but controlling small elements is infinitely easier when they're broken out as discrete fields.

**Plan for searching and filtering.** Try to identify as many different filtered lists of content as possible. Faceted search screens, topical landing pages, author-based blogs, product lists, and so on can't be built efficiently without the right data. If the lists and search indexes that you need don't correspond to fields you've already broken out, remember to add additional ones for the required metadata.

**Isolate the crazy.** Inevitably, complex designs end up requiring "helper" content that doesn't seem to fit the well-understood content types the site's stakeholders imagine. Slides for promotional rotators, free-floating promotional microcontent for landing pages… These tend to be highly variable and often need the kind of raw-HTML flexibility that we're trying to avoid. Isolating them in their own content types and living with the cordoned-off craziness can help simplify models with overloaded, field-heavy primary types.

**Recognize when markup is good enough.** Despite all the talk about the dangers of blobs, it is possible to go too far. Replacing every HTML div and span with a dedicated field simply to avoid raw markup is overkill, and can easily result in 'Edit Screens of Doom.' Modern WYSIWYG editors generally support plug-in systems, and developing a button to "insert caption here" or "style paragraph as warning" *can* be a simpler solution. This is where I repeat the warning: There's no *perfect* content model, only the one that works for your project.

### Test the Model

The long-term impact of a *bad* model on a site's maintainability can be frustrating, but it's also impossible to predict every future application the content will be used for. Iteratively testing the model against real-world content and potential applications is critical.

**Put real content into the model.** It seems obvious, but it's easy to go down the structural rabbit hole and forget the existing pool of content. Circle around frequently and ask, "How does the content we have in hand fit into these content types and fields?" Look for odd mismatches, required fields that the existing content will leave unpopulated, and so on. Sometimes, the design and the model have to change for practical reasons. Other times, clients or your team will have to update the content to close the gap.

**Plan for three channels.** When building a model (or a software API), it's easy to imagine you're creating a reusable system while unintentionally baking in assumptions that make real reuse difficult. If you need content that will adapt to reuse in new channels, be sure that you keep at least three in mind -- think of them as user personas for the model. Desktop web, small-display devices, and rich HTML newsletters are common answers for some businesses. Even if you're only *building* one of them at first, proposed approaches can be compared against them to ensure you aren't painting yourself into any corners.

**Social sharing is a publishing channel, too**. [Twitter](https://dev.twitter.com/docs/cards) and [Facebook](https://developers.facebook.com/docs/reference/plugins/like/) can automatically embed headlines, summaries, and preview images when users paste one of your site's links -- *if* you provide the metadata that they're looking for. If your model doens't account for those, it will be much tougher.

**Let real users work with it.** If you're using a web framework that allows rapid creation of a content model before the full site is finalized, or you can produce wireframes of some sample content input and editing screens, *get user feedback sooner rather than later.* The people who spend their time creating and maintaining the content can often spot problems and inconsistencies that would otherwise remain undiscovered until launch.

### No Rules, Just Lessons

None of above ideas are hard-and-fast rules. At Lullabot, we've spent years building out complex sites (and the underlying content models) for media publishers, government agencies, corporate intranets, ecommerce sites, and more. And yet, every new client comes with surprises and challenges. What useful heuristics do *you* use when breaking down ugly "content blobs" into reusable chunks? Feel free to chime in with comments!
