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

  // Component props definition with default camera coordinates centered over Denmark
  type Props = {
    initialZoom?: number;
    initialLon?: number;
    initialLat?: number;
  };

  const { initialZoom = 7, initialLon = 10.5, initialLat = 56.0 }: Props = $props();

  // Local DOM element reference for OpenLayers canvas attachment
  let mapContainer = $state<HTMLDivElement | null>(null);
  // Reference to the active OpenLayers Map instance
  let mapInstance = $state<Map | null>(null);

  // Registry dictionary mapping store layer IDs to instantiated OpenLayers layer objects
  let layerRegistry: Record<string, BaseLayer> = {};

  // Derived telemetry values from global reactive spatial store
  const currentCenter = $derived(spatialStore.center);
  const activeCount = $derived(spatialStore.activeLayerCount);
  const cursorCoords = $derived(spatialStore.cursorPosition);
  const currentZoom = $derived(spatialStore.zoom);

  /**
   * Instantiates and styles the appropriate OpenLayers layer (Vector, WMS, or XYZ) from store configuration.
   */
  const createOlLayer = (config: LayerConfig): BaseLayer => {
    if (config.type === "Vector") {
      // Vector Layer: Danish Cadastral Parcels with dashed boundary lines and parcel label styling
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
      // WMS Layer: OGC Web Map Service tile layer (e.g. DHM elevation hillshade)
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

    // Default Layer: Slippy XYZ raster tile layer (e.g. OpenStreetMap, Ortofoto)
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

  // Lifecycle onMount: Attaches OpenLayers canvas to DOM container and binds event listeners
  onMount(() => {
    if (!mapContainer) return;

    // Initialize layer registry and instantiate OpenLayers layer objects
    layerRegistry = {};
    const olLayers: BaseLayer[] = [];

    for (const layerConfig of spatialStore.layers) {
      const olLayer = createOlLayer(layerConfig);
      layerRegistry[layerConfig.id] = olLayer;
      olLayers.push(olLayer);
    }

    // Instantiate OpenLayers Map with EPSG:3857 spherical mercator projection
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

    // Trigger initial viewport size recalculation after DOM layout pass
    setTimeout(() => {
      map.updateSize();
    }, 100);

    // Event listener: Synchronize view pan and zoom level changes back to spatialStore
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

    // Event listener: Track mouse pointer position and update coordinate telemetry
    map.on("pointermove", (evt) => {
      if (evt.coordinate) {
        const [lon, lat] = toLonLat(evt.coordinate);
        spatialStore.setCursorPosition({ lon, lat });
      }
    });

    // Teardown cleanup handler on component destroy
    return () => {
      map.setTarget(undefined);
      mapInstance = null;
      layerRegistry = {};
    };
  });

  // Reactive effect: Synchronize store layer visibility and opacity changes to OpenLayers instances
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
   * Resets the map camera position and zoom level to encompass Denmark overview.
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
   * Smoothly animates camera to street parcel scale for Danish municipal centers.
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
   * Adjusts current map zoom level by a positive or negative delta.
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

<!-- Outer Map Widget Container -->
<div class="map-wrapper">
  <!-- Target HTML element where OpenLayers injects its WebGL/Canvas renderer -->
  <div class="map-viewport" bind:this={mapContainer}></div>

  <!-- Floating Map Control Buttons Overlay -->
  <div class="map-overlay-controls">
    <!-- Zoom buttons and national overview reset button -->
    <div class="btn-group">
      <button class="ctrl-btn" onclick={() => handleZoom(1)} title="Zoom In">+</button>
      <button class="ctrl-btn" onclick={() => handleZoom(-1)} title="Zoom Out">-</button>
      <button class="ctrl-btn reset" onclick={resetToDenmark} title="Overview DK">DK</button>
    </div>

    <!-- Quick jump buttons to major Danish municipal centers -->
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

  <!-- Conditional notification banner reminding user of zoom threshold for cadastral vector features -->
  {#if currentZoom < 12 && spatialStore.layers.find(l => l.id === "matrikel-vector")?.visible}
    <div class="zoom-hint">
      Zoom in to level 12+ (or click a city button) to render cadastral parcels
    </div>
  {/if}

  <!-- Footer status bar displaying live coordinate telemetry -->
  <footer class="telemetry-bar">
    <!-- Center coordinate display in WGS84 decimal degrees -->
    <div class="telemetry-item">
      <span class="label">Center:</span>
      <span class="value">{currentCenter.lat.toFixed(4)}°N, {currentCenter.lon.toFixed(4)}°E</span>
    </div>
    <!-- Live mouse cursor coordinate display -->
    <div class="telemetry-item">
      <span class="label">Cursor:</span>
      <span class="value">
        {cursorCoords
          ? `${cursorCoords.lat.toFixed(4)}°N, ${cursorCoords.lon.toFixed(4)}°E`
          : "Hover over map"}
      </span>
    </div>
    <!-- Active layer count badge -->
    <div class="telemetry-item">
      <span class="label">Active Layers:</span>
      <span class="badge-count">{activeCount}</span>
    </div>
  </footer>
</div>

<style>
  /* Outer relative container wrapping OpenLayers canvas and overlay controls */
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

  /* Full-bleed map viewport target for OpenLayers canvas */
  .map-viewport {
    flex: 1;
    width: 100%;
    height: 100%;
  }

  /* Floating container positioning map navigation controls in top-left corner */
  .map-overlay-controls {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
    display: flex;
    gap: 8px;
  }

  /* Vertical button stack for zoom in, zoom out, and reset */
  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Vertical button stack for quick city navigation jumps */
  .city-jump-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Square control icon button styling */
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

  /* Hover state for map control buttons */
  .ctrl-btn:hover {
    background: #2563eb;
    border-color: #3b82f6;
  }

  /* Special styling for Denmark national reset button */
  .ctrl-btn.reset {
    font-size: 0.75rem;
    font-weight: 800;
    background: #0f172a;
  }

  /* Compact city navigation jump pill button */
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

  /* Hover state for city jump buttons */
  .city-btn:hover {
    background: #2563eb;
    color: #ffffff;
    border-color: #3b82f6;
  }

  /* Floating banner warning user when zoomed out beyond vector parcel rendering threshold */
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

  /* Bottom telemetry bar displaying live coordinate telemetry and active layer count */
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

  /* Individual telemetry field container */
  .telemetry-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  /* Telemetry field label text */
  .label {
    font-weight: 600;
    color: #64748b;
  }

  /* Telemetry numeric value monospace label */
  .value {
    color: #f1f5f9;
    font-family: monospace;
    font-size: 0.85rem;
  }

  /* Active layer count pill badge */
  .badge-count {
    background: #2563eb;
    color: #ffffff;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.75rem;
  }
</style>

