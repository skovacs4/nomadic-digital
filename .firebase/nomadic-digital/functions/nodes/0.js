import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.9AVXR1Zf.js","_app/immutable/chunks/BO31yyOu.js","_app/immutable/chunks/DJex4Egb.js","_app/immutable/chunks/Dp31bc8l.js","_app/immutable/chunks/D_k2vD4p.js","_app/immutable/chunks/B79EEfag.js","_app/immutable/chunks/CZybaMnJ.js","_app/immutable/chunks/h2OrxSpe.js","_app/immutable/chunks/BloMkjXU.js","_app/immutable/chunks/DxtT_Jw3.js","_app/immutable/chunks/4mRZs3QK.js","_app/immutable/chunks/CrMNw6iS.js"];
export const stylesheets = ["_app/immutable/assets/0.Djvt1qdi.css"];
export const fonts = [];
