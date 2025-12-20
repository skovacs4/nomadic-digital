import { e as ensure_array_like, b as attr } from "./index2.js";
import { p as projects } from "./portfolio2.js";
import { V as escape_html } from "./context.js";
function Portfolio($$renderer) {
  $$renderer.push(`<section class="px-6 py-24 bg-[var(--color-background)]"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let p = each_array[$$index];
    $$renderer.push(`<a${attr("href", `/portfolio/${p.slug}`)} class="group space-y-3 cursor-pointer block"><div class="flex items-center justify-between bg-white rounded-xl px-5 py-3 shadow-sm"><p class="font-inter font-semibold text-black text-lg">${escape_html(p.title)}</p> <div class="flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-all duration-300"><div class="w-3 h-3 rounded-full bg-red-500 scale-75 group-hover:scale-100 transition"></div> <div class="w-3 h-3 rounded-full bg-yellow-400 scale-75 group-hover:scale-100 transition"></div> <div class="w-3 h-3 rounded-full bg-green-500 scale-75 group-hover:scale-100 transition"></div></div></div> <div class="relative bg-white rounded-3xl overflow-hidden shadow-sm"><img${attr("src", p.thumbnail)}${attr("alt", p.title)} class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.12] group-hover:blur-[2px] group-hover:brightness-75"/> <div class="absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none"><img${attr("src", p.hero.logo)}${attr("alt", `${p.title} logo`)} class="w-[150px] md:w-[170px] transition-all duration-500 group-hover:scale-95 group-hover:opacity-100 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]"/></div> <div class="invisible w-full h-[360px] md:h-[440px]"></div></div></a>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
}
export {
  Portfolio as P
};
