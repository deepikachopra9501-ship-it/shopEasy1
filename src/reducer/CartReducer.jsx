
export const initialState = {
    cart: []
};

export function cartReducer(state, action) {
    switch (action.type) {

        case "ADD_ITEM": {
            const existingItem = state.cart.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    { ...action.payload, quantity: 1 }
                ]
            };
        }

        case "INCREASE": {
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }

        case "DECREASE": {
            return {
                ...state,
                cart: state.cart
                    .map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0)
            };
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                cart: state.cart.filter(
                    item => item.id !== action.payload
                )
            };
        }

        case "CLEAR_CART": {
            return {
                ...state,
                cart: []
            };
        }

        default:
            return state;
    }
}
