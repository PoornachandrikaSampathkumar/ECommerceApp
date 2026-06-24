import React from "react";

function CartItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100px" }}
      />

      <div>
        <h3>{item.title}</h3>
        <p>₹ {item.price}</p>
      </div>
    </div>
  );
}

export default CartItem;