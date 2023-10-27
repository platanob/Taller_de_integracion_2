import React, { useContext, useEffect, useState } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { dataContext } from './DataContext';
import axios from 'axios';
import '../css-components/productAdmin.css';
import '../css-components/carga.css';

const ProductsAdmin = () => {
  const { data, setData } = useContext(dataContext);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/productos')
      .then((res) => {
        setData(res.data);
        setLoading(false); 
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error al recuperar los productos: ', error);
      });

    axios.get('http://127.0.0.1:5000/usuariorol', { withCredentials: true })
      .then((res) => {
        const rol = res.data.message;
        if (rol === 'no' || (rol === 'siu' && window.location.href === 'http://localhost:3000/productsAdmin')) {
          window.location = 'home';
        }
        if (rol === 'si') {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error al recuperar los productos: ', error);
      });
  }, []);

  // Función para eliminar un producto
  const DeleteProduct = (nombre) => {
    console.log('Eliminando producto con nombre:', nombre);
    axios.delete(`http://127.0.0.1:5000/productos/${nombre}`)
      .then((res) => {
        // Eliminar el producto del estado local
        setData(data.filter(product => product.nombre !== nombre));
      })
      .catch((error) => {
        console.error('Error al eliminar el producto: ', error);
      });
  };

  // Si todavía está cargando, mostrar un mensaje de carga
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-message">Cargando...</div>
      </div>
    );
  }

  // Si la carga ha terminado, mostrar la tabla con los datos
  return (
    <div>
      <Navbar />
      <table id="table-admin" className="table table-light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoria</th>
            <th scope="col">Color</th>
            <th scope="col">Precio</th>
            <th scope="col">Talla</th>
            <th scope="col">Marca</th>
            <th scope="col">Genero</th>
            <th scope="col">Acciones</th>
            <Link to="/productsNew" className="btn btn-outline-primary btn-new-product" role="button" aria-pressed="true">
                  New Product
            </Link>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.nombre}</td>
                <td>{product.categoria}</td>
                <td>{product.color}</td>
                <td>{product.costo}</td>
                <td>{product.talla}</td>
                <td>{product.marca}</td>
                <td>{product.genero}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      // Redirigir a la pagina de edicion
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      DeleteProduct(product.nombre);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsAdmin;
