import { s as store_get, a as attr_class, b as attr, c as clsx, u as unsubscribe_stores, d as stringify, h as head } from "../../chunks/index2.js";
import { t, l as locale } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { V as escape_html } from "../../chunks/context.js";
import { h as html } from "../../chunks/html.js";
import "aos";
const favicon = "/_app/immutable/assets/favicon.EF-y34Mo.png";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isPortfolioDetail, isHome, isLightHeader, logoSrc;
    let mobileOpen = false;
    isPortfolioDetail = store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/portfolio/") && store_get($$store_subs ??= {}, "$page", page).url.pathname !== "/portfolio";
    isHome = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
    isLightHeader = isHome && true;
    logoSrc = isHome ? "/logos/landscape-minimal-logo-white.png" : isPortfolioDetail ? "/logos/landscape-minimal-logo-white.png" : "/logos/landscape-minimal-logo.png";
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <header${attr_class("fixed top-0 left-0 w-full z-50 transition-all duration-300 svelte-hv3zzy", void 0, {
      "bg-[var(--color-background)]": mobileOpen,
      "bg-black": mobileOpen,
      "shadow-sm": mobileOpen
    })}><div class="mx-auto px-6 py-0 flex items-center justify-between gap-12"><a href="/" class="font-calsans text-[18px] tracking-tight"><img${attr("src", logoSrc)} alt="Nomadic Digital Logo" class="transition-opacity duration-300"/></a> <nav class="hidden [@media(min-width:900px)]:flex items-center gap-12"><a${attr_class(` font-inter text-lg font-bold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white hover:opacity-70" : "text-black hover:opacity-60")} `)} href="/portfolio">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.work"))}</a> <a${attr_class(` font-inter text-lg font-bold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white hover:opacity-70" : "text-black hover:opacity-60")} `)} href="/about">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.about"))}</a> <a${attr_class(` font-inter text-lg font-bold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white hover:opacity-70" : "text-black hover:opacity-60")} `)} href="/services">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.services"))}</a> <a${attr_class(` font-inter text-lg font-bold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white hover:opacity-70" : "text-black hover:opacity-60")} `)} href="/blog">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.blog"))}</a> <a${attr_class(` font-inter text-lg font-bold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white hover:opacity-70" : "text-black hover:opacity-60")} `)} href="/contact">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.contact"))}</a> <div class="flex items-center gap-2"><button${attr_class(`text-sm font-inter font-semibold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black")} disabled:opacity-40 cursor-pointer`)}${attr("disabled", store_get($$store_subs ??= {}, "$locale", locale) === "en", true)} type="button">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.lang.en"))}</button> <span${attr_class(clsx(isPortfolioDetail || isLightHeader ? "text-white/30" : "text-black/30"))}>/</span> <button${attr_class(`text-sm font-inter font-semibold transition ${stringify(isPortfolioDetail || isLightHeader ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black")} disabled:opacity-40 cursor-pointer`)}${attr("disabled", store_get($$store_subs ??= {}, "$locale", locale) === "ro", true)} type="button">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.lang.ro"))}</button></div> <a href="/contact"${attr_class(` group relative inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-inter font-semibold transition-all duration-300 overflow-hidden ${stringify(isPortfolioDetail || isLightHeader ? "bg-white/90 text-black" : "bg-black text-white")} `)}><span class="relative z-10">${escape_html(store_get($$store_subs ??= {}, "$t", t)("nav.bookCall"))}</span> <span class="relative z-10 w-2 h-2 rounded-full bg-current transition-transform duration-300 group-hover:translate-x-1"></span> <span${attr_class(` absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stringify(isPortfolioDetail ? "bg-black/5" : "bg-white/10")} `)}></span></a></nav>  <button class="[@media(min-width:900px)]:hidden relative w-10 h-10 flex items-center justify-center" aria-label="Toggle menu" type="button"><span${attr_class(` absolute w-7 h-[2px] transition-all duration-300 ease-out ${stringify(isPortfolioDetail || isLightHeader ? "bg-white" : "bg-black")} ${stringify("-translate-y-[5px]")} `)}></span> <span${attr_class(` absolute w-7 h-[2px] transition-all duration-300 ease-out ${stringify(isPortfolioDetail || isLightHeader ? "bg-white" : "bg-black")} ${stringify("translate-y-[5px]")} `)}></span></button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<footer class="w-full border-t border-black/5 font-bold"><div class="max-w-[1600px] mx-auto px-6 md:px-12 py-24"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"><div class="lg:col-span-4"><img src="/logos/landscape-minimal-logo.png" class="mb-10"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("footer.logoAlt"))}/> <p class="font-inter text-sm text-black/60 max-w-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.desc"))}</p> `);
    if (store_get($$store_subs ??= {}, "$locale", locale) === "ro") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 font-inter text-sm text-black/60 space-y-1"><p><span class="text-black/70 font-semibold">Denumire:</span> NOMADIC DIGITAL SRL</p> <p><span class="text-black/70 font-semibold">CUI:</span> RO50237802</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="lg:col-span-7 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-12"><div><p class="font-geist md:text-3xl mb-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company"))}</p> <ul class="space-y-3 text-sm text-black/60"><li><a href="/about" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company.about"))}</a></li> <li><a href="/portfolio" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company.work"))}</a></li> <li><a href="/pricing" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company.pricing"))}</a></li> <li><a href="/careers" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company.careers"))}</a></li> <li><a href="/contact" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.company.contact"))}</a></li></ul></div> <div><p class="font-geist md:text-3xl mb-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services"))}</p> <ul class="space-y-3 text-sm text-black/60"><li><a href="/services" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services.1"))}</a></li> <li><a href="/services" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services.2"))}</a></li> <li><a href="/services" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services.3"))}</a></li> <li><a href="/services" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.services.4"))}</a></li></ul></div> <div><p class="font-geist md:text-3xl mb-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.follow"))}</p> <ul class="space-y-3 text-sm text-black/60"><li><a href="https://www.instagram.com/nomadic.digital.apps/" target="_blank" rel="noopener noreferrer" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.follow.instagram"))}</a></li> <li><a href="https://www.facebook.com/profile.php?id=61552759211758" target="_blank" rel="noopener noreferrer" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.follow.facebook"))}</a></li> <li><a href="https://www.linkedin.com/company/nomadic-digital-apps/" target="_blank" rel="noopener noreferrer" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.follow.linkedin"))}</a></li> <li><a href="https://x.com/nomadicdigital0" target="_blank" rel="noopener noreferrer" class="hover:text-black">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.follow.x"))}</a></li></ul></div></div></div> <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-black/5 pt-12"><p class="font-inter text-sm text-black/50">${html(store_get($$store_subs ??= {}, "$t", t)("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }))}</p> <div class="flex items-center gap-4 flex-wrap"><a href="/contact" class="rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-black/90 transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.cta"))}</a> <a href="/legals/privacy-policy" class="text-sm text-black/50 hover:text-black transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.privacy"))}</a> <a href="/legals/terms-and-conditions" class="text-sm text-black/50 hover:text-black transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("footer.terms"))}</a> `);
    if (store_get($$store_subs ??= {}, "$locale", locale) === "ro") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" class="text-sm text-black/50 hover:text-black transition">ANPC</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></footer>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data, children } = $$props;
    let scrollY = 0;
    const showBlur = scrollY > 300;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> <div${attr_class("bottom-edge-blur", void 0, { "is-visible": showBlur })}></div>`);
  });
}
export {
  _layout as default
};
