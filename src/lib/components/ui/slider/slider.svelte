<script lang="ts">
  import { Slider as SliderPrimitive } from "bits-ui";
  import { cn } from "$lib/utils";

  interface SliderProps {
    value?: number[];
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    class?: string;
    onValueChange?: (value: number[]) => void;
  }

  let {
    value = $bindable([1]),
    min = 0,
    max = 1,
    step = 0.01,
    disabled = false,
    class: className,
    onValueChange,
    ...restProps
  }: SliderProps = $props();
</script>

<SliderPrimitive.Root
  type="multiple"
  bind:value
  {min}
  {max}
  {step}
  {disabled}
  {onValueChange}
  class={cn("relative flex w-full touch-none select-none items-center cursor-pointer", className)}
  {...restProps}
>
  {#snippet children({ thumbs })}
    <span class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-800">
      <SliderPrimitive.Range class="absolute h-full bg-blue-500" />
    </span>
    {#each thumbs as thumb (thumb)}
      <SliderPrimitive.Thumb
        index={thumb}
        class="block h-4 w-4 rounded-full border border-blue-500 bg-slate-100 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
      />
    {/each}
  {/snippet}
</SliderPrimitive.Root>
