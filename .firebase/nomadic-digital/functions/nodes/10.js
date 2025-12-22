import * as universal from '../entries/pages/portfolio/_slug_/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/portfolio/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/10.B4PkbsWs.js","_app/immutable/chunks/DXk1H47T.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/chunks/rz9_kNNM.js","_app/immutable/chunks/BO31yyOu.js","_app/immutable/chunks/DxtT_Jw3.js","_app/immutable/chunks/D_k2vD4p.js","_app/immutable/chunks/DEA_bgoP.js","_app/immutable/chunks/CRLxmp0p.js","_app/immutable/chunks/h2OrxSpe.js","_app/immutable/chunks/DmzyNAxf.js","_app/immutable/chunks/4mRZs3QK.js","_app/immutable/chunks/auu6JVHy.js","_app/immutable/chunks/BPP2XqdS.js","_app/immutable/chunks/BG26DF3G.js"];
export const stylesheets = [];
export const fonts = [];
