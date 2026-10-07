---
layout: sdlabrats
title: Contact
heading: Contact us
lead: We'd love to hear from you. Call, find us on social media, or send a message below.
description: Contact San Diego LabRats. Call (760) 450-4717, visit the STEM Discovery Center in Carlsbad, or send us a message about classes, camps, assemblies, or workshops.
permalink: /contact/
section: give
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<div class="labrats__split labrats__split--narrow-aside">
  <section class="labrats__section" aria-labelledby="message-title">
    <h2 id="message-title">Send a message</h2>
    <p>Asking about a different class day or time? Say so in your message.</p>
    {% include projects/sdlabrats/form-contact.html %}
  </section>
  <aside class="labrats__section" aria-labelledby="reach-title">
    <h2 id="reach-title">Other ways to reach us</h2>
    <h3>Phone</h3>
    <p><a href="{{ org.phone_href }}">{{ org.phone }}</a></p>
    <h3>Visit</h3>
    <address>{{ org.address.name }}<br>{{ org.address.street }}<br>{{ org.address.city }}, {{ org.address.region }} {{ org.address.postal }}</address>
    <p><a href="{{ org.address.map_url }}" rel="noopener">Directions</a></p>
    <h3>Charter school questions</h3>
    <p><a href="mailto:{{ org.charter_email }}">{{ org.charter_email }}</a></p>
    <h3>Social media</h3>
    <ul class="labrats__list">
      {%- for profile in org.social %}
      <li><a href="{{ profile.url }}" rel="noopener">{{ profile.name }}</a></li>
      {%- endfor %}
    </ul>
  </aside>
</div>
