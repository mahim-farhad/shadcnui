import axios from 'axios';

import axiosInstance from '@utils/api/axios-instance';

import getAuthToken from '@utils/services/auth-token';

const axiosSecure = axiosInstance;

axios.interceptors.request.use(async function (config) {
  const authToken = await getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    return Promise.reject(new Error("No token found, request might fail."));
  }

  return config;
}, function (error) { return Promise.reject(error); });

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      console.log(`Authorization error: ${status}. Redirecting to login...`);

      // Handle unauthorized access, e.g., redirect to login
    }
  } else {
    return Promise.reject(new Error("Axios error without response:", error));
  }

  return Promise.reject(error);
});

export default axiosSecure;
