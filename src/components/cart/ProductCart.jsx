import axios from "axios";
import React from "react";
import "../styles/cart-styles/productCart.css";
import getConfig from "../utils/getConfig";

const ProductCart = ({ product, getAllProductsCart }) => {
  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => getAllProductsCart())
      .catch((err) => console.log(err));
  };
  return (
    <article className="product-cart__container">
      <div className="product-cart__description">
        <div className="product-cart__titles">
          <span>{product.brand}</span>
          <p>{product.title}</p>
        </div>

        <i onClick={handleDelete} className="fa-solid fa-trash-can"></i>
      </div>
      <p className="product-cart__quantity">
        {product.productsInCart.quantity}
      </p>
      <p className="product-cart__price">
        <span>Total</span> ${product.price}
      </p>
    </article>
  );
};

export default ProductCart;
