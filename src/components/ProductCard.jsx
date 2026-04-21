import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const price = product.price * 56;

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>

      <p>₱{price.toLocaleString()}</p>

      <Link to={`/product/${product.id}`}>
        <button>View</button>
      </Link>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;