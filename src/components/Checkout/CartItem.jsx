import React from "react";
import "./Checkout.css";

export default function CartItem({ plant, addToCart, subtractFromCart }) {
  return (
    <div className="cart-item">
      <figure>
        {plant.image} {plant.name}
      </figure>
      <div className="cart-item-quantity">
        <button className="subtract" onClick={() => subtractFromCart(plant)}>
          -
        </button>
        <span>{plant.quantity}</span>
        <button className="add" onClick={() => addToCart(plant)}>
          +
        </button>
      </div>
    </div>
  );
}
