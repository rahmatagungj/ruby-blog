---
layout: default
author: Rahmat Agung Julians
image: search
comments: false
title: Pencarian
description: Temukan berbagai informasi disini
---
{%-include header_text.html -%}
<br/>
<div id="search-container">
  <center>
  <input type="text" id="search-input" class="form-control forsearch" placeholder="cari disini ..." />
  </center>
  <ul id="results-container"></ul>
</div>


<script src="{{ "/assets/js/search.min.js"  | relative_url }}" type="text/javascript"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/postingan.json',
    searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}" class="local-link result">{title}</a></li>',
    noResultsText: 'Hasil tidak ditemukan',
    limit: 10,
    fuzzy: false,
    exclude: []
  });
</script>
