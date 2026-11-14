import React from 'react'
import './Sidebar.css'
import PropType from '../../../PropType'
import Cart from '../../../Cart'


function Sidebar() {

    return (
        <div className='sidebar'>
        <Cart/>
        </div>
    )
}

export default Sidebar