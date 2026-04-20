import { useState } from "react";
import { useGetProductsQuery } from "../features/api/productsApi";
import ProductCard from "../components/ProductCard";

function Home() {
  const { data, isLoading } = useGetProductsQuery();
  const [search, setSearch] = useState("");

  if (isLoading) return <h2 className="center">Loading...</h2>;

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🛒 Product Store</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;