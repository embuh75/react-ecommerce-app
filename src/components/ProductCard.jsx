import { Link } from "react-router-dom";
import { useCart } from "../lib/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const getProduct = cartItems.find((item) => item.id === product.id);
  const getQty = getProduct?.qty;

  return (
    <div className="product-card">
      <img className="product-card-image" src={product.image} />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/product/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart {getQty && `(${getQty})`}
          </button>
        </div>
      </div>
    </div>
  );
}
