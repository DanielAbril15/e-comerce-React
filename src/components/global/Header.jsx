import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../global/Cart";
import "../styles/header.css";

const Header = ({ cartSelected, setCartSelected }) => {
  //Con LocalStorage me aseguro  que el usuario ingrese con login para que pueda tener acceso a los productos del Cart
  const userActive = localStorage.getItem("token");

  const navigate = useNavigate();

  //manejo el click del cart: si no hizo login redirijo a la pantalla de login
  const handleClickCart = () => {
    if (userActive) {
      setCartSelected(!cartSelected);
    } else {
      navigate("/login");
      setCartSelected(false);
    }
  };

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

          <li onClick={handleClickCart} className="navbar__item">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </nav>
      <Cart cartSelected={cartSelected} setCartSelected={setCartSelected} />
    </header>
  );
};

export default Header;
