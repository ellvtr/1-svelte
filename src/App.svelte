<script lang="ts">
  /**
   * Svelte 5 Spatial Architecture Sandbox Root.
   * What: Root orchestrator component integrating OpenLayers mapping, SvelteKit SSR architecture, and Svelte 5 runes.
   * When: Main application entry point for the 1-svelte spatial frontend sandbox.
   * Why: Serves as interactive proof of Svelte 5 reactivity, spatial data streaming, and Senior Frontend readiness.
   */

  import SpatialMap from "./components/SpatialMap.svelte";
  import LayerControls from "./components/LayerControls.svelte";
  import SvelteKitArchitecture from "./components/SvelteKitArchitecture.svelte";
  import RunesLivePlayground from "./components/RunesLivePlayground.svelte";
  import { spatialStore } from "./services/spatialStore.svelte";

  // Tab navigation state using Svelte 5 $state rune
  let activeTab = $state<"map" | "sveltekit" | "runes" | "telemetry">("map");

  // Derived telemetry metrics
  const activeLayersCount = $derived(spatialStore.activeLayerCount);
  const zoomLevel = $derived(Math.round(spatialStore.zoom));
  const tileCount = $derived(spatialStore.estimatedTileLoad);
</script>

<main class="app-layout">
  <header class="app-header">
    <div class="brand-row">
      <span class="version-badge">Svelte 5 Runes + TS</span>
      <h1>Spatial Data Architecture Sandbox</h1>
    </div>
    <p class="lead-text">
      Danish geospatial infrastructure sandbox: OpenLayers integration, SvelteKit 2 SSR loaders, and
      fine-grained signal reactivity.
    </p>
  </header>

  <nav class="nav-tabs">
    <button class="nav-btn" class:active={activeTab === "map"} onclick={() => (activeTab = "map")}>
      OpenLayers Map ({activeLayersCount} Active)
    </button>
    <button
      class="nav-btn"
      class:active={activeTab === "sveltekit"}
      onclick={() => (activeTab = "sveltekit")}
    >
      SvelteKit SSR & Routing
    </button>
    <button
      class="nav-btn"
      class:active={activeTab === "runes"}
      onclick={() => (activeTab = "runes")}
    >
      Runes vs React Matrix
    </button>
    <button
      class="nav-btn"
      class:active={activeTab === "telemetry"}
      onclick={() => (activeTab = "telemetry")}
    >
      Reactive Telemetry
    </button>
  </nav>

  {#if activeTab === "map"}
    <section class="view-panel">
      <div class="map-grid">
        <SpatialMap initialZoom={7} initialLon={10.5} initialLat={56.0} />
        <LayerControls />
      </div>
    </section>
  {/if}

  {#if activeTab === "sveltekit"}
    <section class="view-panel">
      <div class="panel-intro">
        <h2>SvelteKit 2 Server & Universal Data Flow</h2>
        <p>Patterns for securing GIS tokens, streaming GeoJSON polygons, and server actions.</p>
      </div>
      <SvelteKitArchitecture />
    </section>
  {/if}

  {#if activeTab === "runes"}
    <section class="view-panel">
      <div class="panel-intro">
        <h2>Svelte 5 Runes vs Svelte 4 / React 19</h2>
        <p>
          Architectural comparison of reactivity primitives, compile-time proxies, and performance.
        </p>
      </div>
      <div class="table-container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="width: 48px; text-align: center;">#</th>
              <th>Concept / Capability</th>
              <th>Svelte 5 (Runes) & SvelteKit</th>
              <th>React / Next.js</th>
              <th>Key Technical & Mental Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">1</span></td>
              <td><strong>Reactive State</strong></td>
              <td><code>let count = $state(0);</code></td>
              <td><code>const [count, setCount] = useState(0);</code></td>
              <td>Zero setter boilerplate. Mutate directly (<code>count++</code>). Proxies objects/arrays.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">1b</span></td>
              <td><strong>DOM Ref / Mutable Raw</strong></td>
              <td><code>bind:this=&#123;el&#125;</code> / <code>$state.raw()</code></td>
              <td><code>const elRef = useRef(null);</code></td>
              <td>Direct DOM node binding without <code>ref.current</code> boilerplate.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">2</span></td>
              <td><strong>Computed State</strong></td>
              <td><code>let double = $derived(count * 2);</code></td>
              <td><code>useMemo(() =&gt; count * 2, [count])</code></td>
              <td>Auto-tracked dependencies. No manual dependency array risking stale closures.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">3</span></td>
              <td><strong>Multi-line Computed</strong></td>
              <td><code>let sum = $derived.by(() =&gt; &#123; ... &#125;)</code></td>
              <td><code>useMemo(() =&gt; &#123; ... &#125;, [deps])</code></td>
              <td>For complex logic containing loops, conditions, or multi-step aggregations.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">4</span></td>
              <td><strong>Side Effects & Lifecycle</strong></td>
              <td><code>$effect(() =&gt; &#123; ... return () =&gt; clean(); &#125;);</code></td>
              <td><code>useEffect(() =&gt; &#123; ... return () =&gt; clean(); &#125;, [deps]);</code></td>
              <td>Auto-tracks runtime signal reads. Batches updates into microtasks before paint.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">5</span></td>
              <td><strong>Props & Two-Way Binding</strong></td>
              <td><code>let &#123; val = $bindable() &#125; = $props();</code></td>
              <td><code>const &#123; val, onChange &#125; = props;</code></td>
              <td>Type-safe props with <code>$bindable()</code> for optional clean two-way synchronization.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">6</span></td>
              <td><strong>Render Props / Snippets</strong></td>
              <td><code>&#123;#snippet item(data)&#125;</code> + <code>&#123;@render item(data)&#125;</code></td>
              <td><code>renderItem=&#123;(data) =&gt; &lt;div&gt;...&lt;/div&gt;&#125;</code></td>
              <td>Type-safe parameterized template closures replacing legacy <code>&lt;slot /&gt;</code>.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">7</span></td>
              <td><strong>Global Shared Store</strong></td>
              <td>Standalone <code>.svelte.ts</code> class with <code>$state</code></td>
              <td>Redux / Zustand / React Context</td>
              <td>Zero provider wrapper hell. Works in pure TypeScript modules without React tree context.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">8</span></td>
              <td><strong>Server Data Loading</strong></td>
              <td><code>+page.server.ts</code> <code>export const load</code></td>
              <td><code>getServerSideProps</code> / Server Components</td>
              <td>Runs strictly on server (Node.js/Bun). Secrets never leak to client bundle.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">9</span></td>
              <td><strong>Page Component</strong></td>
              <td><code>+page.svelte</code> (<code>let &#123; data &#125; = $props()</code>)</td>
              <td><code>export default function Page(&#123; data &#125;)</code></td>
              <td>Client UI component immediately hydrated with typed server <code>PageData</code>.</td>
            </tr>
            <tr>
              <td style="text-align: center;"><span class="concept-badge">10</span></td>
              <td><strong>Nested Layouts</strong></td>
              <td><code>+layout.svelte</code> (<code>&#123;@render children()&#125;</code>)</td>
              <td><code>app/layout.tsx</code> (<code>&#123;children&#125;</code>)</td>
              <td>Persistent UI shell; only active nested sub-routes re-render during navigation.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RunesLivePlayground />
    </section>
  {/if}

  {#if activeTab === "telemetry"}
    <section class="view-panel">
      <div class="panel-intro">
        <h2>Spatial Telemetry & Reactive Computation</h2>
        <p>
          Real-time telemetry computed via Svelte 5 $derived runes without manual subscriptions.
        </p>
      </div>
      <div class="telemetry-grid">
        <div class="card">
          <span class="card-label">Current Zoom Level</span>
          <span class="card-value">{zoomLevel}</span>
          <span class="card-sub">Updated via OpenLayers moveend</span>
        </div>
        <div class="card">
          <span class="card-label">Active Layers</span>
          <span class="card-value">{activeLayersCount} / {spatialStore.layers.length}</span>
          <span class="card-sub">Fine-grained layer filter</span>
        </div>
        <div class="card">
          <span class="card-label">Estimated Tile Matrix</span>
          <span class="card-value">{tileCount.toLocaleString()}</span>
          <span class="card-sub">Computed via $derived</span>
        </div>
        <div class="card">
          <span class="card-label">Map Engine</span>
          <span class="card-value code-accent">OpenLayers 10.10</span>
          <span class="card-sub">Zero-VDOM native DOM target</span>
        </div>
      </div>
    </section>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #0b1120;
    color: #f8fafc;
    min-height: 100vh;
  }

  .app-layout {
    max-width: 1040px;
    margin: 0 auto;
    padding: 2rem 1.25rem;
  }

  .app-header {
    margin-bottom: 1.5rem;
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .version-badge {
    background: #ea580c;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    letter-spacing: 0.04em;
  }

  h1 {
    font-size: 1.6rem;
    margin: 0;
    font-weight: 700;
    color: #f1f5f9;
  }

  .lead-text {
    color: #94a3b8;
    margin: 0.5rem 0 0;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .nav-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid #1e293b;
    padding-bottom: 0.5rem;
    flex-wrap: wrap;
  }

  .nav-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 0.55rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .nav-btn:hover {
    color: #f1f5f9;
    background: #1e293b;
  }

  .nav-btn.active {
    background: #2563eb;
    color: #ffffff;
  }

  .view-panel {
    background: #131d31;
    border: 1px solid #1e293b;
    border-radius: 12px;
    padding: 1.25rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  }

  .map-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .panel-intro {
    margin-bottom: 1rem;
  }

  .panel-intro h2 {
    margin: 0 0 0.25rem;
    font-size: 1.2rem;
    color: #f1f5f9;
  }

  .panel-intro p {
    margin: 0;
    font-size: 0.85rem;
    color: #94a3b8;
  }

  .table-container {
    overflow-x: auto;
    margin-top: 0.5rem;
  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #1e293b;
  }

  .comparison-table th {
    color: #94a3b8;
    font-weight: 600;
  }

  .comparison-table code {
    color: #f97316;
    background: #0b1120;
    padding: 0.15rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.8rem;
  }

  .concept-badge {
    background: #0284c7;
    color: #f8fafc;
    font-weight: 700;
    font-size: 0.75rem;
    padding: 2px 7px;
    border-radius: 4px;
    display: inline-block;
  }

  .telemetry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .card-label {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
  }

  .card-value {
    font-size: 1.4rem;
    font-weight: 700;
    color: #f8fafc;
  }

  .card-sub {
    font-size: 0.75rem;
    color: #94a3b8;
  }

  .code-accent {
    font-family: monospace;
    font-size: 1.1rem;
    color: #38bdf8;
  }
</style>
