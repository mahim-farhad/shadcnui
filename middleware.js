import { NextResponse } from "next/server";

import { getUserMeLoader }
  from "@utils/data/services/get-user-me-loader";

export async function middleware(request) {
  const user = await getUserMeLoader();

  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith("/auth")) {
    if (user?.ok === true) {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  if (currentPath.startsWith("/dashboard")) {
    if (user?.ok === false) {
      return NextResponse.redirect(new URL("/not-found", request.url));
    } else if (user?.data?.role?.type !== "admin") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  if (currentPath.startsWith("/admin")) {
    if (user?.ok === false) {
      const loginUrl = new URL('/auth/login', request.url);

      loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname);

      return NextResponse.redirect(loginUrl);
    } else if (user?.data?.role?.type !== "admin") {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
