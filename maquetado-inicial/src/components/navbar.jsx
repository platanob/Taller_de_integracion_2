import React from 'react'
import '../css-components/navbar.css';
import {Link} from 'react-router-dom'





const Navbar = () => {
  return (
    <nav id='navus'>
        <div className='container-fluid'>
            <Link to='/' className='navbar-brand'>Banana Shop</Link>
            
        </div>
        <div>
            <ul id='navi'>
                <li>
                  <Link to='/login'>Login </Link>
                </li>

                <li>
                  <Link to='/register'>Register</Link>
                </li>

                <li>
                  <Link to='/products'>Products</Link>
                </li>
                
                <li>
                  <Link to="/a">🛒</Link>
                </li>


            </ul>
        </div>
    </nav>
  )
}
export default Navbar;