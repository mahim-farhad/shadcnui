import { NextResponse } from "next/server";

import { getUserMeLoader }
  from "@utils/services/get-user-me-loader";

// const adminRoutes = ["/admin"];
// const authenticatedRoutes = ["/profile"];
// const publicRoutes = [
//   "/auth/register",
//   "/auth/login",
//   "/"
// ];

export default async function middleware(req) {
  const user = await getUserMeLoader();

  const userRole = user?.data?.role?.type;

  const currentPath = req.nextUrl.pathname;

  // const isAdminRoute =
  //   adminRoutes.includes(currentPath);

  // const isAuthenticatedRoute =
  //   authenticatedRoutes.includes(currentPath);

  // const isPublicRoute =
  //   publicRoutes.includes(currentPath);

  if (currentPath.startsWith("/auth")) {
    if (user?.ok === true) {
      return NextResponse.redirect(new URL(
        "/profile", req.nextUrl
      ));
    }
  }

  if (currentPath.startsWith("/admin")) {
    if (!user || userRole !== "admin") {
      return NextResponse.redirect(new URL(
        "/not-found", req.nextUrl
      ));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/auth/:path*',
    '/profile',
    '/((?!api|_next/static|_next/image|.*\\.png$).*)'
  ],
};
