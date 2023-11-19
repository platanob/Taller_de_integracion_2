import React, { useEffect, useState } from "react";
import '../css-components/navbar.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";


const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://backbanana.onrender.com/usuariorol", { withCredentials: true })
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
    axios.get("https://backbanana.onrender.com/logout", { withCredentials: true })
    .then((res) => {
      console.log(res.data.message);
      navigate('/login');
    })
    .catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
  };
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    // Aquí puedes realizar la búsqueda con searchTerm (por ejemplo, haciendo una solicitud a la API)
    console.log(`Realizando búsqueda de: ${searchTerm}`);
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
          {(isUser) && (
          <li>
          <Link to="/carrito">🛒</Link>
        </li>
          )}
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
