import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../cart/ProductCart";
import "../styles/cart.css";
import getConfig from "../utils/getConfig";

const Cart = ({ cartSelected, setCartSelected }) => {
  const [cartProducts, setCartProducts] = useState();

  const getAllProductsCart = () => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/cart";
    axios
      .get(URL, getConfig())
      .then((res) => setCartProducts(res.data.data.cart.products))
      .catch((err) => setCartProducts());
  };
  useEffect(() => {
    getAllProductsCart();
  }, [cartSelected]);

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
        setCartProducts();
        setCartSelected(!cartSelected);
      })
      .catch((err) => console.log(err));
  };
  let totalPrice = 0;
  const priceProduct = cartProducts?.map(
    (product) =>
      (totalPrice =
        product.price * product.productsInCart.quantity + totalPrice)
  );

  return (
    <section
      className={
        cartSelected ? "cart__container--checked cart" : "cart__container"
      }
    >
      <h3 className="cart">Cart</h3>
      <div className="cart">
        {cartProducts?.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            getAllProductsCart={getAllProductsCart}
          />
        ))}
      </div>
      <div className="cart__total cart">
        <div className="cart">
          <span className="cart">Total</span>
          <p className="cart total-price">${totalPrice}</p>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
