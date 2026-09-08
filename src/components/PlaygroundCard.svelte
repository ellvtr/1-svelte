<script lang="ts">
  /**
   * Interactive Playground Card for Rosetta Stone Demos (shadcn-svelte & Tailwind).
   * What: Encapsulates interactive demo widgets alongside toggleable side-by-side Svelte 5 and React/Next.js code viewers with syntax highlighting.
   * When: Invoked per concept card in RunesLivePlayground to render concepts #1 through #10.
   * Why: Enables side-by-side comparative inspection between Svelte 5 signal compilation and React VDOM patterns.
   */

  import type { Snippet } from "svelte";
  import Prism from "prismjs";
  import "prismjs/components/prism-typescript";
  import "prismjs/components/prism-jsx";
  import "prismjs/components/prism-tsx";
  import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import { Play, Code2 } from "lucide-svelte";

  /**
   * Properties contract for PlaygroundCard.
   */
  interface CardProps {
    badgeNum: string;
    title: string;
    subtitle: string;
    svelteCode: string;
    reactCode: string;
    children: Snippet;
  }

  // Card input properties extracted via $props() rune
  let {
    badgeNum,
    title,
    subtitle,
    svelteCode,
    reactCode,
    children,
  }: CardProps = $props();

  // Active view switcher state (interactive demo vs Svelte 5 code vs React code)
  let activeView = $state<"demo" | "svelte" | "react">("demo");

  // Syntax highlighted Svelte 5 snippet derivation
  const highlightedSvelte = $derived(
    Prism.highlight(svelteCode, Prism.languages.tsx || Prism.languages.typescript, "tsx")
  );

  // Syntax highlighted React 19 snippet derivation
  const highlightedReact = $derived(
    Prism.highlight(reactCode, Prism.languages.tsx || Prism.languages.typescript, "tsx")
  );
</script>

<Card class="border-slate-800 bg-slate-900/90 shadow-md transition-all hover:border-slate-700">
  <CardHeader class="p-4 pb-3 border-b border-slate-800/80">
    <div class="flex items-start justify-between gap-2">
      <div class="flex items-center gap-2 flex-wrap">
        <Badge variant="sky" class="font-bold font-mono">#{badgeNum}</Badge>
        <CardTitle class="text-sm font-mono font-bold text-sky-400">{title}</CardTitle>
      </div>
      <span class="text-xs text-slate-400 text-right leading-tight">{subtitle}</span>
    </div>

    <!-- View Switcher -->
    <div class="mt-3 flex rounded-lg bg-slate-950 p-1 border border-slate-800 gap-1">
      <Button
        variant={activeView === "demo" ? "default" : "ghost"}
        size="sm"
        class="h-7 text-xs flex-1 {activeView === 'demo' ? 'bg-sky-600 hover:bg-sky-700 text-white font-semibold' : 'text-slate-400 hover:text-white'}"
        onclick={() => (activeView = "demo")}
      >
        <Play class="h-3 w-3 mr-1 fill-current" />
        Live Demo
      </Button>

      <Button
        variant={activeView === "svelte" ? "default" : "ghost"}
        size="sm"
        class="h-7 text-xs flex-1 {activeView === 'svelte' ? 'bg-orange-600 hover:bg-orange-700 text-white font-semibold' : 'text-slate-400 hover:text-white'}"
        onclick={() => (activeView = "svelte")}
      >
        <Code2 class="h-3 w-3 mr-1" />
        Svelte 5
      </Button>

      <Button
        variant={activeView === "react" ? "default" : "ghost"}
        size="sm"
        class="h-7 text-xs flex-1 {activeView === 'react' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold' : 'text-slate-400 hover:text-white'}"
        onclick={() => (activeView = "react")}
      >
        <Code2 class="h-3 w-3 mr-1" />
        React 19
      </Button>
    </div>
  </CardHeader>

  <CardContent class="p-4 pt-3 min-h-[120px]">
    {#if activeView === "demo"}
      {@render children()}
    {:else if activeView === "svelte"}
      <div class="rounded-md border border-orange-500/30 bg-slate-950 p-3 overflow-x-auto">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-orange-400 mb-1.5 flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          Svelte 5 Implementation
        </div>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">{@html highlightedSvelte}</code></pre>
      </div>
    {:else}
      <div class="rounded-md border border-sky-500/30 bg-slate-950 p-3 overflow-x-auto">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
          React 19 / Next.js Implementation
        </div>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">{@html highlightedReact}</code></pre>
      </div>
    {/if}
  </CardContent>
</Card>
