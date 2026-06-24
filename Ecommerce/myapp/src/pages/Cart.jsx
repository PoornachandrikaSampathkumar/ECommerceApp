import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const [payment, setPayment] = useState({});

  // PLACE ORDER
  const placeOrder = (item) => {
    const method = payment[item.cartId];

    if (!method) {
      alert("Please select COD or UPI");
      return;
    }

    let upiId = "";
    let card = "";

    // UPI FLOW
    if (method === "UPI") {
      upiId = prompt("Enter your UPI ID:");
      if (!upiId) return;

      card = prompt("Enter last 4 digits of card:");
      if (!card) return;
    }

    // NEW ORDER
    const newOrder = {
      id: Date.now() + Math.random(),
      items: [item],
      total: item.price * (item.qty || 1),
      payment: method,
      upi: upiId,
      card,
      status: "Processing",
      date: new Date().toLocaleString()
    };

    // OLD ORDERS
    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    // SAVE ORDER
    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...oldOrders])
    );

    // REMOVE ITEM AFTER ORDER
    removeFromCart(item.cartId);

    alert("🎉 Order placed successfully!");
  };

  return (
    <div
      style={{
        padding: 20,
        background: "#f4f6fb",
        minHeight: "100vh"
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "black",
          marginBottom: 25
        }}
      >
        🛒 My Cart
      </h1>

      {/* EMPTY */}
      {!cart || cart.length === 0 ? (
        <p
          style={{
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          No items in cart
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 25
          }}
        >
          {cart.map((item, index) => (
            <div
              key={item.cartId || index}
              style={{
                width: "35%",
                minHeight: 310,
                background: "#e9d5ff", // light purple
                borderRadius: 22,
                padding: 18,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
              }}
            >
              {/* PRODUCT INFO */}
              <div>
                <h2
                  style={{
                    color: "black",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 12
                  }}
                >
                  {item.name}
                </h2>

                <p
                  style={{
                    color: "black",
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 10
                  }}
                >
                  ₹{item.price}
                </p>

                <p
                  style={{
                    color: "black",
                    fontSize: 16,
                    fontWeight: "bold"
                  }}
                >
                  Quantity: {item.qty || 1}
                </p>
              </div>

              {/* PAYMENT */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 18
                }}
              >
                {/* COD */}
                <button
                  onClick={() =>
                    setPayment((prev) => ({
                      ...prev,
                      [item.cartId]: "COD"
                    }))
                  }
                  style={{
                    flex: 1,
                    padding: 10,
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "black",
                    background:
                      payment[item.cartId] === "COD"
                        ? "#c084fc"
                        : "#ede9fe"
                  }}
                >
                  COD
                </button>

                {/* UPI */}
                <button
                  onClick={() =>
                    setPayment((prev) => ({
                      ...prev,
                      [item.cartId]: "UPI"
                    }))
                  }
                  style={{
                    flex: 1,
                    padding: 10,
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: "bold",
                    background:
                      payment[item.cartId] === "UPI"
                        ? "#8b5cf6"
                        : "#ede9fe",
                    color:
                      payment[item.cartId] === "UPI"
                        ? "white"
                        : "black"
                  }}
                >
                  UPI
                </button>
              </div>

              {/* PLACE ORDER */}
              <button
                onClick={() => placeOrder(item)}
                style={{
                  marginTop: 18,
                  padding: 12,
                  border: "none",
                  borderRadius: 12,
                  background: "green", // light green
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 16,
                  cursor: "pointer"
                }}
              >
                Place Order 🚚
              </button>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.cartId)}
                style={{
                  marginTop: 10,
                  padding: 10,
                  border: "none",
                  borderRadius: 12,
                  background: "red", // light red
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 15,
                  cursor: "pointer"
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;