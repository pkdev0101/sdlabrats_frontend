---
layout: sdlabrats
template: program
program: stem-at-home
title: STEM at Home
lead: Free video labs, printable procedures, and BrainSTEMtv lessons for doing real science at home with cheap materials you probably already have.
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
  text: Follow our YouTube channel for new labs.
  link_text: LabRats on YouTube
  url: https://www.youtube.com/channel/UCDyefuVZoO5ahiwpvJQhUIw
help: none
---
<section class="labrats__section" aria-labelledby="home-science">
  <h2 id="home-science">You don't need a million-dollar lab</h2>
  <p>Science is the process we use to study the world around us and make sure we aren't fooling ourselves. It happens everywhere, and you can do it with simple, cheap materials. These labs are designed for friends and families to do together at home.</p>
  <div class="labrats__notice" role="note">
    <p><strong>Safety first:</strong> some labs are dangerous and need a parent to supervise or take part.</p>
  </div>
</section>

<section class="labrats__section" id="videos" aria-labelledby="home-videos">
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

<section class="labrats__section labrats__band labrats__split labrats__split--center" id="brainstemtv" aria-labelledby="brainstemtv-title">
  <div>
    <h2 id="brainstemtv-title">More free labs on BrainSTEMtv</h2>
    <p>BrainSTEMtv offers free at-home lessons whenever your schedule allows, from SDLabRats, the San Diego Botanic Garden, Studio Ace Art, and more.</p>
    <dl class="labrats__day">
      <dt>New Explorers</dt><dd>Grades K-2</dd>
      <dt>Young Explorers</dt><dd>Grades 3-5</dd>
      <dt>Explorers</dt><dd>Grades 6-8</dd>
    </dl>
    <div class="ocs__links">
      <a class="ocs__btn signal fill" href="https://brainstemtv.org/" rel="noopener">Visit BrainSTEMtv.org</a>
    </div>
  </div>
  <figure class="labrats__figure">
    <img src="{{ '/images/projects/sdlabrats/brainstemtv.png' | relative_url }}" alt="BrainSTEMtv logo" width="500" height="287" loading="lazy">
  </figure>
</section>

<section class="labrats__section" id="procedures" aria-labelledby="home-procedures">
  <h2 id="home-procedures">Printable procedures</h2>
  <p>Step-by-step instructions for the experiments in "6 at-home experiments," for grades 4-8.</p>
  <ul class="labrats__downloads">
    <li><a href="{{ '/assets/pdfs/sdlabrats/bouncy-eggs.pdf' | relative_url }}">Bouncy egg</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/diy-lava-lamp.pdf' | relative_url }}">Lava lamp</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/dry-ice-bubbles.pdf' | relative_url }}">Dry ice bubbles</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/catastrophic-can.pdf' | relative_url }}">Catastrophic can</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/carbon-sugar-snake.pdf' | relative_url }}">Fire snake</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/electromagnet-car.pdf' | relative_url }}">Magnetic motor</a> <small>PDF</small></li>
    <li><a href="{{ '/assets/pdfs/sdlabrats/build-your-own-crystals.pdf' | relative_url }}" download>Build your own crystal</a> <small>PDF, plus the <a href="{{ '/images/projects/sdlabrats/crystal-flyer.jpg' | relative_url }}">flyer</a></small></li>
  </ul>
</section>

<section class="labrats__section" id="request" aria-labelledby="home-request">
  <h2 id="home-request">What should we film next?</h2>
  <p>We designed every online lab so you can do it with materials from around the house or a local market, because not every family has special equipment or kits. Tell us which subjects or topics you'd like to see here or on BrainSTEMtv.</p>
  {% include projects/sdlabrats/form-video-topic.html %}
</section>
