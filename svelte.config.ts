/**
 * Svelte Compiler & Preprocessor Configuration.
 * What: Defines Svelte preprocessing pipelines for TypeScript and component compilation.
 * When: Invoked during Vite dev/build pipelines and svelte-check diagnostics.
 * Why: Enables TypeScript preprocessing inside Svelte components with strict type checking.
 */

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import type { Options } from "@sveltejs/vite-plugin-svelte";

const config: Options = {
  preprocess: vitePreprocess(),
};

export default config;
