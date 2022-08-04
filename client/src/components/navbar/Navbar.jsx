import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/user';

import './navbar.scss'

export default function Navbar () {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const user = useSelector(state=> state.user.currentUser);
  // const user = useSelector(st)
  const serverURL = 'http://localhost:3002';

  const userImg = `${serverURL}/${user.avatar}`

 


  function logoutHandler () {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }

  return (
    <div className='navbar'>
      
      <div className="navbar__header">
        <h1 className="navbar__title">
          Social blog
          <span className="navbar__title-primary">.</span>
        </h1>
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
          <>
            <li className="navbar__item"
              onClick={logoutHandler}
            >
                Logout
            </li>
            <li className="navbar__item">
              <NavLink to='/people' >
                People
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to='/account'>
                <div className="navbar__logo">
                  <img className='navbar__img' src={userImg} alt="logo" style={{width: "30px", height: "30px"}}/>
                  <p className='navbar__text'>{user.name}</p> 
                </div>
              </NavLink>
            </li>
          </>

        }
      </ul>
    </div>
  );
};


