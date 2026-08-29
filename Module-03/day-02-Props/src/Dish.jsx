import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../index.css'


function Dish({ name, price, spicy, currency = "ETB" }) {
    return (
      <div className="card-wrapper">
        <h3>{name}</h3>
        <p className="dish-price">
          <span>{price} </span>
          <span>{currency}</span>
        </p>
        {Boolean(spicy) && <span className="badge spicy-badge">🌶️ Spicy</span>}
      </div>
    );
}

    

Dish.prototype = {
    name: PropTypes.required,
    price: PropTypes.required,
    spicy: PropTypes.bool
}

export default Dish