import { create } from "apisauce";
import cache from "../utility/cache";

export const BASE_URL = "http://192.168.0.152:9000/api";

const apiClient = create({
  baseURL: "http://192.168.0.152:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.retrieve(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;

