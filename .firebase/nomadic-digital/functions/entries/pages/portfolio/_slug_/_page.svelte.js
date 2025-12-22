import { s as store_get, h as head, b as attr, e as ensure_array_like, a as attr_class, u as unsubscribe_stores, f as bind_props } from "../../../../chunks/index2.js";
import { C as Contact } from "../../../../chunks/Contact.js";
import { t } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { V as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, description;
    let data = $$props["data"];
    const { project } = data;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    const image = project.hero.image;
    title = `${project.client} — ${store_get($$store_subs ??= {}, "$t", t)(project.categoryKey)} | Nomadic Digital`;
    description = store_get($$store_subs ??= {}, "$t", t)(project.overview.descriptionKey);
    head("15ehqgt", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="article"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:image"${attr("content", image)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="twitter:image"${attr("content", image)}/>`);
    });
    $$renderer2.push(`<section class="relative min-h-[80vh] flex items-end bg-black text-white overflow-hidden"><img${attr("src", project.hero.image)}${attr("alt", project.title)} class="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.05]"/> <div class="absolute inset-0 bg-black/60"></div> <div class="relative z-10 max-w-[1600px] mx-auto px-4 md:px-0 pb-20 w-full"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"><div class="lg:col-span-8 space-y-6"><img${attr("src", project.hero.logo)} class="h-auto max-h-[75px] md:max-h-[175px] object-contain" alt="Client Logo Portofolio"/></div> <div class="lg:col-span-4 text-sm text-white/70 space-y-2"><p><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.client"))}:</strong> ${escape_html(project.client)}</p> <p><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.category"))}:</strong> ${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.categoryKey))}</p> <p><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.year"))}:</strong> ${escape_html(project.year)}</p> <p><strong>${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.status"))}:</strong> ${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.statusKey))}</p></div></div></div></section>  <section class="max-w-[1600px] mx-auto px-4 md:px-0 py-28"><div class="border-t border-black/10"><div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-black/10"><div class="md:col-span-3 text-sm text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.sections.scope"))}</div> <div class="md:col-span-9 text-black font-medium"><!--[-->`);
    const each_array = ensure_array_like(project.scopeKeys ?? []);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let key = each_array[i];
      $$renderer2.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$t", t)(key))}${escape_html(i < project.scopeKeys.length - 1 ? " · " : "")}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (project.deliverableKeys?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-black/10"><div class="md:col-span-3 text-sm text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.sections.deliverables"))}</div> <div class="md:col-span-9 text-black font-medium"><!--[-->`);
      const each_array_1 = ensure_array_like(project.deliverableKeys);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let key = each_array_1[i];
        $$renderer2.push(`<span>${escape_html(store_get($$store_subs ??= {}, "$t", t)(key))}${escape_html(i < project.deliverableKeys.length - 1 ? " · " : "")}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 md:grid-cols-12 gap-6 py-8"><div class="md:col-span-3 text-sm text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.sections.technology"))}</div> <div class="md:col-span-9 text-black font-medium"><!--[-->`);
    const each_array_2 = ensure_array_like(project.tech ?? []);
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      let tech = each_array_2[i];
      $$renderer2.push(`<span>${escape_html(tech)}${escape_html(i < project.tech.length - 1 ? " · " : "")}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section> <section class="max-w-[1600px] mx-auto px-4 md:px-0 py-36"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div class="lg:col-span-3"><p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">${escape_html(project.client)} · ${escape_html(project.year)}</p> <p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.categoryKey))}</p></div> <div class="lg:col-span-7 space-y-10"><p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight"><span class="text-black font-[700]">${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.outcomes.headlineKey))}</span> <span class="text-black/40"> ${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.outcomes.descriptionKey))}</span></p> `);
    if (project.results?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4"><!--[-->`);
      const each_array_3 = ensure_array_like(project.results);
      for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
        let r = each_array_3[i];
        $$renderer2.push(`<div class="space-y-1"><p class="font-geist text-2xl font-bold text-black">${escape_html(r.value)}</p> <p class="font-inter text-sm text-black/40 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(r.labelKey))}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <a href="/contact" class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.cta.startSimilar"))} <span class="w-2 h-2 rounded-full bg-white"></span></a></div></div></section> `);
    if (project.gallery?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-24"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      const each_array_4 = ensure_array_like(project.gallery);
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let item = each_array_4[$$index_4];
        $$renderer2.push(`<div class="overflow-hidden rounded-3xl"><img${attr("src", item.src)} alt="" class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"/></div>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.testimonial) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="bg-neutral-100 py-32"><div class="max-w-[1200px] mx-auto px-6 text-center space-y-6"><p class="text-2xl md:text-5xl leading-relaxed">“${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.testimonial.quoteKey))}”</p> <p class="text-sm text-black/50">— ${escape_html(project.testimonial.author)}, ${escape_html(store_get($$store_subs ??= {}, "$t", t)(project.testimonial.roleKey))}</p></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.demos?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-32 space-y-32"><!--[-->`);
      const each_array_5 = ensure_array_like(project.demos);
      for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
        let demo = each_array_5[$$index_5];
        $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-11 gap-32 items-center mb-64 last:mb-14" data-aos="fade-up"><div${attr_class(`lg:col-span-6 ${demo.inverted ? "lg:order-2" : ""}`)}><div class="overflow-hidden rounded-3xl will-change-transform translate-z-0"><div class="scale-[1.10] transition-transform duration-[1400ms] ease-out hover:scale-[1.5]"><video${attr("src", demo.video)} class="w-full h-full object-cover rounded-[26px]" autoplay muted loop playsinline></video></div></div></div> <div${attr_class(`lg:col-span-5 ${demo.inverted ? "lg:order-1" : ""}`)}><h3 class="font-geist text-2xl md:text-3xl mb-8">${escape_html(store_get($$store_subs ??= {}, "$t", t)(demo.titleKey))}</h3> <p class="font-inter text-black/60 text-lg max-w-md">${escape_html(store_get($$store_subs ??= {}, "$t", t)(demo.bodyKey))}</p></div></div>`);
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section class="max-w-[1700px] mx-auto">`);
    Contact($$renderer2);
    $$renderer2.push(`<!----></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
