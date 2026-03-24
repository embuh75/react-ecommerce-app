import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../lib/context/AuthContext";

export default function NavBar() {
  const { user, signOut } = useContext(AuthContext);

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
          <Link to={"/checkout"} className="navbar-link">
            Chart
          </Link>
        </div>
        <div className="navbar-auth">
          <div className="navbar-auth-links">
            {user ? (
              <>
                <p>{user}</p>
                <button onClick={() => signOut()} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to={"/auth"} className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
