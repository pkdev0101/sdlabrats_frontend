---
layout: sdlabrats
title: Scholarships
heading: Apply for a scholarship
lead: Up to 75% off afterschool classes and up to 50% off camps, funded by our community. We aim to award a scholarship for every paid student.
description: Apply for a San Diego LabRats scholarship. Families earning under $89,000 a year and military families can get up to 75% off afterschool classes and 50% off camps.
permalink: /scholarships/
section: support
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<div class="labrats__split labrats__split--narrow-aside">
  <section class="labrats__section" aria-labelledby="apply-title">
    <h2 id="apply-title">Application</h2>
    <p>Fill out the form and we'll email you about using your scholarship for upcoming classes and camps. If you don't hear back within 2 days, please call <a href="{{ org.phone_href }}">{{ org.phone }}</a>.</p>
    {% include projects/sdlabrats/form-scholarship.html %}
  </section>
  <aside class="labrats__section" aria-labelledby="eligibility-title">
    <h2 id="eligibility-title">Who qualifies</h2>
    <p>Families whose household income is under $89,000 a year, a figure based on San Diego median income data, or military families.</p>
    <h3>How much</h3>
    <dl class="labrats__day">
      <dt>Afterschool</dt><dd>Up to 75% off</dd>
      <dt>Camps</dt><dd>Up to 50% off</dd>
    </dl>
    <p>We believe every student should have access to high-quality STEM education. <a href="{{ '/ways-to-donate/' | relative_url }}">Donate to the scholarship fund</a>.</p>
  </aside>
</div>

<section class="labrats__section labrats__band" id="grants" aria-labelledby="grants-title">
  <h2 id="grants-title">Grants for schools and groups</h2>
  <div class="labrats__split">
    <div>
      <p>Is the Mobile STEAM Lab outside your budget? These organizations may help schools and nonprofits bring STEAM education to underserved kids.</p>
      <h3>San Diego County Neighborhood Reinvestment Program</h3>
      <p>Offered through each county supervisor's district. It may support schools or nonprofits that want to bring the LabRats Mobile STEAM Lab to underserved youth.</p>
      <ul class="labrats__list">
        <li><a href="http://www.supervisorkristingaspar.com/content/d3/home/grant_programs/nrp.html" rel="noopener">District 3 (Encinitas)</a></li>
        <li><a href="http://www.gregcox.com/content/d1/en/grants/neighborhood_reinvestment.html" rel="noopener">District 1 (downtown San Diego to the southwest)</a></li>
        <li><a href="https://www.sandiegocounty.gov/auditor/nrp.html" rel="noopener">District 2 (Campo, southeast), District 4 (Del Mar, central west), and District 5 (Riverside, north)</a></li>
      </ul>
    </div>
    <figure class="labrats__figure">
      <img src="{{ '/images/projects/sdlabrats/mobile-steam-lab.jpg' | relative_url }}" alt="The LabRats Mobile STEAM Lab, a blue van painted with the word STEAM" width="1000" height="750" loading="lazy">
      <figcaption>The Mobile STEAM Lab. <a href="{{ '/courses-workshops/' | relative_url }}">What it brings to your school</a></figcaption>
    </figure>
  </div>

  <h3>Foundations</h3>
  <ul class="labrats__downloads">
    <li><a href="http://www.cushenterprises.com/application.html" rel="noopener">The Cushman Foundation</a><br><small>Supports community and humanitarian work in the communities where the Cushman family has done business.</small></li>
    <li><a href="https://beckmancoulterfoundation.org/grant/" rel="noopener">The Beckman Coulter Foundation</a><br><small>Funds healthcare, scientific education and discovery, and philanthropy.</small></li>
    <li><a href="http://www.sci-ed-ga.org/funding-guidelines-for-non-profits" rel="noopener">General Atomics Sciences Education Foundation</a><br><small>Has funded K-12 science and engineering education and STEM nonprofits since 1992.</small></li>
    <li><a href="https://www.sdfoundation.org/grantseekers/" rel="noopener">The San Diego Foundation</a><br><small>Grants for nonprofit programs that serve disadvantaged San Diegans and expand equity and opportunity.</small></li>
  </ul>
</section>
