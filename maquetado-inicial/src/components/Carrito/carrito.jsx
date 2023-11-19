import Elementos from "./elementos";
import Carritototal from "./carritototal";
import { useContext } from "react";
import { dataContext } from "../DataContext";
import Navbar from "../navbar";
import React from "react";
import { Link } from "react-router-dom";
import './carrito.css';

const Carrito = () => {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <div>
      <Navbar/>
      <div className="cart-container">
        <div className="cart-content">
          <Elementos />
        </div>
        <Carritototal/>
      </div>
    </div>
  ) : (
    <div>
      <Navbar/>
      <div className="cart-container">
        <h2 className="cart-message-center">No has seleccionado nada </h2>
        <div className="cart-actions">
          <button>
            <Link to="/products">Vamos a comprar!!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
