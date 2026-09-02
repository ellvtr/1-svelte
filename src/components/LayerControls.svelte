<script lang="ts">
  /**
   * Spatial Layer Controls Component.
   * What: Interactive layer list with search filtering, visibility toggles, and opacity controls.
   * When: Displayed alongside the OpenLayers map view.
   * Why: Demonstrates two-way signal binding with Svelte 5 and granular layer state updates.
   */

  import { spatialStore } from "../services/spatialStore.svelte";

  // Svelte 5 search query filter state
  let searchQuery = $state<string>("");

  // Derived filtered layers
  const filteredLayers = $derived(
    spatialStore.layers.filter(
      (layer) =>
        layer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        layer.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
</script>

<div class="layer-panel">
  <div class="panel-header">
    <h3>Spatial Layer Catalog</h3>
    <input
      type="search"
      placeholder="Filter layers or protocols..."
      class="search-box"
      bind:value={searchQuery}
    />
  </div>

  <div class="layer-items">
    {#each filteredLayers as layer (layer.id)}
      <div class="layer-row" class:active={layer.visible}>
        <div class="layer-main">
          <div class="layer-title-bar">
            <span class="type-pill {layer.type.toLowerCase()}">{layer.type}</span>
            <span class="name">{layer.name}</span>
          </div>
          <span class="attribution">{layer.attribution}</span>
        </div>

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
                    parseFloat((e.target as HTMLInputElement).value)
                  )}
                class="opacity-slider"
              />
            </div>
          {/if}

          <button
            class="toggle-switch"
            class:enabled={layer.visible}
            onclick={() => spatialStore.toggleLayer(layer.id)}
          >
            {layer.visible ? "Visible" : "Hidden"}
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .layer-panel {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    color: #e2e8f0;
  }

  .search-box {
    background: #020617;
    border: 1px solid #334155;
    color: #f8fafc;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    font-size: 0.8rem;
    min-width: 200px;
  }

  .layer-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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

  .layer-row.active {
    border-color: #3b82f6;
  }

  .layer-main {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .layer-title-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .type-pill {
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
    text-transform: uppercase;
  }

  .type-pill.xyz {
    background: #0d9488;
    color: #ccfbf1;
  }

  .type-pill.wms {
    background: #0284c7;
    color: #e0f2fe;
  }

  .type-pill.vector {
    background: #16a34a;
    color: #dcfce7;
  }

  .name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #f1f5f9;
  }

  .attribution {
    font-size: 0.75rem;
    color: #64748b;
  }

  .layer-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .opacity-group {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .opacity-label {
    font-size: 0.75rem;
    color: #94a3b8;
    font-family: monospace;
    width: 35px;
    text-align: right;
  }

  .opacity-slider {
    width: 70px;
    accent-color: #3b82f6;
    cursor: pointer;
  }

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

  .toggle-switch.enabled {
    background: #2563eb;
    border-color: #3b82f6;
    color: #ffffff;
  }
</style>
