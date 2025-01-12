// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Products from "../components/Products/Products";
import { useProductsContext } from "../context/ProductsContextProvider";
import { useNavigate } from "react-router-dom";
import api from "../helper/axios";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { state, dispatch } = useProductsContext();
  const navigate = useNavigate("");
  const fetchProducts = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await api.get(
        `${import.meta.env.VITE_REACT_API}/api/products`
      );
      console.log(response);
      dispatch({
        type: "setProducts",
        payload: response?.data?.data,
      });
    } catch (error) {
      console.log({ error });
      if (error?.response?.data?.error?.message === "jwt expired") {
        sessionStorage.clear();
        console.log("Entering loop");
        navigate("/login");
      }
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
    fetchProducts();
    setLoading(false);
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
