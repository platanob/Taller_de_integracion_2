import React, { useContext, useEffect } from "react";
import { dataContext } from "./DataContext";
import axios from "axios";

const Products = () => {
  // Obtiene los datos de productos del contexto.
  const { data, cart, setCart } = useContext(dataContext);
  const buyProducts = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  useEffect(() => {
    // Peticion GET al servidor Flask para obtener productos.
    axios.get("http://127.0.0.1:5000/productos")
      .then((res) => {
      })
      .catch((error) => {
        console.error("Error al recuperar los productos: ", error);
      });
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div className="card" key={product._id}>
          <h3>{product.nombre}</h3>
          <h3>{product.genero}</h3>
          <h4>{product.costo}</h4>
          <button onClick={()=> buyProducts(product)} >Comprar</button>
        </div>
      ))}
    </div>
  ); 
};
 
export default Products;