import React from "react";
import '../index.css'


function CategoryBar({ categories = [], selected, onSelect }) {
    return (
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === selected ? "chip active" : "chip"}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }
export default CategoryBar