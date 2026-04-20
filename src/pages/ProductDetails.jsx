import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/api/productsApi";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt={data.title} />
      <p>{data.description}</p>
      <h2>₱{(data.price * 56).toLocaleString()}</h2>
    </div>
  );
}

export default ProductDetails;