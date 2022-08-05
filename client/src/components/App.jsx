import React from "react";
import Navbar from "./navbar/Navbar";
import { Route, Routes} from 'react-router-dom'
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUser } from "../redux/thunk/userThunk";
import Account from "./account/Account";
import People from "./people/People";
import './app.scss'
import RequireAuth from "./hoc/RequireAuth";
import MainPage from "./main/MainPage";



function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      dispatch(authUser())
    }
  }, [dispatch])

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/account" element={
            <RequireAuth>
              <Account/>
            </RequireAuth>
          }/>
          <Route path="/people" element={
            <RequireAuth>
              <People/>
            </RequireAuth>
          }/>
        </Routes>
      </div>
  );
}

export default App;
