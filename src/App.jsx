import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthProvider from "./lib/context/AuthContext";
import CartProvider from "./lib/context/CartContext";

//pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
