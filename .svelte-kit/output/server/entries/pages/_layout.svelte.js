import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                   */
const Navigation_sections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="z-10 flex flex-col items-center justify-center w-full px-24 py-8 bg-gray-100 shadow-lg md:flex-row " data-svelte-h="svelte-19t0c8n"> <a href="/" class="font-Zodiak sticky top-0 mt-3 text-4xl font-extrabold tracking-wide">Veldron</a> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="font-serif">${validate_component(Navigation_sections, "Navigation_sections").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
