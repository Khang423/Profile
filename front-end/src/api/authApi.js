import httpClient from "../services/httpClient";

export const login = (credentials) => httpClient.post("/login", credentials);
export const register = (data) => httpClient.post("/register", data);
