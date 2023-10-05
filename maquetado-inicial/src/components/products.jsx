import React from 'react';
import Navbar from './navbar'

const Products = () => {
  return (
      <div>
        <Navbar/>

        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col'>Producto</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Precio</th>
            </tr>
          </thead>
          <tbody>
            <th scope='row'>
            </th>
          </tbody>
        </table>



      </div>
    )
}

export default Products;