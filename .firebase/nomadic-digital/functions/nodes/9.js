import * as universal from '../entries/pages/portfolio/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/+page.js";
export const imports = ["_app/immutable/nodes/9.D3K9gHMw.js","_app/immutable/chunks/BO31yyOu.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/DxtT_Jw3.js","_app/immutable/chunks/CRLxmp0p.js","_app/immutable/chunks/DXk1H47T.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/chunks/4mRZs3QK.js","_app/immutable/chunks/najZtyix.js","_app/immutable/chunks/DEA_bgoP.js","_app/immutable/chunks/rz9_kNNM.js","_app/immutable/chunks/BG26DF3G.js"];
export const stylesheets = [];
export const fonts = [];
