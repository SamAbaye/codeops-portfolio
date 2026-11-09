import React from "react";
import { useState } from "react";
import './FormHandle.css'

function FormHandle() {

    const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const changeHandle = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log(formData)
    }


    return (
    <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="fName" onChange={changeHandle} />
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={changeHandle} />
            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={changeHandle} />
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
}

export default FormHandle