import axiosSecure from "@libs/axios/axiosSecure";

const noCacheHeaders = {
  headers: {
    cache: "no-store"
  }
};

export async function createProduct(productData) {
  const res = await axiosSecure.post("/products", {
    data: { ...productData }
  });

  return res.data;
};

export async function updateUser(productId, productData) {
  const res = await axiosSecure.put(
    `/users/${productId}`, {
    data: { ...productData }
  });

  return res.data;
};

export async function getProduct(productId) {
  const res = await axiosSecure.get(
    `/products/${productId}?populate=*`,
    noCacheHeaders
  );

  return res.data;
};

export async function getProducts(page = 1, pageSize = 25) {
  const res = await axiosSecure.get("/products?populate=*", {
    noCacheHeaders,
    params: {
      "pagination[page]": page,
      "pagination[pageSize]": pageSize
    }
  });

  return res.data;
};
