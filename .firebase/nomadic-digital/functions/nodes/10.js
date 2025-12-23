import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/10.bXhDtuWC.js","_app/immutable/chunks/CFqeSpYC.js","_app/immutable/chunks/TFu0eCG2.js","_app/immutable/chunks/CEou1Ys8.js","_app/immutable/chunks/B9xI4dTv.js","_app/immutable/chunks/CPWFi2v4.js","_app/immutable/chunks/C-pOilAY.js","_app/immutable/chunks/B8_B5MZ0.js","_app/immutable/chunks/BNj-lYFN.js","_app/immutable/chunks/CHKnxFsl.js","_app/immutable/chunks/rz9_kNNM.js","_app/immutable/chunks/D09DQUEc.js"];
export const stylesheets = [];
export const fonts = [];
