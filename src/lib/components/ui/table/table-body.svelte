<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableBodyProps = $props();
</script>

<tbody class={cn("[&_tr:last-child]:border-0", className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</tbody>
