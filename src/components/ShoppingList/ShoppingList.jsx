import React from "react";
import ShoppingCard from "./ShoppingCard";
import PLANTS from "../../data";
import "./ShoppingList.css";

export default function ShoppingList({ addToCart, subtractFromCart }) {
  return (
    <div>
      <h2>Plants</h2>
      <ul className="shopping-list">
        {PLANTS.map((plant) => (
          <ShoppingCard
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
            key={plant.id}
            plant={plant}
          />
        ))}
      </ul>
    </div>
  );
}
