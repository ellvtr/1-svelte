<script lang="ts">
  /**
   * Spatial Map Route (/map) (shadcn-svelte & Tailwind).
   * What: High-performance OpenLayers map viewport alongside Danish OGC layer controls.
   * When: Loaded on /map route navigation.
   * Why: Proves Svelte 5 fine-grained reactivity driving imperative WebGL/Canvas map instances with zero VDOM overhead.
   */

  import SpatialMap from "../../components/SpatialMap.svelte";
  import LayerControls from "../../components/LayerControls.svelte";
</script>

<svelte:head>
  <title>OpenLayers Map | Spatial Data Sandbox</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-6">
    <SpatialMap initialZoom={7} initialLon={10.5} initialLat={56.0} />
    <LayerControls />
  </div>
</div>
