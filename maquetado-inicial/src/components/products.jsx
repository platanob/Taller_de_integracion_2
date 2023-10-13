import React from 'react';
import { useContext } from 'react';
import { dataContext } from './DataContext';

 
const Products = () => {
  const {data} = useContext(dataContext);
  return data.map((product)=>{
    return (
      <div className="card">
        <h3>{product.name}</h3>
        <h3>{product.sexo}</h3>
        <h4>{product.precio}</h4>
        <button>Comprar</button>
      </div>
    );
  });
};

export default Products;