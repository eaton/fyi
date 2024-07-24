---
pagination:
  data: books
  size: 64
  generatePageOnEmptyData: true
name: "The Library{% if pagination.pageNumber > 0 %} (Page {{ pagination.pageNumber + 1 }}){% endif %}"
permalink: "library/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
---
{%- for book in pagination.items %}
* {{ book.name }}{% if book.subtitle %}: {{book.subtitle}}{%endif%}
{%- endfor -%}
