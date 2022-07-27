import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

export default function Navbar () {
  return (
    <div className='navbar'>
      <img src="" alt="" className="navbar__logo" />
      <div className="navbar__header">
        <NavLink to='/'>
        TEST
        </NavLink>
        </div>
      <ul className="navbar__wrapper">
        <li className="navbar__login">
          <NavLink to='/login'>
          Login
          </NavLink>
          </li>
        <li className="navbar__register">
          <NavLink to='/registration'>
          Register
          </NavLink>
          </li>
      </ul>
    </div>
  );
};


