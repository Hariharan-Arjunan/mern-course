/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const ProductCard = ({ data, key }) => {
  return (
    <div key={key} className="card-container">
      <div className="image-container">
        <img className="card-image" src={data?.image} />
      </div>
      <div className="card-content">
        <h1>{data?.name}</h1>
        <h2>${data?.price}</h2>
        <div className="card-buttons">
          <button>Edit</button>
          <button
            onClick={() => {
              // handleDelete(x._id);
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
