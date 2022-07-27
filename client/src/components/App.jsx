import React from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from "./registration/Registration";
import Login from "./login/Login";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state=> state.user.isAuth)

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
      </div>
    </BrowserRouter>
  );
}

export default App;
