import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home-styles/cardHome.css";
import getConfig from "../utils/getConfig";

const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
    scroll(0, 0);
  };

  const handleAddCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    const obj = {
      id: product.id,
      quantity: 1,
    };
    axios
      .post(URL, obj, getConfig())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <article className="product__container">
      <figure onClick={handleClickProduct} className="product__img">
        <img src={product.productImgs[0]} alt={product.title} />
      </figure>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="info__price">
          <div>
            <span>Price</span>
            <p>$ {product.price}</p>
          </div>
          <button onClick={handleAddCart} className="price__cart">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardHome;
