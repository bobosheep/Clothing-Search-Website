from flask import Flask , send_from_directory
from flask import request
from flask import render_template
from elasticsearch import Elasticsearch
import json
es = Elasticsearch()
app = Flask(__name__, static_url_path='')



@app.route('/')
@app.route('/home')
def home_page():
    return render_template('index.html')

@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('/static/', path)

@app.route('/search', methods=['POST','GET'])
def search_ALL():
    if request.method == 'POST':
        print(request.data)
        res = es.search(index="clothes", body=request.data)
        return json.dumps(res)
    else:
        return render_template('index.html')

@app.route('/search/<webname>', methods=['POST'])
def search_ByWeb(webname='lativ'):
    if request.method == 'POST':
        print(request.data)
        res = es.search(index="clothes", doc_type=webname, body=request.data)
        return json.dumps(res)
    else:
        return webname

@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404

if __name__ == '__main__':
    app.run(host="localhost", port="5000", debug=True)