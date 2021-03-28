import os

try:
    import minifier
except:
    print("Skipping minifier ... ")

print("\n== BUILDING RESOURCE ")
os.system("cd .. && webpack build && sudo bundle exec jekyll build --profile")
