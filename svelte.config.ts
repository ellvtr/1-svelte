import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import type { Config } from "@sveltejs/kit";

const config: Config = {
  // Consult https://svelte.dev/docs/kit/integrations#preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    adapter: adapter(),
  },
};

export default config;
