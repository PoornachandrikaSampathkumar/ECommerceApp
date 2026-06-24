import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function ProductCard({ item }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div
      style={{
        background: "white",
        borderRadius: 15,
        padding: 15,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
        cursor: "pointer",
        height: "100%"
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.03)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.name}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/300")
        }
        style={{
          width: "100%",
          height: 220,
          objectFit: "contain",
          background: "#f5f5f5",
          padding: 10,
          borderRadius: 10
        }}
      />

      {/* WISHLIST */}
      <button
        onClick={() => addToWishlist(item)}
        style={{
          position: "relative",
          alignSelf: "flex-end",
          marginTop: -35,
          marginRight: 5,
          background: "white",
          border: "none",
          borderRadius: "50%",
          width: 35,
          height: 35,
          fontSize: 18,
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}
      >
        ❤️
      </button>

      {/* DETAILS */}
      <div style={{ marginTop: 10 }}>
        <h3 style={{ margin: 0 }}>{item.name}</h3>

        <p style={{ color: "#666", marginTop: 5 }}>
          {item.category}
        </p>

        <h2 style={{ color: "#7b5cff", marginTop: 8 }}>
          ₹{item.price}
        </h2>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 15
          }}
        >
          <button
            onClick={() => addToCart(item)}
            style={{
              flex: 1,
              padding: 10,
              background: "#7b5cff",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Add to Cart
          </button>

          <button
            style={{
              flex: 1,
              padding: 10,
              background: "#131921",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;