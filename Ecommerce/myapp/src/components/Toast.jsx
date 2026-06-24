import React from "react";

function Toast({ message }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "green",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;