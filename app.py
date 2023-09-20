from flask import Flask, request
from werkzeug.security import generate_password_hash
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://benja:123@bananashop.tzmfwsy.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


app = Flask(__name__)

@app.route('/registro', methods=['POST'])
def create_user():
    nombre = request.json.get("nombre")
    telefono = request.json.get("telefono")
    rut = request.json.get("rut")
    direccion = request.json.get("direccion")
    contra = request.json.get("contra")

    if nombre and telefono and rut and direccion and contra:
        contra_hashed = generate_password_hash(contra)
        id = client.bananashop.users.insert_one(
            {'nombre': nombre, 'telefono': telefono, 'rut': rut, 'direccion': direccion, 'contra': contra_hashed}
        )
        response = {
            'id': str(id),
            'nombre': nombre,
            'telefono': telefono,
            'rut': rut,
            'direccion': direccion,
            'contra': contra
        }
        return response, 201  
    else:
        return {'message': 'Faltan datos'}, 400  
if __name__ == '__main__':
    app.run(debug=True)
