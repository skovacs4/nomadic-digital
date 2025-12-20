import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/9.B_h2BJAm.js","_app/immutable/chunks/BO31yyOu.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/DxtT_Jw3.js","_app/immutable/chunks/B79EEfag.js","_app/immutable/chunks/CZybaMnJ.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/chunks/4mRZs3QK.js","_app/immutable/chunks/DyGHv1B0.js","_app/immutable/chunks/DEA_bgoP.js","_app/immutable/chunks/DX6TJKQq.js","_app/immutable/chunks/BloMkjXU.js"];
export const stylesheets = [];
export const fonts = [];
