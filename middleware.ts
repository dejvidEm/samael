import { type NextRequest, NextResponse } from "next/server"
import { i18n } from "@/types"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If it's missing a locale and not the root path, redirect to the default locale
  if (pathnameIsMissingLocale && pathname !== "/") {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
