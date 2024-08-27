import "server-only";

import { cookies } from "next/headers";

export async function createSession(jwt) {
  const expiresAt =
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const config = {
    expires: expiresAt,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    domain: process.env.HOST ?? "localhost",
    sameSite: "lax",
    path: "/",
  };

  cookies().set("jwt", jwt, config);
}
