import axios from "axios";

const API = axios.create({
  baseURL: "https://creative-agency-management.onrender.com/api",
});

export default API;
