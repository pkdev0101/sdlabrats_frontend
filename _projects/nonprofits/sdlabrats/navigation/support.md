---
layout: sdlabrats
title: Paying for programs
heading: Help paying for programs
lead: We want every kid to have access to real science, whatever their family's budget. Here is the help available and how to get it.
description: Scholarships, charter school funds, and grants that help San Diego families and schools pay for LabRats STEM programs.
permalink: /support/
section: support
hide: true
search_exclude: true
---
{%- assign org = site.data.sdlabrats -%}
<section class="labrats__section" aria-labelledby="options-title">
  <h2 id="options-title">Find the right option</h2>
  <div class="ocs__table-wrap">
    <table class="ocs__table">
      <thead><tr><th scope="col">If you are</th><th scope="col">You can get</th><th scope="col">How</th></tr></thead>
      <tbody>
        <tr>
          <td>A family earning under $89,000 a year, or a military family</td>
          <td>A scholarship: up to 75% off afterschool classes, up to 50% off camps</td>
          <td><a href="{{ '/scholarships/' | relative_url }}">Apply for a scholarship</a></td>
        </tr>
        <tr>
          <td>A homeschool or independent-study family enrolled in a California charter school</td>
          <td>Use your charter school's educational funds at the STEM Discovery Center</td>
          <td><a href="{{ '/ways-to-donate-2/' | relative_url }}">Check the vendor list</a></td>
        </tr>
        <tr>
          <td>A school or group serving underserved kids</td>
          <td>Grants from county and foundation programs for STEM visits</td>
          <td><a href="{{ '/scholarships/#grants' | relative_url }}">See grant programs</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="labrats__section labrats__split" aria-labelledby="how-title">
  <div>
    <h2 id="how-title">How scholarships work</h2>
    <p>Scholarships are funded by our community. Our goal is to award one scholarship for every paid student.</p>
    <p>After you apply, we'll email you with how to use your scholarship for upcoming classes and camps. If you don't hear back within 2 days, please reach out.</p>
  </div>
  <div>
    <h2>Still unsure?</h2>
    <p>Call <a href="{{ org.phone_href }}">{{ org.phone }}</a> and we'll talk through your situation.</p>
    <p>Want to fund a scholarship for another family? <a href="{{ '/ways-to-donate/' | relative_url }}">Donate</a>.</p>
  </div>
</section>
