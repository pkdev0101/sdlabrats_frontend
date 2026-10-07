---
layout: sdlabrats
title: About LabRats
heading: Scientists who teach kids
lead: San Diego LabRats is a local nonprofit where working scientists teach hands-on science to kids in grades K-8.
description: About San Diego LabRats, a 501(c)(3) nonprofit in Carlsbad where real scientists teach hands-on STEM to kids in grades K-8.
permalink: /about-us/
section: about
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<section class="labrats__section labrats__split" aria-labelledby="mission-title">
  <div>
    <h2 id="mission-title">Why we exist</h2>
    <p>Our teachers are scientists with a passion for their fields and for teaching the next generation. We use hands-on lab curriculum and current techniques, and we bring the fun back to learning science.</p>
    <p>San Diego LabRats is a {{ org.nonprofit }}. Our goal is to offer our program to underserved kids throughout San Diego County, which is only possible with our community's support.</p>
    <p><a class="labrats__lede-link" href="{{ org.impact_report | relative_url }}">Read the 2023-24 impact report (PDF)</a></p>
  </div>
  <figure class="labrats__figure">
    <img src="{{ '/images/projects/sdlabrats/classroom-group.jpg' | relative_url }}" alt="A group of students smile and pose around a classroom lab table" width="1200" height="800" loading="lazy">
  </figure>
</section>

<section class="labrats__section" aria-labelledby="mission-statement-title">
  <h2 id="mission-statement-title">Our mission</h2>
  <p class="labrats__motto">To make advanced STEM learning accessible, engaging, and exciting for all kids, no matter their zip code.</p>
</section>

<section class="labrats__section labrats__band" aria-labelledby="impact-title">
  <h2 id="impact-title">2023-24 in numbers</h2>
  <p>From our annual impact report. We run three kinds of programs: the STEM Discovery Center, the Mobile Lab, and STEM at Home online lessons.</p>
  <div class="ocs__stats">
    <div class="ocs__stat"><span class="ocs__stat-value">3,000+</span><span class="ocs__stat-label">Children and families served</span></div>
    <div class="ocs__stat"><span class="ocs__stat-value">$450,000</span><span class="ocs__stat-label">Subsidized across all classes</span></div>
    <div class="ocs__stat"><span class="ocs__stat-value">1,350</span><span class="ocs__stat-label">Students in afterschool programs</span></div>
    <div class="ocs__stat"><span class="ocs__stat-value">900</span><span class="ocs__stat-label">Students in camps</span></div>
    <div class="ocs__stat"><span class="ocs__stat-value">2,250</span><span class="ocs__stat-label">Students served by the Mobile Lab</span></div>
    <div class="ocs__stat"><span class="ocs__stat-value">1 to 5</span><span class="ocs__stat-label">Days a week the Discovery Center is open</span></div>
  </div>
  <p>We also added 9 charter school partners and 2 San Diego school district partners, mentored 8 high school interns, and were finalists for two community awards: Social Impact Nonprofit Charity of the Year and Nonprofit Social Impact Changemakers of the Year. <a href="{{ org.impact_report | relative_url }}">Read the full report (PDF)</a></p>
</section>

<section class="labrats__section" aria-labelledby="voices-title">
  <h2 id="voices-title">What people say</h2>
  <div class="labrats__quotes">
    <blockquote>
      <p>The staff is very attuned to the children's interests. They treat them like young scientists, they're very respectful, and the environment is set up so that children are naturally drawn to wanting to tinker, ask questions, and explore.</p>
      <footer>Pilar Bewley, retired teacher and homeschool parent</footer>
    </blockquote>
    <blockquote>
      <p>Working with LabRats has doubled in developing my skills as a person and scientist. I've been able to learn how to teach and contribute in a professional environment (and learn how to do my taxes). Between revisiting labs from my childhood, making an impact in every student I meet, and connecting with fellow teachers, I've been able to pass down a love for STEM in ways I never thought possible.</p>
      <footer>Adora, high school intern</footer>
    </blockquote>
  </div>
  <p class="labrats__hint">Quotes from the 2023-24 impact report, with spelling and punctuation corrected.</p>
</section>

<section class="labrats__section" aria-labelledby="where-title">
  <h2 id="where-title">Where to find us</h2>
  <p>Our home is the STEM Discovery Center at {{ org.address.street }}, {{ org.address.city }}, {{ org.address.region }} {{ org.address.postal }}. We also take our Mobile STEAM Lab to schools and events across the county. <a href="{{ org.address.map_url }}" rel="noopener">Get directions</a></p>
</section>

<section class="labrats__section" aria-labelledby="more-title">
  <h2 id="more-title">More about us</h2>
  <ul class="labrats__downloads">
    <li><a href="{{ '/labrats-team/' | relative_url }}">The team</a> <small>The scientists behind LabRats</small></li>
    <li><a href="{{ '/philosophy/' | relative_url }}">Our philosophy</a> <small>How and why we teach the way we do</small></li>
    <li><a href="{{ '/press/' | relative_url }}">Press</a> <small>LabRats in local news</small></li>
    <li><a href="{{ '/flyers-to-share/' | relative_url }}">Flyers to share</a> <small>Printable flyers for your school or neighborhood</small></li>
    <li><a href="{{ '/video-link/' | relative_url }}">LabRats video</a> <small>A video from LabRats, hosted on Vimeo</small></li>
    <li><a href="{{ '/corporate-partnerships/' | relative_url }}">Corporate partnerships</a> <small>Sponsor STEM education in San Diego</small></li>
  </ul>
</section>
