---
layout: sdlabrats
template: program
program: stem-at-home
title: STEM at Home
lead: Free video labs and printable procedures for doing real science at home with cheap materials you probably already have.
description: Free at-home science labs from San Diego LabRats. Watch video labs and download procedures for experiments using household materials.
permalink: /stemathome/
section: programs
hide: true
search_exclude: true
facts:
  - { label: Grades, value: "K-8; each video lists its age range" }
  - { label: Where, value: "Your kitchen table" }
  - { label: When, value: "Any time" }
  - { label: Cost, value: "Free" }
  - { label: How to sign up, value: "No sign-up. Pick a lab below" }
signup:
  heading: More videos
  text: Follow our YouTube channel for new labs, and find more free lessons for every age on BrainSTEMtv.
  link_text: Free labs on BrainSTEMtv
  url: /brainstemtv/
help: none
---
<section class="labrats__section" aria-labelledby="home-science">
  <h2 id="home-science">You don't need a million-dollar lab</h2>
  <p>Science is the process we use to study the world around us and make sure we aren't fooling ourselves. It happens everywhere, and you can do it with simple, cheap materials. These labs are designed for friends and families to do together at home.</p>
  <div class="labrats__notice" role="note">
    <p><strong>Safety first:</strong> some labs are dangerous and need a parent to supervise or take part.</p>
  </div>
</section>

<section class="labrats__section" aria-labelledby="home-videos">
  <h2 id="home-videos">Video labs</h2>
  <ul class="labrats__videos">
    <li>{% include projects/sdlabrats/video.html id="TEuxbtrvtdI" title="Bernoulli's Principle and the Science of Flight" %}<h3>Science of flight: Bernoulli's principle</h3></li>
    <li>{% include projects/sdlabrats/video.html id="tJrxRSWJnS8" title="What is Light? Build Your Own Spectroscope" %}<h3>Science of light: build your own spectroscope</h3></li>
    <li>{% include projects/sdlabrats/video.html id="ptRdWgKRuBY" title="Light and the Electromagnetic Spectrum" %}<h3>Light and the electromagnetic spectrum</h3></li>
    <li>{% include projects/sdlabrats/video.html id="9lcfB0vmwrg" title="Seed Dispersal: Nature's Ingenious Strategy" %}<h3>How plants cover the Earth: seed dispersal</h3></li>
    <li>{% include projects/sdlabrats/video.html id="-fnrXCS07vs" title="5 DIY Science Experiments" %}<h3>5 science experiments for grades K-3</h3></li>
    <li>{% include projects/sdlabrats/video.html id="cjeF5ePiV0k" title="Spooky Halloween Science Experiments" %}<h3>Spooky Halloween science</h3></li>
    <li>{% include projects/sdlabrats/video.html id="V0toepUadMs" title="6 at Home Science Experiments" %}<h3>6 at-home experiments for grades 4-8</h3></li>
  </ul>
  <p class="labrats__hint">Thanks to Brainstem Creative for helping us produce these videos.</p>
</section>

<section class="labrats__section" aria-labelledby="home-procedures">
  <h2 id="home-procedures">Printable procedures</h2>
  <p>Step-by-step instructions for the experiments in "6 at-home experiments," for grades 4-8.</p>
  <ul class="labrats__downloads">
    <li><a href="{{ '/assets/pdfs/sdlabrats/bouncy-eggs.pdf' | relative_url }}">Bouncy egg</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/diy-lava-lamp.pdf' | relative_url }}">Lava lamp</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/dry-ice-bubbles.pdf' | relative_url }}">Dry ice bubbles</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/catastrophic-can.pdf' | relative_url }}">Catastrophic can</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/carbon-sugar-snake.pdf' | relative_url }}">Fire snake</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/electromagnet-car.pdf' | relative_url }}">Magnetic motor</a> <small>PDF</small></li>
    <li><a href="{{ '/build-your-own-crystal/' | relative_url }}">Build your own crystal</a> <small>Flyer and PDF</small></li>
  </ul>
</section>

<section class="labrats__section" aria-labelledby="home-request">
  <h2 id="home-request">What should we film next?</h2>
  <p>We designed every online lab so you can do it with materials from around the house or a local market, because not every family has special equipment or kits. Tell us which subjects or topics you'd like to see.</p>
  {% include projects/sdlabrats/form-video-topic.html %}
</section>
