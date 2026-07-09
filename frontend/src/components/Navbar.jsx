import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <span className="icon">🛰️</span>
          <span className="gradient-text">GNSS</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/research">Research</NavLink></li> {/* ← FIXED: small r */}
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/programs">Programs</NavLink></li>
          <li><NavLink to="/faculty">Faculty</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          {isAdmin && <li><NavLink to="/admin">Admin</NavLink></li>}
        </ul>

        <div className="auth-buttons">
          {isAuthenticated ? (
            <>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                👋 {user?.name || "User"} {isAdmin && "👑"}
              </span>
              <button className="btn-secondary" style={{ padding: "8px 20px", fontSize: "0.85rem" }} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-primary" style={{ padding: "8px 24px", fontSize: "0.85rem" }}>
                Login
              </Link>
              <Link to="/register" className="btn-secondary" style={{ padding: "8px 24px", fontSize: "0.85rem" }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;