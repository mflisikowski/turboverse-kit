import createMiddleware from 'next-intl/middleware';

import { routing } from '@repo/i18n/web/routing';

export const config = {
  matcher: [
    /**
     * Match all paths under /
     */
    '/',

    /**
     * Match all paths under /(en|pl)
     */
    '/(en|pl)/:path*',

    /**
     * Match all paths except:
     * - api
     * - _next
     * - _vercel
     * - admin
     * - static files
     * - any path with a dot (e.g. favicon.ico)
     */
    '/((?!api|_next|_vercel|admin|.*\\..*).*)',
  ],
};

export default createMiddleware(routing);
