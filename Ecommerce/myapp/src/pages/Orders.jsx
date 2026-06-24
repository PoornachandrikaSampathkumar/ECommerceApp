import React from "react";

function Orders() {
  let orders = [];

  try {
    orders = JSON.parse(localStorage.getItem("orders") || "[]");
  } catch (e) {
    orders = [];
  }

  // ✅ PROFESSIONAL COLORS
  const colors = [
    "#dbeafe", // light blue
    "#e9d5ff", // light purple
    "#dcfce7", // light green
    "#fde68a", // soft yellow
    "#fecdd3"  // soft pink
  ];

  return (
    <div
      style={{
        padding: 20,
        background: "#f4f6fb",
        minHeight: "100vh"
      }}
    >
      <h1
        style={{
          marginBottom: 25,
          fontSize: 34,
          fontWeight: "bold",
          color: "black"
        }}
      >
        📦 Your Orders
      </h1>

      {!orders || orders.length === 0 ? (
        <div
          style={{
            padding: 25,
            background: "#fff",
            borderRadius: 15,
            textAlign: "center",
            color: "gray",
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          No orders yet
        </div>
      ) : (
        orders.map((order, index) => (
          <div
            key={order.id + "-" + index}
            style={{
              background: colors[index % colors.length],
              borderRadius: 20,
              padding: 20,
              marginBottom: 20,
              color: "black",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              transition: "0.3s"
            }}
          >
            {/* HEADER */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                paddingBottom: 12,
                marginBottom: 14
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: "bold"
                  }}
                >
                  Order #{order.id}
                </h3>

                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: 15,
                    fontWeight: "600"
                  }}
                >
                  {order.date}
                </p>
              </div>

              <span
                style={{
                  background: "#fecaca",
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: "bold",
                  height: "fit-content"
                }}
              >
                {order.status || "Processing"}
              </span>
            </div>

            {/* ITEMS */}
            <div style={{ marginBottom: 12 }}>
              {order.items?.map((item, i) => (
                <div
                  key={item.id + "-" + i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px dashed rgba(0,0,0,0.15)",
                    fontSize: 17,
                    fontWeight: "600"
                  }}
                >
                  <span>
                    {item.name} × {item.qty || 1}
                  </span>

                  <span
                    style={{
                      fontWeight: "bold"
                    }}
                  >
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 14,
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              <span>Payment: {order.payment}</span>
              <span>Total: ₹{order.total}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;