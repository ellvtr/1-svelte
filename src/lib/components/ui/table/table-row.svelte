<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableRowProps = $props();
</script>

<tr
  class={cn(
    "border-b border-slate-800/80 transition-colors hover:bg-slate-850/50 data-[state=selected]:bg-slate-800",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</tr>
