import { revalidatePath } from "next/cache";

import axiosSecure from "@libs/axiosSecure";

export async function getCurrentUser() {
  try {
    const res = await axiosSecure.get("/users/me?populate=*");

    return res.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    throw new Error(message);
  }
};

export async function getUser(userId) {
  try {
    const res = await axiosSecure.get(`/users/${userId}?populate=*`, {
      headers: { cache: 'no-store' }
    });

    return res.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    throw new Error(message);
  }
};

export async function getUsers() {
  try {
    const res = await axiosSecure.get("/users?populate=*", {
      headers: { cache: 'no-store' }
    });

    revalidatePath("/admin");

    return res.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      throw new Error(error.message);
    }
  }
};
