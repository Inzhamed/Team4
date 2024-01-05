import React from "react";
import Logo from "../assets/Screenshot 2024-01-05 002853 1.png"; 
function header() {
  return (
    <div className="inline-flex items-center">
      <img src={Logo} alt="logo" />
      <div className="flex flex-col"><h2>medimate</h2>
      <p>keep in track with medimate</p></div>
    </div>
  )
}

export default header