// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProductsContext } from "../context/ProductsContextProvider";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const { state } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    const data = state?.products?.find((x) => x._id === id);
    setProduct(data);
  }, []);

  return (
    <div>
      <h1>Edit Product</h1>
      {Object.keys(product)?.length > 0 && (
        <ProductForm intialValues={product} />
      )}
    </div>
  );
};

export default EditProduct;
