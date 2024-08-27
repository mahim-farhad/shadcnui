import axios from "axios";

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

async function registerUserService(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local/register", {
      ...userData
    });

    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else if (res.status >= 400 && res.status < 500) {
      throw new Error(res.data.message || "Client error occurred");
    } else if (res.status >= 500) {
      throw new Error("Server error occurred");
    } else {
      throw new Error("Failed to register user");
    }
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during registration");
  }
};

async function loginUserService(userData) {
  try {
    const res = await axiosInstance.post(
      "/auth/local", {
      ...userData
    });

    if (res.status >= 200 && res.status < 300) {
      return res.data;
    } else if (res.status >= 400 && res.status < 500) {
      throw new Error(res.data.message || "Client error occurred");
    } else if (res.status >= 500) {
      throw new Error("Server error occurred");
    } else {
      throw new Error("Failed to login user");
    }
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};

export {
  registerUserService,
  loginUserService
};
