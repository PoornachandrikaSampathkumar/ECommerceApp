import React from "react";

function SearchBar() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
}

export default SearchBar;