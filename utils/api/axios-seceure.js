import axios from 'axios';

import axiosInstance from '@utils/api/axios-instance';

import getAuthToken from '@utils/services/auth-token';

const axiosSecure = axios.create({
  ...axiosInstance
});

axiosSecure.interceptors.request.use(async (config) => {
  const authToken = await getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    console.log("No token found, request might fail.");
  }

  return config;
}, (error) => Promise.reject(error));

axiosSecure.interceptors.response.use((response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        console.log(`Authorization error: ${status}. Redirecting to login...`);

        // Handle unauthorized access, e.g., redirect to login
      }
    } else {
      console.error("Axios error without response:", error);
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
