<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLThAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableHeadProps extends HTMLThAttributes {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableHeadProps = $props();
</script>

<th
  class={cn(
    "h-10 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</th>
