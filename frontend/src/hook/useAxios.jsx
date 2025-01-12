import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const useAxios = () => {
  const [token, setToken] = useState("");
  const { auth } = useAuth();
  const availableToken = sessionStorage.getItem("auth_token");

  useEffect(() => {
    setToken(auth?.token || availableToken);
  }, [auth?.token, availableToken]);
  const api = axios.create({
    headers: {
      Authorization: token,
    },
  });
  return api;
};

export default useAxios;
