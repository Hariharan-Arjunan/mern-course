/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Outlet /> */}
      {/* OLD CODE */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<p>Page Not Found...</p>} />
      </Routes>
    </div>
  );
};

export default App;
