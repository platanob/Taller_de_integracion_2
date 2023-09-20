from flask import Flask, request
from werkzeug.security import generate_password_hash 
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://benja:123@bananashop.tzmfwsy.mongodb.net/?retryWites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
app = Flask(__name__)

def conbd():
    if client is None:
        return {'message': 'Error al conectar a la base de datos'}, 500

@app.route('/registro', methods=['POST'])
def create_user():
    nombre = request.json.get("nombre")
    telefono = request.json.get("telefono")
    rut = request.json.get("rut")
    direccion = request.json.get("direccion")
    contra = request.json.get("contra")

    conbd()

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
