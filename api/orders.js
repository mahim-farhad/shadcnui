import axiosSecure from "@libs/axios/axiosSecure";

const noCacheHeaders = { headers: { cache: "no-store" } };

export async function createOrder(orderData) {
  const res = await axiosSecure.post("/orders", {
    data: { ...orderData }
  });

  return res.data;
};

export async function getOrder(orderId) {
  const res = await axiosSecure.get(
    `/orders/${orderId}?populate=*`,
    noCacheHeaders
  );

  return res.data;
};

export async function getOrders(page = 1, pageSize = 25) {
  const res = await axiosSecure.get("/orders?populate=*", {
    noCacheHeaders,
    params: {
      "pagination[page]": page,
      "pagination[pageSize]": pageSize
    }
  });

  return res.data;
};
