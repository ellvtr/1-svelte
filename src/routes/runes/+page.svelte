<script lang="ts">
  /**
   * Svelte 5 Runes vs React 19 Matrix Route (/runes) (shadcn-svelte & Tailwind).
   * What: Full 10-concept Rosetta Stone comparison matrix and interactive live widgets.
   * When: Loaded on /runes route navigation.
   * Why: Serves as interactive proof of Svelte 5 reactivity vs React VDOM diffing.
   */

  import RunesLivePlayground from "../../components/RunesLivePlayground.svelte";
  import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "$lib/components/ui/table";
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "$lib/components/ui/card";
  import { Cpu } from "lucide-svelte";
</script>

<svelte:head>
  <title>Svelte 5 Runes vs React 19 Matrix | Spatial Data Sandbox</title>
</svelte:head>

<div class="flex flex-col gap-6">
  <!-- Header Intro Card -->
  <Card class="border-slate-800 bg-slate-900/90 shadow-xl">
    <CardHeader class="p-5 pb-3">
      <div class="flex items-center gap-2">
        <Cpu class="h-6 w-6 text-sky-400" />
        <CardTitle class="text-xl">Svelte 5 Runes vs Svelte 4 / React 19</CardTitle>
      </div>
      <CardDescription class="text-sm text-slate-400">
        Architectural comparison of reactivity primitives, compile-time proxies, and performance.
      </CardDescription>
    </CardHeader>

    <CardContent class="p-5 pt-2">
      <!-- 10-Row Rosetta Stone Concept Comparison Table -->
      <div class="rounded-lg border border-slate-800 bg-slate-950/80 overflow-hidden shadow-inner">
        <Table>
          <TableHeader>
            <TableRow class="border-slate-800 bg-slate-900/80">
              <TableHead class="w-12 text-center text-slate-300 font-bold">#</TableHead>
              <TableHead class="text-slate-300 font-bold">Concept / Capability</TableHead>
              <TableHead class="text-slate-300 font-bold">Svelte 5 (Runes) & SvelteKit</TableHead>
              <TableHead class="text-slate-300 font-bold">React 19 / Next.js</TableHead>
              <TableHead class="text-slate-300 font-bold">Key Technical Difference</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <!-- Row 1: Reactive State -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">1</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Reactive State</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let count = $state(0);</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const [count, setCount] = useState(0);</code></TableCell>
              <TableCell class="text-xs text-slate-300">Zero setter boilerplate. Mutate directly (<code class="text-orange-400">count++</code>). Proxies objects/arrays.</TableCell>
            </TableRow>

            <!-- Row 1b: DOM Reference -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">1b</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">DOM Ref / Mutable Raw</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">bind:this=&#123;el&#125;</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const elRef = useRef(null);</code></TableCell>
              <TableCell class="text-xs text-slate-300">Direct DOM node binding without <code class="text-sky-400">ref.current</code> boilerplate.</TableCell>
            </TableRow>

            <!-- Row 2: Computed State -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">2</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Computed State</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let double = $derived(count * 2);</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useMemo(() =&gt; count * 2, [count])</code></TableCell>
              <TableCell class="text-xs text-slate-300">Auto-tracked dependencies. No manual dependency array risking stale closures.</TableCell>
            </TableRow>

            <!-- Row 3: Multi-line Computed -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">3</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Multi-line Computed</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let sum = $derived.by(() =&gt; &#123; ... &#125;)</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useMemo(() =&gt; &#123; ... &#125;, [deps])</code></TableCell>
              <TableCell class="text-xs text-slate-300">For complex logic containing loops, conditions, or multi-step aggregations.</TableCell>
            </TableRow>

            <!-- Row 4: Side Effects & Lifecycle -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">4</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Side Effects & Lifecycle</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">$effect(() =&gt; &#123; ... &#125;);</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useEffect(() =&gt; &#123; ... &#125;, [deps]);</code></TableCell>
              <TableCell class="text-xs text-slate-300">Auto-tracks runtime signal reads. Batches updates into microtasks before paint.</TableCell>
            </TableRow>

            <!-- Row 5: Component Props & Two-Way Binding -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">5</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Props & Two-Way Binding</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let &#123; val = $bindable() &#125; = $props();</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const &#123; val, onChange &#125; = props;</code></TableCell>
              <TableCell class="text-xs text-slate-300">Type-safe props with <code class="text-orange-400">$bindable()</code> for optional clean two-way synchronization.</TableCell>
            </TableRow>

            <!-- Row 6: Render Props / Snippets -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">6</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Render Props / Snippets</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&#123;#snippet item(data)&#125;</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">renderItem=&#123;(data) =&gt; ...&#125;</code></TableCell>
              <TableCell class="text-xs text-slate-300">Type-safe parameterized template closures replacing legacy <code class="text-slate-400">&lt;slot /&gt;</code>.</TableCell>
            </TableRow>

            <!-- Row 7: Global Shared Store -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">7</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Global Shared Store</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">standalone .svelte.ts with $state</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">Redux / Zustand / React Context</code></TableCell>
              <TableCell class="text-xs text-slate-300">Zero provider wrapper hell. Works in pure TypeScript modules without React tree context.</TableCell>
            </TableRow>

            <!-- Row 8: Server Data Loading -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">8</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Server Data Loading</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+page.server.ts load</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">getServerSideProps / RSC</code></TableCell>
              <TableCell class="text-xs text-slate-300">Runs strictly on server (Node.js/Bun). Secrets never leak to client bundle.</TableCell>
            </TableRow>

            <!-- Row 9: Page Component -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">9</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Page Component</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+page.svelte (let &#123; data &#125; = $props())</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">export default function Page()</code></TableCell>
              <TableCell class="text-xs text-slate-300">Client UI component immediately hydrated with typed server <code class="text-orange-400">PageData</code>.</TableCell>
            </TableRow>

            <!-- Row 10: Nested Layouts -->
            <TableRow>
              <TableCell class="text-center"><Badge variant="sky" class="font-mono text-xs">10</Badge></TableCell>
              <TableCell class="font-semibold text-slate-100">Nested Layouts</TableCell>
              <TableCell><code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+layout.svelte (&#123;@render children()&#125;)</code></TableCell>
              <TableCell><code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">app/layout.tsx (&#123;children&#125;)</code></TableCell>
              <TableCell class="text-xs text-slate-300">Persistent UI shell; only active nested sub-routes re-render during navigation.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>

  <!-- Interactive 10-Concept Playground Widget -->
  <RunesLivePlayground />
</div>
