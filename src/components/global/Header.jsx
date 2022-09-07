import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">e-commerce</NavLink>
        </div>
        <ul className="navbar__options">
          <li className="navbar__item ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__item--active" : "navbar__item"
              }
              to="/login"
            >
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className="navbar__item ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar__item--active" : "navbar__item"
              }
              to="/purchases"
            >
              <i className="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>

          <li className="navbar__item ">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
