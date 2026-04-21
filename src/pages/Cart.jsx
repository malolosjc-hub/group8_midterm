import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseQty,
} from "../features/cart/cartSlice";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * 56 * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>🛒 Your Cart</h1>

      {items.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Your cart is empty 😢</h3>
      ) : (
        <>
          <div className="cart-grid">
            {items.map((item) => (
              <div key={item.id} className="cart-card">
                <img src={item.thumbnail} alt={item.title} />

                <h3>{item.title}</h3>

                <p>
                  ₱{(item.price * 56).toLocaleString()}
                </p>

                <div className="qty-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => dispatch(addToCart(item))}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "20px" }}>
            Total: ₱{total.toLocaleString()}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;