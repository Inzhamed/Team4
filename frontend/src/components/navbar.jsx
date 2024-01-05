import React from "react";
import Logo from "./assets/Screenshot 2024-01-05 002853 1.png"; // 

function Navbar() {
  return (
    <div className="inline-flex items-center">
      <img src={Logo} alt="logo" />
      <h3>medimate</h3>
    </div>
  );
}

export default Navbar;
