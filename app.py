from flask import Flask, request , jsonify 
from werkzeug.security import generate_password_hash , check_password_hash
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_login import LoginManager , login_user , logout_user , login_required , UserMixin

uri = "mongodb+srv://benja:123@bananashop.tzmfwsy.mongodb.net/?retryWites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
app = Flask(__name__)
login_manager_app = LoginManager(app)
# Configura Flask-Login
app.secret_key = 'papaya'  # Reemplaza con una clave secreta segura
class user(UserMixin):
    def __init__(self,nombre,correo,telefono,rut,direccion):
        self.id = correo
        self.nombre = nombre
        self.correo = correo
        self.telefono = telefono
        self.rut = rut 
        self.direccion = direccion

def conbd():
    if client is None:
        return {'message': 'Error al conectar a la base de datos'}, 500
    
@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        correo = request.json.get("correo")
        contra = request.json.get("contra")
        usuario = client.bananashop.users.find_one({'correo' : correo})
        if usuario and check_password_hash(usuario['contra'] , contra):
            us = user(nombre=usuario['nombre'],
                      correo=usuario['correo'],
                      telefono=usuario['telefono'],
                      rut=usuario['rut'],
                      direccion=usuario['direccion']
                      )
            login_user(us)
            return {'message': 'secion iniciada'}
        else : 
            return {'message': 'no se pudo iniciar sesion'}

#para hacer vistas protegidas que se requiera le inicio de secion se ocupara @login_required

@app.route('/logout')
def logout():
    logout_user()
    return {'message': 'secion cerrada'}

@app.route('/registro', methods=['POST'])
def create_user():
    nombre = request.json.get("nombre")
    correo = request.json.get("correo")
    telefono = request.json.get("telefono")
    rut = request.json.get("rut")
    direccion = request.json.get("direccion")
    contra = request.json.get("contra")

    conbd()

    a = client.bananashop.users.find_one({'correo' : correo})
    if a :
        return {'message' : 'correo ya en uso'}

    if nombre and telefono and rut and direccion and correo and contra  :
        contra_hashed = generate_password_hash(contra)
        id = client.bananashop.users.insert_one(
            {'nombre': nombre,'correo' : correo ,'telefono': telefono, 'rut': rut, 'direccion': direccion, 'contra': contra_hashed}
        )
        response = {
            'id': str(id),
            'nombre': nombre,
            'correo':correo,
            'telefono': telefono,
            'rut': rut,
            'direccion': direccion,
            'contra': contra
        }
        return response, 201  
    else:
        return not_found()
    
@app.errorhandler(404)
def not_found(erro=None):

    response = jsonify({
        'message':'Recurso no encontrado : ' + request.url,
        'status': 404
    })
    response.status_code = 404

    return response


if __name__ == '__main__':
    app.run(debug=True)
