import os

print("\n== BUILDING RESOURCE ")
os.system("cd .. && sudo bundle exec jekyll build --profile --config _config.yml")
