import ProductCard from "../components/ProductCard";
import { products } from "../lib/data/prosucts";

export default function Home() {
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Basic Shop</h1>
        <p className="home-subtitle">Discover amazing product at low price!</p>
      </div>
      <div className="container">
        <h2 className="page-title">Discover Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
