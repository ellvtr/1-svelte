/**
 * Root Universal Layout Configuration.
 * What: Configures SSR (Server-Side Rendering) and prerendering defaults for all routes.
 * When: Executed on both server and client during routing lifecycle.
 * Why: Proves full SSR compliance and hydration readiness across the application.
 */

export const ssr = true;
export const prerender = false;
