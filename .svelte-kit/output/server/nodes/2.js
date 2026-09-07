import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.C50MjzrB.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/Hp--vKbm.js","_app/immutable/chunks/BnUNuAoI.js","_app/immutable/chunks/CZsy3AN3.js"];
export const stylesheets = [];
export const fonts = [];
