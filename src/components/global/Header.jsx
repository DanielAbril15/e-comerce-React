import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">e-commerce</NavLink>
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
