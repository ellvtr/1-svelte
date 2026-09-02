import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/vite-plugin-svelte').Options} */
export default {
  // Consult https://svelte.dev/docs/svelte/typescript for more information about preprocessors
  preprocess: vitePreprocess(),
};
