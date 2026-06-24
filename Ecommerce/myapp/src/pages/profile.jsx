import React from "react";

function Profile() {

  let cart = [];
  let wishlist = [];
  let orders = [];

  // SAFE LOAD
  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    cart = [];
  }

  try {
    wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];
  } catch {
    wishlist = [];
  }

  try {
    orders =
      JSON.parse(localStorage.getItem("orders")) || [];
  } catch {
    orders = [];
  }

  return (
    <div
      style={{
        padding: 20,
        background: "#f4f6fb",
        minHeight: "100vh"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#e9d5ff",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20
        }}
      >
        <h1
          style={{
            color: "#4f46e5",
            fontSize: 32,
            margin: 0
          }}
        >
          👤 My Profile
        </h1>

        <p
          style={{
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          Welcome to ShopNest 🛍️
        </p>
      </div>

      {/* CART */}
      <div
        style={{
          background: "#dbeafe",
          padding: 20,
          borderRadius: 18,
          marginBottom: 20
        }}
      >
        <h2>🛒 Cart Items ({cart.length})</h2>

        {cart.length === 0 ? (
          <p>No cart items</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={item.cartId || index}
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                fontWeight: "bold"
              }}
            >
              {item.name} — ₹{item.price}
            </div>
          ))
        )}
      </div>

      {/* WISHLIST */}
      <div
        style={{
          background: "#fecdd3",
          padding: 20,
          borderRadius: 18,
          marginBottom: 20
        }}
      >
        <h2>❤️ Wishlist ({wishlist.length})</h2>

        {wishlist.length === 0 ? (
          <p>No wishlist items</p>
        ) : (
          wishlist.map((item, index) => (
            <div
              key={item.id || index}
              style={{
                background: "#fff",
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                fontWeight: "bold"
              }}
            >
              {item.name} — ₹{item.price}
            </div>
          ))
        )}
      </div>

      {/* ORDERS */}
      <div
        style={{
          background: "#dcfce7",
          padding: 20,
          borderRadius: 18
        }}
      >
        <h2>📦 Orders ({orders.length})</h2>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={order.id || index}
              style={{
                background: "#fff",
                padding: 12,
                borderRadius: 10,
                marginTop: 10
              }}
            >
              <h3>Order #{order.id}</h3>

              <p>Total: ₹{order.total}</p>

              <p>Payment: {order.payment}</p>

              <p>Status: {order.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Profile;