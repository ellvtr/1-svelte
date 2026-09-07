import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CsLkyswR.js","_app/immutable/chunks/Hp--vKbm.js","_app/immutable/chunks/BnUNuAoI.js","_app/immutable/chunks/DJDQ8-C8.js","_app/immutable/chunks/Bu6VdSB7.js","_app/immutable/chunks/fAyqCvjl.js","_app/immutable/chunks/CZsy3AN3.js","_app/immutable/chunks/BtbLPWZn.js","_app/immutable/chunks/oPhACd5r.js","_app/immutable/chunks/rT77PjNg.js","_app/immutable/chunks/B0XwC4Ot.js","_app/immutable/chunks/BbGlzZQR.js","_app/immutable/chunks/9tShlU7T.js","_app/immutable/chunks/C9-a8xMZ.js","_app/immutable/chunks/BO4NN2_1.js"];
export const stylesheets = ["_app/immutable/assets/0.ADDz4xdy.css"];
export const fonts = [];
