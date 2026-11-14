import React, { useState } from 'react'
import './Dish.css'


const Dish = (dish) => {
    const {name, price} = dish
    const [count, setCount] = useState(0)

    const eventHander = () => {
        return setCount(count + 1)
    }
    return (
    <div className="dish-card">
        <div className="image">
            <img
            src="./pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png"
            alt="Dish Image"
            />
        </div>
        <div className="text">
            <strong className="info">
                <span>{name}</span>
                <span>{price} ETB</span>
                <button onClick={eventHander}>Add Cart</button>
            </strong>
        </div>
        <div className='count'>
            <h3>{count}</h3>
        </div>
    </div>
    );

}

export default Dish