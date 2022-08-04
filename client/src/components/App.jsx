import React from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUser, fetchUsers } from "../redux/thunk/userThunk";
import Account from "./account/Account";
import People from "./people/People";
import './app.scss'



function App() {
  const isAuth = useSelector(state=> state.user.isAuth)
  const dispatch = useDispatch();

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      dispatch(authUser())
      dispatch(fetchUsers())
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        {!isAuth && 
              <Routes>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
        }
        {isAuth && 
                <Routes>
                      <Route path="/account" element={<Account/>}/>
                      <Route path="/people" element={<People/>}/>
                </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
