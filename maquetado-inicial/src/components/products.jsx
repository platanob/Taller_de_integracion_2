import React from 'react';
import Navbar from './navbar'

const Products = () => {
  return (
      <div>
        <Navbar/>

        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            <th scope='row'>
              <div style={{backgroundImage: 'url(https://slimages.macysassets.com/is/image/MCY/products/0/optimized/1262220_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1)',
             backgroundSize:'100%'}}></div>
            </th>
          </tbody>
        </table>



      </div>
    )
}

export default Products;