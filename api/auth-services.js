import axiosInstance from "@utils/api/axios-instance";

async function registerUser(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local/register", {
      ...userData
    });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during registration");
  }
};

async function authenticateUser(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local", {
      ...userData
    });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};

export { registerUser, authenticateUser };
