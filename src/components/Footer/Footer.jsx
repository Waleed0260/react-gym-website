import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Foter = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a href="https://github.com/Waleed0260"><img src={Github} alt="" /></a>
          <a href="https://github.com/Waleed0260"><img src={Instagram} alt="" /></a>
          <a href="https://www.linkedin.com/in/waleed0260/"><img src={LinkedIn} alt="" /></a>
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Foter;
