import { useCart } from "../lib/context/CartContext";
export default function ItemCard({ item }) {
  const { decToCart, addToCart, delItem } = useCart();
  return (
    <>
      <div className="checkout-item">
        <img src={item.image} alt={item.name} className="checkout-item-image" />
        <div className="checkout-item-details">
          <h3 className="checkout-item-name">{item.name}</h3>
          <p className="checkout-item-price">{item.price}</p>
        </div>
        <div className="checkout-item-controls">
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={() => decToCart(item)}>
              -
            </button>
            <span className="quantity-value">{item.qty}</span>
            <button className="quantity-btn" onClick={() => addToCart(item)}>
              +
            </button>
          </div>

          <p className="checkout-item-total">
            ${(item.price * item.qty).toFixed(2)}
          </p>
          <button
            className="btn btn-secondary btn-small"
            onClick={() => delItem(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
