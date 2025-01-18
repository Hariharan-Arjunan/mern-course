/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Hooks from "./components/Hooks";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["Admin", "User"]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/create"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<p>Page Not Found...</p>} />
      </Routes>
    </div>
  );
};

export default App;
