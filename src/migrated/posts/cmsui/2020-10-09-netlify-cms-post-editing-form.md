---
id: post.a-w1Ij8M
type: BlogPosting
name: Netlify CMS Post Editing Form
url: 'http://cmsui.org/post/post/netlify-cms-edit'
keywords:
  - static
  - javascript
isPartOf: blog.cmsui
date: 2020-10-09T00:00:00.000Z
---
![](media://reprints/cmsui/netlify-cms-edit.png)

Static site generators — especially ones that operate on a relatively simple file-backed content store full of Markdown or YAML documents — exploded in popularity as the complexity of enterprise class CMSs rose.

[Netlify](https://www.netlifycms.org/) developed an interesting open source pseudo-CMS that splits the difference. Configuration files define the structure and rules around markdown, JSON, or YAML files that make up a site's content, and a Javascript application acts as a lightweight front-end for editing those files.

[DevelopmentSeed](https://developmentseed.org/) built something similar for the Healthcare.gov project years ago, and released it as [Prose.io](https://github.com/prose). The Jekyll team has rolled out a [Jekyll-specific version](https://jekyll.github.io/jekyll-admin/frontend/) as a plugin to its static generator. NetlifyCMS seems to be the first attempt to build one that's generator-independent.
