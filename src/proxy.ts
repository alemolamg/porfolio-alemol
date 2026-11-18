import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const locale = request.nextUrl.pathname.split("/")[1];
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/es", "/en"],
};
