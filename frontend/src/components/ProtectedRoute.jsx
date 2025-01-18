// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { token, role } = auth || {};
  const availableToken = sessionStorage.getItem("auth_token");

  useEffect(() => {
    if (!token && availableToken) {
      setAuth({ token: availableToken });
    }
    if ((token === null || token === undefined) && !availableToken) {
      navigate("/login");
    }

    if (token && !allowedRoles.includes(role)) {
      navigate("/");
    }
  }, [token, role, allowedRoles]);

  return <div>{token?.length > 0 ? children : <h1>Loading...</h1>}</div>;
};

export default ProtectedRoute;
