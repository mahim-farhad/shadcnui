import axios from 'axios';

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

async function registerUser(userData) {
  try {
    const res = await axiosInstance.post("/auth/local/register", {
      ...userData
    });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during registration");
  }
};

export default registerUser;
