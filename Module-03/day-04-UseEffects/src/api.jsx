import React from "react";


export async function loadDishes(signal) {
  const res = await fetch("../public/dishes.json", { signal });

  if (!res.ok) {
    throw new Error(`Failed to load dishes`);
  }

  return res.json();
}
