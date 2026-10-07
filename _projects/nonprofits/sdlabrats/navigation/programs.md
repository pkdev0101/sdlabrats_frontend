---
layout: sdlabrats
title: Programs
heading: Science programs for grades K-8
lead: Every LabRats program is hands-on and taught by working scientists. Families come to us in Carlsbad; for schools and groups, we bring the lab to you.
description: All San Diego LabRats programs - afterschool classes, break camps, free STEM at Home labs, school assemblies, and Mobile Lab courses and workshops.
permalink: /programs/
section: programs
hide: true
search_exclude: true
---
<section class="labrats__section" aria-labelledby="families-title">
  <h2 id="families-title">For families</h2>
  {% include projects/sdlabrats/program-list.html audience="families" %}
</section>

<section class="labrats__section" aria-labelledby="schools-title">
  <h2 id="schools-title">For schools and groups</h2>
  {% include projects/sdlabrats/program-list.html audience="schools" %}
</section>

<section class="labrats__section" aria-labelledby="compare-title">
  <h2 id="compare-title">Not sure where to start?</h2>
  <p>Families can sign up for a month of afterschool classes or a single break camp. Teachers and PTAs can book an assembly or a workshop at school. <a href="{{ '/schedule/' | relative_url }}">See what's open now</a>, or call <a href="{{ site.data.sdlabrats.phone_href }}">{{ site.data.sdlabrats.phone }}</a>.</p>
</section>
