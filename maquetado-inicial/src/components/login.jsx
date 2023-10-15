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
            const res = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                body: JSON.stringify(dato),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            const data = await res.json();
            // Aquí puedes manejar la respuesta del servidor si es necesario
            // Por ejemplo, mostrar un mensaje al usuario
            if (res.status === 200) {
                if (data.message == "si"){
                    console.log("no");
                    window.location = "/home";
                };
                if (data.message == "ns"){
                    // no se encontro el usuario
                };
                if(data.message == "np"){
                    // no coincide la contra 
                };
            } else {
                console.error("Inicio de sesión fallido");
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
            <h1>Inicia Sesión</h1>
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