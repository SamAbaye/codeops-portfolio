import React, { useState, useEffect, useMemo, useRef } from "react";
import CategoryBar from "./CatagoryBar";
import DishList from "./DishList";
import { loadDishes } from "./api";

function Menu() {
    const [allDishes, setAllDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("All");
    const searchRef = useRef(null);

   
    useEffect(() => {
        const ctrl = new AbortController();

        loadDishes(ctrl.signal)
        .then(setAllDishes)
        .catch((e) => {
            if (e.name !== "AbortError") setError(e.message);
        })
        .finally(() => setLoading(false));

        return () => ctrl.abort();
    }, []);

    useEffect(() => {
        searchRef.current?.focus();
    }, []);

    
    const categories = useMemo(
        () => ["All", ...new Set(allDishes.map((d) => d.category))],
        [allDishes]
    );

    
    const filteredDishes = useMemo(() => {
        if (category === "All") return allDishes;
        return allDishes.filter((d) => d.category === category);
    }, [allDishes, category]);

    let content;
    if (loading) {
        content = <p>Loading the menu…</p>;
    } else if (error) {
        content = <p className="err">{error}</p>;
    } else if (filteredDishes.length === 0) {
        content = <p>No dishes yet.</p>;
    } else {
        content = filteredDishes.map((d) => <DishList key={d.id} {...d} />);
    }

    return (
        <div className="menu">
        <CategoryBar
            categories={categories}
            selected={category}
            onSelect={setCategory}
        />
        {content}
        </div>
    );
}

export default Menu;