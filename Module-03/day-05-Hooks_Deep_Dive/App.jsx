import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./src/CartContext";
import Menu from "./src/Menu";
import CartProvider from "./src/cart/CartProvider";
import CheckoutPanel from "./src/cart/CheckoutPanel";
import './index.css'

function App() {
  const { items } = useContext(CartContext);

  const { totalItems, totalPrice } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalItems: acc.totalItems + item.qty,
        totalPrice: acc.totalPrice + item.price * item.qty,
      }),
      { totalItems: 0, totalPrice: 0 },
    );
  }, [items]);
  return (
    <div className="menu-container">
      <h1>Addis Eats Menu</h1>

      <CartProvider>
        <div className="cart-summary">
          🛒 {totalItems} items — {totalPrice} ETB
        </div>
        <Menu />
        <CheckoutPanel />
      </CartProvider>
    </div>
  );
}

export default App;
