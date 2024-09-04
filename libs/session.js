import "server-only";

import { cookies } from "next/headers";

export async function createSession(jwt) {
  const expiresAt =
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

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

export async function deleteSession() {
  cookies().set("jwt", "", {
    maxAge: -1
  });
}

/**
 * For more details see
 * https://nextjs.org/docs/app/building-your-application/authentication
 */
