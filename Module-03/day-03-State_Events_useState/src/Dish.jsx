import React, { useState } from 'react'
import PropTypes from 'prop-types'
import menu from './data';
import '../index.css'


function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    onAdd(dish.price);
  }

  return (
    <div className="dish-card">
      <p className="dish-name">
        {dish.name} {dish.spicy && "🌶️"}
      </p>
      <p className="dish-price">{dish.price} ETB</p>
      <p>Added: {count}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}



export default Dish