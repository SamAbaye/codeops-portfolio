import React from 'react'
import './Dish.css'


const Dish = (dish) => {
    const {name, price, img } = dish
    return (
        <div className="dish-card">
            <div className="image">
                <img src={img} alt="Dish Image" />
            </div>
            <div className='text'>
                <strong className="info">
                    <p> Name: {name}</p>
                </strong>
                <strong className="info">
                    <p> Price: {price}</p>
                </strong> 
            </div>
        </div>
    );

}

export default Dish