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
          <div className="group">
            <div className="flex items-center justify-between gap-2 group-hover:scale-105 transition-all ease-in-out duration-300">
              <img
                src="/nekoarch.png"
                alt="logo"
                className="w-10 rounded-full bg-white"
              />
              <span className="font-mono text-xl group-hover:text-[#007bff]">
                Basic Shop
              </span>
            </div>
          </div>
        </Link>
        <div className="navbar-links">
          <Link to={"/"} className="navbar-link hover:scale-105">
            Home
          </Link>
          <Link
            to={"/checkout"}
            className="navbar-link flex items-center gap-1 hover:scale-105"
          >
            Chart
            {cartItems.length > 0 && (
              <span className="bg-red-500 text-white text-xs font-semibold min-w-4.5 h-4.5 rounded-full flex items-center justify-center px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        {/* ganti bagian ini jadi drop-down menu yang ada avatarnya */}
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
