import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';
import '../css-components/productsEdit.css';

const ProductsEdit = () => {
  const { nombre } = useParams(); // Cambiado de _id a nombre
  const [loading, setLoading] = useState(true);
  const [editedProduct, setEditedProduct] = useState({
    nombre: '',
    categoria: '',
    genero: '',
    talla: '',
    marca: '',
    costo: '',
    color: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!nombre) {
        console.error('Nombre de producto no definido');
        return;
      }
  
      try {
        const res = await axios.get(`http://127.0.0.1:5000/productos/nombre/${nombre}`);
        console.log('Datos del producto:', res.data); 
        setEditedProduct(res.data[0]); // Accede a los valores en el arreglo recibido y los muestra en los campos
        setLoading(false);
      } catch (error) {
        console.error('Error al recuperar el producto: ', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [nombre]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://127.0.0.1:5000/productos/nombre/${nombre}`, editedProduct); // Cambiado de _id a nombre

      if (res.status === 200) {
        alert('Producto actualizado');
        window.location.href = '/productsAdmin';
      } else {
        console.error('No se pudo actualizar el producto');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="loading-container">
          <div className="loading-message">Cargando...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Editar Producto</h1>
      <form id="formu" onSubmit={handleFormSubmit} className="form-container">
        <div className="form-group">
          <label>Nombre Producto</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="nombre"
            value={editedProduct.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <input
            type="text"
            className="form-control"
            placeholder="Categoría"
            name="categoria"
            value={editedProduct.categoria}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            className="form-control"
            placeholder="Color"
            name="color"
            value={editedProduct.color}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Precio"
            name="costo"
            value={editedProduct.costo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Talla</label>
          <input
            type="text"
            className="form-control"
            placeholder="Talla"
            name="talla"
            value={editedProduct.talla}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Género</label>
          <input
            type="text"
            className="form-control"
            placeholder="Género"
            name="genero"
            value={editedProduct.genero}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            className="form-control"
            placeholder="Marca"
            name="marca"
            value={editedProduct.marca}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default ProductsEdit;
