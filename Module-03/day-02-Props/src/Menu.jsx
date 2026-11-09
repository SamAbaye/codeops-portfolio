import React, { useState } from "react";
import Card from "./Card";
import menu from './data'
import Dish from "./Dish";
import '../index.css'




function Menu({ menu = [], category }) {

    const shown =
      !category || category === "All"
        ? menu
        : menu.filter(
            (d) => d.category.toLowerCase() === category.toLowerCase(),
          );
    console.log(shown)
    if (shown.length === 0)
    return <p>No {category} dishes.</p>;

    return shown.map((d) => (
        <Dish key={d.id} {...d} />
    ));
}
    
    

export default Menu