from bottle import get, run, static_file

# Code for serving css stylesheets from /css directory.
# This needs to come FIRST, to take precedence over the catch-all route below.
@get('/css/<filename:re:.*>')
def serve_css(filename):
    return static_file(filename, root='css', mimetype='text/css')

@get('/<page:re:.*>')
def index(page="index"):
    print("returning page: ", page)
    return static_file(page + ".html", root="files", mimetype="text/html")


run(reloader=True, host='localhost', port=8080)

