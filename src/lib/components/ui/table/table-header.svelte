<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableHeaderProps = $props();
</script>

<thead class={cn("[&_tr]:border-b border-slate-800", className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</thead>
