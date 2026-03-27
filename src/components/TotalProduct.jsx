export default function TotalProduct({ item }) {
  const totalItems = item.reduce((acc, i) => acc + i.qty * i.price, 0);
  const fixedPrice = totalItems.toFixed(2);
  return (
    <div className="checkout-summary">
      <h2 className="checkout-section-title text-center">Total Purchase</h2>

      {/* List item per produk */}
      <ul className="flex flex-col gap-2 mb-4">
        {item.map((i) => (
          <li
            key={i.id}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <span className="text-gray-600 truncate flex-1">{i.name}</span>
            <span className="text-gray-400 shrink-0">x{i.qty}</span>
            <span className="font-medium shrink-0 w-16 text-right">
              ${(i.qty * i.price).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <hr className="my-2" />

      {/* Subtotal */}
      <div className="flex justify-between text-sm mb-1">
        <p className="checkout-total-label">Subtotal:</p>
        <p className="checkout-total-value">${fixedPrice}</p>
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-base">
        <p className="checkout-total-label">Total:</p>
        <p className="checkout-total-value checkout-total-final">
          ${fixedPrice}
        </p>
      </div>

      <button className="btn btn-primary btn-large btn-block mt-4">
        Place Order
      </button>
    </div>
  );
}
