import React from "react";

import { useNavigate } from "react-router-dom";

const Discover = ({ product }) => {
  const navigate = useNavigate();

  //Al hacer Click envio al usuario al producto especifico
  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
    scroll(0, 0);
  };

  return (
    <article className="product__container">
      <figure onClick={handleClickProduct} className="product__img">
        <img src={product?.productImgs[0]} alt={product?.title} />
      </figure>
      <div className="product-info">
        <h3>{product?.title}</h3>
        <div className="info__price">
          <div>
            <span>Price</span>
            <p>$ {product?.price}</p>
          </div>
          <span className="price__cart">
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Discover;
