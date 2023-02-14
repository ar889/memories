import React from "react";
import google from "../images/google.png";
import bg from "../images/bg.jpg";

const Login = () => {
  return (
    <div className="relative flex justify-center">
      <div className="h-screen overflow-hidden absolute">
        <img src={bg} className="w-screen " alt="" />
      </div>

      <button
        className="absolute my-60"
        onClick={() => {
          window.open(`${process.env.REACT_APP_API}/auth/google`, "_self");
        }}
      >
        <div className="flex justify-center items-center space-x-1 my-4 border border-black px-4 py-2 rounded bg-yellow-500 hover:bg-slate-300 transition-all">
          <img className="w-8" src={google} alt="google" /> Continue with Google
        </div>
      </button>
    </div>
  );
};

export default Login;

{
  /* <div className='flex justify-center items-center w-screen'>
<button onClick={()=>{window.open(`${process.env.REACT_APP_API}/auth/google`,'_self')}}>Login With Google</button>
</div> */
}
