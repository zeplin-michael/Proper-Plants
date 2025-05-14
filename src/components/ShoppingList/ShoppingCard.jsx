import React from "react";
import "./ShoppingList.css";

export default function ShoppingCard({ plant, addToCart }) {
  return (
    <div className="shopping-card">
      <figure>{plant.image}</figure>
      <h2>{plant.name}</h2>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
