import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartAction";
jhinga hai mahan 
const products = [
  { id: 101, name: "HP Laptop", price: 55999 },
  { id: 102, name: "Smartphone", price: 25999 },
  { id: 103, name: "Headphones", price: 2499 },
  { id: 104, name: "Shoes", price: 1999 },
];

function ProductList() {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
jhinga ki jai 
  return (
    <>
    <section>
        <h2>Shop easy product</h2>
        <div className="product-grid">
            {
                products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
        </div>
    </section>
    </>
}

export default ProductList;   