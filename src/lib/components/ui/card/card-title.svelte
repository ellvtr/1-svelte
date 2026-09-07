<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: CardTitleProps = $props();
</script>

<h3
  class={cn("font-semibold leading-none tracking-tight text-slate-100 text-lg", className)}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</h3>
