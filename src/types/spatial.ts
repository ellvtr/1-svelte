/**
 * Spatial Domain TypeScript Definitions.
 * What: Core type contracts for spatial layers, map coordinates, and GIS protocol configurations.
 * When: Imported across spatial stores, OpenLayers components, and telemetry displays.
 * Why: Enforces strict type safety and zero-any invariants across the spatial data frontend.
 */

/**
 * Protocol family supported by the spatial layer renderer.
 * Encompasses tiled raster (XYZ), web map services (WMS), feature services (WFS), and vector tiles.
 */
export type LayerProtocol = "XYZ" | "WMS" | "WFS" | "Vector";

/**
 * Configuration schema for an active or configurable GIS layer.
 * Governs opacity, visibility toggling, attribution, and protocol endpoints.
 */
export type LayerConfig = {
  id: string;
  name: string;
  type: LayerProtocol;
  url: string;
  visible: boolean;
  opacity: number;
  attribution: string;
};

/**
 * Two-dimensional geographic coordinate in decimal degrees (EPSG:4326/WGS84).
 */
export type MapCoordinate = {
  lon: number;
  lat: number;
};

/**
 * Educational pattern descriptor for SvelteKit SSR and routing lifecycle explorer.
 * Models scope boundaries (Server vs Universal vs Client) and runnable code snippets.
 */
export type SvelteKitPatternInfo = {
  id: string;
  name: string;
  filename: string;
  scope: "Server" | "Universal" | "Client";
  description: string;
  exampleSnippet: string;
};
