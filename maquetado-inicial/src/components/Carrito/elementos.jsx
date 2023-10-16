import React, { useContext } from "react";
import { dataContext } from "../DataContext";

const Elementos = () => {
    const {cart} = useContext(dataContext)
    return cart.map((product)=>{
        return (
            <div className="cartContent" key={product._id}>
                <h3 className="nombre">{product.nombre}</h3>
                <h3 className="precio">${product.costo}</h3>
            </div>
        )
    })
}

export default Elementos