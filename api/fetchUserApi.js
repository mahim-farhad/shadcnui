import axios from 'axios';

import { getAuthToken } from '@utils/data/services/get-token';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
  },
  next: {
    revalidate: 3600
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  const authToken = await getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  } else {
    console.log("No token found, request might fail.");
  }

  return config;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.response.use((response) => response,
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

async function getUser(path) {
  try {
    const res = await axiosInstance(path);

    if (res.statusText !== 'OK') {
      throw new Error('Failed to fetch data')
    }

    const data = await res.data.data

    return data
  } catch (error) {
    console.error(
      "Error during fetching data:",
      error.response ? error.response.data : error.message
    );

    throw error.response ||
    new Error("An error occurred during fetching data");
  }
};

export default getUser;
