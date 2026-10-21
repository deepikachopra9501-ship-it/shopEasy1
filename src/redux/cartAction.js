const ADD_TO_CART = "ADD_TO_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id
    };
};

const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload: id
    };
};

const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};

export {
    ADD_TO_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CLEAR_CART,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
};