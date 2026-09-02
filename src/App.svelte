<script lang="ts">
  // What: Svelte 5 Root Demo Component with Runes ($state, $derived, $effect).
  // When: Renders the interactive sandbox UI demonstrating geospatial state management for spatial data portals.
  // Why: Proves hands-on mastery of Svelte 5's reactivity model, compile-time reactivity, and TypeScript typing.

  interface SpatialLayer {
    id: string;
    name: string;
    type: "WMS" | "WFS" | "VectorTiles";
    endpoint: string;
    visible: boolean;
  }

  // Svelte 5 Rune: $state for reactive variables
  let zoom = $state<number>(12);
  let activeTab = $state<"layers" | "stats" | "architecture">("layers");
  let searchQuery = $state<string>("");

  let layers = $state<SpatialLayer[]>([
    {
      id: "ortho-2025",
      name: "National Orthophoto (Spring 2025)",
      type: "WMS",
      endpoint: "https://services.datafordeler.dk/GeoDanmark/WMS",
      visible: true,
    },
    {
      id: "dhm-terrain",
      name: "Digital Elevation Model (DTM Terrain)",
      type: "WMS",
      endpoint: "https://services.datafordeler.dk/DHM/WMS",
      visible: false,
    },
    {
      id: "cadastral-matrikel",
      name: "Cadastral Map (Parcels & Boundaries)",
      type: "VectorTiles",
      endpoint: "https://services.datafordeler.dk/Matrikel/VectorTiles",
      visible: true,
    },
    {
      id: "climate-flood-100yr",
      name: "Climate Adaptation 100-Year Event",
      type: "WFS",
      endpoint: "https://klimadatastyrelsen.dk/api/v1/flood",
      visible: false,
    },
  ]);

  // Svelte 5 Rune: $derived for computed values
  let visibleLayerCount = $derived(layers.filter((l) => l.visible).length);

  let filteredLayers = $derived(
    layers.filter((l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  let estimatedTileCount = $derived(Math.pow(2, zoom) * Math.max(1, visibleLayerCount));

  // Svelte 5 Rune: $effect for side effects
  $effect(() => {
    console.log(`[Svelte 5 State Sync] Active zoom: ${zoom} | Visible layers: ${visibleLayerCount}`);
  });

  const toggleLayer = (id: string) => {
    const layer = layers.find((l) => l.id === id);
    if (layer) {
      layer.visible = !layer.visible;
    }
  };

  const setZoom = (delta: number) => {
    zoom = Math.min(20, Math.max(1, zoom + delta));
  };
</script>

<main class="container">
  <header class="header">
    <div class="logo-group">
      <span class="badge">Svelte 5 + TS</span>
      <h1>Spatial Data Architecture Sandbox</h1>
    </div>
    <p class="subtitle">
      Modern spatial frontend architecture pilot using Svelte 5 Runes, TypeScript, and Vite.
    </p>
  </header>

  <section class="tab-bar">
    <button
      class="tab-btn"
      class:active={activeTab === "layers"}
      onclick={() => (activeTab = "layers")}
    >
      Spatial Layers ({visibleLayerCount} active)
    </button>
    <button
      class="tab-btn"
      class:active={activeTab === "stats"}
      onclick={() => (activeTab = "stats")}
    >
      Reactive Telemetry
    </button>
    <button
      class="tab-btn"
      class:active={activeTab === "architecture"}
      onclick={() => (activeTab = "architecture")}
    >
      Svelte 5 Runes Reference
    </button>
  </section>

  {#if activeTab === "layers"}
    <section class="card">
      <div class="card-header">
        <h2>Spatial Data Services (OGC & Vector Tiles)</h2>
        <input
          type="search"
          placeholder="Filter by layer name or protocol..."
          class="search-input"
          bind:value={searchQuery}
        />
      </div>

      <div class="layer-list">
        {#each filteredLayers as layer (layer.id)}
          <div class="layer-item" class:selected={layer.visible}>
            <div class="layer-info">
              <span class="layer-name">{layer.name}</span>
              <span class="layer-meta">
                <span class="chip {layer.type.toLowerCase()}">{layer.type}</span>
                <code>{layer.endpoint}</code>
              </span>
            </div>
            <button
              class="toggle-btn"
              class:on={layer.visible}
              onclick={() => toggleLayer(layer.id)}
            >
              {layer.visible ? "Active" : "Disabled"}
            </button>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  {#if activeTab === "stats"}
    <section class="card">
      <h2>Reactive Zoom & Tile Computation ($derived)</h2>
      <div class="zoom-controls">
        <button class="action-btn" onclick={() => setZoom(-1)}>-</button>
        <span class="zoom-display">Zoom Level: <strong>{zoom}</strong></span>
        <button class="action-btn" onclick={() => setZoom(1)}>+</button>
      </div>

      <div class="grid-metrics">
        <div class="metric-card">
          <span class="metric-label">Active Layers</span>
          <span class="metric-value">{visibleLayerCount} / {layers.length}</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Estimated Tile Load</span>
          <span class="metric-value">{estimatedTileCount.toLocaleString()} tiles</span>
        </div>
        <div class="metric-card">
          <span class="metric-label">Reactivity Model</span>
          <span class="metric-value code-text">Fine-grained Proxy ($state)</span>
        </div>
      </div>
    </section>
  {/if}

  {#if activeTab === "architecture"}
    <section class="card">
      <h2>Svelte 5 vs. Svelte 4 / React Matrix</h2>
      <div class="table-wrapper">
        <table class="matrix-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Svelte 4 (Legacy)</th>
              <th>Svelte 5 (Runes / Modern)</th>
              <th>React 19 Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Local State</strong></td>
              <td><code>let count = 0;</code></td>
              <td><code>let count = $state(0);</code></td>
              <td><code>useState(0)</code></td>
            </tr>
            <tr>
              <td><strong>Computed State</strong></td>
              <td><code>$: doubled = count * 2;</code></td>
              <td><code>let doubled = $derived(count * 2);</code></td>
              <td><code>useMemo(...)</code></td>
            </tr>
            <tr>
              <td><strong>Props</strong></td>
              <td><code>export let name = 'default';</code></td>
              <td><code>let &#123; name = 'default' &#125; = $props();</code></td>
              <td><code>props.name</code></td>
            </tr>
            <tr>
              <td><strong>Side Effects</strong></td>
              <td><code>$: console.log(count);</code></td>
              <td><code>$effect(() =&gt; console.log(count));</code></td>
              <td><code>useEffect(...)</code></td>
            </tr>
            <tr>
              <td><strong>DOM Events</strong></td>
              <td><code>on:click=&#123;...&#125;</code></td>
              <td><code>onclick=&#123;...&#125;</code></td>
              <td><code>onClick=&#123;...&#125;</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #0f172a;
    color: #f8fafc;
    min-height: 100vh;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  .logo-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .badge {
    background: #f97316;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }

  h1 {
    font-size: 1.75rem;
    margin: 0;
    font-weight: 700;
    color: #f1f5f9;
  }

  .subtitle {
    color: #94a3b8;
    margin-top: 0.5rem;
    font-size: 0.95rem;
  }

  .tab-bar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #334155;
    padding-bottom: 0.5rem;
  }

  .tab-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 0.6rem 1.1rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .tab-btn:hover {
    color: #f1f5f9;
    background: #1e293b;
  }

  .tab-btn.active {
    background: #2563eb;
    color: #ffffff;
  }

  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0;
    color: #e2e8f0;
  }

  .search-input {
    background: #0f172a;
    border: 1px solid #475569;
    color: #f8fafc;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    font-size: 0.85rem;
    min-width: 250px;
  }

  .layer-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .layer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    transition: border-color 0.2s;
  }

  .layer-item.selected {
    border-color: #3b82f6;
  }

  .layer-info {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .layer-name {
    font-weight: 600;
    font-size: 0.95rem;
  }

  .layer-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .chip {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.15rem 0.4rem;
    border-radius: 3px;
    text-transform: uppercase;
  }

  .chip.wms { background: #0369a1; color: #e0f2fe; }
  .chip.wfs { background: #b45309; color: #fef3c7; }
  .chip.vectortiles { background: #4d7c0f; color: #ecfccb; }

  code {
    font-size: 0.75rem;
    color: #64748b;
    font-family: monospace;
  }

  .toggle-btn {
    padding: 0.4rem 0.9rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #475569;
    background: #334155;
    color: #cbd5e1;
    transition: all 0.2s ease;
  }

  .toggle-btn.on {
    background: #16a34a;
    border-color: #22c55e;
    color: #ffffff;
  }

  .zoom-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .action-btn {
    background: #2563eb;
    color: #ffffff;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
  }

  .zoom-display {
    font-size: 1.1rem;
    color: #cbd5e1;
  }

  .grid-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .metric-card {
    background: #0f172a;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #334155;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .metric-label {
    font-size: 0.8rem;
    color: #94a3b8;
  }

  .metric-value {
    font-size: 1.25rem;
    font-weight: 700;
    color: #f8fafc;
  }

  .code-text {
    font-family: monospace;
    font-size: 0.95rem;
    color: #38bdf8;
  }

  .matrix-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
    margin-top: 1rem;
  }

  .matrix-table th, .matrix-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #334155;
  }

  .matrix-table th {
    color: #94a3b8;
    font-weight: 600;
  }

  .matrix-table code {
    color: #f97316;
  }
</style>
