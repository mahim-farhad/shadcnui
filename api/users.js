import axiosSecure from "@libs/axios/axiosSecure";

export async function getCurrentUser() {
  try {
    const res = await axiosSecure.get(
      "/users/me?populate=*"
    );

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

export async function getUser(userId) {
  try {
    const res = await axiosSecure.get(
      `/users/${userId}?populate=*`, {
      headers: { cache: 'no-store' }
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

export async function getUsers() {
  try {
    const res = await axiosSecure.get(
      "/users?populate=*", {
      headers: { cache: 'no-store' }
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
