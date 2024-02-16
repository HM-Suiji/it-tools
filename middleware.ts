// import { NextRequest, NextResponse } from 'next/server'
// import { isAuthenticated } from './utils/auth'

export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard/:path*'],
}

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl
//   if (!isAuthenticated(req)) {
//     return NextResponse.redirect(new URL('/api/auth/signin/github', req.url))
//   }
//   if (pathname === '/dashboard') {
//     return NextResponse.redirect(new URL('/dashboard/home', req.url))
//   }
//   return NextResponse.next()
// }
