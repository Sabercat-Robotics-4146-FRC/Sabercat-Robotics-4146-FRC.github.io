import createIntlMiddleware from "next-intl/middleware";
import Locales from "./locales";

export default function Middleware(Request) {
  const Response = createIntlMiddleware({
    locales: Locales,
    defaultLocale: "en",
    localeDetection: true,
    localePrefix: "as-needed",
  })(Request);

  // Blog path logic
  const NonLocalePath = Request.nextUrl.pathname.replace(Request.nextUrl.locale, "");
  if (NonLocalePath.startsWith("/blog/")) {
    Response.headers.append("X-Blog-Path", NonLocalePath.replace("/blog/", ""));
  };

  return Response;
};

export const config = {
  // Matches every path except for those starting with assets, api, _next/static, and _next/image
  matcher: [
    "\/((?!assets|api|_next\/static|_next\/image).*)",
    "/",
  ],
};