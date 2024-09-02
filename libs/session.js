import "server-only";

import { cookies } from "next/headers";

export async function createSession(jwt) {
  const expiresAt =
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  console.log(process.env.NEXT_PUBLIC_DOMAIN_URL)

  const config = {
    expires: expiresAt,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    domain: process.env.NEXT_PUBLIC_DOMAIN_URL,
    sameSite: "lax",
    path: "/",
  };

  cookies().set("jwt", jwt, config);
}
