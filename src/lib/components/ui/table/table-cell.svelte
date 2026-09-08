<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLTdAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableCellProps extends HTMLTdAttributes {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableCellProps = $props();
</script>

<td
  class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</td>
