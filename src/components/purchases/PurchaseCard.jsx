import React from "react";
import "../styles/purchases-styles/purchaseCard.css";

const PurchaseCard = ({ purchase }) => {
  return (
    <div className="purchase__container">
      <span className="purchase__id">{purchase.id}</span>
      <p className="purchase__date">
        <span>Date:</span> {purchase.createdAt}
      </p>
      <div className="purchase__info">
        <p className="purchase__status">
          <span>Status:</span>
          {purchase.cart.status}
        </p>
        <div className="purchase__product">
          {purchase.cart.products.map((product) => (
            <div key={product.id} className="purchase__product-quantity">
              <p>{product.title}</p>
              <span>{product.productsInCart.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
