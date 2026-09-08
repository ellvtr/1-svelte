import { h as head, a as attr_class, e as escape_html, d as derived } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { s as spatialStore } from "../../chunks/spatialStore.svelte.js";
import { B as Badge } from "../../chunks/Icon.js";
import { M as Map, A as Activity } from "../../chunks/map.js";
import { L as Layers } from "../../chunks/layers.js";
import { C as Cpu } from "../../chunks/cpu.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const activeLayersCount = derived(() => spatialStore.activeLayerCount);
    const currentPath = derived(() => page.url.pathname);
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Svelte 5 &amp; SvelteKit Spatial Architecture Sandbox</title>`);
      });
    });
    $$renderer2.push(`<main class="mx-auto max-w-5xl px-4 py-8 antialiased"><header class="mb-6"><div class="flex flex-wrap items-center gap-2.5">`);
    Badge($$renderer2, {
      variant: "orange",
      class: "font-bold tracking-wide",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Svelte 5 Runes`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Badge($$renderer2, {
      variant: "emerald",
      class: "font-bold tracking-wide",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->SvelteKit 2 SSR`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Badge($$renderer2, {
      variant: "sky",
      class: "font-bold tracking-wide",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->Bits UI + Tailwind`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <h1 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">Spatial Data Architecture Sandbox</h1></div> <p class="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">Danish geospatial infrastructure sandbox: OpenLayers integration, SvelteKit 2 SSR loaders, file-based routing, and
      fine-grained signal reactivity with shadcn-svelte &amp; Bits UI.</p></header> <nav class="mb-6 flex flex-wrap gap-2 border-b border-slate-800 pb-3" aria-label="Main Navigation"><a href="/map"${attr_class(`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${currentPath() === "/map" || currentPath() === "/" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`)}>`);
    Map($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> <span>OpenLayers Map</span> <span class="ml-1 rounded-full bg-blue-900/60 px-2 py-0.5 text-xs text-blue-200 border border-blue-500/30">${escape_html(activeLayersCount())}</span></a> <a href="/sveltekit"${attr_class(`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${currentPath() === "/sveltekit" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`)}>`);
    Layers($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> <span>SvelteKit SSR &amp; Routing</span></a> <a href="/runes"${attr_class(`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${currentPath() === "/runes" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`)}>`);
    Cpu($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> <span>Runes vs React Matrix</span></a> <a href="/telemetry"${attr_class(`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${currentPath() === "/telemetry" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`)}>`);
    Activity($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> <span>Reactive Telemetry</span></a></nav> `);
    children($$renderer2);
    $$renderer2.push(`<!----></main>`);
  });
}
export {
  _layout as default
};
