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
  import BaseLayer from "ol/layer/Base";
  import TileLayer from "ol/layer/Tile";
  import VectorLayer from "ol/layer/Vector";
  import XYZ from "ol/source/XYZ";
  import TileWMS from "ol/source/TileWMS";
  import VectorSource from "ol/source/Vector";
  import GeoJSON from "ol/format/GeoJSON";
  import { Style, Stroke, Fill, Text } from "ol/style";
  import { fromLonLat, toLonLat } from "ol/proj";
  import { spatialStore } from "../services/spatialStore.svelte";
  import { danishCadastralGeoJson } from "../data/cadastralParcels";
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
  let layerRegistry: Record<string, BaseLayer> = {};

  // Derived telemetry
  const currentCenter = $derived(spatialStore.center);
  const activeCount = $derived(spatialStore.activeLayerCount);
  const cursorCoords = $derived(spatialStore.cursorPosition);
  const currentZoom = $derived(spatialStore.zoom);

  /**
   * Creates styled OpenLayers layer (TileLayer or VectorLayer) from store LayerConfig.
   */
  const createOlLayer = (config: LayerConfig): BaseLayer => {
    if (config.type === "Vector") {
      // Create Vector Layer with Danish Cadastral Parcels and Boundary Labels
      const features = new GeoJSON().readFeatures(danishCadastralGeoJson, {
        featureProjection: "EPSG:3857",
      });

      const vectorSource = new VectorSource({ features });

      return new VectorLayer({
        source: vectorSource,
        visible: config.visible,
        opacity: config.opacity,
        minZoom: 12,
        style: (feature) => {
          const matrikelnr = String(feature.get("matrikelnr") ?? "");
          const ejerlav = String(feature.get("ejerlav") ?? "");

          return new Style({
            stroke: new Stroke({
              color: "#ea580c",
              width: 2,
              lineDash: [4, 3],
            }),
            fill: new Fill({
              color: "rgba(234, 88, 12, 0.18)",
            }),
            text: new Text({
              text: `Matr. ${matrikelnr}\n(${ejerlav})`,
              font: "bold 11px -apple-system, sans-serif",
              fill: new Fill({ color: "#f8fafc" }),
              stroke: new Stroke({ color: "#0f172a", width: 3 }),
              offsetY: 0,
              textAlign: "center",
            }),
          });
        },
      });
    }

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

    // Default to XYZ raster tile layer
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
    const olLayers: BaseLayer[] = [];

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
   * Zooms directly to a city center at street parcel scale.
   */
  const zoomToCity = (lon: number, lat: number): void => {
    if (!mapInstance) return;
    mapInstance.getView().animate({
      center: fromLonLat([lon, lat]),
      zoom: 15,
      duration: 600,
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
      <button class="ctrl-btn reset" onclick={resetToDenmark} title="Overview DK">DK</button>
    </div>

    <div class="city-jump-group">
      <button class="city-btn" onclick={() => zoomToCity(10.2045, 56.1530)} title="Zoom to Aarhus Parcels">
        Aarhus
      </button>
      <button class="city-btn" onclick={() => zoomToCity(10.3880, 55.3990)} title="Zoom to Odense Parcels">
        Odense
      </button>
      <button class="city-btn" onclick={() => zoomToCity(12.5700, 55.6750)} title="Zoom to KBH Parcels">
        KBH
      </button>
    </div>
  </div>

  {#if currentZoom < 12 && spatialStore.layers.find(l => l.id === "matrikel-vector")?.visible}
    <div class="zoom-hint">
      Zoom in to level 12+ (or click a city button) to render cadastral parcels
    </div>
  {/if}

  <footer class="telemetry-bar">
    <div class="telemetry-item">
      <span class="label">Center:</span>
      <span class="value">{currentCenter.lat.toFixed(4)}°N, {currentCenter.lon.toFixed(4)}°E</span>
    </div>
    <div class="telemetry-item">
      <span class="label">Cursor:</span>
      <span class="value">
        {cursorCoords
          ? `${cursorCoords.lat.toFixed(4)}°N, ${cursorCoords.lon.toFixed(4)}°E`
          : "Hover over map"}
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
    display: flex;
    gap: 8px;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .city-jump-group {
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

  .city-btn {
    padding: 0.25rem 0.5rem;
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(4px);
    border: 1px solid #334155;
    color: #cbd5e1;
    font-size: 0.7rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .city-btn:hover {
    background: #2563eb;
    color: #ffffff;
    border-color: #3b82f6;
  }

  .zoom-hint {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid #ea580c;
    color: #fdba74;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 10;
    pointer-events: none;
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
