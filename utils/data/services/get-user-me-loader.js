import { getAuthToken } from "./get-token";

export async function getUserMeLoader() {
  const authToken = await getAuthToken();

  try {
    const res = await fetch('http://localhost:1337/api/users/me?populate=*', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (res.ok) {
      const data = await res.json();

      return { ok: true, data, error: null };
    } else {
      const errorData = await res.json();
      return { ok: false, data: null, error: errorData.error };
    }
  } catch (error) {
    return { ok: false, data: null, error: "An error occurred while fetching user data" };
  }
};
