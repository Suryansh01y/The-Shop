import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import React from "react";

function Navbar() {
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">🛍️</span>
          ShopZone
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-link" aria-label="Shopping cart">
            🛒
            <span className="cart-badge">{cartCount}</span>
          </Link>

          {isAuthenticated ? (
            <button className="outline-btn small-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="primary-btn small-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;