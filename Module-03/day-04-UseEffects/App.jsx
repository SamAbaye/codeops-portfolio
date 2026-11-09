import React from "react";
import { useState } from "react";
import Menu from "./src/Menu";

import './index.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="menu-container">
      <h1>Addis Eats Menu</h1>

      <Menu />
    </div>
  );
}

export default App;
