import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    "Authorization":
      `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
  }
});

export default axiosInstance;
