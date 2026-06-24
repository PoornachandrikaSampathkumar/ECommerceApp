import React from "react";

function WishlistItem({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />

      <h3>{item.title}</h3>
      <p>₹ {item.price}</p>
    </div>
  );
}

export default WishlistItem;