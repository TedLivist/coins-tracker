import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to='/coins'>Coins</NavLink>
      <NavLink to='/onecoin'>One Coin</NavLink>
    </div>
  );
}
 
export default Navbar;