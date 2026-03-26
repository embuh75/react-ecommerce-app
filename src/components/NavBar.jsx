import { Link } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";
import { useCart } from "../lib/context/CartContext";

export default function NavBar() {
  const { user, signOut } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-brand">
          Basic Shop
        </Link>
        <div className="navbar-links">
          <Link to={"/"} className="navbar-link">
            Home
          </Link>
          <Link
            to={"/checkout"}
            className="navbar-link flex items-center gap-1"
          >
            Chart
            {cartItems.length > 0 && (
              <span className="bg-red-500 text-white text-xs font-semibold min-w-4.5 h-4.5 rounded-full flex items-center justify-center px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        <div className="navbar-auth">
          <div className="navbar-auth-links">
            {user ? (
              <div className="navbar-user">
                <span className="navbar-greeting">{user}</span>
                <button className="btn btn-secondary" onClick={() => signOut()}>
                  Sign-Out
                </button>
              </div>
            ) : (
              <Link className="btn btn-primary" to={"/auth"}>
                Sign-Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
