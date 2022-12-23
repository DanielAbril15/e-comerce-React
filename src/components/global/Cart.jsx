import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../cart/ProductCart";
import "../styles/cart.css";
import getConfig from "../utils/getConfig";

const Cart = ({ cartSelected, setCartSelected }) => {
  //guardo los productos de Cart
  const [cartProducts, setCartProducts] = useState();
  //-----------------------------------------------------------------
  //hago una constante donde guardo la llamada al endpoint que me trae los productos que hay en Cart(por usuario)

  const getAllProductsCart = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    axios
      .get(URL, getConfig())
      .then((res) => setCartProducts(res.data.data.cart.products))
      .catch((err) => setCartProducts());
  };
  //------------------------------------------------------------------------------
  //uso asincronia para ejecutar la llamada al endpoint, y en el arreglo de dependencias digo que se va a renderizar mi componente Cart cada que cambie la cantidad de productos que hay en el carrito de Compra

  useEffect(() => {
    getAllProductsCart();
  }, [cartSelected]);

  //------------------------------------------------------------------------------
  //Funcion que maneja la accion de comprar lo que hay en Cart, le paso informacion de envio y en getConfig se encuentra la informacion del token(codigo que verifica si el usuario hizo login o no)
  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
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

  //------------------------------------------------------------------------------
  //Recorro los precios de los productos que estan en el carrito y los sumo para saber el precio total que el usuario tendria que pagar
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
      <div className="cart cart-products__container">
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
