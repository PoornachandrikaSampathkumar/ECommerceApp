import { useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    if (!email || !password) return alert("Enter email & password");

    const cleanEmail = email.trim().toLowerCase();
    localStorage.setItem("user", cleanEmail);

    alert("Login Successful");
    window.location.href = "/";
  };

  const register = () => {
    if (!name || !email || !password) return alert("Enter all fields");

    localStorage.setItem("user", email.trim().toLowerCase());

    alert("Registered Successfully");
    setIsRegister(false);
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ textAlign: "center" }}>
          {isRegister ? "Register" : "Login"}
        </h2>

        {/* NAME */}
        {isRegister && (
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />
        )}

        {/* EMAIL */}
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        {/* PASSWORD */}
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}   // ✅ FIXED
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={input}
          />

          {/* EYE ICON (clean, not button) */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
              userSelect: "none"
            }}
          >
            {showPassword ? "💔" : " ❤️"}
           
          </span>
        </div>

        {/* BUTTON */}
        <button style={btn} onClick={isRegister ? register : login}>
          {isRegister ? "Register" : "Login"}
        </button>

        {/* TOGGLE */}
        <p style={toggle} onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have account? Login"
            : "New user? Register"}
        </p>
      </div>
    </div>
  );
}

/* STYLES */

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

const toggle = {
  cursor: "pointer",
  color: "purple",
  marginTop: 12,
  textAlign: "center",
  fontSize: 14
};