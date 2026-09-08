<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from "bits-ui";
  import { Check } from "lucide-svelte";
  import { cn } from "$lib/utils";

  interface CheckboxProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    class?: string;
    disabled?: boolean;
    id?: string;
  }

  let {
    checked = $bindable(false),
    onCheckedChange,
    class: className,
    disabled = false,
    id,
    ...restProps
  }: CheckboxProps = $props();
</script>

<CheckboxPrimitive.Root
  {id}
  bind:checked
  {onCheckedChange}
  {disabled}
  class={cn(
    "peer h-4 w-4 shrink-0 rounded-sm border border-slate-600 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:text-white transition-colors cursor-pointer flex items-center justify-center bg-slate-950",
    className
  )}
  {...restProps}
>
  {#snippet children({ checked: isChecked })}
    {#if isChecked}
      <Check class="h-3 w-3 text-white stroke-[3]" />
    {/if}
  {/snippet}
</CheckboxPrimitive.Root>
