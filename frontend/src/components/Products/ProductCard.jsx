/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContextProvider";
import { useProductsStore } from "../../store/products";

const ProductCard = ({ data, key }) => {
  const { deleteProduct } = useProductsStore();
  // const { dispatch } = useProductsContext();
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    deleteProduct(id);
    // try {
    // await axios.delete(`http://localhost:5000/api/products`, {
    //   params: { id: id },
    // });
    // dispatch({
    //   type: "deleteProduct",
    //   payload: id,
    // });
    // fetchProducts();
    // } catch (er) {
    //   console.log(er);
    // }
  };

  return (
    <div key={key} className="card-container">
      <div className="image-container">
        <img className="card-image" src={data?.image} />
      </div>
      <div className="card-content">
        <h1>{data?.name}</h1>
        <h2>${data?.price}</h2>
        <div className="card-buttons">
          <button
            onClick={() => {
              navigate(`/edit/${data._id}`);
              // handleDelete(data._id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(data._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
