from base64 import b64encode
import base64
import io
from flask import Flask, app,json
from flask.globals import request
from flask.helpers import make_response, send_file
from flask.wrappers import Response
from flask_cors import CORS
from PIL import Image
import io
from algos.time_series import timeSeries
from algos.visualizwe import users_by_browser,searchPatterns
from algos.k_means import k_means

app = Flask(__name__)
CORS(app)

@app.route('/future',methods=['GET'])
def future():
    message = request.args.get('key')
    i = "New users"
    timeSeries(i)
    if(message=="trend"):
        img = Image.open('./static/plots.png')
    elif(message=="simple"):
        img = Image.open('./static/phrophecy.png')
    else:
        img = Image.open('./static/changepoints.png')    
    output_buffer = io.BytesIO()
    img.save(output_buffer, format='PNG')
    byte_data = output_buffer.getvalue()
    base64_str = base64.b64encode(byte_data)

    result = {"imageString":base64_str}
    return result

@app.route('/visualise',methods=['GET'])
def visualise():
    message = request.args.get('key')
    if message=="searchpattern":
        searchPatterns()
        img = Image.open('./static/line.png')

    elif message=="users":
        users_by_browser(message)
        img = Image.open('./static/users.png')

    elif message=="uesrs":
        users_by_browser(message)
        img = Image.open('./static/newusers.png')    

    else:    
        users_by_browser(message)
        img = Image.open('./static/sessions.png')  

    output_buffer = io.BytesIO()
    img.save(output_buffer, format='PNG')
    byte_data = output_buffer.getvalue()
    base64_str = base64.b64encode(byte_data)

    result = {"imageString":base64_str}
    return result


@app.route('/country',methods=['GET'])
def country():
    #print('reached')
    message=request.args.get('key')
    result = k_means(message)
    print('algo done')
    return json.jsonify(result)


   
   