import { a8 as sanitize_props, a9 as spread_props, aa as slot, ah as ensure_array_like, a as attr_class, e as escape_html, d as derived, h as head, al as await_block } from "../../../chunks/index.js";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import { C as Card, a as Card_header, b as Card_content } from "../../../chunks/card-content.js";
import { C as Card_title } from "../../../chunks/card-title.js";
import { C as Card_description, h as html } from "../../../chunks/card-description.js";
import "clsx";
import { I as Icon, B as Badge } from "../../../chunks/Icon.js";
import { C as Cpu } from "../../../chunks/cpu.js";
import { L as Layers } from "../../../chunks/layers.js";
function Clock($$renderer, $$props) {
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
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 6v6l4 2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function Compass($$renderer, $$props) {
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
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      {
        "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "compass" },
    $$sanitized_props,
    {
      /**
       * @component @name Compass
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtMTYuMjQgNy43Ni0xLjgwNCA1LjQxMWEyIDIgMCAwIDEtMS4yNjUgMS4yNjVMNy43NiAxNi4yNGwxLjgwNC01LjQxMWEyIDIgMCAwIDEgMS4yNjUtMS4yNjV6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/compass
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
function Globe($$renderer, $$props) {
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
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      { "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "globe" },
    $$sanitized_props,
    {
      /**
       * @component @name Globe
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMmExNC41IDE0LjUgMCAwIDAgMCAyMCAxNC41IDE0LjUgMCAwIDAgMC0yMCIgLz4KICA8cGF0aCBkPSJNMiAxMmgyMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/globe
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
function Radio($$renderer, $$props) {
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
    ["path", { "d": "M16.247 7.761a6 6 0 0 1 0 8.478" }],
    ["path", { "d": "M19.075 4.933a10 10 0 0 1 0 14.134" }],
    ["path", { "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }],
    ["path", { "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "radio" },
    $$sanitized_props,
    {
      /**
       * @component @name Radio
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYuMjQ3IDcuNzYxYTYgNiAwIDAgMSAwIDguNDc4IiAvPgogIDxwYXRoIGQ9Ik0xOS4wNzUgNC45MzNhMTAgMTAgMCAwIDEgMCAxNC4xMzQiIC8+CiAgPHBhdGggZD0iTTQuOTI1IDE5LjA2N2ExMCAxMCAwIDAgMSAwLTE0LjEzNCIgLz4KICA8cGF0aCBkPSJNNy43NTMgMTYuMjM5YTYgNiAwIDAgMSAwLTguNDc4IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/radio
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
function Server($$renderer, $$props) {
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
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }],
    ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "server" },
    $$sanitized_props,
    {
      /**
       * @component @name Server
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iOCIgeD0iMiIgeT0iMiIgcng9IjIiIHJ5PSIyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIxNCIgcng9IjIiIHJ5PSIyIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjYiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/server
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
function Shield_check($$renderer, $$props) {
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
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "shield-check" },
    $$sanitized_props,
    {
      /**
       * @component @name ShieldCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
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
function SvelteKitArchitecture($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedPatternId = "page-server-loader";
    const patterns = [
      // Pattern 1: Server-only loader (+page.server.ts) for secure API keys and backend queries
      {
        id: "page-server-loader",
        name: "Server-Only Loader (+page.server.ts)",
        filename: "src/routes/spatial-portal/+page.server.ts",
        scope: "Server",
        description: "Executes strictly in Node.js/Edge runtime on the server. Safely injects private Datafordeler tokens, queries spatial databases (PostGIS/Supabase), and streams GeoJSON to the client.",
        exampleSnippet: `// Server-only data loader (+page.server.ts)
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ fetch, depends }) => {
  // Invalidate cache when 'spatial:layers' key is touched
  depends('spatial:layers');
  
  // Server-side fetch with secure private API key (never leaked to browser bundle)
  const res = await fetch('https://services.datafordeler.dk/DHMSkyggekort/WMS?token=' + env.DATAFORDELER_KEY);
  const metadata = await res.json();

  return {
    portalConfig: { region: 'Danmark', crs: 'EPSG:25832' },
    // Stream large dataset promise directly to Svelte 5 client:
    streamedGeoJson: fetch('/api/v1/cadastral-parcels').then(r => r.json())
  };
};`
      },
      // Pattern 2: Universal loader (+page.ts) running on SSR and client SPA navigation
      {
        id: "page-universal-loader",
        name: "Universal Loader (+page.ts)",
        filename: "src/routes/spatial-portal/+page.ts",
        scope: "Universal",
        description: "Runs on server during SSR initial page render, then runs strictly on client during subsequent client-side SPA navigations. Ideal for public OGC capability caching.",
        exampleSnippet: `// Universal data loader (+page.ts)
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, data }) => {
  // data contains output from +page.server.ts if present
  const wmsCapabilities = await fetch('https://services.datafordeler.dk/GeoDanmark/WMS?request=GetCapabilities')
    .then(r => r.text());

  return {
    ...data,
    wmsCapabilities
  };
};`
      },
      // Pattern 3: Server actions (+page.server.ts actions) for secure form submissions and mutations
      {
        id: "server-actions",
        name: "Form Actions (+page.server.ts)",
        filename: "src/routes/spatial-portal/+page.server.ts",
        scope: "Server",
        description: "Standard POST handlers for updating spatial layers, user coordinate bookmarks, and GIS feature geometry mutations with automatic progressive enhancement.",
        exampleSnippet: `// Server Actions (+page.server.ts)
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  saveBookmark: async ({ request, locals }) => {
    const data = await request.formData();
    const title = data.get('title');
    const lon = parseFloat(data.get('lon') as string);
    const lat = parseFloat(data.get('lat') as string);

    if (!title) return fail(400, { missing: true, message: 'Bookmark title required' });

    // Insert into database with user session credentials
    await db.bookmarks.insert({ userId: locals.user.id, title, coordinates: [lon, lat] });
    return { success: true };
  }
};`
      },
      // Pattern 4: Svelte 5 Component Page Hydration (+page.svelte with runes and PageData)
      {
        id: "page-svelte-runes",
        name: "Svelte 5 Page (+page.svelte)",
        filename: "src/routes/spatial-portal/+page.svelte",
        scope: "Client",
        description: "Type-safe client component receiving server PageData via let { data } = $props(), rendering interactive OpenLayers map and streaming GeoJSON via {#await}.",
        exampleSnippet: `<script lang="ts">
  import type { PageData, ActionData } from './$types';
  import SpatialMap from '$lib/components/SpatialMap.svelte';

  // Receives strongly-typed server loader data via $props() rune
  let { data, form }: { data: PageData; form: ActionData } = $props();
<\/script>

<h1>Spatial Portal: {data.portalConfig.region}</h1>

<!-- Fine-grained streaming with {#await} block directly on server promise -->
{#await data.streamedGeoJson}
  <p>Streaming Cadastral Parcels (EPSG:25832)...</p>
{:then parcels}
  <SpatialMap parcels={parcels} />
{:catch error}
  <p class="error">Failed to stream spatial data: {error.message}</p>
{/await}`
      }
    ];
    const activePattern = derived(() => patterns.find((p) => p.id === selectedPatternId) ?? patterns[0]);
    const highlightedSnippet = derived(() => Prism.highlight(activePattern().exampleSnippet, Prism.languages.tsx || Prism.languages.typescript, "tsx"));
    $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 mt-3"><div class="flex flex-col gap-2"><!--[-->`);
    const each_array = ensure_array_like(patterns);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let pattern = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class(`flex flex-col items-start gap-1 p-3 rounded-lg border text-left transition-all cursor-pointer ${activePattern().id === pattern.id ? "border-blue-500 bg-blue-950/40 shadow-sm" : "border-slate-800 bg-slate-900/60 hover:bg-slate-850 hover:border-slate-700"}`)}><div class="flex items-center gap-2 w-full justify-between"><span class="text-xs font-semibold text-slate-100">${escape_html(pattern.name)}</span> `);
      Badge($$renderer2, {
        variant: pattern.scope === "Server" ? "emerald" : pattern.scope === "Universal" ? "sky" : "orange",
        class: "text-[10px] px-1.5 py-0 uppercase tracking-wider font-bold",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(pattern.scope)}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> <span class="text-[11px] font-mono text-slate-400">${escape_html(pattern.filename)}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-xl flex flex-col",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-3 border-b border-slate-800/80",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><div class="flex items-center gap-2">`);
            if (activePattern().scope === "Server") {
              $$renderer4.push("<!--[0-->");
              Server($$renderer4, { class: "h-4 w-4 text-emerald-400" });
            } else if (activePattern().scope === "Universal") {
              $$renderer4.push("<!--[1-->");
              Globe($$renderer4, { class: "h-4 w-4 text-sky-400" });
            } else {
              $$renderer4.push("<!--[-1-->");
              Cpu($$renderer4, { class: "h-4 w-4 text-orange-400" });
            }
            $$renderer4.push(`<!--]--> `);
            Card_title($$renderer4, {
              class: "text-base",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(activePattern().name)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            Badge($$renderer4, {
              variant: "outline",
              class: "font-mono text-xs text-slate-300 border-slate-700 w-fit",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(activePattern().filename)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            Card_description($$renderer4, {
              class: "mt-1 text-xs leading-relaxed text-slate-400",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(activePattern().description)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 flex-1",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="rounded-lg border border-slate-800 bg-slate-950 p-3.5 overflow-x-auto"><pre class="m-0 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap break-words"><code class="language-tsx">${html(highlightedSnippet())}</code></pre></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("sml21i", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>SvelteKit 2 SSR &amp; Routing | Spatial Data Sandbox</title>`);
      });
    });
    $$renderer2.push(`<div class="flex flex-col gap-6">`);
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-xl",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-5 pb-3",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-center gap-2">`);
            Layers($$renderer4, { class: "h-6 w-6 text-emerald-400" });
            $$renderer4.push(`<!----> `);
            Card_title($$renderer4, {
              class: "text-xl",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->SvelteKit 2 Server &amp; Universal Data Flow`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            Card_description($$renderer4, {
              class: "text-sm text-slate-400",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Patterns for securing GIS tokens, streaming GeoJSON polygons, and server actions.`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-5 pt-2 flex flex-col gap-4",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3.5 rounded-lg border border-slate-800 bg-slate-950/80 shadow-inner"><div class="flex flex-col gap-1"><span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">`);
            Server($$renderer4, { class: "h-3 w-3 text-emerald-400" });
            $$renderer4.push(`<!----> SSR Runtime</span> <span class="font-mono text-xs text-slate-100 font-medium">${escape_html(data.serverRuntime)}</span></div> <div class="flex flex-col gap-1"><span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">`);
            Clock($$renderer4, { class: "h-3 w-3 text-sky-400" });
            $$renderer4.push(`<!----> Server Timestamp</span> <span class="font-mono text-xs text-slate-300 truncate">${escape_html(data.serverTimestamp)}</span></div> <div class="flex flex-col gap-1"><span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">`);
            Compass($$renderer4, { class: "h-3 w-3 text-purple-400" });
            $$renderer4.push(`<!----> Target Spatial CRS</span> <span class="font-mono text-xs text-purple-300 font-medium">${escape_html(data.securePortalConfig.crs)}</span></div> <div class="flex flex-col gap-1"><span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">`);
            Shield_check($$renderer4, { class: "h-3 w-3 text-emerald-400" });
            $$renderer4.push(`<!----> Datafordeler Key (Isolated)</span> <span class="font-mono text-xs text-emerald-400 font-semibold">${escape_html(data.securePortalConfig.tokenMasked)}</span></div></div> <div class="p-3.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 shadow-sm flex flex-col gap-2"><div class="flex items-center justify-between"><div class="flex items-center gap-2">`);
            Radio($$renderer4, { class: "h-4 w-4 text-cyan-400 animate-pulse" });
            $$renderer4.push(`<!----> <h4 class="text-xs font-semibold text-slate-200">Fine-Grained Server Promise Streaming (<code class="text-cyan-300 font-mono text-xs">{#await data.streamedCadastralSummary}</code>):</h4></div> `);
            Badge($$renderer4, {
              variant: "sky",
              class: "text-[10px] font-mono",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Async Stream`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> `);
            await_block(
              $$renderer4,
              data.streamedCadastralSummary,
              () => {
                $$renderer4.push(`<div class="flex items-center gap-2 text-xs text-cyan-300 py-1"><span class="h-3.5 w-3.5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></span> <span>Streaming cadastral metadata summary in background...</span></div>`);
              },
              (summary) => {
                $$renderer4.push(`<div class="flex flex-wrap items-center gap-4 text-xs text-slate-300 py-1">`);
                Badge($$renderer4, {
                  variant: "emerald",
                  class: "text-[10px] font-bold",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->Stream Hydrated`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push(`<!----> <span><strong>Authority:</strong> ${escape_html(summary.sourceAuthority)}</span> <span><strong>Total Parcels:</strong> <span class="text-white font-mono font-semibold">${escape_html(summary.totalParcels.toLocaleString())}</span></span> <span><strong>Avg Area:</strong> <span class="text-white font-mono font-semibold">${escape_html(summary.averageAreaM2)} m²</span></span></div>`);
              }
            );
            $$renderer4.push(`<!--]--></div> `);
            SvelteKitArchitecture($$renderer4);
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
