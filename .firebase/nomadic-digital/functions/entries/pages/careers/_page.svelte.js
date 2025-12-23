import { s as store_get, h as head, b as attr, e as ensure_array_like, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { C as Contact } from "../../../chunks/Contact.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, description;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    const roles = [
      {
        titleKey: "careers.roles.frontend.title",
        descKey: "careers.roles.frontend.desc"
      },
      {
        titleKey: "careers.roles.backend.title",
        descKey: "careers.roles.backend.desc"
      },
      {
        titleKey: "careers.roles.designer.title",
        descKey: "careers.roles.designer.desc"
      },
      {
        titleKey: "careers.roles.marketing.title",
        descKey: "careers.roles.marketing.desc"
      }
    ];
    title = store_get($$store_subs ??= {}, "$t", t)("careers.meta.title");
    description = store_get($$store_subs ??= {}, "$t", t)("careers.meta.description");
    head("1thlcsk", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/>`);
    });
    $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-36 md:py-48"><h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-20">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.pageTitle"))}</h1> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3"><span class="w-6 h-6 rounded-full border border-black flex items-center justify-center"><span class="text-sm leading-none">+</span></span> <h2 class="text-base font-[900]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.joinUs"))}</h2></div> <div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8"><h3 class="font-geist text-xl md:text-4xl max-w-5xl"><span class="text-black font-[700] block">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.hero.bold"))}</span> <span class="text-black/50 font-[600] block mt-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.hero.sub"))}</span></h3> <p class="font-inter text-sm text-black/50 font-bold max-w-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.hero.note"))}</p></div></div></section> <div data-aos="fade-up" data-aos-delay="400" class="mt-4 max-w-[1600px] mx-auto px-4 md:px-0"><div class="relative overflow-hidden rounded-3xl group"><img src="/content/wheel.png"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("services.hero.imageAlt"))} class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"/></div></div> <section class="max-w-[1600px] mx-auto px-4 md:px-0 py-28 space-y-24"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" class="lg:col-span-3"><p class="font-geist text-base font-bold mb-3">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.openRoles.title"))}</p> <p class="font-inter text-sm text-black/40 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.openRoles.subtitle"))}</p></div> <div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-12"><!--[-->`);
    const each_array = ensure_array_like(roles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let role = each_array[$$index];
      $$renderer2.push(`<div class="space-y-2"><h4 class="font-geist text-xl md:text-2xl font-[700]">${escape_html(store_get($$store_subs ??= {}, "$t", t)(role.titleKey))}</h4> <p class="font-inter text-black/50 font-bold max-w-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)(role.descKey))}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="max-w-[1600px] mx-auto px-4 md:px-0 py-24"><div class="text-center space-y-6 max-w-3xl mx-auto"><h2 data-aos="fade-up" class="font-calsans text-4xl md:text-6xl tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.apply.title"))}</h2> <p data-aos="fade-up" data-aos-delay="150" class="font-inter text-lg text-black/50 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.apply.body"))} <strong class="text-black">contact@thenomadicdigital.com</strong>.</p> <p data-aos="fade-up" data-aos-delay="250" class="font-inter text-sm text-black/40 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("careers.apply.note"))}</p></div></section> <section class="max-w-[1700px] mx-auto px-4 md:px-0 pb-36">`);
    Contact($$renderer2);
    $$renderer2.push(`<!----></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
