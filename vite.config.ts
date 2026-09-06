/**
 * Vite Bundler & Development Server Configuration.
 * What: Configures Vite build toolchain, Svelte 5 compiler plugin, and local development server settings.
 * When: Invoked during `pnpm dev`, `pnpm build`, and `pnpm preview` CLI tasks.
 * Why: Provides fast Hot Module Replacement (HMR), TypeScript transpilation, and static asset bundling.
 */

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  // Configure Svelte 5 compilation plugin
  plugins: [svelte()],

  // Local development server preferences
  server: {
    port: 5173,
    open: false,
  },
});
