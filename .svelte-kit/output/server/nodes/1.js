

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DUcEA3y-.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CObJVO9P.js","_app/immutable/chunks/entry.C7LFlnX4.js"];
export const stylesheets = [];
export const fonts = [];
