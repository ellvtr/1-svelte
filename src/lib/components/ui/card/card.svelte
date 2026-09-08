<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: CardProps = $props();
</script>

<div
  class={cn(
    "rounded-xl border border-slate-800 bg-slate-900/90 text-slate-100 shadow-lg backdrop-blur-sm",
    className
  )}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
