<script lang="ts">
  /**
   * SvelteKit SSR and Routing Patterns Architecture Component.
   * What: Visual interactive architecture explorer demonstrating SvelteKit 2+ server/universal loaders and streaming with Svelte 5.
   * When: Displayed in the SvelteKit Architecture tab for senior frontend review and interview preparation.
   * Why: Proves deep knowledge of SvelteKit SSR lifecycles, server-side OGC token security, and Svelte 5 PageData consumption.
   */

  import type { SvelteKitPatternInfo } from "../types/spatial";
  import Prism from "prismjs";
  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-jsx";
  import "prismjs/components/prism-tsx";

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
` +
        `import type { PageServerLoad } from './$types';
` +
        `import { env } from '$` +
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
` +
        `import type { PageLoad } from './$types';

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

    // Pattern 3: Server Action (+page.server.ts) for progressive enhancement form handling
    {
      id: "page-server-action",
      name: "Server Action (+page.server.ts)",
      filename: "src/routes/spatial-portal/+page.server.ts",
      scope: "Server",
      description:
        "Handles form submissions, spatial polygon queries, and mutation requests with progressive enhancement (runs even without client JavaScript).",
      exampleSnippet:
        `// Form mutation server action (+page.server.ts)
` +
        `import type { Actions } from './$types';
` +
        `import { fail } from '@` +
        `sveltejs/kit';

export const actions: Actions = {
  savePolygon: async ({ request, locals }) => {
    const formData = await request.formData();
    const geojson = formData.get('geojson');
    
    // Validate polygon payload
    if (!geojson) {
      return fail(400, { missing: true });
    }
    
    // Store polygon in PostgreSQL / PostGIS
    return { success: true, timestamp: Date.now() };
  }
};`,
    },

    // Pattern 4: Svelte 5 Page Component (+page.svelte) consuming PageData via $props()
    {
      id: "page-svelte-component",
      name: "Svelte 5 Page Component (+page.svelte)",
      filename: "src/routes/spatial-portal/+page.svelte",
      scope: "Client",
      description:
        "Svelte 5 consumes typed PageData using the $props() rune. Supports fine-grained streaming with {#await} blocks.",
      exampleSnippet:
        `<` +
        `script lang="ts">
  ` +
        `import type { PageData, ActionData } from './$types';

  // Svelte 5 Rune for page properties:
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
<div class="architecture-layout">
  <!-- Left Column: Navigation list of SvelteKit pattern tabs -->
  <div class="pattern-nav">
    {#each patterns as pattern (pattern.id)}
      <button
        class="pattern-tab"
        class:selected={activePattern.id === pattern.id}
        onclick={() => (selectedPatternId = pattern.id)}
      >
        <!-- Header badge with execution scope and pattern name -->
        <div class="tab-header">
          <span class="scope-tag {pattern.scope.toLowerCase()}">{pattern.scope}</span>
          <span class="pattern-name">{pattern.name}</span>
        </div>
        <!-- Target filesystem path in SvelteKit routing tree -->
        <span class="file-path">{pattern.filename}</span>
      </button>
    {/each}
  </div>

  <!-- Right Column: Detail preview with description and syntax-highlighted code container -->
  <div class="pattern-detail">
    <!-- Header with pattern name, path badge, and architectural summary -->
    <div class="detail-header">
      <div class="detail-title-group">
        <h3>{activePattern.name}</h3>
        <span class="file-badge"><code>{activePattern.filename}</code></span>
      </div>
      <p class="detail-description">{activePattern.description}</p>
    </div>

    <!-- Code viewer container displaying the exact SvelteKit file structure -->
    <div class="code-container">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      <pre><code class="language-tsx">{@html highlightedSnippet}</code></pre>
    </div>
  </div>
</div>

<style>
  /* Main two-column grid container */
  .architecture-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.25rem;
    margin-top: 1rem;
  }

  /* Responsive single-column fallback for mobile/tablet screens */
  @media (max-width: 768px) {
    .architecture-layout {
      grid-template-columns: 1fr;
    }
  }

  /* Vertical navigation button stack */
  .pattern-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Individual pattern selector card button */
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

  /* Hover state for non-selected tabs */
  .pattern-tab:hover {
    border-color: #475569;
    background: #1e293b;
  }

  /* Active/selected pattern tab styling */
  .pattern-tab.selected {
    border-color: #3b82f6;
    background: #1e293b;
    box-shadow: 0 0 0 1px #3b82f6;
  }

  /* Header grouping scope tag and pattern title */
  .tab-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Pattern title text */
  .pattern-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #f1f5f9;
  }

  /* Filesystem path monospace label */
  .file-path {
    font-family: monospace;
    font-size: 0.75rem;
    color: #64748b;
  }

  /* Execution scope tag base styling (Server, Universal, Client) */
  .scope-tag {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
    text-transform: uppercase;
  }

  /* Server-only runtime badge (Node.js/Edge) */
  .scope-tag.server {
    background: #7c3aed;
    color: #ede9fe;
  }

  /* Universal runtime badge (Server SSR + Client SPA) */
  .scope-tag.universal {
    background: #0284c7;
    color: #e0f2fe;
  }

  /* Client-only runtime badge (Browser DOM) */
  .scope-tag.client {
    background: #059669;
    color: #d1fae5;
  }

  /* Right-side detail card container */
  .pattern-detail {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Header area inside detail panel */
  .detail-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Horizontal title bar inside detail panel */
  .detail-title-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Detail title heading */
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #f8fafc;
  }

  /* Inline file path badge */
  .file-badge code {
    background: #1e293b;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #38bdf8;
    border: 1px solid #334155;
  }

  /* Architectural rationale description text */
  .detail-description {
    font-size: 0.85rem;
    color: #94a3b8;
    margin: 0;
    line-height: 1.4;
  }

  /* Code block scrollable container */
  .code-container {
    background: #020617;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
  }

  /* Preformatted code block styling */
  pre {
    margin: 0;
    font-family: monospace;
    font-size: 0.8rem;
    color: #cbd5e1;
    line-height: 1.5;
  }
</style>

