<script lang="ts">
  /**
   * Spatial Layer Controls Component.
   * What: Interactive layer list with search filtering, visibility toggles, and opacity controls.
   * When: Displayed alongside the OpenLayers map view.
   * Why: Demonstrates two-way signal binding with Svelte 5 and granular layer state updates.
   */

  import { spatialStore } from "../services/spatialStore.svelte";
  import type { LayerConfig } from "../types/spatial";

  // Reactive state: Text filter query for live layer catalog search
  let searchQuery = $state<string>("");

  // Derived state: Automatically filtered layer collection based on name and protocol type
  const filteredLayers = $derived(
    spatialStore.layers.filter(
      (layer) =>
        layer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        layer.type.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );
</script>

<!-- Svelte 5 Snippet: Reusable layer row item template parameterized by LayerConfig -->
{#snippet layerRow(layer: LayerConfig)}
  <!-- Layer Card Row with conditional active border highlight -->
  <div class="layer-row" class:active={layer.visible}>
    <!-- Layer metadata: Type pill, descriptive title, and OGC data source attribution -->
    <div class="layer-main">
      <div class="layer-title-bar">
        <span class="type-pill {layer.type.toLowerCase()}">{layer.type}</span>
        <span class="name">{layer.name}</span>
      </div>
      <span class="attribution">{layer.attribution}</span>
    </div>

    <!-- Layer interactive actions: Slider for opacity adjustment and on/off visibility toggle -->
    <div class="layer-actions">
      {#if layer.visible}
        <div class="opacity-group">
          <label for="opacity-{layer.id}" class="opacity-label">
            {Math.round(layer.opacity * 100)}%
          </label>
          <input
            id="opacity-{layer.id}"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={layer.opacity}
            oninput={(e) =>
              spatialStore.setLayerOpacity(
                layer.id,
                parseFloat((e.target as HTMLInputElement).value),
              )}
            class="opacity-slider"
          />
        </div>
      {/if}

      <!-- Toggle visibility button dispatching mutation directly to spatialStore -->
      <button
        class="toggle-switch"
        class:enabled={layer.visible}
        onclick={() => spatialStore.toggleLayer(layer.id)}
      >
        {layer.visible ? "Visible" : "Hidden"}
      </button>
    </div>
  </div>
{/snippet}

<!-- Main Layer Panel Container -->
<div class="layer-panel">
  <!-- Header with search input filter -->
  <div class="panel-header">
    <h3>Spatial Layer Catalog</h3>
    <input
      type="search"
      placeholder="Filter layers or protocols..."
      class="search-box"
      bind:value={searchQuery}
    />
  </div>

  <!-- Render list of filtered layers using snippet -->
  <div class="layer-items">
    {#each filteredLayers as layer (layer.id)}
      {@render layerRow(layer)}
    {/each}
  </div>
</div>

<style>
  /* Outer card container for spatial layer controls */
  .layer-panel {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* Header row with catalog title and search bar */
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Catalog section heading */
  h3 {
    margin: 0;
    font-size: 1rem;
    color: #e2e8f0;
  }

  /* Search input filter field */
  .search-box {
    background: #020617;
    border: 1px solid #334155;
    color: #f8fafc;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8rem;
    min-width: 200px;
  }

  /* Vertical stack container for layer rows */
  .layer-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Individual layer card row */
  .layer-row {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    transition: border-color 0.2s;
  }

  /* Active/visible layer row border styling */
  .layer-row.active {
    border-color: #3b82f6;
  }

  /* Main textual column of a layer row */
  .layer-main {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* Horizontal title bar grouping protocol badge and layer name */
  .layer-title-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Protocol pill base styling (XYZ, WMS, Vector) */
  .type-pill {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
    text-transform: uppercase;
  }

  /* XYZ raster tile protocol badge color */
  .type-pill.xyz {
    background: #0d9488;
    color: #ccfbf1;
  }

  /* WMS OGC web map service badge color */
  .type-pill.wms {
    background: #0284c7;
    color: #e0f2fe;
  }

  /* Vector / GeoJSON data format badge color */
  .type-pill.vector {
    background: #16a34a;
    color: #dcfce7;
  }

  /* Layer display name */
  .name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #f1f5f9;
  }

  /* Attribution text indicating data provider */
  .attribution {
    font-size: 0.75rem;
    color: #64748b;
  }

  /* Interactive actions group containing opacity slider and toggle button */
  .layer-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* Opacity slider and percentage label container */
  .opacity-group {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  /* Formatted percentage label for current layer opacity */
  .opacity-label {
    font-size: 0.75rem;
    color: #94a3b8;
    font-family: monospace;
    width: 35px;
    text-align: right;
  }

  /* Range input slider for adjusting layer opacity */
  .opacity-slider {
    width: 70px;
    accent-color: #3b82f6;
    cursor: pointer;
  }

  /* Toggle button switch for turning layer visibility on/off */
  .toggle-switch {
    padding: 0.35rem 0.75rem;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #475569;
    background: #334155;
    color: #94a3b8;
    transition: all 0.15s ease;
  }

  /* Enabled/active state for visibility button */
  .toggle-switch.enabled {
    background: #2563eb;
    border-color: #3b82f6;
    color: #ffffff;
  }
</style>

