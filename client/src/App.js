import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./ActionReducer.js/authSlice.js";
import Home from './components/Home.js'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login.js";








function App() {
const dispatch = useDispatch()
const user = useSelector(state=>state.user.data)
  useEffect(() => {
  dispatch(fetchUser())
  
  }, [])
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={user.success?<Home />:<Login />}/>
      <Route path="/login" element={<Login />}/>
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
 