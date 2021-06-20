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


app = Flask(__name__)
CORS(app)

@app.route('/demo',methods=['GET'])
def demo():
    message = request.args.get('key')
    if(message=="trend"):
        img = Image.open('./static/plots.png')
    else:
        img = Image.open('./static/phrophecy.png')
    output_buffer = io.BytesIO()
    img.save(output_buffer, format='PNG')
    byte_data = output_buffer.getvalue()
    base64_str = base64.b64encode(byte_data)

    result = {"imageString":base64_str}
    return result

@app.route('/return_json',methods=['GET'])
def js():
    return {'message':"hello"}    
   
   