import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../cart/ProductCart";
import "../styles/cart.css";
import getConfig from "../utils/getConfig";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState();
  const getAllProductsCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    axios
      .get(URL, getConfig())
      .then((res) => setCartProducts(res.data.data.cart.products))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllProductsCart();
  }, []);

  const handleCheckout = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases";
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };

    axios
      .post(URL, obj, getConfig())
      .then((res) => {
        console.log(res.data);
        getAllProductsCart();
      })
      .catch((err) => setCartProducts());
  };

  return (
    <section className="cart__container">
      <h3>Cart</h3>
      {cartProducts?.map((product) => (
        <ProductCart
          key={product.id}
          product={product}
          getAllProductsCart={getAllProductsCart}
        />
      ))}
      <div>
        <span>Total</span>
        <p>$2548</p>
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </section>
  );
};

export default Cart;
