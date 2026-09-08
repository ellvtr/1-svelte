import { p as is_array, m as get_prototype_of, o as object_prototype, a8 as sanitize_props, a9 as spread_props, aa as slot, e as escape_html, d as derived, ab as hasContext, g as getContext, a7 as setContext, ac as ATTACHMENT_KEY, ad as run, ae as attributes, af as bind_props, ag as props_id, ah as ensure_array_like, ai as attr, a as attr_class, aj as stringify, h as head } from "../../../chunks/index.js";
import "ol/proj.js";
import { s as spatialStore } from "../../../chunks/spatialStore.svelte.js";
import { C as Card, a as Card_header, b as Card_content } from "../../../chunks/card-content.js";
import { C as Card_title } from "../../../chunks/card-title.js";
import { clsx } from "clsx";
import { I as Icon, c as cn, B as Badge } from "../../../chunks/Icon.js";
import { L as Layers } from "../../../chunks/layers.js";
const empty = [];
function snapshot(value, skip_warning = false, no_tojson = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty, null, no_tojson);
}
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element = value[i];
        if (i in value) {
          copy[i] = clone(element, cloned, path, paths, null, no_tojson);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key of Object.keys(value)) {
        copy[key] = clone(
          // @ts-expect-error
          value[key],
          cloned,
          path,
          paths,
          null,
          no_tojson
        );
      }
      return copy;
    }
    if (value instanceof Date) {
      value.getTime();
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function" && !no_tojson) {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
function Check($$renderer, $$props) {
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
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
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
function Eye_off($$renderer, $$props) {
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
        "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
      }
    ],
    ["path", { "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
    [
      "path",
      {
        "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
      }
    ],
    ["path", { "d": "m2 2 20 20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye-off" },
    $$sanitized_props,
    {
      /**
       * @component @name EyeOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuNzMzIDUuMDc2YTEwLjc0NCAxMC43NDQgMCAwIDEgMTEuMjA1IDYuNTc1IDEgMSAwIDAgMSAwIC42OTYgMTAuNzQ3IDEwLjc0NyAwIDAgMS0xLjQ0NCAyLjQ5IiAvPgogIDxwYXRoIGQ9Ik0xNC4wODQgMTQuMTU4YTMgMyAwIDAgMS00LjI0Mi00LjI0MiIgLz4KICA8cGF0aCBkPSJNMTcuNDc5IDE3LjQ5OWExMC43NSAxMC43NSAwIDAgMS0xNS40MTctNS4xNTEgMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSA0LjQ0Ni01LjE0MyIgLz4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye-off
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
function Search($$renderer, $$props) {
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
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
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
function SpatialMap($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentCenter = derived(() => spatialStore.center);
    const activeCount = derived(() => spatialStore.activeLayerCount);
    const cursorCoords = derived(() => spatialStore.cursorPosition);
    const currentZoom = derived(() => spatialStore.zoom);
    $$renderer2.push(`<div class="map-wrapper svelte-ix576y"><div class="map-viewport svelte-ix576y"></div> <div class="map-overlay-controls svelte-ix576y"><div class="btn-group svelte-ix576y"><button class="ctrl-btn svelte-ix576y" title="Zoom In">+</button> <button class="ctrl-btn svelte-ix576y" title="Zoom Out">-</button> <button class="ctrl-btn reset svelte-ix576y" title="Overview DK">DK</button></div> <div class="city-jump-group svelte-ix576y"><button class="city-btn svelte-ix576y" title="Zoom to Aarhus Parcels">Aarhus</button> <button class="city-btn svelte-ix576y" title="Zoom to Odense Parcels">Odense</button> <button class="city-btn svelte-ix576y" title="Zoom to KBH Parcels">KBH</button></div></div> `);
    if (currentZoom() < 12 && spatialStore.layers.find((l) => l.id === "matrikel-vector")?.visible) {
      $$renderer2.push(`<!--[0--><div class="zoom-hint svelte-ix576y">Zoom in to level 12+ (or click a city button) to render cadastral parcels</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <footer class="telemetry-bar svelte-ix576y"><div class="telemetry-item svelte-ix576y"><span class="label svelte-ix576y">Center:</span> <span class="value svelte-ix576y">${escape_html(currentCenter().lat.toFixed(4))}°N, ${escape_html(currentCenter().lon.toFixed(4))}°E</span></div> <div class="telemetry-item svelte-ix576y"><span class="label svelte-ix576y">Cursor:</span> <span class="value svelte-ix576y">${escape_html(cursorCoords() ? `${cursorCoords().lat.toFixed(4)}°N, ${cursorCoords().lon.toFixed(4)}°E` : "Hover over map")}</span></div> <div class="telemetry-item svelte-ix576y"><span class="label svelte-ix576y">Active Layers:</span> <span class="badge-count svelte-ix576y">${escape_html(activeCount())}</span></div></footer></div>`);
  });
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
  const derived$1 = derived(getter);
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived$1();
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function composeHandlers(...handlers) {
  return function(e) {
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        handler.current?.call(this, e);
      }
    }
  };
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
function index(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style) return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  function position() {
    var start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(
      options.source + ":" + lineno + ":" + column + ": " + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent) ;
    else {
      throw err;
    }
  }
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position();
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();
    if (!match(COLON_REGEX)) return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace();
  return declarations();
}
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(style, iterator) {
  let styleObject = null;
  if (!style || typeof style !== "string") {
    return styleObject;
  }
  const declarations = index(style);
  const hasIterator = typeof iterator === "function";
  declarations.forEach((declaration) => {
    if (declaration.type !== "declaration") {
      return;
    }
    const { property, value } = declaration;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      styleObject = styleObject || {};
      styleObject[property] = value;
    }
  });
  return styleObject;
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  StyleToObject(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const EVENT_LIST = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key) {
  return EVENT_LIST_SET.has(key);
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    if (!props)
      continue;
    for (const key of Object.keys(props)) {
      const a = result[key];
      const b = props[key];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx(a, b);
        } else if (aIsClassValue) {
          result[key] = clsx(a);
        } else if (bIsClassValue) {
          result[key] = clsx(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
    for (const key of Object.getOwnPropertySymbols(props)) {
      const a = result[key];
      const b = props[key];
      result[key] = b !== void 0 ? b : a;
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden === false) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled === false) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
const defaultWindow = void 0;
function getActiveElement$1(document2) {
  let activeElement = document2.activeElement;
  while (activeElement?.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
function createSubscriber(_) {
  return () => {
  };
}
class ActiveElement {
  #document;
  #subscribe;
  constructor(options = {}) {
    const { window: window2 = defaultWindow, document: document2 = window2?.document } = options;
    if (window2 === void 0) return;
    this.#document = document2;
    this.#subscribe = createSubscriber();
  }
  get current() {
    this.#subscribe?.();
    if (!this.#document) return null;
    return getActiveElement$1(this.#document);
  }
}
new ActiveElement();
class Context {
  #name;
  #key;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    this.#name = name;
    this.#key = Symbol(name);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#key;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(this.#key);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(this.#key);
    if (context === void 0) {
      throw new Error(`Context "${this.#name}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback) {
    const context = getContext(this.#key);
    if (context === void 0) {
      return fallback;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(this.#key, context);
  }
}
function runWatcher(sources, flush, effect, options = {}) {
  const { lazy = false } = options;
}
function watch(sources, effect, options) {
  runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
  runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
const DOCUMENT_NODE = 9;
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  return isObject(node) && node.constructor?.name === "VisualViewport";
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return node?.ownerDocument ?? document;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement?.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  element;
  #root = derived(() => {
    if (!this.element.current) return document;
    const rootNode = this.element.current.getRootNode() ?? document;
    return rootNode;
  });
  get root() {
    return this.#root();
  }
  set root($$value) {
    return this.#root($$value);
  }
  constructor(element) {
    if (typeof element === "function") {
      this.element = boxWith(element);
    } else {
      this.element = element;
    }
  }
  getDocument = () => {
    return getDocument(this.root);
  };
  getWindow = () => {
    return this.getDocument().defaultView ?? window;
  };
  getActiveElement = () => {
    return getActiveElement(this.root);
  };
  isActiveElement = (node) => {
    return node === this.getActiveElement();
  };
  getElementById(id) {
    return this.root.getElementById(id);
  }
  querySelector = (selector) => {
    if (!this.root) return null;
    return this.root.querySelector(selector);
  };
  querySelectorAll = (selector) => {
    if (!this.root) return [];
    return this.root.querySelectorAll(selector);
  };
  setTimeout = (callback, delay) => {
    return this.getWindow().setTimeout(callback, delay);
  };
  clearTimeout = (timeoutId) => {
    return this.getWindow().clearTimeout(timeoutId);
  };
}
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function attachRef(ref, onChange) {
  return {
    [createAttachmentKey()]: (node) => {
      if (isBox(ref)) {
        ref.current = node;
        run(() => onChange?.(node));
        return () => {
          if ("isConnected" in node && node.isConnected)
            return;
          ref.current = null;
        };
      }
      ref(node);
      run(() => onChange?.(node));
      return () => {
        if ("isConnected" in node && node.isConnected)
          return;
        ref(null);
      };
    }
  };
}
function boolToStr(condition) {
  return condition ? "true" : "false";
}
function boolToEmptyStrOrUndef(condition) {
  return condition ? "" : void 0;
}
function getAriaChecked(checked, indeterminate) {
  if (indeterminate)
    return "mixed";
  return checked ? "true" : "false";
}
class BitsAttrs {
  #variant;
  #prefix;
  attrs;
  constructor(config) {
    this.#variant = config.getVariant ? config.getVariant() : null;
    this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
    this.getAttr = this.getAttr.bind(this);
    this.selector = this.selector.bind(this);
    this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
  }
  getAttr(part, variantOverride) {
    if (variantOverride)
      return `data-${variantOverride}-${part}`;
    return `${this.#prefix}${part}`;
  }
  selector(part, variantOverride) {
    return `[${this.getAttr(part, variantOverride)}]`;
  }
}
function createBitsAttrs(config) {
  const bitsAttrs = new BitsAttrs(config);
  return {
    ...bitsAttrs.attrs,
    selector: bitsAttrs.selector,
    getAttr: bitsAttrs.getAttr
  };
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const HOME = "Home";
const SPACE = " ";
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isElementOrSVGElement(element) {
  return element instanceof Element || element instanceof SVGElement;
}
function noop() {
}
function createId(prefixOrUid, uid) {
  return `bits-${prefixOrUid}`;
}
function isValidIndex(index2, arr) {
  return index2 >= 0 && index2 < arr.length;
}
const checkboxAttrs = createBitsAttrs({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
});
const CheckboxGroupContext = new Context("Checkbox.Group");
const CheckboxRootContext = new Context("Checkbox.Root");
class CheckboxRootState {
  static create(opts, group = null) {
    return CheckboxRootContext.set(new CheckboxRootState(opts, group));
  }
  opts;
  group;
  #trueName = derived(() => {
    if (this.group && this.group.opts.name.current) return this.group.opts.name.current;
    return this.opts.name.current;
  });
  get trueName() {
    return this.#trueName();
  }
  set trueName($$value) {
    return this.#trueName($$value);
  }
  #trueRequired = derived(() => {
    if (this.group && this.group.opts.required.current) return true;
    return this.opts.required.current;
  });
  get trueRequired() {
    return this.#trueRequired();
  }
  set trueRequired($$value) {
    return this.#trueRequired($$value);
  }
  #trueDisabled = derived(() => {
    if (this.group && this.group.opts.disabled.current) return true;
    return this.opts.disabled.current;
  });
  get trueDisabled() {
    return this.#trueDisabled();
  }
  set trueDisabled($$value) {
    return this.#trueDisabled($$value);
  }
  #trueReadonly = derived(() => {
    if (this.group && this.group.opts.readonly.current) return true;
    return this.opts.readonly.current;
  });
  get trueReadonly() {
    return this.#trueReadonly();
  }
  set trueReadonly($$value) {
    return this.#trueReadonly($$value);
  }
  attachment;
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    watch.pre(
      [
        () => snapshot(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([groupValue, value]) => {
        if (!groupValue || !value) return;
        this.opts.checked.current = groupValue.includes(value);
      }
    );
    watch.pre(() => this.opts.checked.current, (checked) => {
      if (!this.group) return;
      if (checked) {
        this.group?.addValue(this.opts.value.current);
      } else {
        this.group?.removeValue(this.opts.value.current);
      }
    });
  }
  onkeydown(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (e.key === ENTER) {
      e.preventDefault();
      if (this.opts.type.current === "submit") {
        const form = e.currentTarget.closest("form");
        form?.requestSubmit();
      }
      return;
    }
    if (e.key === SPACE) {
      e.preventDefault();
      this.#toggle();
    }
  }
  #toggle() {
    if (this.opts.indeterminate.current) {
      this.opts.indeterminate.current = false;
      this.opts.checked.current = true;
    } else {
      this.opts.checked.current = !this.opts.checked.current;
    }
  }
  onclick(e) {
    if (this.trueDisabled || this.trueReadonly) return;
    if (this.opts.type.current === "submit") {
      this.#toggle();
      return;
    }
    e.preventDefault();
    this.#toggle();
  }
  #snippetProps = derived(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": getAriaChecked(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": boolToStr(this.trueRequired),
    "aria-readonly": boolToStr(this.trueReadonly),
    "data-disabled": boolToEmptyStrOrUndef(this.trueDisabled),
    "data-readonly": boolToEmptyStrOrUndef(this.trueReadonly),
    "data-state": getCheckboxDataState(this.opts.checked.current, this.opts.indeterminate.current),
    [checkboxAttrs.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CheckboxInputState {
  static create() {
    return new CheckboxInputState(CheckboxRootContext.get());
  }
  root;
  #trueChecked = derived(() => {
    if (!this.root.group) return this.root.opts.checked.current;
    if (this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) {
      return true;
    }
    return false;
  });
  get trueChecked() {
    return this.#trueChecked();
  }
  set trueChecked($$value) {
    return this.#trueChecked($$value);
  }
  #shouldRender = derived(() => Boolean(this.root.trueName));
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(root) {
    this.root = root;
    this.onfocus = this.onfocus.bind(this);
  }
  onfocus(_) {
    if (!isHTMLElement(this.root.opts.ref.current)) return;
    this.root.opts.ref.current.focus();
  }
  #props = derived(() => ({
    type: "checkbox",
    checked: this.root.opts.checked.current === true,
    disabled: this.root.trueDisabled,
    required: this.root.trueRequired,
    name: this.root.trueName,
    form: this.root.opts.form.current,
    value: this.root.opts.value.current,
    readonly: this.root.trueReadonly,
    onfocus: this.onfocus
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function getCheckboxDataState(checked, indeterminate) {
  if (indeterminate) return "indeterminate";
  return checked ? "checked" : "unchecked";
}
function Hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, $$slots, $$events, ...restProps } = $$props;
    const mergedProps = derived(() => mergeProps(restProps, {
      "aria-hidden": "true",
      tabindex: -1,
      style: { ...srOnlyStyles, position: "absolute", top: "0", left: "0" }
    }));
    if (mergedProps().type === "checkbox") {
      $$renderer2.push(`<!--[0--><input${attributes({ ...mergedProps(), value }, void 0, void 0, void 0, 4)}/>`);
    } else {
      $$renderer2.push(`<!--[-1--><input${attributes({ value, ...mergedProps() }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}
function Checkbox_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const inputState = CheckboxInputState.create();
    if (inputState.shouldRender) {
      $$renderer2.push("<!--[0-->");
      Hidden_input($$renderer2, spread_props([inputState.props]));
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Checkbox$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      checked = false,
      ref = null,
      onCheckedChange,
      children,
      disabled = false,
      required = false,
      name = void 0,
      form = void 0,
      value = "on",
      id = createId(uid),
      indeterminate = false,
      onIndeterminateChange,
      child,
      type = "button",
      readonly,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const group = CheckboxGroupContext.getOr(null);
    if (group && value) {
      if (group.opts.value.current.includes(value)) {
        checked = true;
      } else {
        checked = false;
      }
    }
    watch.pre(() => value, () => {
      if (group && value) {
        if (group.opts.value.current.includes(value)) {
          checked = true;
        } else {
          checked = false;
        }
      }
    });
    const rootState = CheckboxRootState.create(
      {
        checked: boxWith(() => checked, (v) => {
          checked = v;
          onCheckedChange?.(v);
        }),
        disabled: boxWith(() => disabled ?? false),
        required: boxWith(() => required),
        name: boxWith(() => name),
        form: boxWith(() => form),
        value: boxWith(() => value),
        id: boxWith(() => id),
        ref: boxWith(() => ref, (v) => ref = v),
        indeterminate: boxWith(() => indeterminate, (v) => {
          indeterminate = v;
          onIndeterminateChange?.(v);
        }),
        type: boxWith(() => type),
        readonly: boxWith(() => Boolean(readonly))
      },
      group
    );
    const mergedProps = derived(() => mergeProps({ ...restProps }, rootState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps(), ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push(`<!--[-1--><button${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]--> `);
    Checkbox_input($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { checked, ref, indeterminate });
  });
}
class SvelteResizeObserver {
  #node;
  #onResize;
  constructor(node, onResize) {
    this.#node = node;
    this.#onResize = onResize;
    this.handler = this.handler.bind(this);
  }
  handler() {
    let rAF = 0;
    const _node = this.#node();
    if (!_node) return;
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(rAF);
      rAF = window.requestAnimationFrame(this.#onResize);
    });
    resizeObserver.observe(_node);
    return () => {
      window.cancelAnimationFrame(rAF);
      resizeObserver.unobserve(_node);
    };
  }
}
function getRangeStyles(direction, min, max) {
  const styles = {
    position: "absolute"
  };
  if (direction === "lr") {
    styles.left = `${min}%`;
    styles.right = `${max}%`;
  } else if (direction === "rl") {
    styles.right = `${min}%`;
    styles.left = `${max}%`;
  } else if (direction === "bt") {
    styles.bottom = `${min}%`;
    styles.top = `${max}%`;
  } else {
    styles.top = `${min}%`;
    styles.bottom = `${max}%`;
  }
  return styles;
}
function getThumbStyles(direction, thumbPos) {
  const styles = {
    position: "absolute"
  };
  if (direction === "lr") {
    styles.left = `${thumbPos}%`;
    styles.translate = "-50% 0";
  } else if (direction === "rl") {
    styles.right = `${thumbPos}%`;
    styles.translate = "50% 0";
  } else if (direction === "bt") {
    styles.bottom = `${thumbPos}%`;
    styles.translate = "0 50%";
  } else {
    styles.top = `${thumbPos}%`;
    styles.translate = "0 -50%";
  }
  return styles;
}
function getTickStyles(direction, tickPosition, offsetPercentage) {
  const style = {
    position: "absolute"
  };
  if (direction === "lr") {
    style.left = `${tickPosition}%`;
    style.translate = `${offsetPercentage}% 0`;
  } else if (direction === "rl") {
    style.right = `${tickPosition}%`;
    style.translate = `${-offsetPercentage}% 0`;
  } else if (direction === "bt") {
    style.bottom = `${tickPosition}%`;
    style.translate = `0 ${-offsetPercentage}%`;
  } else {
    style.top = `${tickPosition}%`;
    style.translate = `0 ${offsetPercentage}%`;
  }
  return style;
}
function getDecimalPlaces(num) {
  if (Math.floor(num) === num)
    return 0;
  const str = num.toString();
  if (str.indexOf(".") !== -1 && str.indexOf("e-") === -1) {
    return str.split(".")[1].length;
  } else if (str.indexOf("e-") !== -1) {
    const parts = str.split("e-");
    return parseInt(parts[1], 10);
  }
  return 0;
}
function roundToPrecision(num, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}
function normalizeSteps(step, min, max) {
  if (typeof step === "number") {
    const difference = max - min;
    let count = Math.ceil(difference / step);
    const precision = getDecimalPlaces(step);
    const factor = Math.pow(10, precision);
    const intDifference = Math.round(difference * factor);
    const intStep = Math.round(step * factor);
    if (intDifference % intStep === 0) {
      count++;
    }
    const steps = [];
    for (let i = 0; i < count; i++) {
      const value = min + i * step;
      const roundedValue = roundToPrecision(value, precision);
      steps.push(roundedValue);
    }
    return steps;
  }
  return [...new Set(step)].filter((value) => value >= min && value <= max).sort((a, b) => a - b);
}
function snapValueToCustomSteps(value, steps) {
  if (steps.length === 0)
    return value;
  let closest = steps[0];
  let minDistance = Math.abs(value - closest);
  for (const step of steps) {
    const distance = Math.abs(value - step);
    if (distance < minDistance) {
      minDistance = distance;
      closest = step;
    }
  }
  return closest;
}
function getAdjacentStepValue(currentValue, steps, direction) {
  const currentIndex = steps.indexOf(currentValue);
  if (currentIndex === -1) {
    return snapValueToCustomSteps(currentValue, steps);
  }
  if (direction === "next") {
    return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : currentValue;
  } else {
    return currentIndex > 0 ? steps[currentIndex - 1] : currentValue;
  }
}
function linearScale(domain, range, clamp = true) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const slope = (r1 - r0) / (d1 - d0);
  return (x) => {
    const result = r0 + slope * (x - d0);
    if (!clamp)
      return result;
    if (result > Math.max(r0, r1))
      return Math.max(r0, r1);
    if (result < Math.min(r0, r1))
      return Math.min(r0, r1);
    return result;
  };
}
const sliderAttrs = createBitsAttrs({
  component: "slider",
  parts: [
    "root",
    "thumb",
    "range",
    "tick",
    "tick-label",
    "thumb-label"
  ]
});
const SliderRootContext = new Context("Slider.Root");
class SliderBaseRootState {
  opts;
  attachment;
  isActive = false;
  #layoutVersion = 0;
  #direction = derived(() => {
    if (this.opts.orientation.current === "horizontal") {
      return this.opts.dir.current === "rtl" ? "rl" : "lr";
    } else {
      return this.opts.dir.current === "rtl" ? "tb" : "bt";
    }
  });
  get direction() {
    return this.#direction();
  }
  set direction($$value) {
    return this.#direction($$value);
  }
  #normalizedSteps = derived(() => {
    return normalizeSteps(this.opts.step.current, this.opts.min.current, this.opts.max.current);
  });
  get normalizedSteps() {
    return this.#normalizedSteps();
  }
  set normalizedSteps($$value) {
    return this.#normalizedSteps($$value);
  }
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.domContext = new DOMContext(this.opts.ref);
    new SvelteResizeObserver(() => this.opts.ref.current, this.#handleLayoutChange);
  }
  #handleLayoutChange = () => {
    this.#layoutVersion += 1;
  };
  isThumbActive(_index) {
    return this.isActive;
  }
  #touchAction = derived(() => {
    if (this.opts.disabled.current) return void 0;
    return this.opts.orientation.current === "horizontal" ? "pan-y" : "pan-x";
  });
  getAllThumbs = () => {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
  };
  getThumbScale = () => {
    void this.#layoutVersion;
    const trackPadding = this.opts.trackPadding?.current;
    if (trackPadding !== void 0 && trackPadding > 0) {
      return [trackPadding, 100 - trackPadding];
    }
    if (this.opts.thumbPositioning.current === "exact") {
      return [0, 100];
    }
    const isVertical = this.opts.orientation.current === "vertical";
    const activeThumb = this.getAllThumbs()[0];
    const thumbSize = isVertical ? activeThumb?.offsetHeight : activeThumb?.offsetWidth;
    if (thumbSize === void 0 || Number.isNaN(thumbSize) || thumbSize === 0) return [0, 100];
    const trackSize = isVertical ? this.opts.ref.current?.offsetHeight : this.opts.ref.current?.offsetWidth;
    if (trackSize === void 0 || Number.isNaN(trackSize) || trackSize === 0) return [0, 100];
    const percentPadding = thumbSize / 2 / trackSize * 100;
    const min = percentPadding;
    const max = 100 - percentPadding;
    return [min, max];
  };
  getPositionFromValue = (thumbValue) => {
    const thumbScale = this.getThumbScale();
    const scale = linearScale([this.opts.min.current, this.opts.max.current], thumbScale);
    return scale(thumbValue);
  };
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    style: { touchAction: this.#touchAction() },
    [sliderAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SliderSingleRootState extends SliderBaseRootState {
  opts;
  isMulti = false;
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(
      [
        () => this.opts.step.current,
        () => this.opts.min.current,
        () => this.opts.max.current,
        () => this.opts.value.current
      ],
      ([step, min, max, value]) => {
        const steps = normalizeSteps(step, min, max);
        const isValidValue = (v) => {
          return steps.includes(v);
        };
        const gcv = (v) => {
          return snapValueToCustomSteps(v, steps);
        };
        if (!isValidValue(value)) {
          this.opts.value.current = gcv(value);
        }
      }
    );
  }
  isTickValueSelected = (tickValue) => {
    return this.opts.value.current === tickValue;
  };
  applyPosition({ clientXY, start, end }) {
    const min = this.opts.min.current;
    const max = this.opts.max.current;
    const percent = (clientXY - start) / (end - start);
    const val = percent * (max - min) + min;
    if (val < min) {
      this.updateValue(min);
    } else if (val > max) {
      this.updateValue(max);
    } else {
      const steps = this.normalizedSteps;
      const newValue = snapValueToCustomSteps(val, steps);
      this.updateValue(newValue);
    }
  }
  updateValue = (newValue) => {
    this.opts.value.current = snapValueToCustomSteps(newValue, this.normalizedSteps);
  };
  handlePointerMove = (e) => {
    if (!this.isActive || this.opts.disabled.current) return;
    e.preventDefault();
    e.stopPropagation();
    const sliderNode = this.opts.ref.current;
    const activeThumb = this.getAllThumbs()[0];
    if (!sliderNode || !activeThumb) return;
    activeThumb.focus();
    const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
    if (this.direction === "lr") {
      this.applyPosition({ clientXY: e.clientX, start: left, end: right });
    } else if (this.direction === "rl") {
      this.applyPosition({ clientXY: e.clientX, start: right, end: left });
    } else if (this.direction === "bt") {
      this.applyPosition({ clientXY: e.clientY, start: bottom, end: top });
    } else if (this.direction === "tb") {
      this.applyPosition({ clientXY: e.clientY, start: top, end: bottom });
    }
  };
  handlePointerDown = (e) => {
    if (e.button !== 0 || this.opts.disabled.current) return;
    const sliderNode = this.opts.ref.current;
    const closestThumb = this.getAllThumbs()[0];
    if (!closestThumb || !sliderNode) return;
    const target = e.composedPath()[0] ?? e.target;
    if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
    e.preventDefault();
    closestThumb.focus();
    this.isActive = true;
    this.handlePointerMove(e);
  };
  handlePointerUp = () => {
    if (this.opts.disabled.current) return;
    if (this.isActive) {
      this.opts.onValueCommit.current(run(() => this.opts.value.current));
    }
    this.isActive = false;
  };
  #thumbsPropsArr = derived(() => {
    const currValue = this.opts.value.current;
    return Array.from({ length: 1 }, () => {
      const thumbValue = currValue;
      const thumbPosition = this.getPositionFromValue(thumbValue);
      const style = getThumbStyles(this.direction, thumbPosition);
      return {
        role: "slider",
        "aria-valuemin": this.opts.min.current,
        "aria-valuemax": this.opts.max.current,
        "aria-valuenow": thumbValue,
        "aria-disabled": boolToStr(this.opts.disabled.current),
        "aria-orientation": this.opts.orientation.current,
        "data-value": thumbValue,
        "data-orientation": this.opts.orientation.current,
        style,
        [sliderAttrs.thumb]: ""
      };
    });
  });
  get thumbsPropsArr() {
    return this.#thumbsPropsArr();
  }
  set thumbsPropsArr($$value) {
    return this.#thumbsPropsArr($$value);
  }
  #thumbsRenderArr = derived(() => {
    return this.thumbsPropsArr.map((_, i) => i);
  });
  get thumbsRenderArr() {
    return this.#thumbsRenderArr();
  }
  set thumbsRenderArr($$value) {
    return this.#thumbsRenderArr($$value);
  }
  #ticksPropsArr = derived(() => {
    const steps = this.normalizedSteps;
    const currValue = this.opts.value.current;
    return steps.map((tickValue, i) => {
      const tickPosition = this.getPositionFromValue(tickValue);
      const isFirst = i === 0;
      const isLast = i === steps.length - 1;
      const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
      const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
      const bounded = tickValue <= currValue;
      return {
        "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
        "data-orientation": this.opts.orientation.current,
        "data-bounded": bounded ? "" : void 0,
        "data-value": tickValue,
        "data-selected": this.isTickValueSelected(tickValue) ? "" : void 0,
        style,
        [sliderAttrs.tick]: ""
      };
    });
  });
  get ticksPropsArr() {
    return this.#ticksPropsArr();
  }
  set ticksPropsArr($$value) {
    return this.#ticksPropsArr($$value);
  }
  #ticksRenderArr = derived(() => {
    return this.ticksPropsArr.map((_, i) => i);
  });
  get ticksRenderArr() {
    return this.#ticksRenderArr();
  }
  set ticksRenderArr($$value) {
    return this.#ticksRenderArr($$value);
  }
  #tickItemsArr = derived(() => {
    return this.ticksPropsArr.map((tick, i) => ({ value: tick["data-value"], index: i }));
  });
  get tickItemsArr() {
    return this.#tickItemsArr();
  }
  set tickItemsArr($$value) {
    return this.#tickItemsArr($$value);
  }
  #thumbItemsArr = derived(() => {
    const currValue = this.opts.value.current;
    return [{ value: currValue, index: 0 }];
  });
  get thumbItemsArr() {
    return this.#thumbItemsArr();
  }
  set thumbItemsArr($$value) {
    return this.#thumbItemsArr($$value);
  }
  #snippetProps = derived(() => ({
    ticks: this.ticksRenderArr,
    thumbs: this.thumbsRenderArr,
    tickItems: this.tickItemsArr,
    thumbItems: this.thumbItemsArr
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
}
class SliderMultiRootState extends SliderBaseRootState {
  opts;
  isMulti = true;
  activeThumb = null;
  currentThumbIdx = 0;
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(
      [
        () => this.opts.step.current,
        () => this.opts.min.current,
        () => this.opts.max.current,
        () => this.opts.value.current
      ],
      ([step, min, max, value]) => {
        const steps = normalizeSteps(step, min, max);
        const isValidValue = (v) => {
          return steps.includes(v);
        };
        const gcv = (v) => {
          return snapValueToCustomSteps(v, steps);
        };
        if (value.some((v) => !isValidValue(v))) {
          this.opts.value.current = value.map(gcv);
        }
      }
    );
  }
  isTickValueSelected = (tickValue) => {
    return this.opts.value.current.includes(tickValue);
  };
  isThumbActive(index2) {
    return this.isActive && this.activeThumb?.idx === index2;
  }
  applyPosition({ clientXY, activeThumbIdx, start, end }) {
    const min = this.opts.min.current;
    const max = this.opts.max.current;
    const percent = (clientXY - start) / (end - start);
    const val = percent * (max - min) + min;
    if (val < min) {
      this.updateValue(min, activeThumbIdx);
    } else if (val > max) {
      this.updateValue(max, activeThumbIdx);
    } else {
      const steps = this.normalizedSteps;
      const newValue = snapValueToCustomSteps(val, steps);
      this.updateValue(newValue, activeThumbIdx);
    }
  }
  #getClosestThumb = (e) => {
    const thumbs = this.getAllThumbs();
    if (!thumbs.length) return;
    for (const thumb of thumbs) {
      thumb.blur();
    }
    const distances = thumbs.map((thumb) => {
      if (this.opts.orientation.current === "horizontal") {
        const { left, right } = thumb.getBoundingClientRect();
        return Math.abs(e.clientX - (left + right) / 2);
      } else {
        const { top, bottom } = thumb.getBoundingClientRect();
        return Math.abs(e.clientY - (top + bottom) / 2);
      }
    });
    const node = thumbs[distances.indexOf(Math.min(...distances))];
    const idx = thumbs.indexOf(node);
    return { node, idx };
  };
  handlePointerMove = (e) => {
    if (!this.isActive || this.opts.disabled.current) return;
    e.preventDefault();
    e.stopPropagation();
    const sliderNode = this.opts.ref.current;
    const activeThumb = this.activeThumb;
    if (!sliderNode || !activeThumb) return;
    activeThumb.node.focus();
    const { left, right, top, bottom } = sliderNode.getBoundingClientRect();
    const direction = this.direction;
    if (direction === "lr") {
      this.applyPosition({
        clientXY: e.clientX,
        activeThumbIdx: activeThumb.idx,
        start: left,
        end: right
      });
    } else if (direction === "rl") {
      this.applyPosition({
        clientXY: e.clientX,
        activeThumbIdx: activeThumb.idx,
        start: right,
        end: left
      });
    } else if (direction === "bt") {
      this.applyPosition({
        clientXY: e.clientY,
        activeThumbIdx: activeThumb.idx,
        start: bottom,
        end: top
      });
    } else if (direction === "tb") {
      this.applyPosition({
        clientXY: e.clientY,
        activeThumbIdx: activeThumb.idx,
        start: top,
        end: bottom
      });
    }
  };
  handlePointerDown = (e) => {
    if (e.button !== 0 || this.opts.disabled.current) return;
    const sliderNode = this.opts.ref.current;
    const closestThumb = this.#getClosestThumb(e);
    if (!closestThumb || !sliderNode) return;
    const target = e.composedPath()[0] ?? e.target;
    if (!isElementOrSVGElement(target) || !sliderNode.contains(target)) return;
    e.preventDefault();
    this.activeThumb = closestThumb;
    closestThumb.node.focus();
    this.isActive = true;
    this.handlePointerMove(e);
  };
  handlePointerUp = () => {
    if (this.opts.disabled.current) return;
    if (this.isActive) {
      this.opts.onValueCommit.current(run(() => this.opts.value.current));
    }
    this.isActive = false;
  };
  getAllThumbs = () => {
    const node = this.opts.ref.current;
    if (!node) return [];
    const thumbs = Array.from(node.querySelectorAll(sliderAttrs.selector("thumb")));
    return thumbs;
  };
  updateValue = (thumbValue, idx) => {
    const currValue = this.opts.value.current;
    if (!currValue.length) {
      this.opts.value.current.push(thumbValue);
      return;
    }
    const valueAtIndex = currValue[idx];
    if (valueAtIndex === thumbValue) return;
    const newValue = [...currValue];
    if (!isValidIndex(idx, newValue)) return;
    const direction = newValue[idx] > thumbValue ? -1 : 1;
    const swap = () => {
      const diffIndex = idx + direction;
      newValue[idx] = newValue[diffIndex];
      newValue[diffIndex] = thumbValue;
      const thumbs = this.getAllThumbs();
      if (!thumbs.length) return;
      thumbs[diffIndex]?.focus();
      this.activeThumb = { node: thumbs[diffIndex], idx: diffIndex };
    };
    if (this.opts.autoSort.current && (direction === -1 && thumbValue < newValue[idx - 1] || direction === 1 && thumbValue > newValue[idx + 1])) {
      swap();
      this.opts.value.current = newValue;
      return;
    }
    const steps = this.normalizedSteps;
    newValue[idx] = snapValueToCustomSteps(thumbValue, steps);
    this.opts.value.current = newValue;
  };
  #thumbsPropsArr = derived(() => {
    const currValue = this.opts.value.current;
    return Array.from({ length: currValue.length || 1 }, (_, i) => {
      const currThumb = run(() => this.currentThumbIdx);
      if (currThumb < currValue.length) {
        run(() => {
          this.currentThumbIdx = currThumb + 1;
        });
      }
      const thumbValue = currValue[i];
      const thumbPosition = this.getPositionFromValue(thumbValue ?? 0);
      const style = getThumbStyles(this.direction, thumbPosition);
      return {
        role: "slider",
        "aria-valuemin": this.opts.min.current,
        "aria-valuemax": this.opts.max.current,
        "aria-valuenow": thumbValue,
        "aria-disabled": boolToStr(this.opts.disabled.current),
        "aria-orientation": this.opts.orientation.current,
        "data-value": thumbValue,
        "data-orientation": this.opts.orientation.current,
        style,
        [sliderAttrs.thumb]: ""
      };
    });
  });
  get thumbsPropsArr() {
    return this.#thumbsPropsArr();
  }
  set thumbsPropsArr($$value) {
    return this.#thumbsPropsArr($$value);
  }
  #thumbsRenderArr = derived(() => {
    return this.thumbsPropsArr.map((_, i) => i);
  });
  get thumbsRenderArr() {
    return this.#thumbsRenderArr();
  }
  set thumbsRenderArr($$value) {
    return this.#thumbsRenderArr($$value);
  }
  #ticksPropsArr = derived(() => {
    const steps = this.normalizedSteps;
    const currValue = this.opts.value.current;
    return steps.map((tickValue, i) => {
      const tickPosition = this.getPositionFromValue(tickValue);
      const isFirst = i === 0;
      const isLast = i === steps.length - 1;
      const offsetPercentage = isFirst ? 0 : isLast ? -100 : -50;
      const style = getTickStyles(this.direction, tickPosition, offsetPercentage);
      const bounded = currValue.length === 1 ? tickValue <= currValue[0] : currValue[0] <= tickValue && tickValue <= currValue[currValue.length - 1];
      return {
        "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
        "data-orientation": this.opts.orientation.current,
        "data-bounded": bounded ? "" : void 0,
        "data-value": tickValue,
        style,
        [sliderAttrs.tick]: ""
      };
    });
  });
  get ticksPropsArr() {
    return this.#ticksPropsArr();
  }
  set ticksPropsArr($$value) {
    return this.#ticksPropsArr($$value);
  }
  #ticksRenderArr = derived(() => {
    return this.ticksPropsArr.map((_, i) => i);
  });
  get ticksRenderArr() {
    return this.#ticksRenderArr();
  }
  set ticksRenderArr($$value) {
    return this.#ticksRenderArr($$value);
  }
  #tickItemsArr = derived(() => {
    return this.ticksPropsArr.map((tick, i) => ({ value: tick["data-value"], index: i }));
  });
  get tickItemsArr() {
    return this.#tickItemsArr();
  }
  set tickItemsArr($$value) {
    return this.#tickItemsArr($$value);
  }
  #thumbItemsArr = derived(() => {
    const currValue = this.opts.value.current;
    return currValue.map((value, index2) => ({ value, index: index2 }));
  });
  get thumbItemsArr() {
    return this.#thumbItemsArr();
  }
  set thumbItemsArr($$value) {
    return this.#thumbItemsArr($$value);
  }
  #snippetProps = derived(() => ({
    ticks: this.ticksRenderArr,
    thumbs: this.thumbsRenderArr,
    tickItems: this.tickItemsArr,
    thumbItems: this.thumbItemsArr
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
}
class SliderRootState {
  static create(opts) {
    const { type, ...rest } = opts;
    const rootState = type === "single" ? new SliderSingleRootState(rest) : new SliderMultiRootState(rest);
    return SliderRootContext.set(rootState);
  }
}
const VALID_SLIDER_KEYS = [
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  ARROW_DOWN,
  HOME,
  END
];
class SliderRangeState {
  static create(opts) {
    return new SliderRangeState(opts, SliderRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #rangeStyles = derived(() => {
    if (Array.isArray(this.root.opts.value.current)) {
      const min = this.root.opts.value.current.length > 1 ? this.root.getPositionFromValue(Math.min(...this.root.opts.value.current) ?? 0) : 0;
      const max = 100 - this.root.getPositionFromValue(Math.max(...this.root.opts.value.current) ?? 0);
      return {
        position: "absolute",
        ...getRangeStyles(this.root.direction, min, max)
      };
    } else {
      const trackPadding = this.root.opts.trackPadding?.current;
      const currentValue = this.root.opts.value.current;
      const maxValue = this.root.opts.max.current;
      const min = 0;
      const max = trackPadding !== void 0 && trackPadding > 0 && currentValue === maxValue ? 0 : (
        // 100% - 0% = full width
        100 - this.root.getPositionFromValue(currentValue)
      );
      return {
        position: "absolute",
        ...getRangeStyles(this.root.direction, min, max)
      };
    }
  });
  get rangeStyles() {
    return this.#rangeStyles();
  }
  set rangeStyles($$value) {
    return this.#rangeStyles($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.root.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
    style: this.rangeStyles,
    [sliderAttrs.range]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SliderThumbState {
  static create(opts) {
    return new SliderThumbState(opts, SliderRootContext.get());
  }
  opts;
  root;
  attachment;
  #isDisabled = derived(() => this.root.opts.disabled.current || this.opts.disabled.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #updateValue(newValue) {
    if (this.root.isMulti) {
      this.root.updateValue(newValue, this.opts.index.current);
    } else {
      this.root.updateValue(newValue);
    }
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    const currNode = this.opts.ref.current;
    if (!currNode) return;
    const thumbs = this.root.getAllThumbs();
    if (!thumbs.length) return;
    const idx = thumbs.indexOf(currNode);
    if (this.root.isMulti) {
      this.root.currentThumbIdx = idx;
    }
    if (!VALID_SLIDER_KEYS.includes(e.key)) return;
    e.preventDefault();
    const min = this.root.opts.min.current;
    const max = this.root.opts.max.current;
    const value = this.root.opts.value.current;
    const thumbValue = Array.isArray(value) ? value[idx] : value;
    const orientation = this.root.opts.orientation.current;
    const direction = this.root.direction;
    const steps = this.root.normalizedSteps;
    switch (e.key) {
      case HOME:
        this.#updateValue(min);
        break;
      case END:
        this.#updateValue(max);
        break;
      case ARROW_LEFT:
        if (orientation !== "horizontal") break;
        if (e.metaKey) {
          const newValue = direction === "rl" ? max : min;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "rl" ? "next" : "prev";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_RIGHT:
        if (orientation !== "horizontal") break;
        if (e.metaKey) {
          const newValue = direction === "rl" ? min : max;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "rl" ? "prev" : "next";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_UP:
        if (e.metaKey) {
          const newValue = direction === "tb" ? min : max;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "tb" ? "prev" : "next";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
      case ARROW_DOWN:
        if (e.metaKey) {
          const newValue = direction === "tb" ? max : min;
          this.#updateValue(newValue);
        } else {
          const stepDirection = direction === "tb" ? "next" : "prev";
          const newValue = getAdjacentStepValue(thumbValue, steps, stepDirection);
          this.#updateValue(newValue);
        }
        break;
    }
    this.root.opts.onValueCommit.current(this.root.opts.value.current);
  }
  #props = derived(() => ({
    ...this.root.thumbsPropsArr[this.opts.index.current],
    id: this.opts.id.current,
    onkeydown: this.onkeydown,
    "data-active": this.root.isThumbActive(this.opts.index.current) ? "" : void 0,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current || this.root.opts.disabled.current),
    tabindex: this.opts.disabled.current || this.root.opts.disabled.current ? -1 : 0,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Slider$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      value = void 0,
      type,
      onValueChange = noop,
      onValueCommit = noop,
      disabled = false,
      min: minProp,
      max: maxProp,
      step = 1,
      dir = "ltr",
      autoSort = true,
      orientation = "horizontal",
      thumbPositioning = "contain",
      trackPadding,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const min = derived(() => {
      if (minProp !== void 0) return minProp;
      if (Array.isArray(step)) return Math.min(...step);
      return 0;
    });
    const max = derived(() => {
      if (maxProp !== void 0) return maxProp;
      if (Array.isArray(step)) return Math.max(...step);
      return 100;
    });
    function handleDefaultValue() {
      if (value !== void 0) return;
      if (type === "single") {
        return min();
      }
      return [];
    }
    handleDefaultValue();
    watch.pre(() => value, () => {
      handleDefaultValue();
    });
    const rootState = SliderRootState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value, (v) => {
        value = v;
        onValueChange(v);
      }),
      // @ts-expect-error - we know
      onValueCommit: boxWith(() => onValueCommit),
      disabled: boxWith(() => disabled),
      min: boxWith(() => min()),
      max: boxWith(() => max()),
      step: boxWith(() => step),
      dir: boxWith(() => dir),
      autoSort: boxWith(() => autoSort),
      orientation: boxWith(() => orientation),
      thumbPositioning: boxWith(() => thumbPositioning),
      type,
      trackPadding: boxWith(() => trackPadding)
    });
    const mergedProps = derived(() => mergeProps(restProps, rootState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps(), ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push(`<!--[-1--><span${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, value });
  });
}
function Slider_range($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      id = createId(uid),
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rangeState = SliderRangeState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived(() => mergeProps(restProps, rangeState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps() });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push(`<!--[-1--><span${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Slider_thumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      ref = null,
      id = createId(uid),
      index: index2,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const thumbState = SliderThumbState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      index: boxWith(() => index2),
      disabled: boxWith(() => disabled)
    });
    const mergedProps = derived(() => mergeProps(restProps, thumbState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, {
        active: thumbState.root.isThumbActive(thumbState.opts.index.current),
        props: mergedProps()
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push(`<!--[-1--><span${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, {
        active: thumbState.root.isThumbActive(thumbState.opts.index.current)
      });
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Checkbox($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      checked = false,
      onCheckedChange,
      class: className,
      disabled = false,
      id,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let children = function($$renderer4, { checked: isChecked }) {
          if (isChecked) {
            $$renderer4.push("<!--[0-->");
            Check($$renderer4, { class: "h-3 w-3 text-white stroke-[3]" });
          } else {
            $$renderer4.push("<!--[-1-->");
          }
          $$renderer4.push(`<!--]-->`);
        };
        if (Checkbox$1) {
          $$renderer3.push("<!--[-->");
          Checkbox$1($$renderer3, spread_props([
            {
              id,
              onCheckedChange,
              disabled,
              class: cn("peer h-4 w-4 shrink-0 rounded-sm border border-slate-600 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:text-white transition-colors cursor-pointer flex items-center justify-center bg-slate-950", className)
            },
            restProps,
            {
              get checked() {
                return checked;
              },
              set checked($$value) {
                checked = $$value;
                $$settled = false;
              },
              children,
              $$slots: { default: true }
            }
          ]));
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { checked });
  });
}
function Slider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = [1],
      min = 0,
      max = 1,
      step = 0.01,
      disabled = false,
      class: className,
      onValueChange,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        let children = function($$renderer4, { thumbs }) {
          $$renderer4.push(`<span class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-800">`);
          if (Slider_range) {
            $$renderer4.push("<!--[-->");
            Slider_range($$renderer4, { class: "absolute h-full bg-blue-500" });
            $$renderer4.push("<!--]-->");
          } else {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push("<!--]-->");
          }
          $$renderer4.push(`</span> <!--[-->`);
          const each_array = ensure_array_like(thumbs);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let thumb = each_array[$$index];
            if (Slider_thumb) {
              $$renderer4.push("<!--[-->");
              Slider_thumb($$renderer4, {
                index: thumb,
                class: "block h-4 w-4 rounded-full border border-blue-500 bg-slate-100 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing"
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          }
          $$renderer4.push(`<!--]-->`);
        };
        if (Slider$1) {
          $$renderer3.push("<!--[-->");
          Slider$1($$renderer3, spread_props([
            {
              type: "multiple",
              min,
              max,
              step,
              disabled,
              onValueChange,
              class: cn("relative flex w-full touch-none select-none items-center cursor-pointer", className)
            },
            restProps,
            {
              get value() {
                return value;
              },
              set value($$value) {
                value = $$value;
                $$settled = false;
              },
              children,
              $$slots: { default: true }
            }
          ]));
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      }
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}
function layerRow($$renderer, layer) {
  $$renderer.push(`<div${attr_class(`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg border transition-all ${layer.visible ? "border-blue-500/60 bg-slate-900/90 shadow-sm" : "border-slate-800 bg-slate-950/60 opacity-75"}`)}><div class="flex items-start sm:items-center gap-3"><div class="pt-0.5 sm:pt-0">`);
  Checkbox($$renderer, {
    id: `check-${stringify(layer.id)}`,
    checked: layer.visible,
    onCheckedChange: () => spatialStore.toggleLayer(layer.id)
  });
  $$renderer.push(`<!----></div> <div class="flex flex-col gap-0.5"><div class="flex items-center gap-2 flex-wrap"><label${attr("for", `check-${stringify(layer.id)}`)} class="text-sm font-semibold text-slate-100 cursor-pointer hover:text-blue-400 transition-colors">${escape_html(layer.name)}</label> `);
  Badge($$renderer, {
    variant: layer.type === "XYZ" ? "sky" : layer.type === "Vector" ? "emerald" : "purple",
    class: "text-[10px] px-1.5 py-0 uppercase tracking-wider font-bold",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->${escape_html(layer.type)}`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div> <span class="text-xs text-slate-400 font-normal">${escape_html(layer.attribution)}</span></div></div> <div class="flex items-center gap-3 self-end sm:self-center pl-7 sm:pl-0">`);
  if (layer.visible) {
    $$renderer.push(`<!--[0--><div class="flex items-center gap-2.5 w-36 sm:w-44"><span class="text-xs font-mono text-slate-400 w-9 text-right shrink-0">${escape_html(Math.round(layer.opacity * 100))}%</span> `);
    Slider($$renderer, {
      value: [layer.opacity],
      min: 0,
      max: 1,
      step: 0.05,
      onValueChange: (val) => spatialStore.setLayerOpacity(layer.id, val[0]),
      class: "w-24 sm:w-32"
    });
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push(`<!--[-1--><span class="text-xs text-slate-500 flex items-center gap-1">`);
    Eye_off($$renderer, { class: "h-3 w-3" });
    $$renderer.push(`<!----> Hidden</span>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
function LayerControls($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let searchQuery = "";
    const filteredLayers = derived(() => spatialStore.layers.filter((layer) => layer.name.toLowerCase().includes(searchQuery.toLowerCase()) || layer.type.toLowerCase().includes(searchQuery.toLowerCase())));
    Card($$renderer2, {
      class: "border-slate-800 bg-slate-900/90 shadow-xl",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "p-4 pb-3",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="flex items-center gap-2">`);
            Layers($$renderer4, { class: "h-5 w-5 text-blue-400" });
            $$renderer4.push(`<!----> `);
            Card_title($$renderer4, {
              class: "text-base",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Danish Spatial Layer Catalog`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div> <div class="relative w-full sm:w-64">`);
            Search($$renderer4, {
              class: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400"
            });
            $$renderer4.push(`<!----> <input type="search" placeholder="Filter layers (e.g. Matrikel, Topo)..."${attr("value", searchQuery)} class="w-full rounded-md border border-slate-700 bg-slate-950/80 py-1.5 pl-8 pr-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"/></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "p-4 pt-1 flex flex-col gap-2",
          children: ($$renderer4) => {
            const each_array = ensure_array_like(filteredLayers());
            if (each_array.length !== 0) {
              $$renderer4.push("<!--[-->");
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let layer = each_array[$$index];
                layerRow($$renderer4, layer);
              }
            } else {
              $$renderer4.push(`<!--[!--><div class="p-6 text-center text-sm text-slate-400">No spatial layers found matching "${escape_html(searchQuery)}".</div>`);
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
function _page($$renderer) {
  head("w85nl5", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>OpenLayers Map | Spatial Data Sandbox</title>`);
    });
  });
  $$renderer.push(`<div class="flex flex-col gap-6"><div class="flex flex-col gap-6">`);
  SpatialMap($$renderer);
  $$renderer.push(`<!----> `);
  LayerControls($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
export {
  _page as default
};
