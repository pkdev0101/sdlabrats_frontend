---
layout: sdlabrats
title: Donate and contact
heading: Donate and contact
lead: Get in touch, give to STEM education, or sponsor LabRats as a company.
description: Contact San Diego LabRats or support hands-on STEM education. Call (760) 450-4717, send a message, donate online (EIN 82-0839046), or become a corporate sponsor.
permalink: /contact/
section: give
hide: true
search_exclude: true
contents:
  - { id: contact, title: Contact }
  - { id: donate, title: Donate }
  - { id: partnerships, title: Corporate partnerships }
  - { id: campaigns, title: Campaigns and events }
---
{%- assign org = site.data.sdlabrats -%}

<section class="labrats__section labrats__split labrats__split--narrow-aside" id="contact" aria-labelledby="contact-title">
  <div>
    <h2 id="contact-title">Send a message</h2>
    <p>We'd love to hear from you. Asking about a different class day or time? Say so in your message.</p>
    {% include projects/sdlabrats/form-contact.html %}
  </div>
  <aside aria-labelledby="reach-title">
    <h2 id="reach-title">Other ways to reach us</h2>
    <dl class="labrats__day">
      <dt>Phone</dt><dd><a href="{{ org.phone_href }}">{{ org.phone }}</a></dd>
      <dt>Visit</dt><dd><address>{{ org.address.name }}<br>{{ org.address.street }}<br>{{ org.address.city }}, {{ org.address.region }} {{ org.address.postal }}</address><a href="{{ org.address.map_url }}" rel="noopener">Directions</a></dd>
      <dt>Charter schools</dt><dd><a href="mailto:{{ org.charter_email }}">{{ org.charter_email }}</a></dd>
      <dt>Social</dt><dd>{% for profile in org.social %}<a href="{{ profile.url }}" rel="noopener">{{ profile.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</dd>
    </dl>
  </aside>
</section>

<section class="labrats__section labrats__band" id="donate" aria-labelledby="donate-title">
  <h2 id="donate-title">Donate to STEM education</h2>
  <div class="labrats__split labrats__split--narrow-aside">
    <div>
      <p>In 2025 LabRats grew its opportunities for students across all of our programs. In 2026 we aim to grow again, with more classes, camps, and times at the STEM Discovery Center. Help make that permanent.</p>
      {% include projects/sdlabrats/donorbox.html embed="donate-to-education-1" title="Donate to San Diego LabRats" %}
    </div>
    <div>
      <h3>Three ways to give</h3>
      <dl class="labrats__day">
        <dt>Money</dt><dd>Use the donation form.</dd>
        <dt>Materials</dt><dd><a href="#contact">Send us a message</a> about lab supplies.</dd>
        <dt>Time</dt><dd><a href="#contact">Send us a message</a> to volunteer.</dd>
      </dl>
      <h3>Tax information</h3>
      <p>SD LabRats is a designated 501(c)(3) public charity on the State of California Attorney General's Registry of Charitable Trusts. The IRS has determined that contributions to our organization are tax deductible. Federal Employer Identification Number: <strong>{{ org.ein }}</strong>.</p>
      <p><a href="{{ org.impact_report | relative_url }}">Read the 2023-24 impact report (PDF)</a> &middot; <a href="{{ '/images/projects/sdlabrats/donation-letter.jpg' | relative_url }}">Our letter to supporters (image)</a></p>
    </div>
  </div>
</section>

<section class="labrats__section" id="partnerships" aria-labelledby="partnerships-title">
  <h2 id="partnerships-title">Corporate partnerships</h2>
  <p class="ocs__lead">Sponsorship with LabRats goes well beyond a logo on a 5K shirt. It's varied and creative, and it brings real benefits to sponsors.</p>
  <div class="labrats__split">
    <div>
      <h3>Financial incentives</h3>
      <p>Sponsorship can bring tax incentives; many companies sponsor and donate partly for the corporate tax breaks available. A sponsorship relationship with LabRats can also lead to other incentives and eligibility for grants and awards.</p>
      <h3>Brand awareness</h3>
      <p>Sponsorship raises your company's profile locally, regionally, and nationally. Customers connect your name with a specific cause, STEAM education for kids, and your brand reaches audiences outside your usual market while furthering your corporate social responsibility.</p>
      <h3>Corporate reputation</h3>
      <p>Sponsorship shapes how employees, customers, and other organizations see a company: people associate your brand with social good and with the cause itself. The previous site cited a figure that more than 75% of millennial employees prefer to work for companies active in charitable giving.</p>
      <p>See the <a href="{{ '/images/projects/sdlabrats/flyer-corporate-sponsorship.jpg' | relative_url }}">sponsorship overview flyer</a> and <a href="{{ '/images/projects/sdlabrats/flyer-sponsorship-levels.jpg' | relative_url }}">sponsorship levels</a>.</p>
    </div>
    <div>
      <h3>Request more information</h3>
      <p>Tell us about your company and we'll send sponsorship details.</p>
      {% include projects/sdlabrats/form-partnership.html %}
    </div>
  </div>
</section>

<section class="labrats__section" id="campaigns" aria-labelledby="campaigns-title">
  <h2 id="campaigns-title">Campaigns and events</h2>
  <ul class="labrats__downloads">
    <li><a href="{{ '/giving-tuesday/' | relative_url }}">Giving Tuesday</a> <small>Our Giving Tuesday campaign</small></li>
    <li><a href="{{ '/pac-bio-5k-fundraiser/' | relative_url }}">PacBio 5K fun run</a> <small>March 22, 2025</small></li>
    <li><a href="{{ '/wine-festival-fundraiser/' | relative_url }}">Encinitas Wine and Food Festival</a> <small>June 8, 2024</small></li>
    <li><a href="{{ '/free-bike-give-away/' | relative_url }}">Free bike giveaway</a> <small>Bikes donated by Viasat for LabRats families</small></li>
  </ul>
</section>
