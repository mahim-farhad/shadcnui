import axiosSecure from "@utils/api/axios-seceure";

async function getUser() {
  try {
    const res = await axiosSecure.get("/users/me");

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during registration");
  }
};

async function getUsers() {
  try {
    const res = await axiosSecure.get("/users?populate=*", {
      headers: { 'Cache-Control': 'no-cache' }
    });

    return res.data;
  } catch (error) {
    console.log(error)
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};

export { getUser, getUsers };
