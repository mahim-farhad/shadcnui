import axiosInstance from "@libs/axiosInstance";

import getAuthToken from '@utils/services/auth-token';

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

    console.log(error);

    // if (status === 401 || status === 403) {
    //   console.log(`Authorization error: ${status}. Redirecting to login...`);

    //   return Promise.reject(new Error(
    //     `Authorization error: ${status}. Redirecting to login...`
    //   ));
    // } else {
    //   return Promise.reject(new Error(
    //     `Authorization error: ${status}. Redirecting to login...`
    //   ));
    // }
  } else {
    return Promise.reject(new Error("Axios error without response"));
  }
});

export default axiosSecure;
