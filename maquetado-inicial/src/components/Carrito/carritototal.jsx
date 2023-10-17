import React from 'react'
import { useContext } from "react";
import { dataContext } from "../DataContext";
import './carrito.css'

const Carritototal = () => {
  const { cart } = useContext(dataContext);
  const total =cart.reduce((acc,el)=>acc+el.costo,0);
  return (
    <div className='carritototal'>
        <p>Total a pagar: ${total}</p>
    </div>
  )
}

export default Carritototal