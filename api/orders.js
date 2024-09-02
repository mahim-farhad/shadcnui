import axiosSecure from "@libs/axios/axiosSecure";

export async function createOrder(orderData) {
  try {
    const res = await axiosSecure.post("/orders", {
      data: { ...orderData }
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

export async function getOrder(orderId) {
  try {
    const res = await axiosSecure.get(
      `/orders/${orderId}?populate=*`, {
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

export async function getOrders(page = 1, pageSize = 25) {
  try {
    const res = await axiosSecure.get(
      `/orders?populate=*`, {
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
