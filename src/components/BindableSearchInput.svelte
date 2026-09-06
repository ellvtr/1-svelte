<script lang="ts">
  /**
   * Two-Way Bindable Search Input Component.
   * What: Reusable search input field demonstrating Svelte 5 $props() and $bindable() two-way reactivity.
   * When: Invoked by parent components (such as RunesLivePlayground) requiring synchronized query filtering.
   * Why: Proves how Svelte 5 eliminates React-style onChange callback boilerplate by offering safe, opt-in two-way binding.
   */

  /**
   * Properties contract for BindableSearchInput.
   */
  interface SearchProps {
    value?: string;
    placeholder?: string;
    onReset?: () => void;
  }

  // Component props extracted with $props(); value is marked $bindable() for parent two-way binding
  let {
    value = $bindable(""),
    placeholder = "Filter layers...",
    onReset,
  }: SearchProps = $props();
</script>

<div class="bindable-input-wrapper">
  <input
    type="text"
    bind:value={value}
    {placeholder}
    class="custom-input"
  />
  {#if value.length > 0}
    <button type="button" class="clear-btn" onclick={() => { value = ""; onReset?.(); }}>
      ✕
    </button>
  {/if}
</div>

<style>
  .bindable-input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }

  .custom-input {
    width: 100%;
    padding: 8px 32px 8px 12px;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    color: #f8fafc;
    font-size: 0.875rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.15s ease;
  }

  .custom-input:focus {
    border-color: #38bdf8;
  }

  .clear-btn {
    position: absolute;
    right: 8px;
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 0.875rem;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 4px;
  }

  .clear-btn:hover {
    color: #f8fafc;
    background: #334155;
  }
</style>
