import os

try:
    import minifier
except:
    print("Skipping minifier ... ")

print("\n== RUNNING SERVER ")
os.system(
    "cd .. && webpack build && sudo bundle exec jekyll serve --limit_posts 3 --livereload -w"
)