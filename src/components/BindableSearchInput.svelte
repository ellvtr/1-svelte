<script lang="ts">
  /**
   * Two-Way Bindable Search Input Component (shadcn-svelte & Tailwind).
   * What: Reusable search input field demonstrating Svelte 5 $props() and $bindable() two-way reactivity.
   * When: Invoked by parent components (such as RunesLivePlayground) requiring synchronized query filtering.
   * Why: Proves how Svelte 5 eliminates React-style onChange callback boilerplate by offering safe, opt-in two-way binding.
   */

  import { X } from "lucide-svelte";

  interface SearchProps {
    value?: string;
    placeholder?: string;
    onReset?: () => void;
  }

  let {
    value = $bindable(""),
    placeholder = "Filter layers...",
    onReset,
  }: SearchProps = $props();
</script>

<div class="relative flex items-center w-full">
  <input
    type="text"
    bind:value={value}
    {placeholder}
    class="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 pr-8 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
  />
  {#if value.length > 0}
    <button
      type="button"
      class="absolute right-2 p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors cursor-pointer"
      onclick={() => {
        value = "";
        onReset?.();
      }}
      aria-label="Clear input"
    >
      <X class="h-3 w-3" />
    </button>
  {/if}
</div>
