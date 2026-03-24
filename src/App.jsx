import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthProvider from "./lib/context/AuthContext";

//pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <div className="app">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
