from flask import Flask, send_from_directory, jsonify, make_response
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment

@app.route("/api/test", methods = ['GET'])
def home():
    resp = {
        "message": "hello-flask"
    }

    return make_response(jsonify(resp))