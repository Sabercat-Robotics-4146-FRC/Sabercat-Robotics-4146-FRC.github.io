import { NextResponse } from 'next/server'
 
export function middleware(Request) {
  if (Request.nextUrl.pathname.startsWith("/blog/")) {
    const NextHeaders = Request.headers;
    NextHeaders.append("X-Blog-Path", Request.nextUrl.pathname.replace("/blog/", ""));
    return NextResponse.next({
      headers: Object.fromEntries(NextHeaders.entries()),
    });
  };
};
 
export const config = {
  matcher: "/blog/:path*",
};