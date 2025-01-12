// eslint-disable-next-line no-unused-vars
import axios from "axios";
import React, { useState } from "react";
// import { useAuthContect } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const stateData = useAuthContect();
  // console.log(stateData);
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      console.log(response);
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
