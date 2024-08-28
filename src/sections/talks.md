---
id: page.talks
name: Speaking
description: Presentations, webinars, and rants on street corners.
permalink: /talks/

eleventyNavigation:
  key: Speaking
  order: 2
---
{%- for talk in collections.talks | reverse %}
* [{{ talk.data.title }}]({{ talk.url | url }})
{%- endfor %}
