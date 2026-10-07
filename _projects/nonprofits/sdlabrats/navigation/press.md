---
layout: sdlabrats
title: Press
heading: LabRats in the news
lead: Local coverage of LabRats from the San Diego Union-Tribune, The Coast News, the Encinitas Advocate, the Del Mar Times, and 92024 magazine.
description: Newspaper and magazine coverage of San Diego LabRats in the Union-Tribune, The Coast News, Encinitas Advocate, Del Mar Times, and 92024.
permalink: /press/
section: about
hide: true
search_exclude: true
clippings:
  - { file: innovationineducation07.17.20, outlet: "Innovation in Education", date: "July 17, 2020" }
  - { file: unionTribune312018, outlet: "San Diego Union-Tribune", date: "March 1, 2018" }
  - { file: uniontribunenov30onlinerelease, outlet: "San Diego Union-Tribune (online)", date: "November 30" }
  - { file: uniontribunestemworkshop, outlet: "San Diego Union-Tribune", date: "STEM workshop" }
  - { file: coastnews9.13.19, outlet: "The Coast News", date: "September 13, 2019" }
  - { file: coastnews92217, outlet: "The Coast News", date: "September 22, 2017" }
  - { file: coastnewsnov172017, outlet: "The Coast News", date: "November 17, 2017" }
  - { file: coastnewsdec29, outlet: "The Coast News", date: "December 29" }
  - { file: coastnewsaug25, outlet: "The Coast News", date: "August 25" }
  - { file: coastnewsjohnweil, outlet: "The Coast News", date: "John Weil" }
  - { file: coastnewsadvertorial, outlet: "The Coast News", date: "Advertorial" }
  - { file: advocatemarch9th2018, outlet: "Encinitas Advocate", date: "March 9, 2018" }
  - { file: advocatenewsmarch22018, outlet: "Encinitas Advocate", date: "March 2, 2018" }
  - { file: advocatepressreleasev2, outlet: "Encinitas Advocate", date: "Press release" }
  - { file: advocatenewsadd, outlet: "Encinitas Advocate", date: "Advertisement" }
  - { file: delmartimesfeb26-2018, outlet: "Del Mar Times", date: "February 26, 2018" }
  - { file: 92024jan-feb, outlet: "92024 magazine", date: "January/February issue" }
---
<p>Select a clipping to open the full image.</p>
<div class="ocs__grid ocs__grid--card">
  {%- for clip in page.clippings %}
  {%- capture src %}/images/projects/sdlabrats/press/{{ clip.file | downcase }}.jpg{% endcapture %}
  <div class="ocs__grid-cell">
    <a class="labrats__clipping" href="{{ src | relative_url }}">
      <img src="{{ src | relative_url }}" alt="" loading="lazy" width="232" height="300">
      <span>{{ clip.outlet }}</span>
      <small>{{ clip.date }}</small>
    </a>
  </div>
  {%- endfor %}
</div>
