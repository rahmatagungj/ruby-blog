---
layout: default
author: Rahmat Agung Julians
image: search
comments: false
title: Pencarian
description: Temukan berbagai informasi disini
keywords: cari tentang teknologi
---

{%-include header_text.html -%}

<div class="row mb-2">
  <div class="col-sm-9 text-muted small">
    <center>
      <input type="text" id="search-input" class="form-control forsearch" placeholder="cari disini ..." />
    </center>
    <div class="ct">
      <div id="results-container">
    </div>
    </div>
  </div>
  {% include sidebar.html %}
</div>

<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/postingan.json',
    searchResultTemplate: '<div class="row mb-2 post__list"><div class="col-sm-9"><a href="{url}?query={query}" title="{desc}" class="post-list">{title}</a></div></div>',
    noResultsText: 'Hasil tidak ditemukan',
    limit: 10,
    fuzzy: false,
    exclude: []
  });
</script>
