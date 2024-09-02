import axiosInstance from "@libs/axios/axiosInstance";

export async function revalidatePage(path) {
  try {
    const res =
      await axiosInstance.post("/revalidate", {
        path
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

export async function revalidatePages(paths) {
  try {
    const promises =
      paths.map((path) => revalidatePage(path));

    const results = await Promise.all(promises);

    return results;
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
