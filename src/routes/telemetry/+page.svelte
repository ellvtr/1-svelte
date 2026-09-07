<script lang="ts">
  /**
   * Spatial Telemetry Route (/telemetry) (shadcn-svelte & Tailwind).
   * What: Real-time reactive signal telemetry dashboard.
   * When: Loaded on /telemetry route navigation.
   * Why: Proves fine-grained signal derivation without manual subscriptions.
   */

  import { spatialStore } from "../../services/spatialStore.svelte";
  import { Card, CardHeader, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Activity, Layers, ZoomIn, Grid, MousePointer, Map, Cpu } from "lucide-svelte";

  // Derived telemetry metrics calculated automatically via fine-grained signals
  const activeLayersCount = $derived(spatialStore.activeLayerCount);
  const zoomLevel = $derived(Math.round(spatialStore.zoom));
  const tileCount = $derived(spatialStore.estimatedTileLoad);
  const cursorCoords = $derived(spatialStore.cursorPosition);
</script>

<svelte:head>
  <title>Reactive Telemetry | Spatial Data Sandbox</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <!-- Header Banner -->
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-2">
      <Activity class="h-6 w-6 text-blue-400" />
      <h2 class="text-xl font-bold text-slate-100">Spatial Telemetry & Reactive Signal Graph</h2>
    </div>
    <p class="text-sm text-slate-400">
      Real-time metrics computed via Svelte 5 <code class="text-orange-400 bg-slate-950 px-1 py-0.5 rounded font-mono text-xs">$derived</code> runes with zero manual store subscriptions.
    </p>
  </div>

  <!-- Telemetry Metrics Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Metric Card 1: Zoom Level -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Map Zoom Level</span>
        <ZoomIn class="h-4 w-4 text-blue-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="text-2xl font-bold text-slate-100 font-mono">{zoomLevel}</div>
        <p class="text-xs text-slate-400 mt-1">Updated via OpenLayers moveend signal</p>
      </CardContent>
    </Card>

    <!-- Metric Card 2: Active Layers -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Spatial Layers</span>
        <Layers class="h-4 w-4 text-emerald-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="text-2xl font-bold text-slate-100 font-mono">
          {activeLayersCount} <span class="text-sm font-normal text-slate-400">/ {spatialStore.layers.length}</span>
        </div>
        <p class="text-xs text-slate-400 mt-1">Fine-grained layer filter derivation</p>
      </CardContent>
    </Card>

    <!-- Metric Card 3: Estimated Tile Matrix -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimated Tile Matrix</span>
        <Grid class="h-4 w-4 text-purple-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="text-2xl font-bold text-slate-100 font-mono">{tileCount.toLocaleString()}</div>
        <p class="text-xs text-slate-400 mt-1">Computed via <code class="text-orange-400">Math.pow(2, zoom) * layers</code></p>
      </CardContent>
    </Card>

    <!-- Metric Card 4: Cursor Coordinates -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cursor Coordinates</span>
        <MousePointer class="h-4 w-4 text-sky-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="text-lg font-bold text-sky-400 font-mono truncate">
          {#if cursorCoords}
            {cursorCoords.lat.toFixed(4)}°N, {cursorCoords.lon.toFixed(4)}°E
          {:else}
            <span class="text-slate-500 font-normal text-sm">Hover over map canvas</span>
          {/if}
        </div>
        <p class="text-xs text-slate-400 mt-1">Live mouse pointer coordinate telemetry</p>
      </CardContent>
    </Card>

    <!-- Metric Card 5: Map Engine Details -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Geospatial Engine</span>
        <Map class="h-4 w-4 text-emerald-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="text-lg font-bold text-slate-100 font-mono">OpenLayers 10.10</div>
        <p class="text-xs text-slate-400 mt-1">Zero-VDOM native canvas/WebGL rendering</p>
      </CardContent>
    </Card>

    <!-- Metric Card 6: Application Framework -->
    <Card class="border-slate-800 bg-slate-900/90 shadow-md">
      <CardHeader class="p-4 pb-2 flex flex-row items-center justify-between space-y-0">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Frontend Stack</span>
        <Cpu class="h-4 w-4 text-orange-400" />
      </CardHeader>
      <CardContent class="p-4 pt-1">
        <div class="flex items-center gap-1.5 flex-wrap">
          <Badge variant="orange" class="text-xs">Svelte 5 Runes</Badge>
          <Badge variant="emerald" class="text-xs">SvelteKit 2 SSR</Badge>
          <Badge variant="sky" class="text-xs">Bits UI</Badge>
        </div>
        <p class="text-xs text-slate-400 mt-1.5">SSR-hydrated fine-grained reactive runtime</p>
      </CardContent>
    </Card>
  </div>
</div>
