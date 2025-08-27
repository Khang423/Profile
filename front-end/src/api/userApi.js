import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/users" });
export const createUser = (data) => API.post("/", data);
