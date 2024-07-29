---
id: post.medium-db9854fbb9b9
type: BlogPosting
name: Markdown Won't Solve Your Content Problems
url: >-
  https://medium.com/@eaton/markdown-wont-solve-your-content-problems-db9854fbb9b9
isPartOf: blog.medium
date: 2017-08-03T22:00:20.714Z
slug: markdown-won-t-solve-your-content-problems
---
Every few weeks I hear from a colleague who's dealing with the tangles of editorial tools on a web CMS project. Inevitably, someone on their team suggests that things will be easier if users can't enter HTML at all. "We'll use \*Markdown\*," they say. "It's \*simple.\*"

On most projects, it's a terrible idea -- and I'm going to rant about it. If you don't care about the nerdy details, though, here's the long and short of it:

Markdown turns common "plaintext" formatting conventions like asterisks, indentation, and so on into HTML markup. If you need anything more complicated (say, an image with a caption or a link that opens in a new window), you need to mix markdown and raw HTML. Markdown is easy to remember for simple stuff (blockquotes, italics, headings, etc) but more complicated structures require extensions to the standard that are just as tweaky as HTML.

It was designed to mirror the ad-hoc conventions of ASCII-only channels like Usenet, email, and IRC. As creator John Gruber said in his original introduction of the project:

\> The overriding design goal for Markdown's formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.

Markdown's strength is that it speeds and simplifies the most common text formatting tasks, and does so in a way that \*looks\* correct even before the markup is transformed into visual formatting. Markdown accomplishes that by ruthlessly cutting most HTML structures -- anything that \*can't\* be turned into a fairly straightforward ASCII-ism is left behind. When it's pushed beyond that role, things get just as ugly any error-prone as raw HTML: witness the horrors that are \[Markdown Tables\](http://fletcher.github.io/MultiMarkdown-5/tables.html) and \[CSS In Markdown\](https://michelf.ca/projects/php-markdown/extra/#spe-attr).

In many ways, Markdown is less a markup language and more a way to hide basic formatting information in a plain text document. That's great! I use Markdown for my Jekyll-powered blog. If your project's body field needs are simple text formatting without complicated embedding, captioning, microformatting, etc? Markdown is probably going to work fine. But -- and this is a big one -- \*if that's all you need\* then using a WYSIWYG HTML editor will also work fine.

WYSIWYG editors aren't a pain because they "hide the code" from content creators. They're problematic because they're often configured to give editors access to the full range of HTML's features, rather than the specific structural elements they really need to do their jobs. I've written about this "vocabulary mismatch" problem before, but it's worth coming back to.

When you decide to use Markdown, you aren't just choosing markup that's easier to read; you're choosing a specific restrictive vocabulary. If that vocabulary covers your editors' real needs, and they'll be using plaintext to write and revise stories during their editorial workflow, by all means: consider it!

But if what you really need is a way to reign in chaotic, crappy markup, invest the time in figuring out how it's being used in your content, what design requirements are being foisted on your editors, and what transformations are necessary for real world usage. Modern WYSIWYG editors don't have to be the "dreamweaver in a div" disasters they used to be — taking the time to configure them carefully can give your team a clean, streamlined semantic editor that doesn't constrain them unnecessarily.
