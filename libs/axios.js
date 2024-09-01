import axios from "axios";

import getAuthToken from '@utils/services/auth-token';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
    "Authorization":
      `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
  },
  next: { revalidate: 3600 }
});

const axiosSecure = axiosInstance;

axiosSecure.interceptors.request.use(async function (config) {
  const authToken = await getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    return Promise.reject(new Error("No token found, request might fail."));
  }

  return config;
}, function (error) { return Promise.reject(error); });

axiosSecure.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      console.log(`Authorization error: ${status}. Redirecting to login...`);

      return Promise.reject(new Error(
        `Authorization error: ${status}. Redirecting to login...`
      ));
    } else {
      return Promise.reject(new Error(
        `Authorization error: ${status}. Redirecting to login...`
      ));
    }
  } else {
    return Promise.reject(new Error("Axios error without response"));
  }
});

export { axiosInstance, axiosSecure };
