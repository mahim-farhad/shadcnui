import axiosSecure from "@libs/axios/axiosSecure";

export async function createProduct(productData) {
  try {
    const res = await axiosSecure.post("/products", {
      data: { ...productData }
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

export async function getProduct(productId) {
  try {
    const res = await axiosSecure.get(
      `/products/${productId}?populate=*`, {
      headers: { cache: "no-store" }
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

export async function getProducts(page = 1, pageSize = 25) {
  try {
    const res = await axiosSecure.get(
      `/products?populate=*`, {
      headers: { cache: "no-store" },
      params: {
        "pagination[page]": page,
        "pagination[pageSize]": pageSize
      }
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
