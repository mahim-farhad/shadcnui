import axiosInstance from "@libs/axios/axiosInstance";

export async function registerUser(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local/register", {
      ...userData
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      const message =
        error.response?.data?.message ||
        error.message;

      throw new Error(message);
    } else if (error.request) {
      throw new Error(error.request);
    } else {
      throw new Error(error);
    }
  }
};

export async function authenticateUser(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local", {
      ...userData
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      const message =
        error.response?.data?.message ||
        error.message;

      throw new Error(message);
    } else if (error.request) {
      throw new Error(error.request);
    } else {
      throw new Error(error);
    }
  }
};
