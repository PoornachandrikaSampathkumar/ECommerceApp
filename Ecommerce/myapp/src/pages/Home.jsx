import React, { useState } from "react";
import products from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function Home() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Electronics", "Fashion", "Beauty", "Home", "Sports"];

  const filtered = products.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div style={{ padding: 20 }}>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(to right, #4f46e5, #9333ea)",
          color: "white",
          padding: 30,
          borderRadius: 20,
          textAlign: "center"
        }}
      >
        <h1
  style={{
    fontSize: 38,
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: 10,
    background: "linear-gradient(90deg, #ffcc00, #ff6b6b, #7b5cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 20px rgba(0,0,0,0.2)"
  }}
>
  ✨ Welcome to ShopNest 🛍️
</h1>
        <p>🌟 Everything you need, right here 🛍️
        💰 Discover unbeatable prices on trending products 🔥📦
       🚀 Smart shopping starts at ShopNest 🛒💙</p>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 20,
          borderRadius: 10,
          border: "1px solid #ddd"
        }}
      />

      {/* CATEGORY */}
      <div style={{ display: "flex", gap: 10, overflowX: "auto", marginTop: 15 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background: category === c ? "#2563eb" : "#f3f4f6",
              color: category === c ? "white" : "black"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID (AMAZON STYLE) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 25
        }}
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              borderRadius: 12,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "0.3s",
              overflow: "hidden"
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >

            {/* IMAGE (FIXED HEIGHT LIKE AMAZON) */}
            <div
              style={{
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f5f5f5"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ padding: 12, flex: 1, display: "flex", flexDirection: "column" }}>

              <h3 style={{ fontSize: 16, minHeight: 40 }}>
                {item.name}
              </h3>

              <p style={{ color: "gray", fontSize: 13 }}>
                {item.category}
              </p>

              <h2 style={{ color: "#7b5cff", marginTop: 5 }}>
                ₹{item.price}
              </h2>

              {/* BUTTONS */}
              <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>

                <button
                  onClick={() => addToCart(item)}
                  style={{
                    flex: 1,
                    padding: 8,
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer"
                  }}
                >
                  Add
                </button>

                <button
                  onClick={() => addToWishlist(item)}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: 18,
                    cursor: "pointer"
                  }}
                >
                  ❤️
                </button>

              </div>

              {/* TRUST BADGES */}
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: "gray"
                }}
              >
                {/* TRUST BADGES - UPGRADED */}
<div
  style={{
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6
  }}
>
  {/* RETURN BADGE */}
  <div
    style={{
      background: "#e8f5e9",
      color: "#1b5e20",
      padding: "6px 10px",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: 6
    }}
  >
    🚚 <span>7 Days Easy Return</span>
  </div>

  {/* COD BADGE */}
  <div
    style={{
      background: "#e3f2fd",
      color: "#0d47a1",
      padding: "6px 10px",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: 6
    }}
  >
    💸 <span>Cash on Delivery Available</span>
  </div>
</div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;