// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      const { accessToken, role } = response?.data || {};
      sessionStorage.setItem("auth_token", accessToken);
      sessionStorage.setItem("role", role);
      setAuth({ token: accessToken, role });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign In</h1>

      <input
        name="username"
        type="text"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="text"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
