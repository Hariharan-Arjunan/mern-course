// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import { useProductsContext } from "../context/ProductsContextProvider";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { auth, setAuth } = useAuth();

  return (
    <>
      <div className="header">
        <h1 className="logo">Product Store</h1>
        <input />
        <nav className="flex gap-[10px]">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          {auth?.token && (
            <button
              onClick={() => {
                sessionStorage.clear();
                setAuth({});
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
