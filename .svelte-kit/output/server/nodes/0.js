

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.nyqjT42C.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.CObJVO9P.js"];
export const stylesheets = ["_app/immutable/assets/0.CxZ_wrWC.css"];
export const fonts = [];
