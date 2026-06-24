import { useState } from "react";

export default function Payment() {
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    localStorage.setItem("lastOrder", "Order Placed Successfully");

    setSuccess(true);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ textAlign: "center" }}>
          Payment 💳
        </h2>

        {!success ? (
          <>
            <input placeholder="Card Number" style={input} />

            <input placeholder="Card Holder Name" style={input} />

            <div style={{ display: "flex", gap: 10 }}>
              <input
                placeholder="MM/YY"
                style={{ ...input, flex: 1 }}
              />

              <input
                placeholder="CVV"
                style={{ ...input, flex: 1 }}
              />
            </div>

            <button style={btn} onClick={handlePayment}>
              Pay Now
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "green" }}>
              Payment Successful ✅
            </h3>

            <button
              style={btn}
              onClick={() => (window.location.href = "/orders")}
            >
              View Orders
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f3efff"
};

const card = {
  background: "#fff",
  padding: 30,
  borderRadius: 12,
  width: 320,
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
};

const input = {
  width: "100%",
  padding: 10,
  margin: "8px 0",
  borderRadius: 6,
  border: "1px solid #ccc",
  outline: "none"
};

const btn = {
  width: "100%",
  padding: 10,
  background: "#7b5cff",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  marginTop: 10
};