    import PropTypes from "prop-types";
    import { useContext } from "react";
    import './Dish.css'
    import {CartContext} from "./CartContext";

    const Dish = ({ id, name, price, spicy, category, image }) => {
    const { items, dispatch } = useContext(CartContext);

    // Derive this dish's quantity from the shared cart — no local state needed
    const cartItem = items.find((item) => item.id === id);
    const quantity = cartItem?.qty ?? 0;

    const handleIncrement = () => {
        dispatch({
        type: "add",
        dish: { id, name, price, spicy, category, image },
        });
    };

    const handleDecrement = () => {
        if (quantity > 0) {
        dispatch({ type: "remove", id });
        }
    };

    return (
        <div className="dish-item">
            <div className="image">
                <img src={image} alt={name} />
            </div>

            <div className="categoryWrapper">
                {category}
                {spicy && <span>🌶️ Spicy</span>}
            </div>

            <div>{name}</div>
            <div>{price}</div>

            <button onClick={handleDecrement} disabled={quantity === 0}>
                -
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

Dish.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

    export default Dish;
