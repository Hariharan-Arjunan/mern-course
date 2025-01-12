/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContextProvider";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </AuthProvider>
  </>
);
