<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { buttonVariants, type ButtonVariant, type ButtonSize } from "./index";
  import { cn } from "$lib/utils";

  interface ButtonProps extends HTMLButtonAttributes {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: Snippet;
    class?: string;
  }

  let {
    variant = "default",
    size = "default",
    class: className,
    children,
    type = "button",
    ...restProps
  }: ButtonProps = $props();
</script>

<button
  {type}
  class={cn(buttonVariants({ variant, size }), className)}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</button>
