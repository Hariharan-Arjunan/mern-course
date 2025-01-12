// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
