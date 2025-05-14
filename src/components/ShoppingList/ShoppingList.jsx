import React from "react";
import ShoppingCard from "./ShoppingCard";
import PLANTS from "../../data";
import "./ShoppingList.css";

export default function ShoppingList({ addToCart, subtractFromCart }) {
  return (
    <div className="plants">
      <h2>Plants</h2>
      <ul className="plants">
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
