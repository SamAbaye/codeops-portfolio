import { useState } from "react";
import React from "react";
import CategoryBar from "./CatagoryBar";
import Dish from './Dish' 
import OrderForm from "./OrderForm";
import menu from "./data";
import "../index.css";


function Menu() {
    const [category, setCategory] = useState("All");
    const [orderTotal, setOrderTotal] = useState(0);

    // Derived, not stored — recalculated whenever category changes
    const visibleDishes =
        category === "All" ? menu : menu.filter((dish) => dish.category === category);

    function addToTotal(price) {
        setOrderTotal(orderTotal + price);
    }

    return (
      <div>
        <h2>Addis Eats — Total: {orderTotal} ETB</h2>

        <CategoryBar
          categories={menu.category}
          selected={category}
          onSelect={setCategory}
        />

        <div className="dish-grid">
          {visibleDishes.map((dish) => (
            <Dish key={dish.id} dish={dish} onAdd={addToTotal} />
          ))}
        </div>

        <OrderForm />
      </div>
    );
} 
export default Menu 