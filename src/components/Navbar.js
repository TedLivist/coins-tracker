import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../redux/users/users';
import '../styles/Navbar.css';

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <nav>
      <NavLink to="/" className="nav-item">Homepage</NavLink>
      <NavLink to='/coins' className="nav-item">Coins</NavLink>

      <NavLink to='/signup' className="nav-item">Signup</NavLink>
      <NavLink to="/login" className="nav-item">Login</NavLink>
      <div
        className="nav-item"
        onClick={() => {
          dispatch(logoutUser())
        }}
      >
        Logout
      </div>

    </nav>
  );
}
 
export default Navbar;