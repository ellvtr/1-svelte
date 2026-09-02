<script lang="ts">
  /**
   * SvelteKit SSR and Routing Patterns Architecture Component.
   * What: Visual interactive architecture explorer demonstrating SvelteKit 2+ server/universal loaders and streaming with Svelte 5.
   * When: Displayed in the SvelteKit Architecture tab for senior frontend review and interview preparation.
   * Why: Proves deep knowledge of SvelteKit SSR lifecycles, server-side OGC token security, and Svelte 5 PageData consumption.
   */

  import type { SvelteKitPatternInfo } from "../types/spatial";

  // Svelte 5 state for active pattern selection
  let selectedPatternId = $state<string>("page-server");

  // Pattern catalogue data
  const patterns: SvelteKitPatternInfo[] = [
    {
      name: "Server-Only Loader (+page.server.ts)",
      filename: "src/routes/spatial-portal/+page.server.ts",
      scope: "Server",
      description:
        "Executes strictly in Node.js/Edge runtime on the server. Safely injects private Datafordeler tokens, queries spatial databases (PostGIS/Supabase), and streams GeoJSON to the client.",
      exampleSnippet: `import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ fetch, depends }) => {
  depends('spatial:layers');
  
  // Server-side fetch with secure private API key
  const res = await fetch('https://services.datafordeler.dk/DHMSkyggekort/WMS?token=' + env.DATAFORDELER_KEY);
  const metadata = await res.json();

  return {
    portalConfig: { region: 'Danmark', crs: 'EPSG:25832' },
    // Stream large dataset promise directly to Svelte 5 client:
    streamedGeoJson: fetch('/api/v1/cadastral-parcels').then(r => r.json())
  };
};`,
    },
    {
      name: "Universal Loader (+page.ts)",
      filename: "src/routes/spatial-portal/+page.ts",
      scope: "Universal",
      description:
        "Runs on server during SSR initial page render, then runs strictly on client during subsequent client-side SPA navigations. Ideal for public OGC capability caching.",
      exampleSnippet: `import type { PageLoad } from './$types';

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
    {
      name: "Server Action (+page.server.ts)",
      filename: "src/routes/spatial-portal/+page.server.ts",
      scope: "Server",
      description:
        "Handles form submissions, spatial polygon queries, and mutation requests with progressive enhancement (runs even without client JavaScript).",
      exampleSnippet: `import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  savePolygon: async ({ request, locals }) => {
    const formData = await request.formData();
    const geojson = formData.get('geojson');
    
    if (!geojson) {
      return fail(400, { missing: true });
    }
    
    // Store polygon in PostgreSQL / PostGIS
    return { success: true, timestamp: Date.now() };
  }
};`,
    },
    {
      name: "Svelte 5 Page Component (+page.svelte)",
      filename: "src/routes/spatial-portal/+page.svelte",
      scope: "Client",
      description:
        "Svelte 5 consumes typed PageData using the $props() rune. Supports fine-grained streaming with {#await} blocks.",
      exampleSnippet: `<` + `script lang="ts">
  import type { PageData, ActionData } from './$types';

  // Svelte 5 Rune for page properties:
  let { data, form }: { data: PageData; form: ActionData } = $props();
<` + `/script>

<h1>Spatial Portal: {data.portalConfig.region}</h1>

{#await data.streamedGeoJson}
  <p>Streaming Cadastral Parcels (EPSG:25832)...</p>
{:then parcels}
  <SpatialMap parcels={parcels} />
{:catch error}
  <p class="error">Failed to stream spatial data: {error.message}</p>
{/await}`,
    },
  ];

  // Derived selected pattern
  const activePattern = $derived(
    patterns.find((p) => p.filename.includes(selectedPatternId)) ?? patterns[0]
  );
</script>

<div class="architecture-layout">
  <div class="pattern-nav">
    {#each patterns as pattern}
      <button
        class="pattern-tab"
        class:selected={activePattern.filename === pattern.filename}
        onclick={() => (selectedPatternId = pattern.filename.split("/").pop() ?? "page-server")}
      >
        <div class="tab-header">
          <span class="scope-tag {pattern.scope.toLowerCase()}">{pattern.scope}</span>
          <span class="pattern-name">{pattern.name}</span>
        </div>
        <span class="file-path">{pattern.filename}</span>
      </button>
    {/each}
  </div>

  <div class="pattern-detail">
    <div class="detail-header">
      <div class="detail-title-group">
        <h3>{activePattern.name}</h3>
        <span class="file-badge"><code>{activePattern.filename}</code></span>
      </div>
      <p class="detail-description">{activePattern.description}</p>
    </div>

    <div class="code-container">
      <pre><code>{activePattern.exampleSnippet}</code></pre>
    </div>
  </div>
</div>

<style>
  .architecture-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .architecture-layout {
      grid-template-columns: 1fr;
    }
  }

  .pattern-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .pattern-tab {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 0.85rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .pattern-tab:hover {
    border-color: #475569;
    background: #1e293b;
  }

  .pattern-tab.selected {
    border-color: #3b82f6;
    background: #1e293b;
    box-shadow: 0 0 0 1px #3b82f6;
  }

  .tab-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .pattern-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #f1f5f9;
  }

  .file-path {
    font-family: monospace;
    font-size: 0.75rem;
    color: #64748b;
  }

  .scope-tag {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
    text-transform: uppercase;
  }

  .scope-tag.server {
    background: #7c3aed;
    color: #ede9fe;
  }

  .scope-tag.universal {
    background: #0284c7;
    color: #e0f2fe;
  }

  .scope-tag.client {
    background: #059669;
    color: #d1fae5;
  }

  .pattern-detail {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .detail-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .detail-title-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #f8fafc;
  }

  .file-badge code {
    background: #1e293b;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #38bdf8;
    border: 1px solid #334155;
  }

  .detail-description {
    font-size: 0.85rem;
    color: #94a3b8;
    margin: 0;
    line-height: 1.4;
  }

  .code-container {
    background: #020617;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
  }

  pre {
    margin: 0;
    font-family: monospace;
    font-size: 0.8rem;
    color: #cbd5e1;
    line-height: 1.5;
  }
</style>
