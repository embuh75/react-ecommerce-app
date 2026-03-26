import { useCart } from "../lib/context/CartContext";
import ItemCard from "../components/ItemCard";

export default function Checkout() {
  const { cartItems } = useCart();
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout Summary</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.map((item) => (
              <ItemCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
