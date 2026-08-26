import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import './Main.css'

function Main() {

    return (
        <>
            <section className="menu-bar">
                <Sidebar />
                <Products />
            </section>
        </>
    );

}

export default Main