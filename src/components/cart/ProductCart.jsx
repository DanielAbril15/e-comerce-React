import axios from "axios";
import React from "react";
import "../styles/cart-styles/productCart.css";
import getConfig from "../utils/getConfig";

const ProductCart = ({ product, getAllProductsCart }) => {
  //funcion que maneja la eliminacion de producto en el Cart, verifica el id del producto y lo elimina, ademas se trae como prop getAllProductsCart que lo que hace es volver a renderizar la ventana Cart
  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => getAllProductsCart())
      .catch((err) => console.log(err));
  };

  return (
    <article className="product-cart__container cart">
      <div className="product-cart__description cart">
        <div className="product-cart__titles cart">
          <span className="cart">{product.brand}</span>
          <p className="cart">{product.title}</p>
        </div>

        <i onClick={handleDelete} className="fa-solid fa-trash-can cart"></i>
      </div>
      <p className="product-cart__quantity cart">
        {product.productsInCart.quantity}
      </p>
      <p className="product-cart__price cart">
        <span>Total</span> ${product.price * product.productsInCart.quantity}
      </p>
    </article>
  );
};

export default ProductCart;
