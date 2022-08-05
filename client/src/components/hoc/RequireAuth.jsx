import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({children}) => {
  const isAuth = useSelector(state=> state.user.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/login' state={{from: location}} replace/>
  }

  return children;

};

export default RequireAuth;
