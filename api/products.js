import axiosSecure from "@libs/axiosSecure";

export async function createProduct(productData) {
  try {
    const res = await axiosSecure.post("/products", {
      data: { ...productData }
    });

    return res.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    throw new Error(message);
  }
};

export async function getProduct(productId) {
  try {
    const res = await axiosSecure.get(`/products/${productId}?populate=*`, {
      headers: { cache: 'no-store' }
    });

    return res.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    throw new Error(message);
  }
};

export async function getProducts(page = 1, pageSize = 25) {
  try {
    const res = await axiosSecure.get(`/products`, {
      params: {
        'pagination[page]': page,
        'pagination[pageSize]': pageSize
      }
    });

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
