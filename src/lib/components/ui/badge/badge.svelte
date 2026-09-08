<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { badgeVariants, type BadgeVariant } from "./index";
  import { cn } from "$lib/utils";

  interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
    children?: Snippet;
    class?: string;
  }

  let {
    variant = "default",
    class: className,
    children,
    ...restProps
  }: BadgeProps = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>
