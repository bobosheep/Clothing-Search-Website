from flask import Flask
from flask import request
from flask import render_template
from elasticsearch import Elasticsearch
import json
es = Elasticsearch()
app = Flask(__name__)



@app.route('/')
@app.route('/home')
def home_page():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search_ALL():
    if request.method == 'POST':
        print(request.data)
        res = es.search(index="clothes", body=request.data)
        return json.dumps(res)
    else:
        return 'Error'

@app.route('/search/<webname>', methods=['POST'])
def search_ByWeb(webname='lativ'):
    if request.method == 'POST':
        print(request.data)
        res = es.search(index="clothes", doc_type=webname, body=request.data)
        return json.dumps(res)
    else:
        return webname

if __name__ == '__main__':
    app.debug = True
    app.run()