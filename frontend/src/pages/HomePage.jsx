// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
import Products from "../components/Products/Products";
import { useProductsContext } from "../context/ProductsContextProvider";
// import { useProductsStore } from "../store/products";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const { products, getProducts } = useProductsStore();
  const { state, dispatch } = useProductsContext();
  console.log({ state, dispatch });
  const fetchProducts = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      dispatch({
        type: "setProducts",
        payload: response?.data?.data,
      });
    } catch (error) {
      console.log({ error });
      setIsError(true);
    }
    setLoading(false);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/products`, {
  //       params: { id: id },
  //     });
  //     const filteredData = products.filter((x) => x._id !== id);
  //     setProducts(filteredData);
  //     // fetchProducts();
  //   } catch (er) {
  //     console.log(er);
  //   }
  // };

  useEffect(() => {
    // getProducts();
    setLoading(false);
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong...</h2>}
      <Products products={state?.products} />
    </div>
  );
};

export default HomePage;
