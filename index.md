---
layout: default
title: "Main Page"
categories: Main
---

## Categories

{% for category in site.categories %}
### {{ category[0] }}

{% assign posts = category[1] | sort: 'date' | reverse %}
{% for post in posts limit:5 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

{% endfor %}
