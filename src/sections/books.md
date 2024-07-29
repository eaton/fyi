---
id: page.books
name: Reading
description: The bookshelf, unfiltered.
permalink: /books/

eleventyNavigation:
  key: Reading
  order: 3
---
{% for book in data.book %}
* [{{ book.name }}{% if book.subtitle %}: {{ book.subtitle }}{% endif %}]({{ book.url }})
{% endfor %}
