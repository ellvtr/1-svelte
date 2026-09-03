<script lang="ts">
  /**
   * Spatial Map OpenLayers Component.
   * What: Interactive geospatial map component integrating OpenLayers with Svelte 5 Runes and onMount lifecycle.
   * When: Displayed in the Spatial Layers view to render high-performance raster and vector layers.
   * Why: Proves zero-VDOM map synchronization, lifecycle safety, and reactive coordinate telemetry.
   */

  import "ol/ol.css";
  import { onMount } from "svelte";
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import XYZ from "ol/source/XYZ";
  import TileWMS from "ol/source/TileWMS";
  import { fromLonLat, toLonLat } from "ol/proj";
  import { spatialStore } from "../services/spatialStore.svelte";
  import type { LayerConfig } from "../types/spatial";

  // Component props using Svelte 5 $props
  type Props = {
    initialZoom?: number;
    initialLon?: number;
    initialLat?: number;
  };

  const { initialZoom = 7, initialLon = 10.5, initialLat = 56.0 }: Props = $props();

  // Local DOM reference and map instance state
  let mapContainer = $state<HTMLDivElement | null>(null);
  let mapInstance = $state<Map | null>(null);

  // Plain record mapping layer ID to OpenLayers layer instance
  let layerRegistry: Record<string, TileLayer<XYZ | TileWMS>> = {};

  // Derived telemetry
  const currentCenter = $derived(spatialStore.center);
  const activeCount = $derived(spatialStore.activeLayerCount);
  const cursorCoords = $derived(spatialStore.cursorPosition);

  /**
   * Creates an OpenLayers TileLayer from a store LayerConfig.
   */
  const createOlLayer = (config: LayerConfig): TileLayer<XYZ | TileWMS> => {
    if (config.type === "WMS") {
      return new TileLayer({
        source: new TileWMS({
          url: config.url,
          params: { LAYERS: config.id, TILED: true },
          serverType: "geoserver",
          crossOrigin: "anonymous",
        }),
        visible: config.visible,
        opacity: config.opacity,
      });
    }

    // Default to XYZ tile layer
    return new TileLayer({
      source: new XYZ({
        url: config.url,
        attributions: config.attribution,
        crossOrigin: "anonymous",
      }),
      visible: config.visible,
      opacity: config.opacity,
    });
  };

  // Mount OpenLayers map on component initialization
  onMount(() => {
    if (!mapContainer) return;

    // Clear registry and build all layers from store
    layerRegistry = {};
    const olLayers: TileLayer<XYZ | TileWMS>[] = [];

    for (const layerConfig of spatialStore.layers) {
      const olLayer = createOlLayer(layerConfig);
      layerRegistry[layerConfig.id] = olLayer;
      olLayers.push(olLayer);
    }

    // Create OpenLayers Map instance
    const map = new Map({
      target: mapContainer,
      layers: olLayers,
      view: new View({
        center: fromLonLat([initialLon, initialLat]),
        zoom: initialZoom,
      }),
      controls: [],
    });

    mapInstance = map;

    // Trigger initial size update
    setTimeout(() => {
      map.updateSize();
    }, 100);

    // Synchronize map view move events to store
    map.on("moveend", () => {
      const view = map.getView();
      const zoomLevel = view.getZoom();
      const centerCoords = view.getCenter();
      if (zoomLevel !== undefined) {
        spatialStore.setZoom(zoomLevel);
      }
      if (centerCoords) {
        const [lon, lat] = toLonLat(centerCoords);
        spatialStore.setCenter({ lon, lat });
      }
    });

    // Pointer move listener for coordinate telemetry
    map.on("pointermove", (evt) => {
      if (evt.coordinate) {
        const [lon, lat] = toLonLat(evt.coordinate);
        spatialStore.setCursorPosition({ lon, lat });
      }
    });

    // Cleanup hook on unmount
    return () => {
      map.setTarget(undefined);
      mapInstance = null;
      layerRegistry = {};
    };
  });

  // Reactive effect: synchronize store layer visibility and opacity with OpenLayers layers
  $effect(() => {
    if (!mapInstance) return;

    for (const layerConfig of spatialStore.layers) {
      const olLayer = layerRegistry[layerConfig.id];
      if (olLayer) {
        olLayer.setVisible(layerConfig.visible);
        olLayer.setOpacity(layerConfig.opacity);
      }
    }
  });

  /**
   * Centers the viewport over central Denmark.
   */
  const resetToDenmark = (): void => {
    if (!mapInstance) return;
    mapInstance.getView().animate({
      center: fromLonLat([10.5, 56.0]),
      zoom: 7,
      duration: 500,
    });
  };

  /**
   * Adjusts zoom by relative delta.
   */
  const handleZoom = (delta: number): void => {
    if (!mapInstance) return;
    const view = mapInstance.getView();
    const current = view.getZoom() ?? 7;
    view.animate({
      zoom: current + delta,
      duration: 250,
    });
  };
</script>

<div class="map-wrapper">
  <div class="map-viewport" bind:this={mapContainer}></div>

  <div class="map-overlay-controls">
    <div class="btn-group">
      <button class="ctrl-btn" onclick={() => handleZoom(1)} title="Zoom In">+</button>
      <button class="ctrl-btn" onclick={() => handleZoom(-1)} title="Zoom Out">-</button>
      <button class="ctrl-btn reset" onclick={resetToDenmark} title="Reset View">DK</button>
    </div>
  </div>

  <footer class="telemetry-bar">
    <div class="telemetry-item">
      <span class="label">Center:</span>
      <span class="value">{currentCenter.lat.toFixed(4)}°N, {currentCenter.lon.toFixed(4)}°E</span>
    </div>
    <div class="telemetry-item">
      <span class="label">Cursor:</span>
      <span class="value">
        {cursorCoords ? `${cursorCoords.lat.toFixed(4)}°N, ${cursorCoords.lon.toFixed(4)}°E` : "Hover over map"}
      </span>
    </div>
    <div class="telemetry-item">
      <span class="label">Active Layers:</span>
      <span class="badge-count">{activeCount}</span>
    </div>
  </footer>
</div>

<style>
  .map-wrapper {
    position: relative;
    width: 100%;
    height: 420px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #334155;
    background: #090d16;
    display: flex;
    flex-direction: column;
  }

  .map-viewport {
    flex: 1;
    width: 100%;
    height: 100%;
  }

  .map-overlay-controls {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ctrl-btn {
    width: 32px;
    height: 32px;
    background: #1e293b;
    border: 1px solid #475569;
    color: #f8fafc;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }

  .ctrl-btn:hover {
    background: #2563eb;
    border-color: #3b82f6;
  }

  .ctrl-btn.reset {
    font-size: 0.75rem;
    font-weight: 800;
    background: #0f172a;
  }

  .telemetry-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #0f172a;
    border-top: 1px solid #1e293b;
    font-size: 0.8rem;
    color: #94a3b8;
    z-index: 5;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .telemetry-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .label {
    font-weight: 600;
    color: #64748b;
  }

  .value {
    color: #f1f5f9;
    font-family: monospace;
    font-size: 0.85rem;
  }

  .badge-count {
    background: #2563eb;
    color: #ffffff;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.75rem;
  }
</style>
