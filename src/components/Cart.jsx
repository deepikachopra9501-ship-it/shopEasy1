
import { useReducer } from "react";
import { cartReducer, initialState } from "../reducer/CartReducer";

const products = [
    { id: 1, name: "Classic T-Shirt", price: 499, emoji: "👕", color: "#dbeafe" },
    { id: 2, name: "Sneakers", price: 1499, emoji: "👟", color: "#fce7f3" },
    { id: 3, name: "Backpack", price: 899, emoji: "🎒", color: "#d1fae5" },
    { id: 4, name: "Smart Watch", price: 1999, emoji: "⌚", color: "#fef3c7" },
    { id: 5, name: "Headphones", price: 1299, emoji: "🎧", color: "#ede9fe" },
    { id: 6, name: "Sunglasses", price: 599, emoji: "🕶️", color: "#ffedd5" }
];

function Cart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const totalItems = state.cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    const totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return (
        <div className="shop-container">
            <header className="shop-header">
                <div>
                    <h1>🛍️ ShopEasy</h1>
                    <p>Your style, your choice.</p>
                </div>

                <div className="cart-badge">
                    🛒 {totalItems} items
                </div>
            </header>

            <section className="welcome">
                <div>
                    <span className="tag">✨ YOUR EVERYDAY STORE</span>
                    <h2>Find your next favourite.</h2>
                    <p>Good products. Great prices. Happy shopping!</p>
                </div>
                <span className="welcome-emoji">🛍️</span>
            </section>

            <h2 className="section-title">Explore Products ✨</h2>

            <div className="products">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div
                            className="product-emoji"
                            style={{ backgroundColor: product.color }}
                        >
                            {product.emoji}
                        </div>

                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">₹{product.price}</p>

                            <button
                                className="add-button"
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_ITEM",
                                        payload: product
                                    })
                                }
                            >
                                + Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <section className="cart-section">
                <div className="cart-heading">
                    <div>
                        <h2>🛒 Your Shopping Cart</h2>
                        <p>Your picks, all in one place.</p>
                    </div>

                    {state.cart.length > 0 && (
                        <button
                            className="clear-button"
                            onClick={() => dispatch({ type: "CLEAR_CART" })}
                        >
                            🗑️ Clear Cart
                        </button>
                    )}
                </div>

                {state.cart.length === 0 ? (
                    <div className="empty-cart">
                        <span>🛍️</span>
                        <h3>Your cart is feeling lonely!</h3>
                        <p>Add something you love from the products above.</p>
                    </div>
                ) : (
                    <>
                        {state.cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-product">
                                    <span className="cart-product-emoji">
                                        {item.emoji}
                                    </span>

                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price} each</p>
                                        <strong>
                                            ₹{item.price * item.quantity}
                                        </strong>
                                    </div>
                                </div>

                                <div className="cart-actions">
                                    <button
                                        className="quantity-button"
                                        onClick={() =>
                                            dispatch({
                                                type: "DECREASE",
                                                payload: item.id
                                            })
                                        }
                                    >
                                        −
                                    </button>

                                    <span className="quantity">
                                        {item.quantity}
                                    </span>

                                    <button
                                        className="quantity-button"
                                        onClick={() =>
                                            dispatch({
                                                type: "INCREASE",
                                                payload: item.id
                                            })
                                        }
                                    >
                                        +
                                    </button>

                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_ITEM",
                                                payload: item.id
                                            })
                                        }
                                    >
                                        🗑️ Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="cart-total">
                            <div>
                                <p>Total items: {totalItems}</p>
                                <h2>Total: ₹{totalPrice.toLocaleString("en-IN")}</h2>
                                <span>💚 Thanks for shopping with us!</span>
                            </div>

                            <div className="checkout-emoji">🛍️</div>
                        </div>
                    </>
                )}
            </section>

            <footer>
                Made with 💖 using React & useReducer
            </footer>
        </div>
    );
}

export default Cart;
