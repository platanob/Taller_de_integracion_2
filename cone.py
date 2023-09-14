from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Configuración de la conexión a MongoDB
client = MongoClient('mongodb+srv://benja:123@bananashop.tzmfwsy.mongodb.net/')  # Cambia la URL por la de tu servidor MongoDB
db = client['bananashop']  # Cambia 'nombre_de_tu_base_de_datos' por el nombre de tu base de datos
collection = db['productos']  # Cambia 'nombre_de_tu_coleccion' por el nombre de tu colección

@app.route('/')
def test_connection():
    try:
        # Realizar una consulta de ejemplo
        resultado = collection.find_one()
        if resultado:
            return jsonify({'mensaje': 'Conexión exitosa a MongoDB'}), 200
        else:
            return jsonify({'mensaje': 'Conexión exitosa a MongoDB, pero no se encontraron datos'}), 200
    except Exception as e:
        return jsonify({'error': f'Error de conexión a MongoDB: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
