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


    return res.data;
  } catch (error) {
    console.log(error);

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

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};

export {
  registerUserService,
  loginUserService
};
