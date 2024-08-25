import { NextResponse } from 'next/server';

import { jwtVerify } from 'jose';

export async function middleware(req) {
  const token = req.cookies.get('jwt');

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/protected/:path*'], // Specify protected routes
};
