import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.some((item) => item.id === product.id);

    if (exists) {
      const updateProduct = cartItems.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      setCartItems(updateProduct);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const delItem = (product) => {
    const deletedItem = cartItems.filter((item) => item.id !== product.id);
    setCartItems(deletedItem);
  };

  const decToCart = (product) => {
    const existingProduct = cartItems.find((found) => found.id === product.id);

    if (existingProduct) {
      if (existingProduct.qty === 1) {
        delItem(product);
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty - 1 } : item,
          ),
        );
      }
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, decToCart, delItem, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  return context;
}
