import { useState } from "react";

import PLANTS from "./data";

import Header from "./components/Header/Header";
import ShoppingList from "./components/ShoppingList/ShoppingList";
// import ShoppingCard from "./components/ShoppingList/ShoppingCard";
import Checkout from "./components/Checkout/Checkout";
import ShoppingCard from "./components/ShoppingList/ShoppingCard";

export default function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addToCart = (plant) => {
    const itemExists = checkoutItems.find((i) => i.id === plant.id);
    if (itemExists) {
      setCheckoutItems(
        checkoutItems.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCheckoutItems([...checkoutItems, item]);
    }
  };

  const subtractFromCart = (itemRemove) => {
    setCheckoutItems(
      checkoutItems
        .map((item) =>
          item.id === itemRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Header />
      <div className="main-body">
        <ShoppingList addToCart={addToCart} />
        <Checkout
          checkoutItems={checkoutItems}
          subtractFromCart={subtractFromCart}
          addToCart={addToCart}
        />
      </div>
    </>
  );
}
