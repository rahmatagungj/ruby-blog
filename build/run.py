import os 

try:
    import minifier
except:
    print("Skipping minifier ... ")

print("\n== RUNNING SERVER ")
os.system("cd .. && sudo bundle exec jekyll serve --livereload")

