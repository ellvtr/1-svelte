<script lang="ts">
  /**
   * Root SvelteKit Layout.
   * What: Persistent application shell with Danish Geospatial Header, active route navigation, and telemetry HUD.
   * When: Wraps every page route in the SvelteKit 2 application.
   * Why: Eliminates layout shift across route transitions while maintaining shared signal store state.
   */

  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import "../app.css";
  import "prismjs/themes/prism-tomorrow.css";
  import { spatialStore } from "../services/spatialStore.svelte";
  import { Badge } from "$lib/components/ui/badge";
  import { Map as MapIcon, Layers, Cpu, Activity } from "lucide-svelte";

  interface LayoutProps {
    children: Snippet;
  }

  let { children }: LayoutProps = $props();

  // Derived telemetry metrics calculated automatically via fine-grained signals
  const activeLayersCount = $derived(spatialStore.activeLayerCount);
  const currentPath = $derived(page.url.pathname);
</script>

<svelte:head>
  <title>Svelte 5 & SvelteKit Spatial Architecture Sandbox</title>
</svelte:head>

<main class="mx-auto max-w-5xl px-4 py-8 antialiased">
  <!-- Application Header & Danish Geospatial Context Branding -->
  <header class="mb-6">
    <div class="flex flex-wrap items-center gap-2.5">
      <Badge variant="orange" class="font-bold tracking-wide">Svelte 5 Runes</Badge>
      <Badge variant="emerald" class="font-bold tracking-wide">SvelteKit 2 SSR</Badge>
      <Badge variant="sky" class="font-bold tracking-wide">Bits UI + Tailwind</Badge>
      <h1 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
        Spatial Data Architecture Sandbox
      </h1>
    </div>
    <p class="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
      Danish geospatial infrastructure sandbox: OpenLayers integration, SvelteKit 2 SSR loaders, file-based routing, and
      fine-grained signal reactivity with shadcn-svelte & Bits UI.
    </p>
  </header>

  <!-- Primary Route Navigation Bar -->
  <nav class="mb-6 flex flex-wrap gap-2 border-b border-slate-800 pb-3" aria-label="Main Navigation">
    <!-- Route 1: Interactive OpenLayers Map & Layer Controls -->
    <a
      href="/map"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all {currentPath === '/map' || currentPath === '/' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}"
    >
      <MapIcon class="h-4 w-4" />
      <span>OpenLayers Map</span>
      <span class="ml-1 rounded-full bg-blue-900/60 px-2 py-0.5 text-xs text-blue-200 border border-blue-500/30">
        {activeLayersCount}
      </span>
    </a>

    <!-- Route 2: SvelteKit SSR, Loaders & Routing Patterns -->
    <a
      href="/sveltekit"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all {currentPath === '/sveltekit' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}"
    >
      <Layers class="h-4 w-4" />
      <span>SvelteKit SSR & Routing</span>
    </a>

    <!-- Route 3: Complete 10-Concept Rosetta Stone Comparison & Interactive Runes Playground -->
    <a
      href="/runes"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all {currentPath === '/runes' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}"
    >
      <Cpu class="h-4 w-4" />
      <span>Runes vs React Matrix</span>
    </a>

    <!-- Route 4: Real-time Reactive Signal Telemetry Dashboard -->
    <a
      href="/telemetry"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all {currentPath === '/telemetry' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}"
    >
      <Activity class="h-4 w-4" />
      <span>Reactive Telemetry</span>
    </a>
  </nav>

  <!-- Render current route page content -->
  {@render children()}
</main>
