// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContextProvider";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { state, dispatch } = useProductsContext();

  const { auth } = useAuth();

  console.log({ state, dispatch });
  return (
    <>
      <div className="header">
        <h1 className="logo">Product Store</h1>
        <input />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          {auth?.token && (
            <button
              onClick={() => {
                sessionStorage.clear();
              }}
            >
              Log Out
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
