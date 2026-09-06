<script lang="ts">
  /**
   * Interactive Playground Card for Rosetta Stone Demos.
   * What: Encapsulates interactive demo widgets alongside toggleable side-by-side Svelte 5 and React/Next.js code viewers.
   * When: Invoked per concept card in RunesLivePlayground to render concepts #1 through #10.
   * Why: Enables side-by-side comparative inspection between Svelte 5 signal compilation and React VDOM patterns.
   */

  import type { Snippet } from "svelte";

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
</script>

<div class="demo-card">
  <div class="card-header">
    <div class="header-left">
      <span class="concept-num">#{badgeNum}</span>
      <span class="rune-tag">{title}</span>
    </div>
    <span class="subtitle">{subtitle}</span>
  </div>

  <!-- View Switcher -->
  <div class="card-view-tabs">
    <button
      type="button"
      class="view-tab-btn"
      class:active={activeView === "demo"}
      onclick={() => (activeView = "demo")}
    >
      ▶ Live Interactive Demo
    </button>
    <button
      type="button"
      class="view-tab-btn code-tab"
      class:active={activeView === "svelte"}
      onclick={() => (activeView = "svelte")}
    >
      Svelte 5
    </button>
    <button
      type="button"
      class="view-tab-btn code-tab"
      class:active={activeView === "react"}
      onclick={() => (activeView = "react")}
    >
      React / Next.js
    </button>
  </div>

  <div class="card-body">
    {#if activeView === "demo"}
      {@render children()}
    {:else if activeView === "svelte"}
      <div class="code-view svelte-theme">
        <div class="code-badge">Svelte 5 Implementation</div>
        <pre><code>{svelteCode}</code></pre>
      </div>
    {:else}
      <div class="code-view react-theme">
        <div class="code-badge">React / Next.js Implementation</div>
        <pre><code>{reactCode}</code></pre>
      </div>
    {/if}
  </div>
</div>

<style>
  .demo-card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #334155;
    padding-bottom: 10px;
    gap: 8px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .concept-num {
    background: #0284c7;
    color: #f8fafc;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 4px;
  }

  .rune-tag {
    color: #38bdf8;
    font-family: monospace;
    font-weight: 700;
    font-size: 0.95rem;
  }

  .subtitle {
    color: #94a3b8;
    font-size: 0.75rem;
    text-align: right;
  }

  .card-view-tabs {
    display: flex;
    gap: 4px;
    background: #0f172a;
    padding: 3px;
    border-radius: 6px;
    border: 1px solid #1e293b;
  }

  .view-tab-btn {
    flex: 1;
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 5px 8px;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.15s ease;
    text-align: center;
  }

  .view-tab-btn:hover {
    color: #f8fafc;
    background: #1e293b;
  }

  .view-tab-btn.active {
    background: #0284c7;
    color: #f8fafc;
    font-weight: 600;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 110px;
  }

  .code-view {
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 10px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .code-badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .svelte-theme .code-badge {
    color: #ff3e00;
  }

  .react-theme .code-badge {
    color: #00d8ff;
  }

  pre {
    margin: 0;
    font-family: monospace;
    font-size: 0.75rem;
    line-height: 1.4;
    color: #e2e8f0;
    white-space: pre-wrap;
    word-break: break-word;
  }
</style>
