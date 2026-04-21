import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useGetProductByIdQuery } from "../features/api/productsApi";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{data.title}</h1>

      <img src={data.thumbnail} alt={data.title} />

      <p>{data.description}</p>

      <h2>₱{(data.price * 56).toLocaleString()}</h2>

      <button onClick={() => dispatch(addToCart(data))}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;