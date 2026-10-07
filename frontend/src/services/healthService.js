import { request } from "./apiClient";

export const getHealthStatus = () => {
  return request("/health");
};
