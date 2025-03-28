import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import "../css/login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim() === "") return;
    dispatch(login(username));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back! 👋</h2>
        <p className="login-subtitle">Enter your name to continue</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
