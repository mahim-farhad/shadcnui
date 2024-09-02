import axiosInstance from "@libs/axiosInstance";

export const revalidatePage = async (path) => {
  try {
    const res =
      await axiosInstance.post("/revalidate", {
        path
      });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const revalidatePages = async (paths) => {
  try {
    const promises =
      paths.map((path) => revalidatePage(path));

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    throw error;
  }
};
