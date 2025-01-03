/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products = [] }) => {
  return (
    <div className="cards-wrapper">
      {products?.map((x, index) => {
        return <ProductCard data={x} key={index} />;
      })}
    </div>
  );
};

export default Products;
