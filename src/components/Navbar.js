import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { clearCoins } from '../redux/coins/coins';
import { logoutUser } from '../redux/users/users';
import '../styles/Navbar.css';

const Navbar = () => {

  const checkUser = useSelector(state => state.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav>
      <NavLink to="/" className="nav-item">Homepage</NavLink>

      
      {checkUser.user && (
        <NavLink to='/coins' className="nav-item">Coins</NavLink>
      )}

      {!checkUser.user && (
        <>
          <NavLink to='/signup' className="nav-item">Signup</NavLink>
          <NavLink to="/login" className="nav-item">Login</NavLink>
        </>
      )}

      {checkUser.user && (
        <div
          className="nav-item"
          onClick={() => {
            dispatch(logoutUser())
            dispatch(clearCoins())
            localStorage.removeItem('loggedInUser')
            navigate('/')
          }}
        >
          Logout
        </div>
      )}

    </nav>
  );
}
 
export default Navbar;