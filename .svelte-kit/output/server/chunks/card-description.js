import { ae as attributes, ak as clsx } from "./index.js";
import { c as cn } from "./Icon.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Card_description($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<p${attributes({
      class: clsx(cn("text-sm text-slate-400 leading-relaxed", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></p>`);
  });
}
export {
  Card_description as C,
  html as h
};
