<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLTableAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface TableProps extends HTMLTableAttributes {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: TableProps = $props();
</script>

<div class="relative w-full overflow-auto">
  <table class={cn("w-full caption-bottom text-sm border-collapse", className)} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </table>
</div>
