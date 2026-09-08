import * as server from '../entries/pages/sveltekit/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sveltekit/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sveltekit/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Cx6QTC5Z.js","_app/immutable/chunks/Hp--vKbm.js","_app/immutable/chunks/BnUNuAoI.js","_app/immutable/chunks/DJDQ8-C8.js","_app/immutable/chunks/fAyqCvjl.js","_app/immutable/chunks/Bu6VdSB7.js","_app/immutable/chunks/CZsy3AN3.js","_app/immutable/chunks/BPhkdM9g.js","_app/immutable/chunks/C-CaxYtR.js","_app/immutable/chunks/0eM_fo8n.js","_app/immutable/chunks/BO4NN2_1.js","_app/immutable/chunks/C9-a8xMZ.js"];
export const stylesheets = [];
export const fonts = [];
