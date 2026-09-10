import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          ShopEase
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>

          <Link to="/categories" onClick={() => setMenuOpen(false)}>
            Categories
          </Link>

          <Link to="/deals" onClick={() => setMenuOpen(false)}>
            Deals
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <Link to="/account" className="nav-icon">
            👤
          </Link>

          <Link to="/cart" className="nav-icon cart">
            🛒
            <span className="cart-count">0</span>
          </Link>

          {/* Mobile Menu */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
