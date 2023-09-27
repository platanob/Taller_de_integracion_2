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


class producto():
    def __init__(self,nombre,genero,talla,color,marca,costo) :
        self.nombre = nombre
        self.genero = genero
        self.talla = talla
        self.color = color
        self.marca = marca 
        self.costo = costo
        

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


@app.route('/newproduc' , methods=['POST'])
def crear_producto():
    nombre = request.json.get("nombre")
    genero = request.json.get("genero")
    talla  = request.json.get("talla")
    color  = request.json.get("color")
    marca  = request.json.get("marca")
    costo  = request.json.get("costo")

    conbd()

    if nombre and genero and talla and color and marca and costo :
        id = client.bananashop.productos.insert_one(
            {'nombre': nombre,'genero': genero , 'talla' : talla , 'color': color , 'marca' : marca , 'costo' : costo}
        )
        response = {
            'id': str(id),
            'nombre': nombre,
            'genero': genero,
            'talla' : talla,
            'color': color , 
            'marca' : marca , 
            'costo' : costo

        }
        return response, 201  
    else:
        return not_found()
    

@app.route('/productos/<nombre>', methods=['GET'])
def obtener_productos_por_nombre(nombre):
    conbd() 
    productos = client.bananashop.productos.find({'nombre': nombre})
    productos_encontrados = []

    for producto in productos:
        producto_encontrado = {
            'nombre': producto['nombre'],
            'genero': producto['genero'],
            'talla': producto['talla'],
            'color': producto['color'],
            'marca': producto['marca'],
            'costo': producto['costo']
        }
        productos_encontrados.append(producto_encontrado)

    return productos_encontrados, 201
@app.route('/productos', methods=['GET'])
def obtener_todos_los_productos():
    conbd()  # Esto parece ser tu función de conexión a la base de datos
    
    productos = client.bananashop.productos.find({})
    
    # Inicializamos una lista para almacenar todos los productos
    todos_los_productos = []

    for producto in productos:
        # Creamos un diccionario para cada producto encontrado
        producto_encontrado = {
            'nombre': producto['nombre'],
            'genero': producto['genero'],
            'talla': producto['talla'],
            'color': producto['color'],
            'marca': producto['marca'],
            'costo': producto['costo']
            # Puedes agregar más campos aquí si es necesario
        }
        # Agregamos el producto al listado de todos los productos
        todos_los_productos.append(producto_encontrado)

    # Devolvemos la lista de todos los productos como respuesta
    return todos_los_productos, 200


if __name__ == '__main__':
    app.run(debug=True)
