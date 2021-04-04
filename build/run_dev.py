import os

print("\n== RUNNING SERVER ")
os.system(
    "cd .. && webpack build && sudo bundle exec jekyll serve --limit_posts 3 --livereload -w"
)
