import React, { useContext } from "react";
import { dataContext } from "../DataContext";
import './carrito.css'

const Elementos = () => {
    const { cart, setCart } = useContext(dataContext);

    const handleRemove = (productName) => {
        // Encuentra el índice del primer producto 
        const indexToRemove = cart.findIndex(product => product.nombre === productName);

        if (indexToRemove !== -1) {
            // nuevo arreglo sin el producto en el índice encontrado
            const updatedCart = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
            // Actualiza el estado del carrito solo con el producto eliminado
            setCart(updatedCart);
        }
    };

    return cart.map((product) => (
        <div className="cartContent" key={product._id}>
            <h3 className="nombre">{product.nombre}</h3>
            <h3 className="precio">${product.costo}</h3>
            <button onClick={() => handleRemove(product.nombre)}>Eliminar</button>
        </div>
    ));
};

export default Elementos;
