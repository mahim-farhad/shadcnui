import { axiosInstance } from "@libs/axios";

export async function registerUser(userData) {
  try {
    const res =
      await axiosInstance.post("/auth/local/register", {
        ...userData
      });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during registration");
  }
};

export async function authenticateUser(userData) {
  try {
    const res =
      await axiosInstance.post("/auth/local", {
        ...userData
      });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};
