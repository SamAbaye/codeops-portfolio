import React, { useState, useContext, useMemo } from "react";
import CategoryBar from "./CatagoryBar";
import Dish from "./Dish";
import './Menu.css'
import { useFetch } from "./hooks/useFetch";
import CartContext from "./CartContext";

function Menu() {
    const [category, setCategory] = useState("All");
    const { data, loading, error } = useFetch("/dishes.json");
    const { dispatch } = useContext(CartContext);

    const dishes = data ?? [];

    const categories = useMemo(
        () => ["All", ...new Set(dishes.map((d) => d.category))],
        [dishes],
    );

    const shown = useMemo(() => {
        const filtered =
        category === "All"
            ? dishes
            : dishes.filter((d) => d.category === category);
        return [...filtered].sort((a, b) => a.price - b.price);
    }, [dishes, category]);

    const addItem = (dish) => dispatch({ type: "add", dish });

    let content;
    if (loading) {
        content = <p>Loading the menu…</p>;
    } else if (error) {
        content = <p className="err">{error}</p>;
    } else if (shown.length === 0) {
        content = <p>No dishes yet.</p>;
    } else {
        content = shown.map((d) => (
        <Dish key={d.id} {...d} onAdd={() => addItem(d)} />
        ));
    }

    return (
        <div>
            <CategoryBar
            categories={categories}
            selected={category}
            onSelect={setCategory}
            />
            <div className="menu">
                {content}
            </div>
        </div>
    );
}

export default Menu;
