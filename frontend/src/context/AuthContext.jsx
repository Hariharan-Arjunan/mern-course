// eslint-disable-next-line no-unused-vars
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import api from "../helper/axios";

const AuthContext = createContext(undefined);

const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useLayoutEffect(() => {
    const token = sessionStorage.getItem("auth_token") || auth?.token;
    const role = sessionStorage.getItem("role") || auth?.role;

    if (!auth?.token && token) {
      setAuth({ token, role });
    }

    api.interceptors?.request?.use((config) => {
      config.headers.Authorization = token
        ? token
        : config?.headers?.Authorization;
      return config;
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
