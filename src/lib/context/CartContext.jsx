import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((found) => found.id === product.id);

    if (existingProduct) {
      const curretnQTY = existingProduct.qty;
      const updatedQTY = cartItems.map((item) =>
        item.id === product.id
          ? {
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              qty: curretnQTY + 1,
            }
          : item,
      );
      setCartItems(updatedQTY);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  return context;
}
