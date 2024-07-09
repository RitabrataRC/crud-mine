import * as server from '../entries/pages/cloud-wallet/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cloud-wallet/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cloud-wallet/+page.server.js";
export const imports = ["_app/immutable/nodes/3.C-qV_hKV.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CObJVO9P.js"];
export const stylesheets = [];
export const fonts = [];
