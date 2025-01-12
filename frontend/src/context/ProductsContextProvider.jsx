import React, { createContext, useContext, useReducer } from "react";

export const INITIAL_VALUE = {
  products: [],
  userName: "Harinaran A",
};

const ProductsContext = createContext(INITIAL_VALUE);

export const useProductsContext = () => useContext(ProductsContext);

const setProducts = (state, value) => {
  console.log({ state, value });
  return {
    ...state,
    products: value,
  };
};

const deleteProduct = (state, value) => {
  const { products } = state;
  const filteredProduct = products?.filter((x) => x._id !== value);
  return {
    ...state,
    products: filteredProduct,
  };
};

const ProductsContextReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "setProducts":
      return setProducts(state, action.payload);
    case "deleteProduct":
      return deleteProduct(state, action.payload);
    default:
      return {
        ...state,
        ...action?.payload,
      };
  }
};

const ProductsProvider = ({ children, updates = INITIAL_VALUE }) => {
  const [state, dispatch] = useReducer(ProductsContextReducer, updates);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
