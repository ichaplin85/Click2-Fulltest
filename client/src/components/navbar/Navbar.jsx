import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/user';

import './navbar.scss'

export default function Navbar () {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()


  function logoutHandler () {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }

  return (
    <div className='navbar'>
      <img src="" alt="" className="navbar__logo" />
      <div className="navbar__header">
        <NavLink to='/'>
        TEST
        </NavLink>
        </div>
      <ul className="navbar__wrapper">

        {!isAuth && 
          <li className="navbar__item">
            <NavLink to='/login'>
              Login
            </NavLink>
          </li>
        }
        {!isAuth && 
          <li className="navbar__item">
            <NavLink to='/registration'>
              Register
            </NavLink>
          </li>
        }
        {isAuth && 
          <li className="navbar__item"
            onClick={logoutHandler}
          >
              Logout
          </li>
        }
      </ul>
    </div>
  );
};


