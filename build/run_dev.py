import os

print("\n== RUNNING SERVER ")
os.system(
    "cd .. && sudo bundle exec jekyll serve --limit_posts 10 --livereload -w --config _config_dev.yml"
)
