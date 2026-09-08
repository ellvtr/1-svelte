import { a8 as sanitize_props, a9 as spread_props, aa as slot, ai as attr, af as bind_props, ae as attributes, ak as clsx, e as escape_html, d as derived, a as attr_class, ah as ensure_array_like, h as head } from "../../../chunks/index.js";
import { s as spatialStore } from "../../../chunks/spatialStore.svelte.js";
import { I as Icon, c as cn, B as Badge } from "../../../chunks/Icon.js";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import { C as Card, a as Card_header, b as Card_content } from "../../../chunks/card-content.js";
import { C as Card_title } from "../../../chunks/card-title.js";
import "clsx";
import { tv } from "tailwind-variants";
import { h as html, C as Card_description } from "../../../chunks/card-description.js";
import { C as Cpu } from "../../../chunks/cpu.js";
function Code_xml($$renderer, $$props) {
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
    ["path", { "d": "m18 16 4-4-4-4" }],
    ["path", { "d": "m6 8-4 4 4 4" }],
    ["path", { "d": "m14.5 4-5 16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "code-xml" },
    $$sanitized_props,
    {
      /**
       * @component @name CodeXml
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTggMTYgNC00LTQtNCIgLz4KICA8cGF0aCBkPSJtNiA4LTQgNCA0IDQiIC8+CiAgPHBhdGggZD0ibTE0LjUgNC01IDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/code-xml
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
function Play($$renderer, $$props) {
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
      "path",
      {
        "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      /**
       * @component @name Play
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA1YTIgMiAwIDAgMSAzLjAwOC0xLjcyOGwxMS45OTcgNi45OThhMiAyIDAgMCAxIC4wMDMgMy40NThsLTEyIDdBMiAyIDAgMCAxIDUgMTl6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/play
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
function X($$renderer, $$props) {
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
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
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
function BindableSearchInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = "", placeholder = "Filter layers...", onReset } = $$props;
    $$renderer2.push(`<div class="relative flex items-center w-full"><input type="text"${attr("value", value)}${attr("placeholder", placeholder)} class="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 pr-8 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"/> `);
    if (value.length > 0) {
      $$renderer2.push(`<!--[0--><button type="button" class="absolute right-2 p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors cursor-pointer" aria-label="Clear input">`);
      X($$renderer2, { class: "h-3 w-3" });
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "default",
      size = "default",
      class: className,
      children,
      type = "button",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<button${attributes({
      type,
      class: clsx(cn(buttonVariants({ variant, size }), className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></button>`);
  });
}
const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-1.5 cursor-pointer",
  variants: {
    variant: {
      default: "bg-blue-600 text-white shadow hover:bg-blue-700 active:bg-blue-800",
      destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
      outline: "border border-slate-700 bg-transparent shadow-sm hover:bg-slate-800 hover:text-white text-slate-200",
      secondary: "bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-700",
      ghost: "hover:bg-slate-800 hover:text-white text-slate-300",
      link: "text-blue-400 underline-offset-4 hover:underline",
      emerald: "bg-emerald-600 text-white shadow hover:bg-emerald-700"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function PlaygroundCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { badgeNum, title, subtitle, svelteCode, reactCode, children } = $$props;
    let activeView = "demo";
    const highlightedSvelte = derived(() => Prism.highlight(svelteCode, Prism.languages.tsx || Prism.languages.typescript, "tsx"));
    const highlightedReact = derived(() => Prism.highlight(reactCode, Prism.languages.tsx || Prism.languages.typescript, "tsx"));
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-md transition-all hover:border-slate-700",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-3 border-b border-slate-800/80",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-start justify-between gap-2"><div class="flex items-center gap-2 flex-wrap">`);
            Badge($$renderer4, {
              variant: "sky",
              class: "font-bold font-mono",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->#${escape_html(badgeNum)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Card_title($$renderer4, {
              class: "text-sm font-mono font-bold text-sky-400",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(title)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <span class="text-xs text-slate-400 text-right leading-tight">${escape_html(subtitle)}</span></div> <div class="mt-3 flex rounded-lg bg-slate-950 p-1 border border-slate-800 gap-1">`);
            Button($$renderer4, {
              variant: activeView === "demo" ? "default" : "ghost",
              size: "sm",
              class: `h-7 text-xs flex-1 ${activeView === "demo" ? "bg-sky-600 hover:bg-sky-700 text-white font-semibold" : "text-slate-400 hover:text-white"}`,
              onclick: () => activeView = "demo",
              children: ($$renderer5) => {
                Play($$renderer5, { class: "h-3 w-3 mr-1 fill-current" });
                $$renderer5.push(`<!----> Live Demo`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              variant: activeView === "svelte" ? "default" : "ghost",
              size: "sm",
              class: `h-7 text-xs flex-1 ${activeView === "svelte" ? "bg-orange-600 hover:bg-orange-700 text-white font-semibold" : "text-slate-400 hover:text-white"}`,
              onclick: () => activeView = "svelte",
              children: ($$renderer5) => {
                Code_xml($$renderer5, { class: "h-3 w-3 mr-1" });
                $$renderer5.push(`<!----> Svelte 5`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              variant: activeView === "react" ? "default" : "ghost",
              size: "sm",
              class: `h-7 text-xs flex-1 ${activeView === "react" ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold" : "text-slate-400 hover:text-white"}`,
              onclick: () => activeView = "react",
              children: ($$renderer5) => {
                Code_xml($$renderer5, { class: "h-3 w-3 mr-1" });
                $$renderer5.push(`<!----> React 19`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-3 min-h-[120px]",
          children: ($$renderer4) => {
            if (activeView === "demo") {
              $$renderer4.push("<!--[0-->");
              children($$renderer4);
              $$renderer4.push(`<!---->`);
            } else if (activeView === "svelte") {
              $$renderer4.push(`<!--[1--><div class="rounded-md border border-orange-500/30 bg-slate-950 p-3 overflow-x-auto"><div class="text-[11px] font-semibold uppercase tracking-wider text-orange-400 mb-1.5 flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span> Svelte 5 Implementation</div> <pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">${html(highlightedSvelte())}</code></pre></div>`);
            } else {
              $$renderer4.push(`<!--[-1--><div class="rounded-md border border-sky-500/30 bg-slate-950 p-3 overflow-x-auto"><div class="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span> React 19 / Next.js Implementation</div> <pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">${html(highlightedReact())}</code></pre></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
  });
}
function badgeChip($$renderer, label, active, sizeMb) {
  $$renderer.push(`<div${attr_class("snippet-chip svelte-2upf2y", void 0, { "chip-active": active })}><span class="chip-dot svelte-2upf2y"></span> <span class="chip-text svelte-2upf2y">${escape_html(label)}</span> `);
  if (sizeMb !== void 0) {
    $$renderer.push(`<!--[0--><span class="chip-size svelte-2upf2y">${escape_html(sizeMb)} MB</span>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function RunesLivePlayground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedCategory = "all";
    let counter = 1;
    let userProfile = {
      name: "Jonas Ellehauge",
      role: "Senior Svelte & TS Architect",
      preferences: { crs: "EPSG:25832" }
    };
    const code1Svelte = `<script lang="ts">
  // Svelte 5: Component state with ES6 Proxies
  let count = $state(0);
  let user = $state({ name: "Jonas", role: "Architect", active: true });

  const increment = () => count++;
  const toggleStatus = () => {
    // Direct mutation intercepted by Svelte Proxy
    user.active = !user.active;
  };
<\/script>

<div class="user-card">
  <h3>{user.name} ({user.role})</h3>
  <p>Status: {user.active ? "Active" : "Inactive"}</p>
  <button onclick={increment}>Count: {count}</button>
  <button onclick={toggleStatus}>Toggle Status</button>
</div>`;
    const code1React = `import React, { useState } from "react";

export const UserCard: React.FC = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Jonas", role: "Architect", active: true });

  const increment = () => setCount((prev) => prev + 1);
  const toggleStatus = () => {
    // Immutable shallow clone required
    setUser((prev) => ({ ...prev, active: !prev.active }));
  };

  return (
    <div className="user-card">
      <h3>{user.name} ({user.role})</h3>
      <p>Status: {user.active ? "Active" : "Inactive"}</p>
      <button onClick={increment}>Count: {count}</button>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};`;
    let boxDimensions = { width: 0, height: 0 };
    const code1bSvelte = `<script lang="ts">
  // Svelte 5: Direct DOM node attachment with bind:this
  let mapDiv = $state<HTMLDivElement | null>(null);
  let dimensions = $state({ width: 0, height: 0 });

  $effect(() => {
    if (mapDiv) {
      dimensions = { width: mapDiv.clientWidth, height: mapDiv.clientHeight };
      console.log("Attached map canvas container:", dimensions);
    }
  });
<\/script>

<div bind:this={mapDiv} class="map-viewport">
  <p>Viewport: {dimensions.width}px × {dimensions.height}px</p>
</div>`;
    const code1bReact = `import React, { useRef, useEffect, useState } from "react";

export const MapViewport: React.FC = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (mapDivRef.current) {
      const { clientWidth, clientHeight } = mapDivRef.current;
      setDimensions({ width: clientWidth, height: clientHeight });
      console.log("Attached map canvas container:", { clientWidth, clientHeight });
    }
  }, []);

  return (
    <div ref={mapDivRef} className="map-viewport">
      <p>Viewport: {dimensions.width}px × {dimensions.height}px</p>
    </div>
  );
};`;
    const doubleCount = derived(() => counter * 2);
    const zoomResolution = derived(() => (156543.03392 / Math.pow(2, counter)).toFixed(2));
    const code2Svelte = `<script lang="ts">
  // Svelte 5: Auto-tracked computed derivation with zero dependency array
  let zoomLevel = $state(7);
  let metersPerPixel = $derived((156543.03392 / Math.pow(2, zoomLevel)).toFixed(2));
  let isDetailedView = $derived(zoomLevel >= 12);
<\/script>

<div class="zoom-panel">
  <p>Current Zoom: {zoomLevel}</p>
  <p>Resolution: {metersPerPixel} m/px</p>
  {#if isDetailedView}
    <span>Rendering high-resolution cadastral parcels</span>
  {/if}
  <button onclick={() => zoomLevel++}>+ Zoom In</button>
</div>`;
    const code2React = `import React, { useState, useMemo } from "react";

export const ZoomPanel: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(7);

  // Manual dependency array required to prevent stale closures
  const metersPerPixel = useMemo(() => {
    return (156543.03392 / Math.pow(2, zoomLevel)).toFixed(2);
  }, [zoomLevel]);

  const isDetailedView = useMemo(() => zoomLevel >= 12, [zoomLevel]);

  return (
    <div className="zoom-panel">
      <p>Current Zoom: {zoomLevel}</p>
      <p>Resolution: {metersPerPixel} m/px</p>
      {isDetailedView && <span>Rendering high-resolution cadastral parcels</span>}
      <button onClick={() => setZoomLevel((z) => z + 1)}>+ Zoom In</button>
    </div>
  );
};`;
    let layerFilterQuery = "";
    let layerList = [
      {
        id: "kommune",
        name: "Danmarks Administrative Grænser (Kommune)",
        visible: true,
        sizeMb: 14.2
      },
      {
        id: "matrikel",
        name: "Matrikelkortet (Cadastral Parcels)",
        visible: true,
        sizeMb: 85.6
      },
      {
        id: "orto",
        name: "Ortofoto Forår 2026 (Aerial 12.5cm)",
        visible: false,
        sizeMb: 320
      },
      {
        id: "dhm",
        name: "Danmarks Højdemodel (DHM / DTM Elevation)",
        visible: true,
        sizeMb: 140.5
      }
    ];
    const filteredLayersSummary = derived(() => {
      const q = layerFilterQuery.toLowerCase().trim();
      const matched = layerList.filter((l) => l.name.toLowerCase().includes(q));
      const activeCount = matched.filter((l) => l.visible).length;
      const totalMb = matched.reduce((sum, l) => sum + (l.visible ? l.sizeMb : 0), 0);
      return {
        matched,
        activeCount,
        totalMatched: matched.length,
        totalMb: totalMb.toFixed(1)
      };
    });
    const code3Svelte = `<script lang="ts">
  // Svelte 5: Complex multi-line computed closure
  let filterText = $state("");
  let layers = $state([
    { id: "matrikel", name: "Matrikelkortet", sizeMb: 85.6, visible: true },
    { id: "ortofoto", name: "Ortofoto Forår", sizeMb: 320.0, visible: false },
    { id: "dhm", name: "Højdemodel DHM", sizeMb: 140.5, visible: true }
  ]);

  let summary = $derived.by(() => {
    const q = filterText.toLowerCase().trim();
    const matched = layers.filter((l) => l.name.toLowerCase().includes(q));
    const active = matched.filter((l) => l.visible);
    const totalMb = active.reduce((acc, l) => acc + l.sizeMb, 0);
    return { count: active.length, totalMb: totalMb.toFixed(1) };
  });
<\/script>

<input bind:value={filterText} placeholder="Filter spatial layers..." />
<p>Active: {summary.count} layers | Total: {summary.totalMb} MB</p>`;
    const code3React = `import React, { useState, useMemo } from "react";

export const LayerSummary: React.FC = () => {
  const [filterText, setFilterText] = useState("");
  const [layers, setLayers] = useState([
    { id: "matrikel", name: "Matrikelkortet", sizeMb: 85.6, visible: true },
    { id: "ortofoto", name: "Ortofoto Forår", sizeMb: 320.0, visible: false },
    { id: "dhm", name: "Højdemodel DHM", sizeMb: 140.5, visible: true }
  ]);

  const summary = useMemo(() => {
    const q = filterText.toLowerCase().trim();
    const matched = layers.filter((l) => l.name.toLowerCase().includes(q));
    const active = matched.filter((l) => l.visible);
    const totalMb = active.reduce((acc, l) => acc + l.sizeMb, 0);
    return { count: active.length, totalMb: totalMb.toFixed(1) };
  }, [layers, filterText]);

  return (
    <div>
      <input value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder="Filter..." />
      <p>Active: {summary.count} layers | Total: {summary.totalMb} MB</p>
    </div>
  );
};`;
    let isHeartbeatRunning = false;
    let heartbeatTicks = 0;
    let effectLog = [];
    const code4Svelte = `<script lang="ts">
  // Svelte 5: Microtask side effect with automatic teardown
  let isRunning = $state(false);
  let ticks = $state(0);

  $effect(() => {
    if (!isRunning) return;

    console.log("Starting telemetry polling interval...");
    const timer = setInterval(() => {
      ticks += 1;
    }, 1000);

    // Automatic cleanup returned function
    return () => {
      console.log("Tearing down interval timer");
      clearInterval(timer);
    };
  });
<\/script>

<button onclick={() => (isRunning = !isRunning)}>
  {isRunning ? "Stop Polling" : "Start Polling"}
</button>
<span>Heartbeat Ticks: {ticks}</span>`;
    const code4React = `import React, { useState, useEffect } from "react";

export const HeartbeatPoller: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    console.log("Starting telemetry polling interval...");
    const timer = setInterval(() => {
      setTicks((t) => t + 1);
    }, 1000);

    // Teardown cleanup function
    return () => {
      console.log("Tearing down interval timer");
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div>
      <button onClick={() => setIsRunning((r) => !r)}>
        {isRunning ? "Stop Polling" : "Start Polling"}
      </button>
      <span>Heartbeat Ticks: {ticks}</span>
    </div>
  );
};`;
    let bindableSearchText = "Matrikel";
    const code5Svelte = `<!-- Child.svelte -->
<script lang="ts">
  interface Props {
    searchQuery?: string;
    placeholder?: string;
  }
  let { searchQuery = $bindable(""), placeholder = "Search..." }: Props = $props();
<\/script>

<input bind:value={searchQuery} {placeholder} />

<!-- Parent.svelte -->
<script lang="ts">
  import Child from "./Child.svelte";
  let activeQuery = $state("Matrikel");
<\/script>

<Child bind:searchQuery={activeQuery} />
<p>Parent Query: {activeQuery}</p>`;
    const code5React = `import React, { useState } from "react";

// Child.tsx
interface ChildProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

export const Child: React.FC<ChildProps> = ({ searchQuery, onSearchChange, placeholder = "Search..." }) => (
  <input value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} placeholder={placeholder} />
);

// Parent.tsx
export const Parent: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState("Matrikel");

  return (
    <div>
      <Child searchQuery={activeQuery} onSearchChange={setActiveQuery} />
      <p>Parent Query: {activeQuery}</p>
    </div>
  );
};`;
    const code6Svelte = `<script lang="ts">
  // Svelte 5: First-class reusable parameterized template snippet
  let layers = $state([
    { id: "wfs-cadastre", name: "Cadastre WFS", sizeMb: 85.6 },
    { id: "wms-radar", name: "DMI Radar", sizeMb: 12.4 }
  ]);
<\/script>

{#snippet layerCard(name: string, size: number)}
  <div class="layer-badge">
    <strong>{name}</strong>
    <span>({size} MB)</span>
  </div>
{/snippet}

<div class="layer-list">
  {#each layers as layer (layer.id)}
    {@render layerCard(layer.name, layer.sizeMb)}
  {/each}
</div>`;
    const code6React = `import React, { useState } from "react";

export const LayerList: React.FC = () => {
  const [layers] = useState([
    { id: "wfs-cadastre", name: "Cadastre WFS", sizeMb: 85.6 },
    { id: "wms-radar", name: "DMI Radar", sizeMb: 12.4 }
  ]);

  // Render helper function / prop
  const renderLayerCard = (name: string, size: number) => (
    <div className="layer-badge" key={name}>
      <strong>{name}</strong>
      <span>({size} MB)</span>
    </div>
  );

  return (
    <div className="layer-list">
      {layers.map((l) => renderLayerCard(l.name, l.sizeMb))}
    </div>
  );
};`;
    const code7Svelte = `// spatialStore.svelte.ts
class SpatialStore {
  activeLayer = $state("Kommuneplan");
  zoom = $state(7);
  formatted = $derived(\`\${this.activeLayer} (Zoom: \${this.zoom})\`);

  toggle(name: string) {
    this.activeLayer = name;
  }
}
export const spatialStore = new SpatialStore();

<!-- Consumer.svelte -->
<script lang="ts">
  import { spatialStore } from "./spatialStore.svelte";
<\/script>

<p>Active: {spatialStore.formatted}</p>
<button onclick={() => spatialStore.toggle("Matrikelkort")}>Switch Layer</button>`;
    const code7React = `// useSpatialStore.ts (Zustand store)
import { create } from "zustand";

interface State {
  activeLayer: string;
  zoom: number;
  toggle: (name: string) => void;
}

export const useSpatialStore = create<State>((set) => ({
  activeLayer: "Kommuneplan",
  zoom: 7,
  toggle: (name) => set({ activeLayer: name })
}));

// Consumer.tsx
import React from "react";
import { useSpatialStore } from "./useSpatialStore";

export const Consumer: React.FC = () => {
  const { activeLayer, zoom, toggle } = useSpatialStore();

  return (
    <div>
      <p>Active: {activeLayer} (Zoom: {zoom})</p>
      <button onClick={() => toggle("Matrikelkort")}>Switch Layer</button>
    </div>
  );
};`;
    let simulatedRouteId = "matrikel";
    const code8Svelte = `<!-- src/routes/layers/[id]/+page.server.ts -->
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const res = await fetch(\`https://services.datafordeler.dk/WMS?token=\${env.SECRET_TOKEN}\`);
  return {
    layer: await res.json(),
    region: 'Danmark'
  };
};

<!-- src/routes/layers/[id]/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
<\/script>

<h1>{data.layer.name} ({data.region})</h1>`;
    const code8React = `// app/layers/[id]/page.tsx (Next.js Server Component)
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LayerPage({ params }: PageProps) {
  const { id } = await params;
  const res = await fetch(\`https://services.datafordeler.dk/WMS?token=\${process.env.SECRET_TOKEN}\`);
  const layer = await res.json();

  return (
    <div>
      <h1>{layer.name} (Danmark)</h1>
    </div>
  );
}`;
    let currentNestedPath = "/layers/settings";
    const code10Svelte = `<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
<\/script>

<header class="app-header">
  <nav>Dataforsyningen.dk / Spatial Portal</nav>
</header>
<main class="main-content">
  {@render children()}
</main>`;
    const code10React = `// app/layout.tsx (Next.js Root Layout)
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>
        <header className="app-header">
          <nav>Dataforsyningen.dk / Spatial Portal</nav>
        </header>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}`;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="playground-wrapper svelte-2upf2y"><div class="category-bar svelte-2upf2y"><button${attr_class("cat-btn svelte-2upf2y", void 0, { "active": selectedCategory === "all" })}>All 10 Concepts (#1 – #10)</button> <button${attr_class("cat-btn svelte-2upf2y", void 0, { "active": selectedCategory === "runes" })}>Runes (#1 – #4)</button> <button${attr_class("cat-btn svelte-2upf2y", void 0, { "active": selectedCategory === "templates" })}>Props &amp; Snippets (#5 – #6)</button> <button${attr_class("cat-btn svelte-2upf2y", void 0, { "active": selectedCategory === "architecture" })}>Stores &amp; SvelteKit (#7 – #10)</button></div> <div class="cards-grid svelte-2upf2y">`);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "1",
          title: "$state(value)",
          subtitle: "vs. React useState() (Direct ES6 Proxy Mutation)",
          svelteCode: code1Svelte,
          reactCode: code1React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Direct mutation without <code>setCount(prev => prev + 1)</code>. Proxies handle objects automatically.</p> <div class="row-controls svelte-2upf2y"><button class="btn primary svelte-2upf2y">+ Increment (${escape_html(counter)})</button> <button class="btn secondary svelte-2upf2y">Toggle Active (${escape_html("Active")})</button></div> <div class="result-box svelte-2upf2y"><div><strong>Primitive:</strong> <code>counter = ${escape_html(counter)}</code></div> <div><strong>Deep Object Proxy:</strong> <code>${escape_html(userProfile.name)} | ${escape_html(userProfile.role)} (${escape_html(userProfile.preferences.crs)})</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "1b",
          title: "bind:this={el}",
          subtitle: "vs. React useRef(null) (Direct DOM Node Attachment)",
          svelteCode: code1bSvelte,
          reactCode: code1bReact,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Binds the exact browser DOM element without <code>ref.current</code> boilerplate.</p> <div class="measured-target-box svelte-2upf2y"><span>Live Target DOM Container</span> <button class="btn small svelte-2upf2y">Measure Container</button></div> <div class="result-box svelte-2upf2y"><div><strong>Measured Dimensions:</strong> <code>Width: ${escape_html(boxDimensions.width)}px, Height: ${escape_html(boxDimensions.height)}px</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "2",
          title: "$derived(expr)",
          subtitle: "vs. React useMemo() (Zero Dependency Array)",
          svelteCode: code2Svelte,
          reactCode: code2React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Computed state that auto-tracks <code>counter</code> with zero <code>[deps]</code> array.</p> <div class="result-box svelte-2upf2y"><div><strong>Base Counter ($state):</strong> <span class="badge-num svelte-2upf2y">${escape_html(counter)}</span></div> <div><strong>Doubled ($derived):</strong> <span class="badge-num svelte-2upf2y">${escape_html(doubleCount())}</span></div> <div><strong>Spatial Resolution:</strong> <code>${escape_html(zoomResolution())} meters/pixel</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "3",
          title: "$derived.by(() => ...)",
          subtitle: "vs. Multi-line useMemo() (Loops & Aggregations)",
          svelteCode: code3Svelte,
          reactCode: code3React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Calculates multi-step aggregations over array filters automatically.</p> <input type="text"${attr("value", layerFilterQuery)} placeholder="Type layer name (e.g. Matrikel, Orto, DHM)..." class="filter-input svelte-2upf2y"/> <div class="layer-chips-row svelte-2upf2y"><!--[-->`);
            const each_array = ensure_array_like(filteredLayersSummary().matched);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let layer = each_array[$$index];
              $$renderer4.push(`<button type="button"${attr_class("chip-toggle svelte-2upf2y", void 0, { "active": layer.visible })}>`);
              badgeChip($$renderer4, layer.name, layer.visible, layer.sizeMb);
              $$renderer4.push(`<!----></button>`);
            }
            $$renderer4.push(`<!--]--></div> <div class="result-box svelte-2upf2y"><div><strong>Matched:</strong> ${escape_html(filteredLayersSummary().totalMatched)} | <strong>Active:</strong> ${escape_html(filteredLayersSummary().activeCount)} | <strong>Total Size:</strong> <code>${escape_html(filteredLayersSummary().totalMb)} MB</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "4",
          title: "$effect(() => ...)",
          subtitle: "vs. React useEffect() (Microtask Batching & Cleanup)",
          svelteCode: code4Svelte,
          reactCode: code4React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Runs microtask side effects and executes returned cleanup function on change or unmount.</p> <div class="row-controls svelte-2upf2y"><button${attr_class("btn svelte-2upf2y", void 0, { "danger": isHeartbeatRunning, "primary": !isHeartbeatRunning })}>${escape_html("▶ Start Microtask Heartbeat")}</button> <span class="ticks-badge svelte-2upf2y">Ticks: <strong>${escape_html(heartbeatTicks)}</strong></span></div> <div class="log-stream svelte-2upf2y"><!--[-->`);
            const each_array_1 = ensure_array_like(effectLog);
            for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
              let entry = each_array_1[idx];
              $$renderer4.push(`<div class="log-line svelte-2upf2y">${escape_html(entry)}</div>`);
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "5",
          title: "$props() & $bindable()",
          subtitle: "vs. React Props & Callback Boilerplate",
          svelteCode: code5Svelte,
          reactCode: code5React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Two-way parent/child synchronization using clean <code>$bindable()</code>.</p> <div class="child-demo-box svelte-2upf2y"><span class="demo-label svelte-2upf2y">Child <code>&lt;BindableSearchInput /></code>:</span> `);
            BindableSearchInput($$renderer4, {
              placeholder: "Type in child component...",
              get value() {
                return bindableSearchText;
              },
              set value($$value) {
                bindableSearchText = $$value;
                $$settled = false;
              }
            });
            $$renderer4.push(`<!----></div> <div class="result-box svelte-2upf2y"><div><strong>Parent State Synced:</strong> <code>bindableSearchText = "${escape_html(bindableSearchText)}"</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "6",
          title: "{#snippet} & {@render}",
          subtitle: "vs. React Render Props / JSX Helper Functions",
          svelteCode: code6Svelte,
          reactCode: code6React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Type-safe parameterized template snippet closures rendering with <code>{@render snippet()}</code>.</p> <div class="snippet-demo-grid svelte-2upf2y">`);
            badgeChip($$renderer4, "KDS Cadastre WFS", true, 85.6);
            $$renderer4.push(`<!----> `);
            badgeChip($$renderer4, "DMI Radar Precipitation", true, 12.4);
            $$renderer4.push(`<!----> `);
            badgeChip($$renderer4, "Offline Vector Archive", false, 450);
            $$renderer4.push(`<!----></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "7",
          title: "Standalone .svelte.ts",
          subtitle: "vs. Redux / Zustand (Zero Provider Wrapper Hell)",
          svelteCode: code7Svelte,
          reactCode: code7React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Pure TypeScript class with <code>$state</code> used globally without context providers.</p> <div class="row-controls svelte-2upf2y"><button class="btn secondary svelte-2upf2y">Toggle Ortofoto (${escape_html(spatialStore.layers.find((l) => l.id === "ortofoto")?.visible ? "ON" : "OFF")})</button> <button class="btn secondary svelte-2upf2y">+ Zoom In (${escape_html(spatialStore.zoom.toFixed(1))})</button></div> <div class="result-box svelte-2upf2y"><div><strong>Global Store Metric:</strong> <code>${escape_html(spatialStore.activeLayerCount)} Active Layers | Est. ${escape_html(spatialStore.estimatedTileLoad)} Tiles</code></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "8-9",
          title: "+page.server.ts & +page.svelte",
          subtitle: "vs. Next.js getServerSideProps & Page Component",
          svelteCode: code8Svelte,
          reactCode: code8React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Simulates server loader with secure backend tokens and typed <code>PageData</code>.</p> <div class="row-controls svelte-2upf2y"><button${attr_class("btn small svelte-2upf2y", void 0, { "primary": simulatedRouteId === "matrikel" })}>Matrikel</button> <button${attr_class("btn small svelte-2upf2y", void 0, { "primary": simulatedRouteId === "orto" })}>Ortofoto</button> <button${attr_class("btn small svelte-2upf2y", void 0, { "primary": simulatedRouteId === "dhm" })}>Elevation DHM</button></div> <div class="result-box svelte-2upf2y">`);
            {
              $$renderer4.push("<!--[-1-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--> `);
      {
        $$renderer3.push("<!--[0-->");
        PlaygroundCard($$renderer3, {
          badgeNum: "10",
          title: "+layout.svelte",
          subtitle: "vs. Next.js app/layout.tsx (Persistent UI Shell)",
          svelteCode: code10Svelte,
          reactCode: code10React,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="desc svelte-2upf2y">Persistent outer shell layout rendering nested active child pages with <code>{@render children()}</code>.</p> <div class="simulated-browser-shell svelte-2upf2y"><div class="shell-bar svelte-2upf2y"><span class="shell-title svelte-2upf2y">Dataforsyningen.dk / Layers</span> <div class="shell-nav svelte-2upf2y"><button${attr_class("shell-link svelte-2upf2y", void 0, { "active": currentNestedPath === "/layers/settings" })}>Settings</button> <button${attr_class("shell-link svelte-2upf2y", void 0, { "active": currentNestedPath === "/layers/preview" })}>Preview</button> <button${attr_class("shell-link svelte-2upf2y", void 0, { "active": currentNestedPath === "/layers/metadata" })}>Metadata</button></div></div> <div class="nested-child-page svelte-2upf2y">`);
            {
              $$renderer4.push(`<!--[0--><div class="page-content svelte-2upf2y">⚙️ Layer Projection &amp; Tile Cache Settings (CRS: EPSG:25832)</div>`);
            }
            $$renderer4.push(`<!--]--></div></div>`);
          }
        });
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function Table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<div class="relative w-full overflow-auto"><table${attributes({
      class: clsx(cn("w-full caption-bottom text-sm border-collapse", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></table></div>`);
  });
}
function Table_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<thead${attributes({
      class: clsx(cn("[&_tr]:border-b border-slate-800", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></thead>`);
  });
}
function Table_body($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<tbody${attributes({
      class: clsx(cn("[&_tr:last-child]:border-0", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></tbody>`);
  });
}
function Table_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<tr${attributes({
      class: clsx(cn("border-b border-slate-800/80 transition-colors hover:bg-slate-850/50 data-[state=selected]:bg-slate-800", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></tr>`);
  });
}
function Table_head($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<th${attributes({
      class: clsx(cn("h-10 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></th>`);
  });
}
function Table_cell($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<td${attributes({
      class: clsx(cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></td>`);
  });
}
function _page($$renderer) {
  head("uyjeyu", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Svelte 5 Runes vs React 19 Matrix | Spatial Data Sandbox</title>`);
    });
  });
  $$renderer.push(`<div class="flex flex-col gap-6">`);
  Card($$renderer, {
    class: "border-slate-800 bg-slate-900/90 shadow-xl",
    children: ($$renderer2) => {
      Card_header($$renderer2, {
        class: "p-5 pb-3",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="flex items-center gap-2">`);
          Cpu($$renderer3, { class: "h-6 w-6 text-sky-400" });
          $$renderer3.push(`<!----> `);
          Card_title($$renderer3, {
            class: "text-xl",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Svelte 5 Runes vs Svelte 4 / React 19`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div> `);
          Card_description($$renderer3, {
            class: "text-sm text-slate-400",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Architectural comparison of reactivity primitives, compile-time proxies, and performance.`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Card_content($$renderer2, {
        class: "p-5 pt-2",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="rounded-lg border border-slate-800 bg-slate-950/80 overflow-hidden shadow-inner">`);
          Table($$renderer3, {
            children: ($$renderer4) => {
              Table_header($$renderer4, {
                children: ($$renderer5) => {
                  Table_row($$renderer5, {
                    class: "border-slate-800 bg-slate-900/80",
                    children: ($$renderer6) => {
                      Table_head($$renderer6, {
                        class: "w-12 text-center text-slate-300 font-bold",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->#`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_head($$renderer6, {
                        class: "text-slate-300 font-bold",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Concept / Capability`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_head($$renderer6, {
                        class: "text-slate-300 font-bold",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Svelte 5 (Runes) &amp; SvelteKit`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_head($$renderer6, {
                        class: "text-slate-300 font-bold",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->React 19 / Next.js`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_head($$renderer6, {
                        class: "text-slate-300 font-bold",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Key Technical Difference`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> `);
              Table_body($$renderer4, {
                children: ($$renderer5) => {
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->1`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Reactive State`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let count = $state(0);</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const [count, setCount] = useState(0);</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Zero setter boilerplate. Mutate directly (<code class="text-orange-400">count++</code>). Proxies objects/arrays.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->1b`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->DOM Ref / Mutable Raw`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">bind:this={el}</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const elRef = useRef(null);</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Direct DOM node binding without <code class="text-sky-400">ref.current</code> boilerplate.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->2`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Computed State`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let double = $derived(count * 2);</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useMemo(() => count * 2, [count])</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Auto-tracked dependencies. No manual dependency array risking stale closures.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->3`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Multi-line Computed`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let sum = $derived.by(() => { ... })</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useMemo(() => { ... }, [deps])</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->For complex logic containing loops, conditions, or multi-step aggregations.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->4`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Side Effects &amp; Lifecycle`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">$effect(() => { ... });</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">useEffect(() => { ... }, [deps]);</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Auto-tracks runtime signal reads. Batches updates into microtasks before paint.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->5`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Props &amp; Two-Way Binding`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">let { val = $bindable() } = $props();</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">const { val, onChange } = props;</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Type-safe props with <code class="text-orange-400">$bindable()</code> for optional clean two-way synchronization.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->6`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Render Props / Snippets`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">{#snippet item(data)}</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">renderItem={(data) => ...}</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Type-safe parameterized template closures replacing legacy <code class="text-slate-400">&lt;slot /></code>.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->7`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Global Shared Store`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">standalone .svelte.ts with $state</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">Redux / Zustand / React Context</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Zero provider wrapper hell. Works in pure TypeScript modules without React tree context.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->8`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Server Data Loading`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+page.server.ts load</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">getServerSideProps / RSC</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Runs strictly on server (Node.js/Bun). Secrets never leak to client bundle.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->9`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Page Component`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+page.svelte (let { data } = $props())</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">export default function Page()</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Client UI component immediately hydrated with typed server <code class="text-orange-400">PageData</code>.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Table_row($$renderer5, {
                    children: ($$renderer6) => {
                      Table_cell($$renderer6, {
                        class: "text-center",
                        children: ($$renderer7) => {
                          Badge($$renderer7, {
                            variant: "sky",
                            class: "font-mono text-xs",
                            children: ($$renderer8) => {
                              $$renderer8.push(`<!---->10`);
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "font-semibold text-slate-100",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Nested Layouts`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-orange-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">+layout.svelte ({@render children()})</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<code class="text-sky-400 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">app/layout.tsx ({children})</code>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> `);
                      Table_cell($$renderer6, {
                        class: "text-xs text-slate-300",
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->Persistent UI shell; only active nested sub-routes re-render during navigation.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  RunesLivePlayground($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
