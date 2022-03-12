import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-item">Homepage</NavLink>
      <NavLink to='/coins' className="nav-item">Coins</NavLink>

      <NavLink to='/signup' className="nav-item">Signup</NavLink>
      <NavLink to="/login" className="nav-item">Login</NavLink>
      <NavLink to="/logout" className="nav-item">Logout</NavLink>

    </nav>
  );
}
 
export default Navbar;