import React from 'react'
import './Header.css'
function Header() {

    return (
        <>
            <header>
                <nav className='nav'>
                    <div className='logo'>
                        <ul>
                            <li><img src="/Module-03/day-01-React-setup/addis-eats/src/assets/pngtree-restaurant-logo-with-chef-hat-and-fork-spoon-symbol-png-image_17398231.png" alt="Logo" /></li>
                            <li>Addis Eats</li>
                        </ul>
                    </div>
                    <div className='search'>
                        <form action="">
                            <input type="text" placeholder='Search'/>
                        </form>
                    </div> 
                </nav>
            </header>
        </>
    );
}

export default Header