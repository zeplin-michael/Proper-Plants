import React from "react";
import CartItem from "./CartItem";
import "./Checkout.css";

export default function Checkout({
  checkoutItems,
  addToCart,
  subtractFromCart,
}) {
  console.log(checkoutItems);
  if (checkoutItems.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        Your cart is empty.
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {checkoutItems.map((plant) => (
          <li key={plant.id}>
            <CartItem
              plant={plant}
              addToCart={addToCart}
              subtractFromCart={subtractFromCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
