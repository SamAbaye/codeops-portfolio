import { useState } from "react";
import React from "react";
import "../index.css";


function isValidPhone(phone) {
    return /^(07|09)\d{8}$/.test(phone);
}

function OrderForm() {
        const [form, setForm] = useState({ name: "", phone: "", area: "" });

        const phoneValid = isValidPhone(form.phone);
        const canSubmit = form.name.trim() !== "" && phoneValid;

        function handleChange(event) {
            const { name, value } = event.target;
            setForm({ ...form, [name]: value });
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert(`Order placed for ${form.name}!`);
        }

        return (
            <form onSubmit={handleSubmit}>
            <h3>Delivery details</h3>

            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />

            <input
                name="phone"
                placeholder="TeleBirr number (09XXXXXXXX)"
                value={form.phone}
                onChange={handleChange}
            />
            {form.phone && !phoneValid && <p className="error">Enter a valid TeleBirr number.</p>}

            <input name="area" placeholder="Delivery area" value={form.area} onChange={handleChange} />

            <button type="submit" disabled={!canSubmit}>
                Place order
            </button>
            </form>
        );
}

export default OrderForm
