import React from "react";
import './Catagory.css'
import '../index.css'


function CategoryBar({ selected, onSelect }) {
  const cat = ["All", "Vegetarian", "Main", "Breakfast", "Trusts"];

  return (
    <div className="menu-catagory">
      {cat.map((catagory) => (
        <button
          className={
            selected === catagory ? "catagory-btn active" : "catagory-btn"
          }
          key={catagory}
          onClick={() => onSelect(catagory)}
        >
          {catagory}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar