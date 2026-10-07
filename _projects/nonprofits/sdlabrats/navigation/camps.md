---
layout: sdlabrats
template: program
program: camps
title: Break and summer camps
heading: STEM camps over school breaks
lead: Half-day camps with hands-on labs taught by real scientists, plus maker space time. Thanksgiving, winter, spring, and summer.
description: Hands-on STEM camps for grades K-3 and 3-6 in Carlsbad over Thanksgiving, winter, spring, and summer breaks. Half-day morning or afternoon groups.
permalink: /camps/
section: programs
hide: true
search_exclude: true
facts:
  - { label: Grades, value: "K-3 and 3-6, in separate groups" }
  - { label: Where, value: "STEM Discovery Center, 6351 Corte Del Abeto, Suite A112, Carlsbad" }
  - { label: When, value: "Half days: 8:00 am–12:00 pm or 1:00–5:00 pm" }
  - { label: Cost, value: "Camp price shown at registration. Scholarships up to 50% off." }
  - { label: How to sign up, value: "Register online for each camp" }
sessions: true
compact_sessions: true
signup:
  heading: Holiday break camps
  text: "Thanksgiving break: 3-day camps, Nov 23–25. Winter break: 3-day camps, Dec 21–23 and Dec 28–30. Each is a half-day, 4-hour camp."
  link_text: See the full schedule and pricing
  url: /schedule/
---
<section class="labrats__section" aria-labelledby="camps-day">
  <h2 id="camps-day">A day at camp</h2>
  <p>Every camp day has hands-on labs taught by real scientists. Campers can also use all the supplies in the STEM Discovery Center to create, build, and explore what interests them most during open maker space time.</p>
  <p>Morning and afternoon groups run the same camp, so choose the time that fits your family. We only offer half-day camps.</p>
  {% include projects/sdlabrats/camp-days.html plans="morning-maker,afternoon-engineering" %}
</section>

<section class="labrats__section" aria-labelledby="camps-seasons">
  <h2 id="camps-seasons">Camps through the year</h2>
  <div class="ocs__table-wrap">
    <table class="ocs__table">
      <thead><tr><th scope="col">Season</th><th scope="col">What to expect</th><th scope="col">Details</th></tr></thead>
      <tbody>
        <tr><td>Thanksgiving break</td><td>3-day half-day camps</td><td><a href="{{ '/fall-camp-k-3/' | relative_url }}">Grades K-3</a>, <a href="{{ '/fall-camps-3-6/' | relative_url }}">grades 3-6</a></td></tr>
        <tr><td>Winter break</td><td>Future Engineers camp, two 3-day weeks</td><td><a href="{{ '/winter-camps-k3/' | relative_url }}">Grades K-3</a>, <a href="{{ '/winter-camps-3-6/' | relative_url }}">grades 3-6</a></td></tr>
        <tr><td>Spring break</td><td>Three weeks, timed for different districts' spring breaks</td><td><a href="{{ '/spring-break-camps/' | relative_url }}">Spring break camps</a></td></tr>
        <tr><td>Summer</td><td>Eight weeks, sold by the week or in 4-week bundles</td><td><a href="{{ '/summer-stem-camps/' | relative_url }}">Summer camps</a></td></tr>
      </tbody>
    </table>
  </div>
</section>

{% include projects/sdlabrats/camp-why.html %}
