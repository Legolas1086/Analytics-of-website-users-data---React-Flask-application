from flask import Flask, app,json
from flask.globals import request
from flask.wrappers import Response
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/demo',methods=['GET'])
def demo():
    message = request.args.get('message')
    if message=="send":
        response = json.jsonify("Hello")
        #response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    return message
   