---
layout: default
title: curriculum
---

{% assign cv = site.data.cv %}

# {{cv.basics.name }}

## About me

{{cv.basics.summary}}

## Specialties

Software applications, web applications, web standards, networking, computer science applied to human interaction, programming languages, team management.

## Work History

{% for work in cv.work %}

### {{work.name}}

_{{work.startDate}} - {{work.endDate}}_

#### {{work.position}}

{% for summary in work.summary %}

{{summary}}

{% endfor %}

{% endfor %}

### Skills

{% for skill in cv.skills %}

- {{skill}}

{% endfor %}

### Education

{% for edu in cv.education %}

- {{edu.institution}} _{{edu.endDate}}_ - {{edu.area}}

{% endfor %}

### Contact me

- by mail: <a href="mailto:{{cv.basics.email}}">{{cv.basics.email}}</a>
- by phone: {{cv.basics.phone}}
- through the socials:

{%- for social in cv.basics.profiles %}
<a href="{{social.url}}" target="_blank">{{social.network}}</a>{% if forloop.last == false %}, {% endif %}
{%- endfor -%}
