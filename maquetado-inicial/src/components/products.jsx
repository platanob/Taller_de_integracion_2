import React, { useContext, useEffect} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { dataContext } from "./DataContext";
import axios from "axios";
import "../css-components/products.css";

const Products = () => {
  // Obtiene los datos de productos del contexto.
  const { data, cart, setCart , setData} = useContext(dataContext);
  const buyProducts = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  useEffect(() => {
    axios.get('https://backbanana.onrender.com/productos')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
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
            <div className="imagen-container">
              <img src={product.url} alt={product.nombre} className="imagen-producto" />
            </div>
            <div className="descripcion-producto">
              <h3>{product.nombre}</h3>
              <h3>{product.genero}</h3>
              <h4>${product.costo} CLP</h4>
              <p>Comprar</p>
            </div>
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