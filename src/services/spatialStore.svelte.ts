/**
 * Spatial Layer and Map Reactive State Store.
 * What: Universal Svelte 5 reactive store managing spatial layers, active map coordinates, and telemetry.
 * When: Imported across Svelte 5 components and map controllers to share spatial state outside the component tree.
 * Why: Demonstrates Svelte 5 runes ($state, $derived) functioning seamlessly in standalone .svelte.ts files.
 */

import type { LayerConfig, MapCoordinate } from "../types/spatial";

/**
 * Creates and exports the spatial state manager using Svelte 5 universal runes.
 */
export const createSpatialStore = () => {
  // Layer catalog state with OSM at 50% opacity and Cadastral Vector disabled by default
  const layers = $state<LayerConfig[]>([
    {
      id: "osm-base",
      name: "OpenStreetMap Standard",
      type: "XYZ",
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      visible: true,
      opacity: 0.5,
      attribution: "© OpenStreetMap contributors",
    },
    {
      id: "matrikel-vector",
      name: "Matrikelskel (Cadastral Parcels & Boundaries)",
      type: "Vector",
      url: "geo://cadastral-parcels-dk",
      visible: false,
      opacity: 1.0,
      attribution: "Geodatastyrelsen / Matrikelkortet DK",
    },
    {
      id: "ortho-danmark",
      name: "Danmark Ortofoto (High-Res Aerial)",
      type: "XYZ",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      visible: false,
      opacity: 0.9,
      attribution: "ESRI World Imagery / GeoDanmark Aerial",
    },
    {
      id: "dhm-shadow",
      name: "Danmarks Højdemodel (DTM Topo & Relief)",
      type: "XYZ",
      url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
      visible: false,
      opacity: 0.7,
      attribution: "OpenTopoMap / Klimadatastyrelsen DTM",
    },
  ]);

  // Viewport and interaction state
  let zoom = $state<number>(7);
  let center = $state<MapCoordinate>({ lon: 10.5, lat: 56.0 });
  let cursorPosition = $state<MapCoordinate | null>(null);

  // Derived state calculations
  const activeLayers = $derived(layers.filter((layer) => layer.visible));
  const activeLayerCount = $derived(activeLayers.length);
  const estimatedTileLoad = $derived(Math.pow(2, Math.round(zoom)) * Math.max(1, activeLayerCount));

  /**
   * Toggles visibility for a specific spatial layer by ID.
   */
  const toggleLayer = (layerId: string): void => {
    const target = layers.find((l) => l.id === layerId);
    if (target) {
      target.visible = !target.visible;
    }
  };

  /**
   * Updates opacity for a specific spatial layer.
   */
  const setLayerOpacity = (layerId: string, opacity: number): void => {
    const target = layers.find((l) => l.id === layerId);
    if (target) {
      target.opacity = Math.max(0, Math.min(1, opacity));
    }
  };

  /**
   * Updates the map zoom level within safe bounds.
   */
  const setZoom = (newZoom: number): void => {
    zoom = Math.max(2, Math.min(20, newZoom));
  };

  /**
   * Updates center coordinates.
   */
  const setCenter = (newCenter: MapCoordinate): void => {
    center = newCenter;
  };

  /**
   * Updates real-time cursor coordinate telemetry.
   */
  const setCursorPosition = (coords: MapCoordinate | null): void => {
    cursorPosition = coords;
  };

  return {
    get layers() {
      return layers;
    },
    get zoom() {
      return zoom;
    },
    get center() {
      return center;
    },
    get cursorPosition() {
      return cursorPosition;
    },
    get activeLayers() {
      return activeLayers;
    },
    get activeLayerCount() {
      return activeLayerCount;
    },
    get estimatedTileLoad() {
      return estimatedTileLoad;
    },
    toggleLayer,
    setLayerOpacity,
    setZoom,
    setCenter,
    setCursorPosition,
  };
};

/**
 * Singleton shared spatial store instance across the application.
 */
export const spatialStore = createSpatialStore();
