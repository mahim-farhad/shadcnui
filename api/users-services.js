import axiosSecure from "@utils/api/axios-seceure";

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  // await delay(1999);

  try {
    const res = await axiosSecure.get("/users?populate=*", {
      // headers: {
      //   'cache': 'no-store',
      //   revalidate: 3600
      // }
    });

    return res.data;
  } catch (error) {
    throw error.response ||
    new Error("An error occurred during authentication");
  }
};

export { getUser, getUsers };
