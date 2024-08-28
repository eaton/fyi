---
id: page.writing
name: Writing
description: A very mixed bag indeed.
permalink: /blog/

eleventyNavigation:
  key: Writing
  order: 1
---
{% for post in collections.writing | reverse -%}
{%- set postYear = post.date | year -%}
{%- if currentYear != postYear -%}
{%- set currentYear = postYear %}
## {{ postYear }}
{% endif %}
* [{{ post.data.title or (post.data.date | readableDate) }}]({{ post.url | url }})
{%- endfor %}
