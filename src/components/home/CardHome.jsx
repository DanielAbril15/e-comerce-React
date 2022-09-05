import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/home-styles/cardHome.css";
const CardHome = ({ product }) => {
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`product/${product.id}`);
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
          <span className="price__cart">
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </article>
  );
};

export default CardHome;
