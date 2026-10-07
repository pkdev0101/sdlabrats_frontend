---
layout: sdlabrats
title: Donate
heading: Donate to STEM education
lead: In 2025 LabRats grew its opportunities for students across all of our programs. In 2026 we aim to grow again, with more classes, camps, and times at the STEM Discovery Center. Help make that permanent.
description: Donate to San Diego LabRats, a 501(c)(3) nonprofit. Give money, materials, or time to fund hands-on STEM education for San Diego kids. EIN 82-0839046.
permalink: /ways-to-donate/
section: give
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<div class="labrats__split labrats__split--narrow-aside">
  <section class="labrats__section" aria-labelledby="give-title">
    <h2 id="give-title">Give online</h2>
    {% include projects/sdlabrats/donorbox.html embed="donate-to-education-1" title="Donate to San Diego LabRats" %}
  </section>
  <aside class="labrats__section" aria-labelledby="ways-title">
    <h2 id="ways-title">Three ways to give</h2>
    <dl class="labrats__day">
      <dt>Money</dt><dd>Use the donation form.</dd>
      <dt>Materials</dt><dd><a href="{{ '/contact/' | relative_url }}">Contact us</a> about lab supplies.</dd>
      <dt>Time</dt><dd><a href="{{ '/contact/' | relative_url }}">Contact us</a> to volunteer.</dd>
    </dl>
    <h3>Tax information</h3>
    <p>SD LabRats is a designated 501(c)(3) public charity and appears on the State of California Attorney General's Registry of Charitable Trusts. The IRS has determined that contributions to our organization are tax deductible. Our federal Employer Identification Number is <strong>{{ org.ein }}</strong>.</p>
    <p><a class="labrats__lede-link" href="{{ org.impact_report | relative_url }}">Read the 2023-24 impact report (PDF)</a></p>
  </aside>
</div>

<section class="labrats__section" aria-labelledby="letter-title">
  <h2 id="letter-title">A letter to our supporters</h2>
  <figure class="labrats__figure">
    <a href="{{ '/images/projects/sdlabrats/donation-letter.jpg' | relative_url }}"><img src="{{ '/images/projects/sdlabrats/donation-letter.jpg' | relative_url }}" alt="LabRats donation letter" loading="lazy"></a>
  </figure>
</section>

<section class="labrats__section" aria-labelledby="campaigns-title">
  <h2 id="campaigns-title">Campaigns and fundraisers</h2>
  <ul class="labrats__downloads">
    <li><a href="{{ '/giving-tuesday/' | relative_url }}">Giving Tuesday</a> <small>Our Giving Tuesday campaign</small></li>
    <li><a href="{{ '/corporate-partnerships/' | relative_url }}">Corporate partnerships</a> <small>Sponsorship for companies</small></li>
    <li><a href="{{ '/pac-bio-5k-fundraiser/' | relative_url }}">PacBio 5K fun run</a> <small>March 22, 2025</small></li>
    <li><a href="{{ '/wine-festival-fundraiser/' | relative_url }}">Encinitas Wine and Food Festival</a> <small>June 8, 2024</small></li>
    <li><a href="{{ '/free-bike-give-away/' | relative_url }}">Free bike giveaway</a> <small>Bikes donated by Viasat for LabRats families</small></li>
  </ul>
</section>
