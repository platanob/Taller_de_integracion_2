import React, { useEffect, useState } from "react";
import '../css-components/navbar.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/usuariorol", { withCredentials: true })
    .then((res) => {
      const rol = res.data.message;
      if (rol === "si") {
        setIsAdmin(true);
        setIsUser(false);
      } else if (rol === "siu") {
        setIsAdmin(false);
        setIsUser(true);
      } else {
        setIsAdmin(false);
        setIsUser(false);
      }
    })
    .catch((error) => {
      console.error("Error al recuperar los productos: ", error);
    });
  }, []);

  const handleLogout = () => {
    axios.get("http://127.0.0.1:5000/logout", { withCredentials: true })
    .then((res) => {
      console.log(res.data.message);
      window.location.href = "/login";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
  };

  return (
    <nav id='navus'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Banana Shop</Link>
      </div>
      <div>
        <ul id='navi'>
          <li>
            <Link to='/products'>Products</Link>
          </li>

          {isAdmin && (
            <li>
              <Link to='/productsAdmin'>Admin</Link>
            </li>
          )}
          {(isAdmin || isUser) && (
            <li>
              <span onClick={handleLogout}>Cerrar Sesión</span>
            </li>
          )}

          {(!isAdmin && !isUser) && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}

          {(!isAdmin && !isUser) && (
            <li>
              <Link to='/register'>Register</Link>
            </li>
          )}

          <li>
            <Link to="/a">🛒</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
