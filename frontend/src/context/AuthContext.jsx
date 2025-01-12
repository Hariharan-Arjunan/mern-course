import React, { createContext, useContext, useReducer, useState } from "react";

const INITIAL_VALUE = {
  token: "",
  role: "",
};

const AuthContext = createContext(INITIAL_VALUE);

const useAuthContect = () => useContext(AuthContext);

const setState = (state, value) => {
  console.log({ state, value });
  return {
    ...state,
    ...value,
  };
};

const AuthContextReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "setState":
      return setState(state, action.payload);
    default:
      return {
        ...state,
        ...action?.payload,
      };
  }
};

const AuthProvider = ({ children, updates = INITIAL_VALUE }) => {
  const [state, dispatch] = useReducer(AuthContextReducer, updates);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContect };
