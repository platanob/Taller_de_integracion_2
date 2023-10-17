import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { dataContext } from "./DataContext";
import axios from "axios";
import "../css-components/products.css";

const Products = () => {
  // Obtiene los datos de productos del contexto.
  const { data, cart, setCart } = useContext(dataContext);
  const buyProducts = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  useEffect(() => {
     axios.get("http://127.0.0.1:5000/productos")
       .then((res) => {
         // Actualiza el contexto o el estado local con los datos obtenidos.
       })
       .catch((error) => {
         console.error("Error al recuperar los productos: ", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="productos">
        {data.map((product) => (
          <div className="producto" key={product._id} onClick={()=> buyProducts(product)}>
            <h3>{product.nombre}</h3>
            <h3>{product.genero}</h3>
            <h4>{product.costo}</h4>
            <p>Comprar</p>
          </div>
        ))}
        <div className="bottom">
          <button>Ver más</button>
          <div>
            <a href="#">Ver detalles</a>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
