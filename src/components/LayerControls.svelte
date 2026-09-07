<script lang="ts">
  /**
   * Spatial Layer Controls Component (shadcn-svelte & Bits UI).
   * What: Accessible layer catalog with search filtering, visibility checkboxes, opacity sliders, and protocol badges.
   * When: Displayed alongside the OpenLayers map view.
   * Why: Proves two-way signal binding with Svelte 5 and granular layer state updates with Bits UI accessibility.
   */

  import { spatialStore } from "../services/spatialStore.svelte";
  import type { LayerConfig } from "../types/spatial";
  import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Slider } from "$lib/components/ui/slider";
  import { Layers, Search, EyeOff } from "lucide-svelte";

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
  <div
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg border transition-all {layer.visible ? 'border-blue-500/60 bg-slate-900/90 shadow-sm' : 'border-slate-800 bg-slate-950/60 opacity-75'}"
  >
    <!-- Left column: Checkbox + Title + Badges -->
    <div class="flex items-start sm:items-center gap-3">
      <div class="pt-0.5 sm:pt-0">
        <Checkbox
          id="check-{layer.id}"
          checked={layer.visible}
          onCheckedChange={() => spatialStore.toggleLayer(layer.id)}
        />
      </div>
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2 flex-wrap">
          <label for="check-{layer.id}" class="text-sm font-semibold text-slate-100 cursor-pointer hover:text-blue-400 transition-colors">
            {layer.name}
          </label>
          <Badge
            variant={layer.type === "XYZ" ? "sky" : layer.type === "Vector" ? "emerald" : "purple"}
            class="text-[10px] px-1.5 py-0 uppercase tracking-wider font-bold"
          >
            {layer.type}
          </Badge>
        </div>
        <span class="text-xs text-slate-400 font-normal">{layer.attribution}</span>
      </div>
    </div>

    <!-- Right column: Opacity slider & percentage -->
    <div class="flex items-center gap-3 self-end sm:self-center pl-7 sm:pl-0">
      {#if layer.visible}
        <div class="flex items-center gap-2.5 w-36 sm:w-44">
          <span class="text-xs font-mono text-slate-400 w-9 text-right shrink-0">
            {Math.round(layer.opacity * 100)}%
          </span>
          <Slider
            value={[layer.opacity]}
            min={0}
            max={1}
            step={0.05}
            onValueChange={(val) => spatialStore.setLayerOpacity(layer.id, val[0])}
            class="w-24 sm:w-32"
          />
        </div>
      {:else}
        <span class="text-xs text-slate-500 flex items-center gap-1">
          <EyeOff class="h-3 w-3" /> Hidden
        </span>
      {/if}
    </div>
  </div>
{/snippet}

<!-- Main Layer Panel Card -->
<Card class="border-slate-800 bg-slate-900/90 shadow-xl">
  <CardHeader class="p-4 pb-3">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <Layers class="h-5 w-5 text-blue-400" />
        <CardTitle class="text-base">Danish Spatial Layer Catalog</CardTitle>
      </div>

      <!-- Search Input Filter -->
      <div class="relative w-full sm:w-64">
        <Search class="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
        <input
          type="search"
          placeholder="Filter layers (e.g. Matrikel, Topo)..."
          bind:value={searchQuery}
          class="w-full rounded-md border border-slate-700 bg-slate-950/80 py-1.5 pl-8 pr-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>
    </div>
  </CardHeader>

  <CardContent class="p-4 pt-1 flex flex-col gap-2">
    {#each filteredLayers as layer (layer.id)}
      {@render layerRow(layer)}
    {:else}
      <div class="p-6 text-center text-sm text-slate-400">
        No spatial layers found matching "{searchQuery}".
      </div>
    {/each}
  </CardContent>
</Card>
