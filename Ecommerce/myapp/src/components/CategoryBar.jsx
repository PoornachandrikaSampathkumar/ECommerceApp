import React from "react";

function CategoryBar() {
  const categories = [
    "Electronics",
    "Fashion",
    "Mobiles",
    "Shoes",
    "Beauty",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((item, index) => (
        <button
          key={index}
          style={{
            padding: "10px 20px",
            border: "none",
            background: "#2874f0",
            color: "white",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;