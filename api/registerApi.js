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

async function registerUser(username, email, password) {
  try {
    const res = await axiosInstance.post('/auth/local/register', {
      username, email, password
    });

    if (res.status !== 200) {
      throw new Error("Failed to register user");
    }

    const { jwt } = res.data;

    localStorage.setItem("access-token", jwt);

    return res.data;
  } catch (error) {
    console.error(
      "Error during registration:",
      error.response ? error.response.data : error.message
    );

    throw error.response ||
    new Error("An error occurred during registration");
  }
};

export default registerUser;
