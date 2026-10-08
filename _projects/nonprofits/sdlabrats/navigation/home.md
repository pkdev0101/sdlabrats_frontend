---
layout: sdlabrats
template: home
title: Home
description: Hands-on science for kids in grades K-8, taught by working scientists at the STEM Discovery Center in Carlsbad. Afterschool classes, break camps, and school assemblies.
permalink: /
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<section class="labrats__hero" aria-labelledby="home-title">
  <div class="labrats__wrap labrats__split labrats__split--center">
    <div>
      <h1 id="home-title">Real scientists teaching science.</h1>
      <p class="ocs__lead">Hands-on labs for kids in grades K-8 at our STEM Discovery Center in Carlsbad. Every class is taught by a working scientist, and every kid gets to be a kid.</p>
      <div class="ocs__links">
        <a class="ocs__btn signal fill" href="{{ '/schedule/' | relative_url }}">See the schedule and register</a>
        <a class="ocs__btn accent" href="{{ '/programs/' | relative_url }}">Browse programs</a>
      </div>
      <p class="labrats__hero-visit">{{ org.address.street }}, {{ org.address.city }} &middot; {{ org.hours }} &middot; <a href="{{ org.phone_href }}">{{ org.phone }}</a></p>
    </div>
    <figure class="labrats__figure">
      <img src="{{ '/images/projects/sdlabrats/discovery-center-van-de-graaff.jpg' | relative_url }}" alt="Three students gasp as a classmate holds a wand to a Van de Graaff generator" width="1200" height="800" fetchpriority="high">
    </figure>
  </div>
</section>

<div class="labrats__wrap labrats__body">
  <section class="labrats__section labrats__split" aria-labelledby="session-title">
    <div>
      <h2 id="session-title">Two hours, two halves</h2>
      <p>Afterschool sessions at the STEM Discovery Center run in two parts. First a scientist leads a one-hour lab. Then kids get an hour of open maker space to build, test, and dig into whatever caught their interest.</p>
      <p>Classes meet Tuesday through Saturday in two groups: grades K-3 and grades 4-8. New lessons every week.</p>
      <p><a class="labrats__lede-link" href="{{ '/stem-discovery-center-2-3-2/' | relative_url }}">How afterschool works</a></p>
    </div>
    <dl class="labrats__day">
      <dt>Hour 1</dt><dd><strong>Teacher-led lab.</strong> A scientist walks the group through a hands-on experiment.</dd>
      <dt>Hour 2</dt><dd><strong>Open maker space.</strong> Kids choose what to build, test, or explore with our supplies.</dd>
    </dl>
  </section>

  <section class="labrats__section" aria-labelledby="enroll-title">
    <h2 id="enroll-title">Sign up</h2>
    <div class="ocs__table-wrap">
      <table class="ocs__table">
        <caption class="labrats__visually-hidden">Ways to enroll</caption>
        <thead><tr><th scope="col">Program</th><th scope="col">When</th><th scope="col"><span class="labrats__visually-hidden">Link</span></th></tr></thead>
        <tbody>
          <tr><td>Afterschool classes</td><td>Monthly sessions, Tuesday to Saturday</td><td><a href="{{ '/stem-discovery-center-2-3-2/' | relative_url }}">Afterschool sign-up</a></td></tr>
          <tr><td>Holiday break camps</td><td>Thanksgiving and winter break, half days</td><td><a href="{{ '/camps/' | relative_url }}">Camp dates</a></td></tr>
          <tr><td>Summer camps</td><td>Weekly half-day camps through the summer</td><td><a href="{{ '/summer-stem-camps/' | relative_url }}">Summer camps</a></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="labrats__section" aria-labelledby="programs-title">
    <h2 id="programs-title">Programs</h2>
    {% include projects/sdlabrats/program-list.html %}
  </section>

  {% include projects/sdlabrats/help-paying.html %}

  <section class="labrats__section labrats__split labrats__split--center" aria-labelledby="philosophy-title">
    <div>
      <h2 id="philosophy-title" class="labrats__visually-hidden">Our philosophy</h2>
      <p class="labrats__motto">Investigate. Do the experiment!</p>
      <p>Kids need a place where they can explore, ask questions, and get their hands dirty, with a mentor who knows the material. Our teachers are scientists who love their field and love teaching it. Every lab ties an idea from the textbook to something real.</p>
      <p><a class="labrats__lede-link" href="{{ '/about-us/#philosophy' | relative_url }}">Read our education philosophy</a></p>
    </div>
    <figure class="labrats__figure">
      <img src="{{ '/images/projects/sdlabrats/camp-celebration.jpg' | relative_url }}" alt="A student throws an arm up in celebration while classmates laugh at a lab table" width="1200" height="774" loading="lazy">
    </figure>
  </section>

  <section class="labrats__section labrats__split" aria-labelledby="voices-title">
    <div>
      <h2 id="voices-title">From parents and the press</h2>
      <blockquote class="labrats__pullquote">
        <p>My daughter was so excited to go to spring break camp each morning and couldn't wait to tell me about what she learned. She's a "wait and see" kind of kid, and I had no problems dropping her off each morning.</p>
        <footer>South Bay parent, in our <a href="{{ org.impact_report | relative_url }}">2023-24 impact report</a></footer>
      </blockquote>
      <p>Watch one LabRats mom's video, and read what local papers have written about us.</p>
      <ul class="labrats__outlets" aria-label="News outlets that have covered LabRats">
        <li><img src="{{ '/images/projects/sdlabrats/press-union-tribune.png' | relative_url }}" alt="San Diego Union-Tribune" width="150" height="52" loading="lazy"></li>
        <li><img src="{{ '/images/projects/sdlabrats/press-coast-news.png' | relative_url }}" alt="The Coast News" width="173" height="30" loading="lazy"></li>
        <li><img src="{{ '/images/projects/sdlabrats/press-del-mar-times.png' | relative_url }}" alt="Del Mar Times" width="149" height="30" loading="lazy"></li>
        <li><img src="{{ '/images/projects/sdlabrats/press-encinitas-advocate.png' | relative_url }}" alt="Encinitas Advocate" width="230" height="30" loading="lazy"></li>
        <li><img src="{{ '/images/projects/sdlabrats/press-92024.png' | relative_url }}" alt="92024 magazine" width="60" height="60" loading="lazy"></li>
      </ul>
      <p><a class="labrats__lede-link" href="{{ '/about-us/#press' | relative_url }}">Read the press clippings</a></p>
    </div>
    <div class="labrats__embed">
      <iframe src="https://www.youtube-nocookie.com/embed/YquvPfrx9_Q" title="A proud LabRats mom's testimonial" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </section>

  <section class="labrats__section labrats__cta" aria-labelledby="donate-title">
    <h2 id="donate-title">Help more kids get into the lab</h2>
    <p>We're a small local nonprofit, and our goal is to bring this program to underserved kids across San Diego County. Donations fund scholarships, supplies, and more class times at the STEM Discovery Center.</p>
    <div class="ocs__links">
      <a class="ocs__btn signal fill" href="{{ '/contact/#donate' | relative_url }}">Donate</a>
      <a href="{{ org.impact_report | relative_url }}">See our impact report (PDF)</a>
    </div>
  </section>
</div>
