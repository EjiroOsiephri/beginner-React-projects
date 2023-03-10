import React from "react";
import Logo from "../components/Troll Face.png";
import "../components/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <h1>Meme Generator</h1>
    </div>
  );
};
export default NavBar;
