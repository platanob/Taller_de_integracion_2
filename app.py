from flask import Flask, request
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://benja:123@bananashop.tzmfwsy.mongodb.net/?retryWrites=true&w=majority'
mongo = PyMongo(app)

@app.route('/registro', methods=['POST'])
def create_user():
    nombre = request.json.get('nombre')
    telefono = request.json.get('telefono')
    rut = request.json.get('rut')
    direccion = request.json.get('direccion')
    contra = request.json.get('contra')

    if nombre and telefono and rut and direccion and contra:
        contra_hashed = generate_password_hash(contra)
        id = mongo.db.users.insert(
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
