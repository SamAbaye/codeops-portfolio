import React from "react";
import { useState } from "react";
import Menu from "./src/Menu";
import menu from "./src/data";
import './index.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="menu-container">
      <h1>Addis Eats Menu</h1>

      <Menu  menu={menu} category={selectedCategory} />
    </div>
  );
}

export default App;
