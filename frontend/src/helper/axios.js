import axios from "axios";

const token = sessionStorage.getItem("auth_token");
console.log(token);
const api = axios.create({
  headers: {
    Authorization: token,
  },
});

export default api;
