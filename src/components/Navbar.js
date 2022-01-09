import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-item">Homepage</NavLink>
      <NavLink to='/coins' className="nav-item">Coins</NavLink>
      <NavLink to='/onecoin' className="nav-item">One Coin</NavLink>
    </nav>
  );
}
 
export default Navbar;