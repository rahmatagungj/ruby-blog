import os 

try:
    import minifier
except:
    print("Skipping minifier ... ")

print("\n== BUILDING RESOURCE ")
os.system("cd .. && sudo bundle exec jekyll build --profile")

