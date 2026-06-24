import React from "react";

function Banner() {
  return (
    <div
      style={{
        height: "300px",
        background:
          "linear-gradient(to right, #ff6a00, #ee0979)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      Big Summer Sale 🔥
    </div>
  );
}

export default Banner;