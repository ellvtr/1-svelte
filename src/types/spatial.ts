/**
 * Spatial Domain TypeScript Definitions.
 * What: Core type contracts for spatial layers, map coordinates, and GIS protocol configurations.
 * When: Imported across spatial stores, OpenLayers components, and telemetry displays.
 * Why: Enforces strict type safety and zero-any invariants across the spatial data frontend.
 */

export type LayerProtocol = "XYZ" | "WMS" | "WFS" | "Vector";

export type LayerConfig = {
  id: string;
  name: string;
  type: LayerProtocol;
  url: string;
  visible: boolean;
  opacity: number;
  attribution: string;
};

export type MapCoordinate = {
  lon: number;
  lat: number;
};

export type SvelteKitPatternInfo = {
  name: string;
  filename: string;
  scope: "Server" | "Universal" | "Client";
  description: string;
  exampleSnippet: string;
};
