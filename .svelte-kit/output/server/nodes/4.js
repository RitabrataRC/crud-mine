import * as server from '../entries/pages/profiles/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profiles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profiles/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DrINR3a1.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CObJVO9P.js"];
export const stylesheets = [];
export const fonts = [];
