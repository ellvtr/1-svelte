<script lang="ts">
  /**
   * Svelte 5 Runes & SvelteKit: Comprehensive Rosetta Stone Live Interactive Playground.
   * What: Full interactive demonstration of all 10 Rosetta Stone concepts comparing React/Next.js to Svelte 5/SvelteKit.
   * When: Invoked under the "Runes vs React Matrix" tab in App.svelte for hands-on technical rehearsal.
   * Why: Gives Jonas a concrete, live, interactive UI playground to test and demonstrate every single Rune and architectural pattern.
   */

  import BindableSearchInput from "./BindableSearchInput.svelte";
  import PlaygroundCard from "./PlaygroundCard.svelte";
  import { spatialStore } from "../services/spatialStore.svelte";

  // Active filter tab for the playground
  let selectedCategory = $state<"all" | "runes" | "templates" | "architecture">("all");

  // ==========================================
  // Concept 1: $state() Primitive & Deep Object Proxy
  // ==========================================
  let counter = $state<number>(1);
  let userProfile = $state({
    name: "Jonas Ellehauge",
    role: "Senior Svelte & TS Architect",
    active: true,
    preferences: { crs: "EPSG:25832", autoPan: true },
  });

  const toggleUserStatus = () => {
    userProfile.active = !userProfile.active; // Direct mutation intercepted by ES Proxy
  };

  const code1Svelte = `// Svelte 5 ($state with ES Proxy)
let count = $state(0);
let user = $state({ name: "Jonas", active: true });

const increment = () => count++;
const toggle = () => user.active = !user.active;`;

  const code1React = `// React 19 (useState)
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: "Jonas", active: true });

const increment = () => setCount(c => c + 1);
const toggle = () => setUser(u => ({ ...u, active: !u.active }));`;

  // ==========================================
  // Concept 1b: bind:this / DOM Reference
  // ==========================================
  let measuredBox = $state<HTMLDivElement | null>(null);
  let boxDimensions = $state<{ width: number; height: number }>({ width: 0, height: 0 });

  const measureElement = () => {
    if (measuredBox) {
      boxDimensions = {
        width: measuredBox.clientWidth,
        height: measuredBox.clientHeight,
      };
    }
  };

  const code1bSvelte = `// Svelte 5 (bind:this)
let mapDiv: HTMLDivElement | null = $state(null);

$effect(() => {
  if (mapDiv) console.log(mapDiv.clientWidth);
});

<div bind:this={mapDiv} class="map-viewport"></div>`;

  const code1bReact = `// React 19 (useRef)
const mapDivRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (mapDivRef.current) console.log(mapDivRef.current.clientWidth);
}, []);

<div ref={mapDivRef} className="map-viewport" />`;

  // ==========================================
  // Concept 2: $derived() Single Expression Computed
  // ==========================================
  const doubleCount = $derived(counter * 2);
  const zoomResolution = $derived((156543.03392 / Math.pow(2, counter)).toFixed(2));

  const code2Svelte = `// Svelte 5 ($derived auto-tracked)
let count = $state(5);
let doubled = $derived(count * 2);`;

  const code2React = `// React 19 (useMemo with explicit [deps])
const [count, setCount] = useState(5);
const doubled = useMemo(() => count * 2, [count]);`;

  // ==========================================
  // Concept 3: $derived.by() Multi-line Computed Block
  // ==========================================
  let layerFilterQuery = $state("");
  let layerList = $state([
    { id: "kommune", name: "Danmarks Administrative Grænser (Kommune)", visible: true, sizeMb: 14.2 },
    { id: "matrikel", name: "Matrikelkortet (Cadastral Parcels)", visible: true, sizeMb: 85.6 },
    { id: "orto", name: "Ortofoto Forår 2026 (Aerial 12.5cm)", visible: false, sizeMb: 320.0 },
    { id: "dhm", name: "Danmarks Højdemodel (DHM / DTM Elevation)", visible: true, sizeMb: 140.5 },
  ]);

  const filteredLayersSummary = $derived.by(() => {
    const q = layerFilterQuery.toLowerCase().trim();
    const matched = layerList.filter((l) => l.name.toLowerCase().includes(q));
    const activeCount = matched.filter((l) => l.visible).length;
    const totalMb = matched.reduce((sum, l) => sum + (l.visible ? l.sizeMb : 0), 0);
    return {
      matched,
      activeCount,
      totalMatched: matched.length,
      totalMb: totalMb.toFixed(1),
    };
  });

  const code3Svelte = `// Svelte 5 ($derived.by multi-line closure)
let summary = $derived.by(() => {
  let active = layers.filter(l => l.visible);
  return { count: active.length, totalMb: sum(active) };
});`;

  const code3React = `// React 19 (useMemo multi-line block)
const summary = useMemo(() => {
  let active = layers.filter(l => l.visible);
  return { count: active.length, totalMb: sum(active) };
}, [layers]);`;

  // ==========================================
  // Concept 4: $effect() Microtask Side Effect with Cleanup
  // ==========================================
  let isHeartbeatRunning = $state<boolean>(false);
  let heartbeatTicks = $state<number>(0);
  let effectLog = $state<string[]>([]);

  $effect(() => {
    if (!isHeartbeatRunning) return;

    effectLog = [...effectLog.slice(-4), `[${new Date().toLocaleTimeString()}] Timer started (1000ms)`];
    const timer = setInterval(() => {
      heartbeatTicks += 1;
    }, 1000);

    return () => {
      effectLog = [...effectLog.slice(-4), `[${new Date().toLocaleTimeString()}] Cleanup: timer cleared`];
      clearInterval(timer);
    };
  });

  const code4Svelte = `// Svelte 5 ($effect with automatic teardown)
$effect(() => {
  const timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
});`;

  const code4React = `// React 19 (useEffect with cleanup)
useEffect(() => {
  const timer = setInterval(tick, 1000);
  return () => clearInterval(timer);
}, [intervalMs]);`;

  // ==========================================
  // Concept 5: $props() & $bindable()
  // ==========================================
  let bindableSearchText = $state("Matrikel");

  const code5Svelte = `// Svelte 5 ($props & $bindable)
// Child.svelte
let { query = $bindable(""), placeholder }: Props = $props();
<input bind:value={query} {placeholder} />

// Parent.svelte
<Child bind:query={searchText} />`;

  const code5React = `// React 19 (Props + onChange handler)
// Child.tsx
const Child = ({ query, onChange, placeholder }: Props) => (
  <input value={query} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
);

// Parent.tsx
<Child query={searchText} onChange={setSearchText} />`;

  // ==========================================
  // Concept 6: {#snippet} and {@render}
  // ==========================================
  const code6Svelte = `// Svelte 5 ({#snippet} & {@render})
{#snippet layerBadge(name: string, size: number)}
  <span class="badge">{name} ({size} MB)</span>
{/snippet}

{@render layerBadge("Matrikel", 85.6)}`;

  const code6React = `// React 19 (JSX Render Prop / Helper)
const renderLayerBadge = (name: string, size: number) => (
  <span className="badge">{name} ({size} MB)</span>
);

{renderLayerBadge("Matrikel", 85.6)}`;

  // ==========================================
  // Concept 7: Standalone .svelte.ts Store vs Redux/Zustand
  // ==========================================
  const code7Svelte = `// Svelte 5 (Pure TypeScript class in store.svelte.ts)
class SpatialStore {
  activeLayer = $state("Kommuneplan");
  zoom = $state(12);
  label = $derived(\`\${this.activeLayer} (Zoom: \${this.zoom})\`);
}
export const spatialStore = new SpatialStore();`;

  const code7React = `// React + Zustand (External store library)
export const useSpatialStore = create<State>((set) => ({
  activeLayer: "Kommuneplan",
  zoom: 12,
  setActiveLayer: (l) => set({ activeLayer: l }),
  setZoom: (z) => set({ zoom: z }),
}));`;

  // ==========================================
  // Concept 8: Simulated SvelteKit Server Loader
  // ==========================================
  let simulatedRouteId = $state("matrikel");
  let isLoadingServerData = $state(false);
  let serverPageData = $state<{
    id: string;
    title: string;
    authLevel: string;
    cachedAt: string;
  } | null>(null);

  const simulateServerLoad = async (id: string) => {
    isLoadingServerData = true;
    simulatedRouteId = id;
    await new Promise((resolve) => setTimeout(resolve, 350));
    serverPageData = {
      id,
      title: id === "matrikel" ? "Matrikelkort WFS/MVT" : id === "orto" ? "Ortofoto 2026 WMS" : "DHM DTM REST",
      authLevel: "KDS_INTERNAL_SECRET_TOKEN_VERIFIED",
      cachedAt: new Date().toLocaleTimeString(),
    };
    isLoadingServerData = false;
  };

  $effect(() => {
    simulateServerLoad("matrikel");
  });

  const code8Svelte = `// SvelteKit (+page.server.ts & +page.svelte)
// +page.server.ts (Runs securely in Node.js)
export const load: PageServerLoad = async ({ fetch }) => ({
  layer: await (await fetch('/api/layer')).json()
});

// +page.svelte (Hydrates client component)
let { data }: { data: PageData } = $props();`;

  const code8React = `// Next.js (Server Component / getServerSideProps)
// app/layer/[id]/page.tsx
export default async function LayerPage({ params }) {
  const layer = await fetchLayer(params.id);
  return <div>{layer.title}</div>;
}`;

  // ==========================================
  // Concept 10: Simulated SvelteKit Nested Layout Route
  // ==========================================
  let currentNestedPath = $state<"/layers/settings" | "/layers/preview" | "/layers/metadata">("/layers/settings");

  const code10Svelte =
    `// SvelteKit (+layout.svelte)\n` +
    `<` +
    `script lang="ts">\n` +
    `  import type { Snippet } from 'svelte';\n` +
    `  let { children }: { children: Snippet } = $props();\n` +
    `<` +
    `/script>\n\n` +
    `<nav class="shell-nav">Dataforsyningen.dk</nav>\n` +
    `<main>{@render children()}</main>`;

  const code10React =
    `// Next.js (app/layout.tsx)\n` +
    `export default function RootLayout({ children }: { children: React.ReactNode }) {\n` +
    `  return (\n` +
    `    <div>\n` +
    `      <nav className="shell-nav">Dataforsyningen.dk</nav>\n` +
    `      <main>{children}</main>\n` +
    `    </div>\n` +
    `  );\n` +
    `}`;
</script>

<!-- Snippet Definition 1: Badge Chip -->
{#snippet badgeChip(label: string, active: boolean, sizeMb?: number)}
  <div class="snippet-chip" class:chip-active={active}>
    <span class="chip-dot"></span>
    <span class="chip-text">{label}</span>
    {#if sizeMb !== undefined}
      <span class="chip-size">{sizeMb} MB</span>
    {/if}
  </div>
{/snippet}

<div class="playground-wrapper">
  <!-- Category Selector Bar -->
  <div class="category-bar">
    <button
      class="cat-btn"
      class:active={selectedCategory === "all"}
      onclick={() => (selectedCategory = "all")}
    >
      All 10 Concepts (#1 – #10)
    </button>
    <button
      class="cat-btn"
      class:active={selectedCategory === "runes"}
      onclick={() => (selectedCategory = "runes")}
    >
      Runes (#1 – #4)
    </button>
    <button
      class="cat-btn"
      class:active={selectedCategory === "templates"}
      onclick={() => (selectedCategory = "templates")}
    >
      Props & Snippets (#5 – #6)
    </button>
    <button
      class="cat-btn"
      class:active={selectedCategory === "architecture"}
      onclick={() => (selectedCategory = "architecture")}
    >
      Stores & SvelteKit (#7 – #10)
    </button>
  </div>

  <div class="cards-grid">
    <!-- Card 1: $state() vs useState() -->
    {#if selectedCategory === "all" || selectedCategory === "runes"}
      <PlaygroundCard
        badgeNum="1"
        title="$state(value)"
        subtitle="vs. React useState() (Direct ES6 Proxy Mutation)"
        svelteCode={code1Svelte}
        reactCode={code1React}
      >
        <p class="desc">Direct mutation without <code>setCount(prev => prev + 1)</code>. Proxies handle objects automatically.</p>
        <div class="row-controls">
          <button class="btn primary" onclick={() => (counter += 1)}>+ Increment ({counter})</button>
          <button class="btn secondary" onclick={toggleUserStatus}>Toggle Active ({userProfile.active ? "Active" : "Inactive"})</button>
        </div>
        <div class="result-box">
          <div><strong>Primitive:</strong> <code>counter = {counter}</code></div>
          <div><strong>Deep Object Proxy:</strong> <code>{userProfile.name} | {userProfile.role} ({userProfile.preferences.crs})</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 1b: bind:this vs useRef() -->
    {#if selectedCategory === "all" || selectedCategory === "runes"}
      <PlaygroundCard
        badgeNum="1b"
        title={'bind:this={el}'}
        subtitle="vs. React useRef(null) (Direct DOM Node Attachment)"
        svelteCode={code1bSvelte}
        reactCode={code1bReact}
      >
        <p class="desc">Binds the exact browser DOM element without <code>ref.current</code> boilerplate.</p>
        <div bind:this={measuredBox} class="measured-target-box">
          <span>Live Target DOM Container</span>
          <button class="btn small" onclick={measureElement}>Measure Container</button>
        </div>
        <div class="result-box">
          <div><strong>Measured Dimensions:</strong> <code>Width: {boxDimensions.width}px, Height: {boxDimensions.height}px</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 2: $derived() vs useMemo() -->
    {#if selectedCategory === "all" || selectedCategory === "runes"}
      <PlaygroundCard
        badgeNum="2"
        title="$derived(expr)"
        subtitle="vs. React useMemo() (Zero Dependency Array)"
        svelteCode={code2Svelte}
        reactCode={code2React}
      >
        <p class="desc">Computed state that auto-tracks <code>counter</code> with zero <code>[deps]</code> array.</p>
        <div class="result-box">
          <div><strong>Base Counter ($state):</strong> <span class="badge-num">{counter}</span></div>
          <div><strong>Doubled ($derived):</strong> <span class="badge-num">{doubleCount}</span></div>
          <div><strong>Spatial Resolution:</strong> <code>{zoomResolution} meters/pixel</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 3: $derived.by() vs multi-line useMemo() -->
    {#if selectedCategory === "all" || selectedCategory === "runes"}
      <PlaygroundCard
        badgeNum="3"
        title="$derived.by(() => ...)"
        subtitle="vs. Multi-line useMemo() (Loops & Aggregations)"
        svelteCode={code3Svelte}
        reactCode={code3React}
      >
        <p class="desc">Calculates multi-step aggregations over array filters automatically.</p>
        <input
          type="text"
          bind:value={layerFilterQuery}
          placeholder="Type layer name (e.g. Matrikel, Orto, DHM)..."
          class="filter-input"
        />
        <div class="layer-chips-row">
          {#each filteredLayersSummary.matched as layer (layer.id)}
            <button
              type="button"
              class="chip-toggle"
              class:active={layer.visible}
              onclick={() => (layer.visible = !layer.visible)}
            >
              {@render badgeChip(layer.name, layer.visible, layer.sizeMb)}
            </button>
          {/each}
        </div>
        <div class="result-box">
          <div><strong>Matched:</strong> {filteredLayersSummary.totalMatched} | <strong>Active:</strong> {filteredLayersSummary.activeCount} | <strong>Total Size:</strong> <code>{filteredLayersSummary.totalMb} MB</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 4: $effect() vs useEffect() -->
    {#if selectedCategory === "all" || selectedCategory === "runes"}
      <PlaygroundCard
        badgeNum="4"
        title="$effect(() => ...)"
        subtitle="vs. React useEffect() (Microtask Batching & Cleanup)"
        svelteCode={code4Svelte}
        reactCode={code4React}
      >
        <p class="desc">Runs microtask side effects and executes returned cleanup function on change or unmount.</p>
        <div class="row-controls">
          <button
            class="btn"
            class:danger={isHeartbeatRunning}
            class:primary={!isHeartbeatRunning}
            onclick={() => (isHeartbeatRunning = !isHeartbeatRunning)}
          >
            {isHeartbeatRunning ? "⏹ Stop Timer" : "▶ Start Microtask Heartbeat"}
          </button>
          <span class="ticks-badge">Ticks: <strong>{heartbeatTicks}</strong></span>
        </div>
        <div class="log-stream">
          {#each effectLog as entry, idx (idx + entry)}
            <div class="log-line">{entry}</div>
          {/each}
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 5: $props() & $bindable() vs Props & Callbacks -->
    {#if selectedCategory === "all" || selectedCategory === "templates"}
      <PlaygroundCard
        badgeNum="5"
        title="$props() & $bindable()"
        subtitle="vs. React Props & Callback Boilerplate"
        svelteCode={code5Svelte}
        reactCode={code5React}
      >
        <p class="desc">Two-way parent/child synchronization using clean <code>$bindable()</code>.</p>
        <div class="child-demo-box">
          <span class="demo-label">Child <code>&lt;BindableSearchInput /&gt;</code>:</span>
          <BindableSearchInput bind:value={bindableSearchText} placeholder="Type in child component..." />
        </div>
        <div class="result-box">
          <div><strong>Parent State Synced:</strong> <code>bindableSearchText = "{bindableSearchText}"</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 6: {#snippet} & {@render} vs Render Props -->
    {#if selectedCategory === "all" || selectedCategory === "templates"}
      <PlaygroundCard
        badgeNum="6"
        title={'{#snippet} & {@render}'}
        subtitle="vs. React Render Props / JSX Helper Functions"
        svelteCode={code6Svelte}
        reactCode={code6React}
      >
        <p class="desc">Type-safe parameterized template snippet closures rendering with <code>&#123;@render snippet()&#125;</code>.</p>
        <div class="snippet-demo-grid">
          {@render badgeChip("KDS Cadastre WFS", true, 85.6)}
          {@render badgeChip("DMI Radar Precipitation", true, 12.4)}
          {@render badgeChip("Offline Vector Archive", false, 450.0)}
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 7: Standalone .svelte.ts Store vs Redux / Zustand -->
    {#if selectedCategory === "all" || selectedCategory === "architecture"}
      <PlaygroundCard
        badgeNum="7"
        title="Standalone .svelte.ts"
        subtitle="vs. Redux / Zustand (Zero Provider Wrapper Hell)"
        svelteCode={code7Svelte}
        reactCode={code7React}
      >
        <p class="desc">Pure TypeScript class with <code>$state</code> used globally without context providers.</p>
        <div class="row-controls">
          <button class="btn secondary" onclick={() => spatialStore.toggleLayer("ortofoto")}>
            Toggle Ortofoto ({spatialStore.layers.find(l => l.id === "ortofoto")?.visible ? "ON" : "OFF"})
          </button>
          <button class="btn secondary" onclick={() => spatialStore.setZoom(spatialStore.zoom + 1)}>
            + Zoom In ({spatialStore.zoom.toFixed(1)})
          </button>
        </div>
        <div class="result-box">
          <div><strong>Global Store Metric:</strong> <code>{spatialStore.activeLayerCount} Active Layers | Est. {spatialStore.estimatedTileLoad} Tiles</code></div>
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 8 & 9: SvelteKit Server Load & Hydration -->
    {#if selectedCategory === "all" || selectedCategory === "architecture"}
      <PlaygroundCard
        badgeNum="8-9"
        title="+page.server.ts & +page.svelte"
        subtitle="vs. Next.js getServerSideProps & Page Component"
        svelteCode={code8Svelte}
        reactCode={code8React}
      >
        <p class="desc">Simulates server loader with secure backend tokens and typed <code>PageData</code>.</p>
        <div class="row-controls">
          <button class="btn small" class:primary={simulatedRouteId === "matrikel"} onclick={() => simulateServerLoad("matrikel")}>Matrikel</button>
          <button class="btn small" class:primary={simulatedRouteId === "orto"} onclick={() => simulateServerLoad("orto")}>Ortofoto</button>
          <button class="btn small" class:primary={simulatedRouteId === "dhm"} onclick={() => simulateServerLoad("dhm")}>Elevation DHM</button>
        </div>
        <div class="result-box">
          {#if isLoadingServerData}
            <div class="loading-pulse">⚡ Fetching from SvelteKit <code>+page.server.ts</code>...</div>
          {:else if serverPageData}
            <div><strong>Server Route:</strong> <code>/layers/{serverPageData.id}</code></div>
            <div><strong>Data Object:</strong> <code>{serverPageData.title} (Auth: {serverPageData.authLevel})</code></div>
            <div><strong>Loaded At:</strong> <code>{serverPageData.cachedAt}</code></div>
          {/if}
        </div>
      </PlaygroundCard>
    {/if}

    <!-- Card 10: SvelteKit +layout.svelte Nested Layout -->
    {#if selectedCategory === "all" || selectedCategory === "architecture"}
      <PlaygroundCard
        badgeNum="10"
        title="+layout.svelte"
        subtitle="vs. Next.js app/layout.tsx (Persistent UI Shell)"
        svelteCode={code10Svelte}
        reactCode={code10React}
      >
        <p class="desc">Persistent outer shell layout rendering nested active child pages with <code>&#123;@render children()&#125;</code>.</p>
        <div class="simulated-browser-shell">
          <div class="shell-bar">
            <span class="shell-title">Dataforsyningen.dk / Layers</span>
            <div class="shell-nav">
              <button
                class="shell-link"
                class:active={currentNestedPath === "/layers/settings"}
                onclick={() => (currentNestedPath = "/layers/settings")}
              >
                Settings
              </button>
              <button
                class="shell-link"
                class:active={currentNestedPath === "/layers/preview"}
                onclick={() => (currentNestedPath = "/layers/preview")}
              >
                Preview
              </button>
              <button
                class="shell-link"
                class:active={currentNestedPath === "/layers/metadata"}
                onclick={() => (currentNestedPath = "/layers/metadata")}
              >
                Metadata
              </button>
            </div>
          </div>
          <div class="nested-child-page">
            {#if currentNestedPath === "/layers/settings"}
              <div class="page-content">⚙️ Layer Projection & Tile Cache Settings (CRS: EPSG:25832)</div>
            {:else if currentNestedPath === "/layers/preview"}
              <div class="page-content">🗺️ High-Resolution WebGL Vector Tile Preview</div>
            {:else}
              <div class="page-content">📋 INSPIRE / ISO 19115 Geospatial Metadata Schema</div>
            {/if}
          </div>
        </div>
      </PlaygroundCard>
    {/if}
  </div>
</div>

<style>
  /* Outer flex container wrapping filter tabs and cards grid */
  .playground-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  /* Filter category pill bar container */
  .category-bar {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    background: #0f172a;
    padding: 6px;
    border-radius: 8px;
    border: 1px solid #1e293b;
  }

  /* Category selector tab button */
  .cat-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 6px 14px;
    font-size: 0.8125rem;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  /* Category tab button hover state */
  .cat-btn:hover {
    color: #f8fafc;
    background: #1e293b;
  }

  /* Active/selected category tab button styling */
  .cat-btn.active {
    background: #38bdf8;
    color: #0f172a;
    font-weight: 600;
  }

  /* Responsive grid layout holding all playground concept cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 16px;
  }

  /* Card description summary paragraph */
  .desc {
    color: #cbd5e1;
    font-size: 0.8125rem;
    margin: 0;
  }

  /* Horizontal action button controls row */
  .row-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  /* Base interactive action button */
  .btn {
    padding: 6px 12px;
    font-size: 0.8125rem;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid #475569;
    background: #334155;
    color: #f8fafc;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  /* Base button hover state */
  .btn:hover {
    background: #475569;
  }

  /* Primary action button variant */
  .btn.primary {
    background: #0284c7;
    border-color: #38bdf8;
  }

  /* Primary button hover state */
  .btn.primary:hover {
    background: #0369a1;
  }

  /* Destructive action button variant */
  .btn.danger {
    background: #dc2626;
    border-color: #ef4444;
  }

  /* Destructive button hover state */
  .btn.danger:hover {
    background: #b91c1c;
  }

  /* Compact button variant */
  .btn.small {
    padding: 4px 8px;
    font-size: 0.75rem;
  }

  /* Formatted live evaluation output panel */
  .result-box {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 0.8125rem;
    color: #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Numeric badge highlight label */
  .badge-num {
    color: #38bdf8;
    font-weight: 700;
  }

  /* Target element box for bind:this DOM measurement demonstration */
  .measured-target-box {
    background: #0f172a;
    border: 1px dashed #38bdf8;
    border-radius: 6px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #94a3b8;
    font-size: 0.8125rem;
  }

  /* Text input for dynamic layer filtering */
  .filter-input {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 6px 10px;
    color: #f8fafc;
    font-size: 0.8125rem;
    outline: none;
  }

  /* Filter input focus outline */
  .filter-input:focus {
    border-color: #38bdf8;
  }

  /* Vertical stack for rendered snippet chips */
  .layer-chips-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  /* Reset wrapper button for clickable chip badges */
  .chip-toggle {
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }

  /* Badge chip container created by {#snippet} */
  .snippet-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 6px 10px;
    color: #94a3b8;
    font-size: 0.8125rem;
    transition: all 0.15s ease;
  }

  /* Active state for badge chip */
  .snippet-chip.chip-active {
    border-color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);
    color: #f8fafc;
  }

  /* Status indicator dot inside chip */
  .chip-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #64748b;
  }

  /* Glowing dot indicator for active chip */
  .chip-active .chip-dot {
    background: #38bdf8;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
  }

  /* Text label inside chip */
  .chip-text {
    flex: 1;
  }

  /* Layer size label inside chip */
  .chip-size {
    font-size: 0.75rem;
    color: #64748b;
  }

  /* Heartbeat ticks counter badge */
  .ticks-badge {
    color: #38bdf8;
    font-size: 0.8125rem;
  }

  /* Scrolling log console for microtask lifecycle effects */
  .log-stream {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 6px 10px;
    font-family: monospace;
    font-size: 0.75rem;
    color: #a5b4fc;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* Single log output entry line */
  .log-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Child component demo container */
  .child-demo-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* Child demo description label */
  .demo-label {
    font-size: 0.75rem;
    color: #94a3b8;
  }

  /* Grid layout demonstrating multiple snippet render outputs */
  .snippet-demo-grid {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  /* Simulated browser shell window for SvelteKit +layout demonstration */
  .simulated-browser-shell {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    overflow: hidden;
  }

  /* Browser shell top navigation bar */
  .shell-bar {
    background: #1e293b;
    padding: 6px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #334155;
  }

  /* Browser shell title text */
  .shell-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #cbd5e1;
  }

  /* Browser shell link navigation group */
  .shell-nav {
    display: flex;
    gap: 4px;
  }

  /* Browser shell navigation route tab link */
  .shell-link {
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 0.75rem;
    padding: 2px 6px;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Active route link inside browser shell */
  .shell-link.active {
    background: #0284c7;
    color: #f8fafc;
  }

  /* Container displaying nested child route content */
  .nested-child-page {
    padding: 12px;
  }

  /* Child page text content */
  .page-content {
    font-size: 0.8125rem;
    color: #38bdf8;
  }

  /* Loading animation pulse indicator */
  .loading-pulse {
    color: #f59e0b;
    font-weight: 500;
  }
</style>
