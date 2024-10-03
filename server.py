from bottle import get, run, static_file

# Code for serving css stylesheets from /css directory.
# This needs to come FIRST, to take precedence over the catch-all route below.
@get('/css/<filename:re:.*>')
def serve_css(filename):
    return static_file(filename, root='css', mimetype='text/css')

@get('/js/<filename:re:.*>')
def serve_css(filename):
    return static_file(filename, root='js', mimetype='text/javascript')

@get('/images/<filename:re:.*>')
def serve_css(filename):
    return static_file(filename, root='images', mimetype='image/jpeg')

@get('/<page:re:.*>')
def index(page="index"):
    print("returning page: ", page)
    fn = page if page.endswith(".html") else page + ".html"
    return static_file(fn, root="files", mimetype="text/html")


run(reloader=True, host='localhost', port=8080)

