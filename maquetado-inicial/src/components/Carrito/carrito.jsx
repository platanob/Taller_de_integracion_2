import Elementos from "./elementos";
import Carritototal from "./carritototal";
import { useContext } from "react";
import { dataContext } from "../DataContext";
import Navbar from "../navbar";
import React from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  const {cart} = useContext(dataContext);
  //condicion
  return cart.length > 0 ? (
    <>
      <Navbar/>
      <Elementos/>
      <Carritototal/>
    </>
  ): (
    <>
      <Navbar/>
      <h2 className="cart-message-center">No has seleccionado nada </h2>
      <button >
        <Link to="/productos">Vamos a comprar!!</Link>
      </button>
    </>
    
  );

};

export default Carrito;