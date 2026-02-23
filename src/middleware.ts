import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(",")[0].trim();

  return "unknown";
}

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;
  const referer = headers.get("referer");
  const userAgent = headers.get("user-agent") || "";
  const clientIP = getClientIP(request);
  const host = headers.get("host") || "";

  // 1. ALLOWLIST WAJIB (HARUS DIDAHULUKAN)
  const allowedUserAgents = [
    "googlebot",
    "adsbot-google",
    "google-adwords",
    "mediapartners-google",
    "bingbot",
    "yandex",
    "duckduckbot",
    "vercel",
    "curl",
    "axios",
    "node-fetch",
  ];

  const isAllowedUA = allowedUserAgents.some((ua) =>
    userAgent.toLowerCase().includes(ua.toLowerCase())
  );

  // Jika User-Agent mengandung salah satu ini, ALLOW TANPA SYARAT
  if (isAllowedUA) {
    return NextResponse.next();
  }

  // 2. BYPASS UNTUK STATIC FILE (WAJIB)
  const pathname = nextUrl.pathname;
  const staticPaths = [
    "/favicon.ico",
    "/logo",
    "/images",
    "/static",
    "/public",
    "/fonts",
    "/_next",
  ];

  const staticExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".svg",
    ".css",
    ".js",
    ".woff",
    ".woff2",
  ];

  const isStaticFile =
    staticPaths.some((path) => pathname.includes(path)) ||
    staticExtensions.some((ext) => pathname.endsWith(ext));

  if (isStaticFile) {
    return NextResponse.next();
  }

  // 3. BYPASS UNTUK DEV / LOCALHOST
  const isLocalhost =
    clientIP === "127.0.0.1" ||
    clientIP === "::1" ||
    host.toLowerCase().includes("localhost");

  if (isLocalhost) {
    return NextResponse.next();
  }

  // 4. ALLOW REQUEST TANPA REFERRER
  // Tidak ada blocking untuk request tanpa referrer

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
