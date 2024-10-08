import client from "./client";
import { apiClient } from "./apiClient";

export const login = (email, password) => apiClient.post("/auth", { email, password });
