import { Link } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";

export default function NavBar() {
  const { user, signOut } = useAuth();

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
              <div className="navbar-user">
                <span className="navbar-greeting">{user}</span>
                <button className="btn btn-secondary" onClick={() => signOut()}>
                  SignOut
                </button>
              </div>
            ) : (
              <Link className="btn btn-primary" to={"/auth"}>
                SignIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
