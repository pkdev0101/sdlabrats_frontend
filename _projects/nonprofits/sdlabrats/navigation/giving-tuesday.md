---
layout: sdlabrats
title: Giving Tuesday
heading: "Giving Tuesday: help us raise the STEM stats"
lead: Help us up the STEM stats today. Every gift supports hands-on STEM education for San Diego kids.
description: Support San Diego LabRats on Giving Tuesday. Donations to our 501(c)(3) fund hands-on STEM education. EIN 82-0839046.
permalink: /giving-tuesday/
section: give
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<div class="labrats__split labrats__split--narrow-aside">
  <section class="labrats__section" aria-label="Donation form">
    {% include projects/sdlabrats/donorbox.html embed="giving-tuesday-462-2" title="Giving Tuesday donation form" %}
  </section>
  <aside class="labrats__section">
    <p>SD LabRats is a designated 501(c)(3) public charity on the State of California Attorney General's Registry of Charitable Trusts. Contributions are tax deductible. EIN <strong>{{ org.ein }}</strong>.</p>
    <figure class="labrats__figure">
      <a href="{{ '/images/projects/sdlabrats/donation-letter.jpg' | relative_url }}"><img src="{{ '/images/projects/sdlabrats/donation-letter.jpg' | relative_url }}" alt="LabRats donation letter" loading="lazy"></a>
    </figure>
  </aside>
</div>
