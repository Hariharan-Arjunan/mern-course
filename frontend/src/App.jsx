/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="*" element={<p>Page Not Found...</p>} />
      </Routes>
    </div>
  );
};

export default App;
