import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`,
  timeout: 2500,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
  },
  next: {
    revalidate: 3600
  }
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found, request might fail.");
  }

  return config;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use((response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        console.warn(`Authorization error: ${status}. Redirecting to login...`);

        // Handle unauthorized access, e.g., redirect to login
      }
    } else {
      console.error("Axios error without response:", error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
