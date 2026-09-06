<script lang="ts">
  /**
   * Svelte 5 Runes Live Interactive Playground.
   * What: Hands-on demonstration of the 5 core Svelte 5 runes ($state, $derived, $effect, $props, snippets).
   * When: Displayed under the Runes tab in the 1-svelte ramp-up sandbox.
   * Why: Provides an interactive testing ground so Jonas can see real-time signal reactivity in action before the interview.
   */

  // 1. $state(): Primitive and deep reactive state
  let counter = $state<number>(1);
  let coordinate = $state({ lon: 12.5683, lat: 55.6761, name: "København H" });

  // 2. $derived() & $derived.by(): Computed values
  const doubleCount = $derived(counter * 2);
  const formattedCoord = $derived.by(() => {
    return `${coordinate.name}: ${coordinate.lat.toFixed(4)}°N, ${coordinate.lon.toFixed(4)}°E (Zoom Est: ${Math.min(18, 5 + counter)})`;
  });

  // 3. $effect(): Reactive side effects with automatic cleanup
  let isTimerRunning = $state<boolean>(false);
  let timerTicks = $state<number>(0);

  $effect(() => {
    if (!isTimerRunning) return;

    // Start interval
    const interval = setInterval(() => {
      timerTicks += 1;
    }, 1000);

    // Return cleanup teardown function (runs when isTimerRunning changes or component unmounts)
    return () => {
      clearInterval(interval);
    };
  });

  // Spatial point sample list
  let points = $state([
    { id: 1, label: "Klimadatastyrelsen (Rentemestervej)", lat: 55.7032, lon: 12.5312 },
    { id: 2, label: "DMI (Sankt Kjelds Plads)", lat: 55.7112, lon: 12.5645 },
    { id: 3, label: "Datafordeleren Node (Statens IT)", lat: 55.6625, lon: 12.5912 },
  ]);

  const addRandomPoint = () => {
    const id = points.length + 1;
    points.push({
      id,
      label: `Observation Point #${id}`,
      lat: 55.6 + Math.random() * 0.2,
      lon: 12.4 + Math.random() * 0.3,
    });
  };
</script>

<!-- 4. {#snippet}: Reusable template fragment with parameters (replaces legacy slots) -->
{#snippet pointBadge(label: string, lat: number, lon: number)}
  <div class="snippet-badge">
    <span class="badge-dot"></span>
    <div class="badge-info">
      <strong>{label}</strong>
      <code>{lat.toFixed(4)}, {lon.toFixed(4)}</code>
    </div>
  </div>
{/snippet}

<div class="playground-grid">
  <!-- Card 1: $state & $derived -->
  <div class="demo-card">
    <div class="card-header">
      <span class="rune-tag">$state & $derived</span>
      <h4>Fine-Grained Signal Reactivity</h4>
    </div>
    <p class="demo-desc">
      Mutating <code>counter</code> updates only the text node below without re-running the component function.
    </p>
    <div class="interactive-row">
      <button class="action-btn" onclick={() => (counter += 1)}>+ Increment Counter</button>
      <button class="action-btn secondary" onclick={() => (counter = Math.max(0, counter - 1))}>- Decrement</button>
    </div>
    <div class="output-box">
      <div><strong>Counter ($state):</strong> <span class="highlight">{counter}</span></div>
      <div><strong>Double ($derived):</strong> <span class="highlight">{doubleCount}</span></div>
      <div><strong>Location ($derived.by):</strong> <span class="highlight-sub">{formattedCoord}</span></div>
    </div>
  </div>

  <!-- Card 2: $effect Lifecycle & Cleanup -->
  <div class="demo-card">
    <div class="card-header">
      <span class="rune-tag">$effect</span>
      <h4>Microtask Side Effects & Teardown</h4>
    </div>
    <p class="demo-desc">
      <code>$effect</code> runs inside the microtask queue and cleans up automatically via returned teardown callback.
    </p>
    <div class="interactive-row">
      <button
        class="action-btn"
        class:running={isTimerRunning}
        onclick={() => (isTimerRunning = !isTimerRunning)}
      >
        {isTimerRunning ? "⏹ Stop Telemetry Timer" : "▶ Start Telemetry Timer"}
      </button>
      <button class="action-btn secondary" onclick={() => (timerTicks = 0)}>Reset Ticks</button>
    </div>
    <div class="output-box">
      <div><strong>Timer State:</strong> {isTimerRunning ? "🟢 Active (1s Interval)" : "⚪ Paused"}</div>
      <div><strong>Accumulated Ticks:</strong> <span class="highlight">{timerTicks}s</span></div>
    </div>
  </div>

  <!-- Card 3: Snippets (Svelte 5 Replacement for Slots) -->
  <div class="demo-card full-width">
    <div class="card-header">
      <span class="rune-tag">&#123;#snippet&#125; & &#123;@render&#125;</span>
      <h4>Reusable Template Snippets</h4>
    </div>
    <p class="demo-desc">
      Svelte 5 replaces bulky slots with first-class template snippets that take typed arguments.
    </p>
    <div class="interactive-row">
      <button class="action-btn" onclick={addRandomPoint}>+ Append Spatial Point</button>
    </div>
    <div class="snippet-list">
      {#each points as pt (pt.id)}
        <!-- Render snippet with arguments -->
        {@render pointBadge(pt.label, pt.lat, pt.lon)}
      {/each}
    </div>
  </div>
</div>

<style>
  .playground-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .demo-card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 8px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .demo-card.full-width {
    grid-column: 1 / -1;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .rune-tag {
    background: #ea580c;
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: monospace;
  }

  h4 {
    margin: 0;
    font-size: 1.05rem;
    color: #f1f5f9;
  }

  .demo-desc {
    color: #94a3b8;
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.4;
  }

  .demo-desc code {
    color: #38bdf8;
    background: #1e293b;
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
  }

  .interactive-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .action-btn {
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.85rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .action-btn:hover {
    background: #1d4ed8;
  }

  .action-btn.secondary {
    background: #334155;
  }

  .action-btn.secondary:hover {
    background: #475569;
  }

  .action-btn.running {
    background: #dc2626;
  }

  .action-btn.running:hover {
    background: #b91c1c;
  }

  .output-box {
    background: #020617;
    border: 1px solid #1e293b;
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 0.85rem;
    color: #cbd5e1;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .highlight {
    color: #38bdf8;
    font-weight: 700;
    font-family: monospace;
  }

  .highlight-sub {
    color: #86efac;
    font-family: monospace;
    font-size: 0.8rem;
  }

  .snippet-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.5rem;
  }

  .snippet-badge {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: #020617;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ea580c;
    flex-shrink: 0;
  }

  .badge-info {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }

  .badge-info strong {
    color: #f1f5f9;
  }

  .badge-info code {
    color: #94a3b8;
    font-size: 0.75rem;
  }
</style>
