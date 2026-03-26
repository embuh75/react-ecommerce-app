import { useCart } from "../lib/context/CartContext";
export default function ProductDetailCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const getProduct = cartItems.find((item) => item.id === product.id);
  const getQty = getProduct?.qty;

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product?.image} alt={product?.name} />
      </div>
      <div className="product-detail-content">
        <h1 className="product-detail-name">{product?.name}</h1>
        <p className="product-detail-price">{product?.price}</p>
        <p className="product-detail-description">{product?.description}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Chart {getQty && `(${getQty})`}
        </button>
      </div>
    </div>
  );
}
