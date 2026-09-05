// src/cart/CheckoutPanel.jsx
import { useContext, useMemo } from "react";
import {CartContext}  from "../CartContext";

function CheckoutPanel() {
  const { items, dispatch } = useContext(CartContext);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items],
  );

  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="checkout-panel">
      <h2>Checkout</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} × {item.qty} — {item.price * item.qty} ETB
          </li>
        ))}
      </ul>
      <p className="checkout-total">
        <strong>Total: {total} ETB</strong>
      </p>
      <button onClick={() => dispatch({ type: "clear" })}>Clear Cart</button>
    </div>
  );
}

export default CheckoutPanel;
