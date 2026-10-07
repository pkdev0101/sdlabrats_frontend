---
layout: sdlabrats
title: Flyers to share
lead: Printable LabRats flyers for your school office, newsletter, or neighborhood board. Thanks for spreading the word.
description: Printable San Diego LabRats flyers to share with your school or community.
permalink: /flyers-to-share/
section: about
hide: true
search_exclude: true
flyers:
  - 14qzpKDshMaRhSdxzHLBuQQk44g93iVOe
  - 1weOyQUSycHeP4d0d3_uFgaZQl_rxY4mH
  - 1mQdnTeSVxliAhYZp4afKaUUGzAEQqCB2
  - 1NS0Qy2iVl0NrP_tWlDDEBnd33QMysJVC
---
<ul class="labrats__videos">
  {%- for id in page.flyers %}
  <li>
    <div class="labrats__embed labrats__embed--document">
      <iframe src="https://drive.google.com/file/d/{{ id }}/preview" title="LabRats flyer {{ forloop.index }}" loading="lazy"></iframe>
    </div>
    <p><a href="https://drive.google.com/file/d/{{ id }}/view" rel="noopener">Open flyer {{ forloop.index }} to download or print</a></p>
  </li>
  {%- endfor %}
</ul>
