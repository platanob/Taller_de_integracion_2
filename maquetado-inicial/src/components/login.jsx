import React from 'react';
import Navbar from './navbar'
import "../css-components/login.css";



const Login = () => {
    const log = async () => {
        const correo = document.querySelector('input[placeholder="Email"]').value;
        const contra = document.querySelector('input[placeholder="Password"]').value;
        const dato = {
            correo: correo,
            contra: contra
        };
    
        try {
            const res = await fetch("https://backbanana.onrender.com/login", {
                method: "POST",
                body: JSON.stringify(dato),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            

            const data = await res.json(); // Parsea la respuesta JSON

            if (res.status === 200) {
                if (data.message === "si"){
                    console.log("no");
                    alert("Inicio de sesión exitoso!")
                    window.location = "/home";
                };
                if (data.message === "ns"){
                    alert("Usuario no encontrado")
                };
                if(data.message === "np"){
                    alert("Contraseña incorrecta, intentalo de nuevo.")
                };

                console.log("Inicio de sesión exitoso");

            } else {
                alert("Fallo al iniciar sesión.")
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };
    
    const mandardatos = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente
        log(); // Llamar a la función makerEQUEST cuando se presiona el botón
      };


  return (
    <div >
        <Navbar/>
        <div id='ff'>
            <h1>Iniciar Sesión</h1>
        </div>
        <form id='formulario' onSubmit={mandardatos}>
            <div className='container' id='cont'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' aria-describedby='email-help' placeholder='Email'/>
                <div/>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Password'/>
                </div>
                    <button id='boton-login' type="submit" className="btn btn-dark">Enter</button>
                </div>
            </div>
        </form>
    
    </div>
  )
}

export default Login;