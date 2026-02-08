import { NextResponse } from "next/server";
import { auth } from "@/auth"; // your NextAuth/Supabase setup

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  // Allow public routes
  if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Check session using your Auth.js instance
  const session = await auth();

  if (!session) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply to all routes you want to protect
export const config = {
  matcher: ["/application/:path*"], // Protect /dashboard and subroutes
};
