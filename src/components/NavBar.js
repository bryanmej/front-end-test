import React from "react";
import ingeniaLogo from "../assets/logo_ingenia.png";
import "../styles/NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="#home">
        <img src={ingeniaLogo} className="nav-logo" alt="logo de ingenia" />
      </a>
      <div className="nav-links">
        <a href="#about" className="link">
          ABOUT US
        </a>
        <a href="#our work" className="link">
          OUR WORK
        </a>
        <a href="#contact" className="link">
          CONTACT
        </a>
        <a href="#manifesto" className="link">
          MANIFESTO
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
