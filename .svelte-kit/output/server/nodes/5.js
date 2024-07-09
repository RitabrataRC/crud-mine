

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/raw-wallet/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Bw1XL6d-.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CObJVO9P.js"];
export const stylesheets = [];
export const fonts = [];
