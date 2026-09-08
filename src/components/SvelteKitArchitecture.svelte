<script lang="ts">
  /**
   * SvelteKit SSR and Routing Patterns Architecture Component (shadcn-svelte & Tailwind).
   * What: Visual interactive architecture explorer demonstrating SvelteKit 2+ server/universal loaders and streaming with Svelte 5.
   * When: Displayed in the SvelteKit Architecture tab for senior frontend review and interview preparation.
   * Why: Proves deep knowledge of SvelteKit SSR lifecycles, server-side OGC token security, and Svelte 5 PageData consumption.
   */

  import type { SvelteKitPatternInfo } from "../types/spatial";
  import Prism from "prismjs";
  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-jsx";
  import "prismjs/components/prism-tsx";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Server, Globe, Cpu } from "lucide-svelte";

  // Reactive selection state: Stores the ID of the currently focused SvelteKit architecture pattern
  let selectedPatternId = $state<string>("page-server-loader");

  // Comprehensive catalogue of core SvelteKit architectural concepts and execution scopes
  const patterns: SvelteKitPatternInfo[] = [
    // Pattern 1: Server-only loader (+page.server.ts) for secure API keys and backend queries
    {
      id: "page-server-loader",
      name: "Server-Only Loader (+page.server.ts)",
      filename: "src/routes/spatial-portal/+page.server.ts",
      scope: "Server",
      description:
        "Executes strictly in Node.js/Edge runtime on the server. Safely injects private Datafordeler tokens, queries spatial databases (PostGIS/Supabase), and streams GeoJSON to the client.",
      exampleSnippet:
        `// Server-only data loader (+page.server.ts)
import type { PageServerLoad } from './$types';
import { env } from '$` +
        `env/dynamic/private';

export const load: PageServerLoad = async ({ fetch, depends }) => {
  // Invalidate cache when 'spatial:layers' key is touched
  depends('spatial:layers');
  
  // Server-side fetch with secure private API key (never leaked to browser bundle)
  const res = await fetch('https://services.datafordeler.dk/DHMSkyggekort/WMS?token=' + env.DATAFORDELER_KEY);
  const metadata = await res.json();

  return {
    portalConfig: { region: 'Danmark', crs: 'EPSG:25832' },
    // Stream large dataset promise directly to Svelte 5 client:
    streamedGeoJson: fetch('/api/v1/cadastral-parcels').then(r => r.json())
  };
};`,
    },

    // Pattern 2: Universal loader (+page.ts) running on SSR and client SPA navigation
    {
      id: "page-universal-loader",
      name: "Universal Loader (+page.ts)",
      filename: "src/routes/spatial-portal/+page.ts",
      scope: "Universal",
      description:
        "Runs on server during SSR initial page render, then runs strictly on client during subsequent client-side SPA navigations. Ideal for public OGC capability caching.",
      exampleSnippet:
        `// Universal data loader (+page.ts)
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, data }) => {
  // data contains output from +page.server.ts if present
  const wmsCapabilities = await fetch('https://services.datafordeler.dk/GeoDanmark/WMS?request=GetCapabilities')
    .then(r => r.text());

  return {
    ...data,
    wmsCapabilities
  };
};`,
    },

    // Pattern 3: Server actions (+page.server.ts actions) for secure form submissions and mutations
    {
      id: "server-actions",
      name: "Form Actions (+page.server.ts)",
      filename: "src/routes/spatial-portal/+page.server.ts",
      scope: "Server",
      description:
        "Standard POST handlers for updating spatial layers, user coordinate bookmarks, and GIS feature geometry mutations with automatic progressive enhancement.",
      exampleSnippet:
        `// Server Actions (+page.server.ts)
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  saveBookmark: async ({ request, locals }) => {
    const data = await request.formData();
    const title = data.get('title');
    const lon = parseFloat(data.get('lon') as string);
    const lat = parseFloat(data.get('lat') as string);

    if (!title) return fail(400, { missing: true, message: 'Bookmark title required' });

    // Insert into database with user session credentials
    await db.bookmarks.insert({ userId: locals.user.id, title, coordinates: [lon, lat] });
    return { success: true };
  }
};`,
    },

    // Pattern 4: Svelte 5 Component Page Hydration (+page.svelte with runes and PageData)
    {
      id: "page-svelte-runes",
      name: "Svelte 5 Page (+page.svelte)",
      filename: "src/routes/spatial-portal/+page.svelte",
      scope: "Client",
      description:
        "Type-safe client component receiving server PageData via let { data } = $props(), rendering interactive OpenLayers map and streaming GeoJSON via {#await}.",
      exampleSnippet:
        `<` +
        `script lang="ts">
  import type { PageData, ActionData } from './$types';
  import SpatialMap from '$lib/components/SpatialMap.svelte';

  // Receives strongly-typed server loader data via $props() rune
  let { data, form }: { data: PageData; form: ActionData } = $props();
<` +
        `/script>

<h1>Spatial Portal: {data.portalConfig.region}</h1>

<!-- Fine-grained streaming with {#await} block directly on server promise -->
{#await data.streamedGeoJson}
  <p>Streaming Cadastral Parcels (EPSG:25832)...</p>
{:then parcels}
  <SpatialMap parcels={parcels} />
{:catch error}
  <p class="error">Failed to stream spatial data: {error.message}</p>
{/await}`,
    },
  ];

  // Derived state: Automatically resolves the full pattern metadata for the active tab
  const activePattern = $derived(
    patterns.find((p) => p.id === selectedPatternId) ?? patterns[0],
  );

  // Derived state: Pre-computed syntax-highlighted HTML snippet using Prism
  const highlightedSnippet = $derived(
    Prism.highlight(
      activePattern.exampleSnippet,
      Prism.languages.tsx || Prism.languages.typescript,
      "tsx"
    )
  );
</script>

<!-- Two-column responsive layout for architectural explorer -->
<div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 mt-3">
  <!-- Left Column: Navigation list of SvelteKit pattern tabs -->
  <div class="flex flex-col gap-2">
    {#each patterns as pattern (pattern.id)}
      <button
        type="button"
        class="flex flex-col items-start gap-1 p-3 rounded-lg border text-left transition-all cursor-pointer {activePattern.id === pattern.id ? 'border-blue-500 bg-blue-950/40 shadow-sm' : 'border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700'}"
        onclick={() => (selectedPatternId = pattern.id)}
      >
        <!-- Header badge with execution scope and pattern name -->
        <div class="flex items-center gap-2 w-full justify-between">
          <span class="text-xs font-semibold text-slate-100">{pattern.name}</span>
          <Badge
            variant={pattern.scope === "Server" ? "emerald" : pattern.scope === "Universal" ? "sky" : "orange"}
            class="text-[10px] px-1.5 py-0 uppercase tracking-wider font-bold"
          >
            {pattern.scope}
          </Badge>
        </div>
        <!-- Target filesystem path in SvelteKit routing tree -->
        <span class="text-[11px] font-mono text-slate-400">{pattern.filename}</span>
      </button>
    {/each}
  </div>

  <!-- Right Column: Detail preview with description and syntax-highlighted code container -->
  <Card class="border-slate-800 bg-slate-900/90 shadow-xl flex flex-col">
    <CardHeader class="p-4 pb-3 border-b border-slate-800/80">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          {#if activePattern.scope === "Server"}
            <Server class="h-4 w-4 text-emerald-400" />
          {:else if activePattern.scope === "Universal"}
            <Globe class="h-4 w-4 text-sky-400" />
          {:else}
            <Cpu class="h-4 w-4 text-orange-400" />
          {/if}
          <CardTitle class="text-base">{activePattern.name}</CardTitle>
        </div>
        <Badge variant="outline" class="font-mono text-xs text-slate-300 border-slate-700 w-fit">
          {activePattern.filename}
        </Badge>
      </div>
      <CardDescription class="mt-1 text-xs leading-relaxed text-slate-400">
        {activePattern.description}
      </CardDescription>
    </CardHeader>

    <CardContent class="p-4 flex-1">
      <div class="rounded-lg border border-slate-800 bg-slate-950 p-3.5 overflow-x-auto">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">{@html highlightedSnippet}</code></pre>
      </div>
    </CardContent>
  </Card>
</div>
