<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children?: Snippet;
    class?: string;
  }

  let { class: className, children, ...restProps }: CardDescriptionProps = $props();
</script>

<p class={cn("text-sm text-slate-400 leading-relaxed", className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</p>
