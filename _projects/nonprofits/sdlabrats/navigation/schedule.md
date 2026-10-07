---
layout: sdlabrats
title: Schedule and pricing
heading: Schedule and pricing
lead: Everything open for registration right now, with days, times, dates, and prices.
description: Current San Diego LabRats afterschool sessions and holiday camps in Carlsbad, with days, times, dates, pricing details, and registration links.
permalink: /schedule/
section: schedule
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<nav class="labrats__section" aria-label="On this page">
  <ul class="labrats__list labrats__columns">
    <li><a href="#afterschool">Afterschool classes</a></li>
    <li><a href="#camps">Holiday break camps</a></li>
    <li><a href="#pricing">Pricing and payment</a></li>
    <li><a href="#events">Open house and Thrive payments</a></li>
    <li><a href="#seasons">Spring and summer camps</a></li>
    <li><a href="#earlier">Earlier sessions</a></li>
  </ul>
</nav>

<section class="labrats__section" id="afterschool" aria-labelledby="afterschool-title">
  <h2 id="afterschool-title">Afterschool classes</h2>
  <p>Two-hour sessions at the STEM Discovery Center: a one-hour lab with a scientist, then an hour of open maker space. Pick one weekly day and time for the month. <a href="{{ '/stem-discovery-center-2-3-2/' | relative_url }}">About afterschool</a></p>
  {% include projects/sdlabrats/session-list.html program="afterschool" %}
</section>

<section class="labrats__section" id="camps" aria-labelledby="camps-title">
  <h2 id="camps-title">Holiday break camps</h2>
  <p>Half-day camps: mornings 8:00 am–12:00 pm or afternoons 1:00–5:00 pm. Both groups run the same camp. <a href="{{ '/camps/' | relative_url }}">About camps</a></p>
  {% include projects/sdlabrats/session-list.html program="camps" compact=true %}
</section>

<section class="labrats__section labrats__band" id="pricing" aria-labelledby="pricing-title">
  <h2 id="pricing-title">Pricing and payment</h2>
  <div class="labrats__split">
    <div class="labrats__price">
      <div class="ocs__table-wrap">
        <table class="ocs__table">
          <caption class="labrats__visually-hidden">Published prices</caption>
          <thead><tr><th scope="col">Program</th><th scope="col">Price</th></tr></thead>
          <tbody>
            <tr><td>Afterschool, October 2026</td><td>$160 for the month (4 sessions), or $45 for a single day</td></tr>
            <tr><td>Holiday break camps</td><td>Shown on the registration form</td></tr>
            <tr><td>Summer camps, 2026</td><td>$375 per week (5 days)</td></tr>
            <tr><td>Assemblies, courses, workshops</td><td><a href="{{ '/contact/' | relative_url }}">Contact us</a></td></tr>
          </tbody>
        </table>
      </div>
      <p>You register and pay in one step on each session's Donorbox form, which shows the final price. Scholarships take up to 75% off afterschool and up to 50% off camps (<a href="{{ '/scholarships/' | relative_url }}">apply</a>), and many California charter schools cover LabRats with educational funds (<a href="{{ '/ways-to-donate-2/' | relative_url }}">check yours</a>).</p>
      <p><a href="{{ '/images/projects/sdlabrats/afterschool-schedule-fall-2026.jpg' | relative_url }}">October 2026 afterschool flyer (image)</a></p>
    </div>
    <div>
      <h3>Need a different day or time?</h3>
      <p>If our current times don't work for your family, tell us when would.</p>
      <p><a class="labrats__lede-link" href="{{ '/contact/' | relative_url }}">Request a class time</a> or call <a href="{{ org.phone_href }}">{{ org.phone }}</a></p>
    </div>
  </div>
</section>

<section class="labrats__section" id="events" aria-labelledby="events-title">
  <h2 id="events-title">Open house and Thrive payments</h2>
  <ul class="labrats__downloads">
    <li><a href="{{ '/free-open-house-register-today/' | relative_url }}">Free open house</a> <small>A free, timed family tour of the STEM Discovery Center. Registration required.</small></li>
    <li><a href="{{ '/thrive-payment-processing-only/' | relative_url }}">Thrive payment form</a> <small>Only for families who have already registered for a class through Thrive.</small></li>
  </ul>
</section>

<section class="labrats__section" id="seasons" aria-labelledby="seasons-title">
  <h2 id="seasons-title">Spring and summer camps</h2>
  <p>Spring break camps run for three weeks to cover different districts' breaks. Summer camps run for eight weeks. The pages below show the 2026 camps.</p>
  <ul class="labrats__downloads">
    <li><a href="{{ '/spring-break-camps/' | relative_url }}">Spring break camps</a> <small>Grades K-3 and 3-6</small></li>
    <li><a href="{{ '/summer-stem-camps/' | relative_url }}">Summer STEM camps</a> <small>Grades K-3 and 3-6</small></li>
    <li><a href="{{ '/summer-camps-5/' | relative_url }}">Forensic Science Camp</a> <small>Summer theme camp</small></li>
    <li><a href="{{ '/summer-camps-2/' | relative_url }}">Sensational Science Camp</a> <small>Summer theme camp</small></li>
  </ul>
</section>

<section class="labrats__section" id="earlier" aria-labelledby="earlier-title">
  <h2 id="earlier-title">Earlier sessions</h2>
  <p>Past registration pages, kept for reference. Registration for these dates is closed.</p>
  {%- assign closed = site.posts | where_exp: "post", "post.session.status == 'closed'" | where_exp: "post", "post.session.program == 'afterschool'" | sort: "title" %}
  <details>
    <summary>Past afterschool months ({{ closed.size }})</summary>
    <ul class="labrats__list labrats__columns">
      {%- for post in closed %}
      <li><a href="{{ post.url | relative_url }}">{{ post.session.term }}, grades {{ post.session.grades }}</a></li>
      {%- endfor %}
    </ul>
  </details>
  <ul class="labrats__list">
    <li><a href="{{ '/stem-discovery-center-2-2/' | relative_url }}">STEM Discovery Saturdays, September 2023</a></li>
    <li><a href="{{ '/stem-discovery-center/' | relative_url }}">STEAM Discovery Center at the Encinitas Community Center, fall 2021</a></li>
    <li><a href="{{ '/winter-steam-discover-camp-2021/' | relative_url }}">Winter STEAM Discovery Camp at the San Diego Botanic Garden, 2021</a></li>
    <li><a href="{{ '/calendar/' | relative_url }}">Summer 2022 partner camps</a></li>
  </ul>
</section>
