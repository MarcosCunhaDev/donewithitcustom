import axios from "axios";

export const BASE_URL =
  process.env.REACT_APP_BASE_URL || "http://192.168.0.152:9000/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
