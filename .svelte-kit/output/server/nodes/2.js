import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.aq6gMAiv.js","_app/immutable/chunks/57sTgZHh.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/b0BHz6G6.js"];
export const stylesheets = ["_app/immutable/assets/feature_1.D_nZktVh.css"];
export const fonts = [];
