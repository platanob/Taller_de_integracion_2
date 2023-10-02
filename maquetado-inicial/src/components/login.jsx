import React from 'react';
import Navbar from './navbar'
import "../css-components/login.css";


const Login = () => {
  return (
    <div >
        <Navbar/>
        <div id='ff'>
            <h1>Inicia Sesión</h1>
        </div>
        <form id='formulario'>
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