
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART
} from "./cartAction";

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;

            const existingItem = state.items.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }

            return {
                ...state,
                items: [...state.items, { ...product, quantity: 1 }]
            };
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.payload
                )
            };

        case INCREASE_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };

        case DECREASE_QUANTITY:
            return {
                ...state,
                items: state.items
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter((item) => item.quantity > 0)
            };

        case CLEAR_CART:
            return {
                ...state,
                items: []
            };

        default:
            return state;
    }
};

export default cartReducer;
