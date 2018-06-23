from flask import Flask , send_from_directory
from flask import request
from flask import render_template
from elasticsearch import Elasticsearch
#from pymongo.errors import BulkWriteError
#from pymongo import MongoClient

import time
#import pymongo
import json
es = Elasticsearch()
app = Flask(__name__, static_url_path='')

#client = MongoClient('localhost', 27017)
#db = client.Clothes



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
        #req = json.load(request.data)
        #print(req)
        res = es.search(index="clothes", body=request.data)
        #query = req.query.match.name
        #res = list(db.Clothes.find({'$text':{'$search': query}}, {'score':{'$meta':"textScore"}}))

        #print(res)

        return json.dumps(res)
    else:
        return render_template('index.html')

@app.route('/search/website/<webname>', methods=['POST'])
def search_ByWeb(webname='lativ'):
    if request.method == 'POST':
        #data = request.data
        #req = json.loads(data)
        #print(req)
        res = es.search(index="clothes", doc_type=webname, body=request.data)
        #query = req['query']['match']['name']
        
        #res = list(db.Lativ.find({'$text':{'$search': query}}, {'score':{'$meta':"textScore"}}))
        #for i in res:
            #i['_id'] = str(i['_id'])
            #print(i)
        
        return json.dumps(res)
    else:
        return

@app.route('/search/category/<category>', methods=['POST'])
def search_Bycategory(category='ALL'):
    if request.method == 'POST':
        #data = request.data
        #req = json.loads(data)
        #print(req)
        res = es.search(index="clothes", body=request.data)
        #query = req['query']['match']['name']
        
        #res = list(db.Lativ.find({'$text':{'$search': query}}, {'score':{'$meta':"textScore"}}))
        #for i in res:
            #i['_id'] = str(i['_id'])
            #print(i)
        
        return json.dumps(res)
    else:
        return category


@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404

if __name__ == '__main__':
    #app.run(host="127.0.0.1", port="5000", debug=True)
    app.run(host="0.0.0.0", port="5100", debug=True)