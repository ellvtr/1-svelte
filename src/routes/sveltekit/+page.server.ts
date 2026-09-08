import type { PageServerLoad } from "./$types";

/**
 * SvelteKit 2 Server Loader (+page.server.ts).
 * What: Executes strictly on the server (Node.js/Bun/Edge runtime).
 * When: Invoked during SSR and client navigation to /sveltekit.
 * Why: Proves server token isolation, backend spatial queries, and promise streaming to Svelte 5 client.
 */
export const load: PageServerLoad = async ({ depends }) => {
  // Register cache invalidation key for fine-grained revalidation
  depends("spatial:architecture-demo");

  // Simulated server-only secret token (never leaked to browser JS bundle)
  const simulatedDatafordelerToken = "kds_live_sec_" + Math.random().toString(36).substring(2, 10);

  // Return server-loaded data and a streamed promise to demonstrate {#await} streaming
  return {
    serverTimestamp: new Date().toISOString(),
    serverRuntime: "Node.js (Server-Only)",
    securePortalConfig: {
      region: "Danmark (Klimadatastyrelsen / Dataforsyningen.dk)",
      crs: "EPSG:25832 (UTM32N / ETRS89)",
      authenticated: true,
      tokenMasked: simulatedDatafordelerToken.substring(0, 12) + "...",
    },
    // Streamed Promise: Client renders immediately while server streams heavy dataset
    streamedCadastralSummary: new Promise<{ totalParcels: number; averageAreaM2: number; sourceAuthority: string }>((resolve) => {
      setTimeout(() => {
        resolve({
          totalParcels: 48520,
          averageAreaM2: 1240.5,
          sourceAuthority: "Geodatastyrelsen & Klimadatastyrelsen Matrikelkort",
        });
      }, 300);
    }),
  };
};
