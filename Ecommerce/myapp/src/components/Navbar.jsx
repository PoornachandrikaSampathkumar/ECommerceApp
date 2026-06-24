import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const logout = () => {
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    window.location.href = "/login";
  };

  return (
    <div
      style={{
        background: "#131921",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#ffcc00",
          fontSize: 28,
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        ShopNest
      </Link>

      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center"
        }}
      >
        <Link style={link} to="/">Home</Link>

        <Link style={link} to="/wishlist">
          ❤️ {wishlist.length}
        </Link>

        <Link style={link} to="/cart">
          🛒 {cart.length}
        </Link>

        <Link style={link} to="/orders">
          📦 Orders
        </Link>
        <Link style={link} to="/profile">
          👤 Profile
        </Link>

        <button style={logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: 16
};

const logoutBtn = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer"
};

export default Navbar;