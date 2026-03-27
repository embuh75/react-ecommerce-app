import { useCart } from "../lib/context/CartContext";
import ItemCard from "../components/ItemCard";
import TotalProduct from "../components/TotalProduct";

export default function CheckoutSummary() {
  const { cartItems } = useCart();
  return (
    <>
      <h1 className="page-title">Checkout Summary</h1>
      <div className="checkout-container">
        <div className="checkout-items">
          <h2 className="checkout-section-title">Order Summary</h2>
          {cartItems.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
        <TotalProduct item={cartItems} />
      </div>
    </>
  );
}
