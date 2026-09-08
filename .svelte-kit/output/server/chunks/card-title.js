import { ae as attributes, ak as clsx } from "./index.js";
import { c as cn } from "./Icon.js";
function Card_title($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<h3${attributes({
      class: clsx(cn("font-semibold leading-none tracking-tight text-slate-100 text-lg", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[0-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></h3>`);
  });
}
export {
  Card_title as C
};
