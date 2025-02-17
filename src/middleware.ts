import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect routes that require authentication
  if (!session && req.nextUrl.pathname.startsWith('/feed')) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  // Redirect authenticated users away from auth pages
  if (session && (req.nextUrl.pathname.startsWith('/auth'))) {
    return NextResponse.redirect(new URL('/feed', req.url))
  }

  return res
}

export const config = {
  matcher: ['/feed/:path*', '/auth/:path*'],
}
