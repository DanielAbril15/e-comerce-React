import React from "react";
import "../styles/header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p>e-commerce</p>
      </div>
      <ul className="navbar__options">
        <li className="option ">
          <i className="fa-solid fa-user"></i>
        </li>
        <li className="option ">
          <i className="fa-solid fa-box-archive"></i>
        </li>
        <li className="option ">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
