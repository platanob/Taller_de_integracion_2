import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import '../css-components/productsNew.css';
import '../css-components/carga.css';
import axios from 'axios';

const ProductsNew = () => {
  const [loading, setLoading] = useState(true);
    console.log(loading)

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const rolRes = await axios.get("http://127.0.0.1:5000/usuariorol", { withCredentials: true });
        const rol = rolRes.data.message;
        if (rol === "no" && window.location.href === "http://localhost:3000/productsNew") {
            window.location = "home";
          }
        if(rol === "si"){
        setLoading(false);}
      } catch (error) {
        console.error("Error al recuperar el rol del usuario: ", error);
      }
    };

    fetchUserRole(); // Llamada a la función para obtener el rol del usuario antes de cargar la página
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  const pro = async () => {
    const nombre = document.querySelector('input[placeholder="Nombre"]').value;
    const categoria = document.querySelector('input[placeholder="Categoria"]').value;
    const genero = document.querySelector('input[placeholder="Genero"]').value;
    const talla = document.querySelector('input[placeholder="Talla"]').value;
    const marca = document.querySelector('input[placeholder="Marca"]').value;
    const costo = document.querySelector('input[placeholder="Precio"]').value;
    const color = document.querySelector('input[placeholder="Color"]').value;
    const dato = {
        nombre : nombre,
        categoria : categoria,
        genero : genero,
        talla : talla,
        marca : marca ,
        costo : costo,
        color : color
    };
    try {
      const res = await fetch("http://127.0.0.1:5000/newproduc", {
        method: "POST",
        body: JSON.stringify(dato),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.status === 200 || res.status === 201) {
        alert("Producto agregado");
        window.location = "productsAdmin";
      } else {
        console.error("No se pudo agregar el producto");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const mandardatos = (event) => {
    event.preventDefault();
    pro();
  };

  if (loading) {
    return      ( <div className="loading-container">
    <div className="loading-message">Cargando...</div>
  </div>);
  }

  return (
    <div>
      <Navbar/>
      <h1>Nuevo Producto</h1>
      <form id='formulario' onSubmit={mandardatos}>
      <div className='container' id='cont'>
                <div className='form-group'>
                    <label>Nombre Producto</label>
                    <input type='' className='form-control' placeholder='Nombre'/>
                <div/>
                <div>
                    <label>Categoría</label>
                    <input type='' className='form-control' placeholder='Categoria'/>
                </div>
                </div>
                <div className='form-group'>
                    <label>Color</label>
                    <input type='' className='form-control' placeholder='Color'/>
                </div>
                <div className='form-group'>
                    <label>Precio</label>
                    <input type='' className='form-control' placeholder='Precio'/>
                </div>
                <div className='form-group'>
                    <label>Talla</label>
                    <input type='' className='form-control' placeholder='Talla'/>
                </div>
                <div className='form-group'>
                    <label>Género</label>
                    <div className="input-group mb-3">
                        <select class="form-select" placeholder='Genero'>
                            <option selected>Seleccione...</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                            <option value="3">Unisex</option>
                        </select>
                    </div>
                <div className='form-group'>
                    <label>Marca</label>
                    <input type='' className='form-control' placeholder='Marca'/>
                </div>
                <div className='form-group'> 
                    <label>Código</label>   
                    <input type='' class="form-control" placeholder='URL'/>
                </div>
                <div className='form-group'>
                    <label>Disponible</label>
                    <div class="form-check form-check-inline" id='casilla'>
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Si</label>
                    </div>
                    <div class="form-check form-check-inline" >
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
                    <button id='boton-login' type="submit" className="btn btn-dark">Enter</button>
                </div>
            </div>
      </form>
    </div>
  );
};

export default ProductsNew;
