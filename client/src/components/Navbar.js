import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../ActionReducer.js/authSlice";
import profile from "../images/profile.png";
import logo from '../images/logo.png'
const Navbar = () => {
    const user = useSelector((state) => state.user.data);
    const dispatch=  useDispatch()
    const navigate = useNavigate()

    
  const logout = ()=>{
    dispatch(requestLogout())
    navigate('/')
  }
  return (
    <div className="sticky top-0 shadow-lg">
      <nav className="bg-blue-100 w-screen flex items-center justify-between p-1   sm:pr-6">
      <div className="flex items-center justify-center">
        <Link to={'/'}><img className="w-16 xsm:w-24 sm:w-28 mr-3 bg-yellow-500 rounded-full p-1" src={logo} alt="" /></Link>
        <div className="">
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2"><Link to={'/'}>Home</Link></button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">Blog</button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">About us</button>
          <button className="text-xs xsm:text-sm sm:text-base mr-1 sm:mr-2">Contact</button>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <img className="w-5 mx-2 sm:w-6 rounded-full" src={user.success?user.user._json.picture:profile} alt="" />
      {user.success?<button onClick={()=>{logout()}} className='text-red-700'>Logout</button>:<Link to={"/login"}>Login</Link>}
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
