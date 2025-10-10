from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

# start database configure
# because we didn't add .env file with created docker image for security reasons so i am passing it while run the contianer as environment variable 
# load_dotenv()
# MONGO_URI = os.getenv('MONGO_URI')

MONGO_URI = os.environ.get('MONGO_URI')
client = MongoClient(MONGO_URI)
db = client.test
# client.admin.command('ping')  # Quick and safe connection test
# print(" MongoDB Atlas connection successful.")
services_collection = db['aws_services']
# end database configure

@app.route('/api/config')
def get_config():
    print("backend running on-> ", request.host_url)
    return jsonify({'api_url': request.host_url}), 200

@app.route('/')
def home():
    return jsonify({"message":"Backend Run Successfully."})

@app.route('/api/services', methods=['GET'])
def get_services():
    try:
        services = list(services_collection.find({}, {'_id': 0}))
        return jsonify(services), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/add_service', methods=['POST'])
def add_service():
    try:
        data = request.get_json()

        if not data or 'name' not in data or 'description' not in data:
            return jsonify({'error': 'Name and description are required'}), 400

        service = {
            'name': data['name'],
            'description': data['description'],
            'created_at': datetime.utcnow().isoformat()
        }

        services_collection.insert_one(service)

        return jsonify({'message': 'Service added successfully', 'service': {'name': service['name'], 'description': service['description']}}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'Flask API is running'}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
