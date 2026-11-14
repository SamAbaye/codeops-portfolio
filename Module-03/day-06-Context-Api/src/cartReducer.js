export const initialCartState = {
items: [], // { id, name, price, qty }
};

export function cartReducer(state, action) {
    switch (action.type) {
        case "add": {
        const { id, name, price } = action.dish;
        const existing = state.items.find((item) => item.id === id);

        if (existing) {
            return {
            ...state,
            items: state.items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item,
            ),
            };
        }

        return {
            ...state,
            items: [...state.items, { id, name, price, qty: 1 }],
        };
        }

        case "remove": {
        const { id } = action;
        return {
            ...state,
            items: state.items.reduce((acc, item) => {
            if (item.id !== id) {
                acc.push(item);
            } else if (item.qty > 1) {
                acc.push({ ...item, qty: item.qty - 1 });
            }
            return acc;
            }, []),
        };
    }

        case "clear":
        return initialCartState;

        default:
        throw new Error("Unknown action: " + action.type);
    }
}
