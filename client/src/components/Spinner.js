import React from "react";
import loader from "../images/loading1.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center my-1">
      <img src={loader} alt="loading" />
    </div>
  )
}

export default Spinner