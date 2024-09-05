import axiosSecure from "@libs/axios/axiosSecure";

const noCacheHeaders = {
  headers: {
    cache: "no-store"
  }
};

export async function createUser(userData) {
  const res = await axiosSecure.post(
    "/users", {
    data: { ...userData }
  });

  return res.data;
};

export async function updateUser(userId, userData) {
  const res = await axiosSecure.put(
    `/users/${userId}`, {
    data: { ...userData }
  });

  return res.data;
};

export async function getCurrentUser() {
  const res = await axiosSecure.get(
    "/users/me?populate=*"
  );

  return res.data;
};

export async function getUser(userId) {
  const res = await axiosSecure.get(
    `/users/${userId}?populate=*`,
    noCacheHeaders
  );

  return res.data;
};

export async function getUsers() {
  const res = await axiosSecure.get(
    "/users?populate=*",
    noCacheHeaders
  );

  return res.data;
};
