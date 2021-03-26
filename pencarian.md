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

<center>
<input type="text" id="search-input" class="form-control forsearch" placeholder="cari disini ..." />
</center>
<div class="ct">
  <div id="results-container">
  </div>
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
<div class="row">
  <div class="col-sm-3 text-muted text-right small"></div>
  <p class="post-meta">2021 |  Rahmat Agung Julians</p>
</div>
