import React, { useReducer, useMemo } from "react";
import CartContext from "../CartContext";
import {cartReducer, initialCartState} from "../cartReducer";

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    const total = state.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0,
    );

    // Memoised so consumers don't re-render on unrelated renders of CartProvider
    const value = useMemo(
        () => ({ items: state.items, total, dispatch }),
        [state.items, total],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export default CartProvider;
