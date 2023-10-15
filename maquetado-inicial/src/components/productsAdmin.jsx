import React, {useState} from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import ProductsNew from './productsNew';

const ProductsAdmin = () => {

const [products, setProducts] = useState([]);

const renderProducts = () => {
};

const getProducts = () =>{
};

  return (
      <div>
        <Navbar/>
        <table className='table table-light'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Producto</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Precio</th>
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
          {renderProducts()}
        </table>
      </div>
    )
}

export default ProductsAdmin;