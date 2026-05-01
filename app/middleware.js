import { NextResponse } from "next/server";

const privateRoutes = ["/animals/", "/my-profile"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPrivate) {
    const cookie = request.cookies.get("better-auth.session_token");
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export  const config = {
  matcher: ["/animals/:path*", "/my-profile/:path*"],
};