import React from 'react'
import { useContext } from "react";
import { dataContext } from "../DataContext";

const Carritototal = () => {
  const { cart } = useContext(dataContext);
  const total =cart.reduce((acc,el)=>acc+el.costo,0);
  return (
    <div className='carritototal'>
        <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default Carritototal