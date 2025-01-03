// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="logo">Product Store</h1>
        <input />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
