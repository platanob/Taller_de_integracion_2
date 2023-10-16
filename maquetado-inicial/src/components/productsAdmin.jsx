import React, {useContext, useEffect } from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import { dataContext } from "./DataContext";
import axios from 'axios';
import '../css-components/productAdmin.css';

const ProductsAdmin = () => {
const { data } = useContext(dataContext);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/productosAdmin")
      .then((res) => {
        
      })
      .catch((error) => {
        console.error("Error al recuperar los productos: ", error);
      });
  }, []);
  return (
      <div>
        <Navbar/>
        <table id='table-admin' className='table table-light'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Marca</th>
              <th scope='col'>Genero</th>
              <th scope='col'>Costo</th>
              <th>
              <Link to="/productsNew"
                    className="btn btn-outline-primary"
                    role="button"
                    aria-pressed="true"
                    >
                New Product
              </Link>
              </th>
            </tr>
            </thead>
           <tbody>
                {data.map((product) => {
                  return (
                      <tr key={product._id}>
                        <td >{product.nombre}</td>
                        <td>{product.marca}</td>
                        <td>{product.talla}</td>
                        <td>{product.costo}</td>
                      </tr>
                  );
                })}
            </tbody>  
        </table>
      </div>
    )
}

export default ProductsAdmin;