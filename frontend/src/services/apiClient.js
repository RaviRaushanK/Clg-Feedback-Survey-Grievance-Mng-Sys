const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const request = async (path, options = {}) => {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
};
