import { s as store_get, h as head, b as attr, e as ensure_array_like, a as attr_class, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { C as Contact } from "../../../chunks/Contact.js";
import { H as HowItWorks } from "../../../chunks/HowItWorks.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, description;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    const services = [
      {
        num: "01",
        kickerKey: "services.01.kicker",
        headlineKey: "services.01.headline",
        bodyKey: "services.01.body",
        points: [
          { id: "1.1", key: "services.01.points.1" },
          { id: "1.2", key: "services.01.points.2" },
          { id: "1.3", key: "services.01.points.3" },
          { id: "1.4", key: "services.01.points.4" }
        ]
      },
      {
        num: "02",
        kickerKey: "services.02.kicker",
        headlineKey: "services.02.headline",
        bodyKey: "services.02.body",
        points: [
          { id: "2.1", key: "services.02.points.1" },
          { id: "2.2", key: "services.02.points.2" },
          { id: "2.3", key: "services.02.points.3" },
          { id: "2.4", key: "services.02.points.4" },
          { id: "2.5", key: "services.02.points.5" },
          { id: "2.6", key: "services.02.points.6" }
        ]
      },
      {
        num: "03",
        kickerKey: "services.03.kicker",
        headlineKey: "services.03.headline",
        bodyKey: "services.03.body",
        points: [
          { id: "3.1", key: "services.03.points.1" },
          { id: "3.2", key: "services.03.points.2" },
          { id: "3.3", key: "services.03.points.3" },
          { id: "3.4", key: "services.03.points.4" },
          { id: "3.5", key: "services.03.points.5" },
          { id: "3.6", key: "services.03.points.6" }
        ]
      },
      {
        num: "04",
        kickerKey: "services.04.kicker",
        headlineKey: "services.04.headline",
        bodyKey: "services.04.body",
        points: [
          { id: "4.1", key: "services.04.points.1" },
          { id: "4.2", key: "services.04.points.2" },
          { id: "4.3", key: "services.04.points.3" },
          { id: "4.4", key: "services.04.points.4" }
        ]
      },
      {
        num: "05",
        kickerKey: "services.05.kicker",
        headlineKey: "services.05.headline",
        bodyKey: "services.05.body",
        points: [
          { id: "5.1", key: "services.05.points.1" },
          { id: "5.2", key: "services.05.points.2" },
          { id: "5.3", key: "services.05.points.3" },
          { id: "5.4", key: "services.05.points.4" },
          { id: "5.5", key: "services.05.points.5" }
        ]
      }
    ];
    const highlights = [
      {
        img: "/content/services/abstract-architecture.jpg",
        tagKey: "services.highlights.1.tag",
        titleKey: "services.highlights.1.title",
        descKey: "services.highlights.1.desc",
        tall: true
      },
      {
        img: "/content/services/product-design.jpg",
        tagKey: "services.highlights.2.tag",
        titleKey: "services.highlights.2.title",
        descKey: "services.highlights.2.desc",
        tall: true
      }
    ];
    title = `${store_get($$store_subs ??= {}, "$t", t)("services.meta.title")} | Nomadic Digital`;
    description = store_get($$store_subs ??= {}, "$t", t)("services.meta.description");
    head("4z030h", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/>`);
    });
    $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36 md:py-48"><h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-28">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.pageTitle"))}</h1> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3"><span class="w-6 h-6 rounded-full border border-black flex items-center justify-center"><span class="text-sm leading-none">+</span></span> <h2 class="text-base font-[900]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.capabilities"))}</h2></div> <div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8"><h3 class="font-geist text-xl md:text-4xl max-w-5xl"><span class="text-black font-[700] block">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.hero.bold"))}</span> <span class="text-black/50 font-[600] block mt-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.hero.sub"))}</span></h3> <p class="font-inter text-sm text-black/50 font-bold max-w-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.hero.note"))}</p></div> <div data-aos="fade-up" data-aos-delay="300" class="lg:col-span-2"><p class="font-inter text-sm text-black/40 leading-relaxed font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.hero.right"))}</p></div></div></section> <div data-aos="fade-up" data-aos-delay="400" class="mt-4 max-w-[1600px] mx-auto px-6 md:px-0"><div class="relative overflow-hidden rounded-3xl group"><img src="/content/wheel.png"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("services.hero.imageAlt"))} class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"/></div></div> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-28 space-y-32"><!--[-->`);
    const each_array = ensure_array_like(services);
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let s = each_array[idx];
      $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28"><div data-aos="fade-up" class="lg:col-span-3"><p class="font-geist text-base font-bold mb-3">${escape_html(s.num)}</p> <p class="font-inter text-sm text-black/40 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(s.kickerKey))}</p></div> <div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6"><p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight"><span class="text-black font-[700]">${escape_html(store_get($$store_subs ??= {}, "$t", t)(s.headlineKey))}</span></p> <p class="font-inter text-lg text-black/50 font-bold max-w-2xl">${escape_html(store_get($$store_subs ??= {}, "$t", t)(s.bodyKey))}</p> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold"><!--[-->`);
      const each_array_1 = ensure_array_like(s.points);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let p = each_array_1[$$index];
        $$renderer2.push(`<li class="flex gap-3"><span class="w-8 text-black/30">${escape_html(p.id)}</span> <span>${escape_html(store_get($$store_subs ??= {}, "$t", t)(p.key))}</span></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div></div>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
    const each_array_2 = ensure_array_like(highlights);
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      let card = each_array_2[i];
      $$renderer2.push(`<div data-aos="fade-up"${attr("data-aos-delay", i * 120)} class="group"><div class="relative overflow-hidden rounded-[28px] bg-neutral-100"><img${attr("src", card.img)}${attr("alt", store_get($$store_subs ??= {}, "$t", t)(card.titleKey))}${attr_class(`w-full ${card.tall ? "h-[525px]" : "h-full"} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`)}/> <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div></div> <div class="mt-6 space-y-1"><p class="font-inter text-xs uppercase tracking-wide text-black/40 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(card.tagKey))}</p> <p class="font-inter text-base font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(card.titleKey))}</p> <p class="font-inter text-sm text-black/50 font-bold max-w-md">${escape_html(store_get($$store_subs ??= {}, "$t", t)(card.descKey))}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <div class="max-w-[1700px] mx-auto" data-aos="fade-in">`);
    HowItWorks($$renderer2);
    $$renderer2.push(`<!----></div> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-32"><div class="text-center space-y-6"><h2 data-aos="fade-up" data-aos-duration="700" class="font-calsans text-4xl md:text-6xl tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.bottomCta.title"))}</h2> <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="700" class="font-inter text-lg text-black/50 font-bold max-w-xl mx-auto">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.bottomCta.sub"))}</p> <a href="/contact" data-aos="fade-up" data-aos-delay="300" data-aos-duration="700" class="group relative inline-flex items-center gap-3 rounded-full bg-black text-white px-7 py-4 text-sm font-geist transition-all duration-300 ease-out hover:bg-black/90 hover:-translate-y-[2px] active:translate-y-0"><span class="relative z-10">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.bottomCta.button"))}</span> <span class="relative z-10 w-2 h-2 rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1"></span> <span class="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span></a></div></section> <section class="max-w-[1700px] mx-auto px-6 md:px-0 pb-36">`);
    Contact($$renderer2);
    $$renderer2.push(`<!----></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
