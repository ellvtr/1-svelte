<script lang="ts">
  /**
   * SvelteKit SSR & Routing Explorer Route (/sveltekit) (shadcn-svelte & Tailwind).
   * What: Visual interactive architecture explorer demonstrating SvelteKit 2+ loaders, streaming, and Svelte 5 PageData consumption.
   * When: Loaded on /sveltekit route navigation.
   * Why: Proves deep knowledge of SvelteKit SSR lifecycles, server-side OGC token security, and Svelte 5 PageData consumption.
   */

  import type { PageData } from "./$types";
  import SvelteKitArchitecture from "../../components/SvelteKitArchitecture.svelte";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Layers, Server, ShieldCheck, Clock, Compass, Radio } from "lucide-svelte";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>SvelteKit 2 SSR & Routing | Spatial Data Sandbox</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <!-- Intro Card -->
  <Card class="border-slate-800 bg-slate-900/90 shadow-xl">
    <CardHeader class="p-5 pb-3">
      <div class="flex items-center gap-2">
        <Layers class="h-6 w-6 text-emerald-400" />
        <CardTitle class="text-xl">SvelteKit 2 Server & Universal Data Flow</CardTitle>
      </div>
      <CardDescription class="text-sm text-slate-400">
        Patterns for securing GIS tokens, streaming GeoJSON polygons, and server actions.
      </CardDescription>
    </CardHeader>

    <CardContent class="p-5 pt-2 flex flex-col gap-4">
      <!-- Live SSR Telemetry Banner rendered directly from +page.server.ts load function -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3.5 rounded-lg border border-slate-800 bg-slate-950/80 shadow-inner">
        <div class="flex flex-col gap-1">
          <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Server class="h-3 w-3 text-emerald-400" /> SSR Runtime
          </span>
          <span class="font-mono text-xs text-slate-100 font-medium">{data.serverRuntime}</span>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Clock class="h-3 w-3 text-sky-400" /> Server Timestamp
          </span>
          <span class="font-mono text-xs text-slate-300 truncate">{data.serverTimestamp}</span>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Compass class="h-3 w-3 text-purple-400" /> Target Spatial CRS
          </span>
          <span class="font-mono text-xs text-purple-300 font-medium">{data.securePortalConfig.crs}</span>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck class="h-3 w-3 text-emerald-400" /> Datafordeler Key (Isolated)
          </span>
          <span class="font-mono text-xs text-emerald-400 font-semibold">{data.securePortalConfig.tokenMasked}</span>
        </div>
      </div>

      <!-- Real-time fine-grained Promise Streaming via {#await} block -->
      <div class="p-3.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 shadow-sm flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Radio class="h-4 w-4 text-cyan-400 animate-pulse" />
            <h4 class="text-xs font-semibold text-slate-200">
              Fine-Grained Server Promise Streaming (<code class="text-cyan-300 font-mono text-xs">&#123;#await data.streamedCadastralSummary&#125;</code>):
            </h4>
          </div>
          <Badge variant="sky" class="text-[10px] font-mono">Async Stream</Badge>
        </div>

        {#await data.streamedCadastralSummary}
          <div class="flex items-center gap-2 text-xs text-cyan-300 py-1">
            <span class="h-3.5 w-3.5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></span>
            <span>Streaming cadastral metadata summary in background...</span>
          </div>
        {:then summary}
          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 py-1">
            <Badge variant="emerald" class="text-[10px] font-bold">Stream Hydrated</Badge>
            <span><strong>Authority:</strong> {summary.sourceAuthority}</span>
            <span><strong>Total Parcels:</strong> <span class="text-white font-mono font-semibold">{summary.totalParcels.toLocaleString()}</span></span>
            <span><strong>Avg Area:</strong> <span class="text-white font-mono font-semibold">{summary.averageAreaM2} m²</span></span>
          </div>
        {:catch error}
          <div class="text-xs text-red-400 py-1">
            Failed to stream spatial data: {error.message}
          </div>
        {/await}
      </div>

      <SvelteKitArchitecture />
    </CardContent>
  </Card>
</div>
