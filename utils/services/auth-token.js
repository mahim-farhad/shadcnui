import { cookies } from "next/headers";

async function getAuthToken() {
  const authToken =
    cookies().get("jwt")?.value;

  return authToken;
}

export default getAuthToken;
