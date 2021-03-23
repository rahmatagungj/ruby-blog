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
<div id="search-container">
  <center>
  <input type="text" id="search-input" class="form-control forsearch" placeholder="cari disini ..." />
  </center>
  <ul id="results-container"></ul>
</div>

<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/postingan.json',
    searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}" class="result">{title}</a></li>',
    noResultsText: 'Hasil tidak ditemukan',
    limit: 10,
    fuzzy: false,
    exclude: []
  });
</script>
<div class="row">
  <div class="col-sm-3 text-muted text-right small"></div>
  <p class="post-meta">2021 |  Rahmat Agung Julians</p>
</div>