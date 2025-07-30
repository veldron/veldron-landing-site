import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BvZwwv5O.js","_app/immutable/chunks/57sTgZHh.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/0.PqWLkgXU.css","_app/immutable/assets/feature_1.D_nZktVh.css"];
export const fonts = ["_app/immutable/assets/SplineSans-Variable.hyQjagY8.ttf","_app/immutable/assets/Neco-Variable.C6vPX9Wu.ttf"];
