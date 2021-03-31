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

<div class="row mb__2">
  <div class="col__sm__12 text__muted small">
    <center>
      <input type="text" id="search__input" class="search__form" placeholder="cari disini ..." />
    </center>
    <div class="results__container">
      <div id="results__container"></div>
    </div>
  </div>
</div>

<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search__input'),
    resultsContainer: document.getElementById('results__container'),
    json: '{{ site.baseurl }}/api/postingan.json',
    searchResultTemplate: '<a href="{url}?query={query}" title="{desc}" class="result__list"><div class="row mb__2 post__list"><div class="col__sm__9">{title}</div></div></a>',
    noResultsText: 'Hasil tidak ditemukan',
    limit: 10,
    fuzzy: false,
    exclude: []
  });
</script>
