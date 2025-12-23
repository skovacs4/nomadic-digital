import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.72S7j__6.js","_app/immutable/chunks/vUYi8L6i.js","_app/immutable/chunks/CFqeSpYC.js","_app/immutable/chunks/TFu0eCG2.js","_app/immutable/chunks/CEou1Ys8.js","_app/immutable/chunks/DmYbmsaI.js","_app/immutable/chunks/B9xI4dTv.js","_app/immutable/chunks/CPWFi2v4.js","_app/immutable/chunks/C-pOilAY.js","_app/immutable/chunks/I9YsEwPE.js","_app/immutable/chunks/B8_B5MZ0.js","_app/immutable/chunks/D09DQUEc.js"];
export const stylesheets = [];
export const fonts = [];
