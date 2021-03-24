errors = 0

def css_minifier():
    global errors
    try:
        import scripts.css_minifier
    except:
        errors += 1

def js_minifier():
    global errors
    try:
        import scripts.js_minifier
    except:
        errors += 1

def start():
    print(f'''==================================

        RESOURCE MINIFIER  
     rahmatagungjulians.tech

==================================''')
    css_minifier()
    js_minifier()
    print("\n==================================")
    print("COMPLETE WITH {} ERRORS".format(errors))


start()