import { a8 as sanitize_props, a9 as spread_props, aa as slot, h as head, e as escape_html, d as derived } from "../../../chunks/index.js";
import { s as spatialStore } from "../../../chunks/spatialStore.svelte.js";
import { C as Card, a as Card_header, b as Card_content } from "../../../chunks/card-content.js";
import "clsx";
import { I as Icon, B as Badge } from "../../../chunks/Icon.js";
import { A as Activity, M as Map } from "../../../chunks/map.js";
import { L as Layers } from "../../../chunks/layers.js";
import { C as Cpu } from "../../../chunks/cpu.js";
function Grid_3x3($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ],
    ["path", { "d": "M3 9h18" }],
    ["path", { "d": "M3 15h18" }],
    ["path", { "d": "M9 3v18" }],
    ["path", { "d": "M15 3v18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "grid-3x3" },
    $$sanitized_props,
    {
      /**
       * @component @name Grid3x3
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDloMTgiIC8+CiAgPHBhdGggZD0iTTMgMTVoMTgiIC8+CiAgPHBhdGggZD0iTTkgM3YxOCIgLz4KICA8cGF0aCBkPSJNMTUgM3YxOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/grid-3x3
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Mouse_pointer($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M12.586 12.586 19 19" }],
    [
      "path",
      {
        "d": "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mouse-pointer" },
    $$sanitized_props,
    {
      /**
       * @component @name MousePointer
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuNTg2IDEyLjU4NiAxOSAxOSIgLz4KICA8cGF0aCBkPSJNMy42ODggMy4wMzdhLjQ5Ny40OTcgMCAwIDAtLjY1MS42NTFsNi41IDE1Ljk5OWEuNTAxLjUwMSAwIDAgMCAuOTQ3LS4wNjJsMS41NjktNi4wODNhMiAyIDAgMCAxIDEuNDQ4LTEuNDc5bDYuMTI0LTEuNTc5YS41LjUgMCAwIDAgLjA2My0uOTQ3eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mouse-pointer
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Zoom_in($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v1.0.1 - ISC
   *
   * ISC License
   *
   * Copyright (c) 2026 Lucide Icons and Contributors
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The following Lucide icons are derived from the Feather project:
   *
   * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
   *
   * The MIT License (MIT) (for the icons listed above)
   *
   * Copyright (c) 2013-present Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    [
      "line",
      { "x1": "21", "x2": "16.65", "y1": "21", "y2": "16.65" }
    ],
    ["line", { "x1": "11", "x2": "11", "y1": "8", "y2": "14" }],
    ["line", { "x1": "8", "x2": "14", "y1": "11", "y2": "11" }]
  ];
  Icon($$renderer, spread_props([
    { name: "zoom-in" },
    $$sanitized_props,
    {
      /**
       * @component @name ZoomIn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4IiAvPgogIDxsaW5lIHgxPSIyMSIgeDI9IjE2LjY1IiB5MT0iMjEiIHkyPSIxNi42NSIgLz4KICA8bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIgLz4KICA8bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zoom-in
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const activeLayersCount = derived(() => spatialStore.activeLayerCount);
    const zoomLevel = derived(() => Math.round(spatialStore.zoom));
    const tileCount = derived(() => spatialStore.estimatedTileLoad);
    const cursorCoords = derived(() => spatialStore.cursorPosition);
    head("1prlcnk", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Reactive Telemetry | Spatial Data Sandbox</title>`);
      });
    });
    $$renderer2.push(`<div class="flex flex-col gap-6"><div class="flex flex-col gap-1"><div class="flex items-center gap-2">`);
    Activity($$renderer2, { class: "h-6 w-6 text-blue-400" });
    $$renderer2.push(`<!----> <h2 class="text-xl font-bold text-slate-100">Spatial Telemetry &amp; Reactive Signal Graph</h2></div> <p class="text-sm text-slate-400">Real-time metrics computed via Svelte 5 <code class="text-orange-400 bg-slate-950 px-1 py-0.5 rounded font-mono text-xs">$derived</code> runes with zero manual store subscriptions.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">`);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Map Zoom Level</span> `);
            Zoom_in($$renderer4, { class: "h-4 w-4 text-blue-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-2xl font-bold text-slate-100 font-mono">${escape_html(zoomLevel())}</div> <p class="text-xs text-slate-400 mt-1">Updated via OpenLayers moveend signal</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Spatial Layers</span> `);
            Layers($$renderer4, { class: "h-4 w-4 text-emerald-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-2xl font-bold text-slate-100 font-mono">${escape_html(activeLayersCount())} <span class="text-sm font-normal text-slate-400">/ ${escape_html(spatialStore.layers.length)}</span></div> <p class="text-xs text-slate-400 mt-1">Fine-grained layer filter derivation</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimated Tile Matrix</span> `);
            Grid_3x3($$renderer4, { class: "h-4 w-4 text-purple-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-2xl font-bold text-slate-100 font-mono">${escape_html(tileCount().toLocaleString())}</div> <p class="text-xs text-slate-400 mt-1">Computed via <code class="text-orange-400">Math.pow(2, zoom) * layers</code></p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cursor Coordinates</span> `);
            Mouse_pointer($$renderer4, { class: "h-4 w-4 text-sky-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-lg font-bold text-sky-400 font-mono truncate">`);
            if (cursorCoords()) {
              $$renderer4.push(`<!--[0-->${escape_html(cursorCoords().lat.toFixed(4))}°N, ${escape_html(cursorCoords().lon.toFixed(4))}°E`);
            } else {
              $$renderer4.push(`<!--[-1--><span class="text-slate-500 font-normal text-sm">Hover over map canvas</span>`);
            }
            $$renderer4.push(`<!--]--></div> <p class="text-xs text-slate-400 mt-1">Live mouse pointer coordinate telemetry</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Geospatial Engine</span> `);
            Map($$renderer4, { class: "h-4 w-4 text-emerald-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="text-lg font-bold text-slate-100 font-mono">OpenLayers 10.10</div> <p class="text-xs text-slate-400 mt-1">Zero-VDOM native canvas/WebGL rendering</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-2 flex flex-row items-center justify-between space-y-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Frontend Stack</span> `);
            Cpu($$renderer4, { class: "h-4 w-4 text-orange-400" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-center gap-1.5 flex-wrap">`);
            Badge($$renderer4, {
              variant: "orange",
              class: "text-xs",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Svelte 5 Runes`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Badge($$renderer4, {
              variant: "emerald",
              class: "text-xs",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->SvelteKit 2 SSR`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Badge($$renderer4, {
              variant: "sky",
              class: "text-xs",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Bits UI`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <p class="text-xs text-slate-400 mt-1.5">SSR-hydrated fine-grained reactive runtime</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div>`);
  });
}
export {
  _page as default
};
