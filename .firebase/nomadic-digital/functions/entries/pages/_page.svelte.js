import { s as store_get, u as unsubscribe_stores, e as ensure_array_like, b as attr, f as bind_props, a as attr_class, h as head } from "../../chunks/index2.js";
import { t } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { X as noop, V as escape_html, Y as fallback } from "../../chunks/context.js";
import { P as Portfolio } from "../../chunks/Portfolio.js";
import { h as html } from "../../chunks/html.js";
import { H as HowItWorks } from "../../chunks/HowItWorks.js";
import { S as Stats } from "../../chunks/Stats.js";
import "clsx";
import { w as writable } from "../../chunks/index.js";
import { P as Pricing } from "../../chunks/Pricing.js";
import { b as blogPosts } from "../../chunks/blogPosts.js";
import { C as Contact } from "../../chunks/Contact.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<section><div class="relative h-[100vh] rounded-[0px] overflow-hidden bg-black shadow-[0_0_60px_-20px_rgba(0,0,0,0.35)] flex items-end animate-[fadeIn_1.2s_ease-out]"><video src="videos/hero-video.mov" autoplay muted loop playsinline preload="auto" class="absolute inset-0 w-full h-full object-cover opacity-45"></video> <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10"></div> <div class="grain-layer pointer-events-none absolute inset-0"></div> <div class="relative z-10 w-full pb-[26vh] sm:pb-[28vh] md:pb-[30vh] lg:pb-[32vh]"><div class="max-w-[1200px] mx-auto px-6 md:px-12"><p class="font-inter text-sm text-white/60 mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.kicker"))}</p> <h1 class="font-calsans text-white text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] leading-[1.02] tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.title.main"))} <span class="text-white/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.title.muted"))}</span></h1> <p class="mt-8 font-inter text-base sm:text-lg md:text-xl text-white/70 max-w-[560px]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.subtitle"))}</p> <div class="mt-12 flex items-center gap-6"><a href="/contact" class="inline-flex items-center gap-2 rounded-full bg-white text-black font-geist text-xs sm:text-sm px-6 py-3 sm:px-7 sm:py-4 font-medium hover:bg-white/90 transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.cta.primary"))}</a> <a href="#selected-work" class="font-geist text-xs sm:text-sm px-6 py-3 sm:px-7 sm:py-4 text-white/70 hover:text-white transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.cta.secondary"))}</a></div></div></div> <p class="absolute bottom-8 right-10 text-white/30 text-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("hero.footer"))}</p></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Clients($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let logos = fallback(
      $$props["logos"],
      () => [
        "/logos/clients/softone.png",
        "/logos/clients/kronburg.png",
        "/logos/clients/filicori.png",
        "/logos/clients/conte.png",
        "/logos/clients/natscent.png",
        "/logos/clients/qbs.png"
      ],
      true
    );
    $$renderer2.push(`<section class="px-6 md:px-12 py-4 md:py-12 md:my-24 bg-[#f5f5f5]"><div class="flex items-center justify-start gap-24 mb-10"><div class="flex items-center gap-3"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-black"></div></div> <h2 class="font-inter text-base font-bold text-black tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("clients.title"))}</h2></div> <p class="font-inter text-sm text-black/50 tracking-wide font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("clients.subtitle"))}</p></div> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1"><!--[-->`);
    const each_array = ensure_array_like(logos);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let logo = each_array[$$index];
      $$renderer2.push(`<div class="bg-white rounded-[14px] h-36 md:h-48 flex items-center justify-center p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"><img${attr("src", logo)} alt="Client logo" class="w-full h-full object-contain grayscale"/></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { logos });
  });
}
function SectionHeader($$renderer, $$props) {
  let count = fallback($$props["count"], "");
  let title = fallback($$props["title"], "Projects.");
  let year = fallback($$props["year"], 2025);
  let description = fallback($$props["description"], "");
  $$renderer.push(`<section class="w-full px-6 md:px-0 pt-24 pb-10 bg-[var(--color-background)]"><div class="max-w-8xl mx-auto relative"><p class="text-sm font-bold text-black/50 absolute left-0 top-2 md:top-3 hidden md:block">(${escape_html(count)})</p> <div class="text-center"><h1 class="font-calsans text-6xl md:text-9xl font-bold tracking-tight text-black">${escape_html(title)}</h1></div> <p class="hidden md:block absolute right-0 top-4 font-inter text-sm text-black/60 max-w-xs leading-relaxed font-bold">${escape_html(description)}</p></div></section>`);
  bind_props($$props, { count, title, year, description });
}
function WhyChooseUs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, title2, subtitle, stats;
    let image = fallback($$props["image"], "/content/portrait-left-bar.png");
    title = store_get($$store_subs ??= {}, "$t", t)("why.title1");
    title2 = store_get($$store_subs ??= {}, "$t", t)("why.title2");
    subtitle = store_get($$store_subs ??= {}, "$t", t)("why.subtitle");
    stats = [
      {
        value: "20+",
        index: "01",
        label: store_get($$store_subs ??= {}, "$t", t)("why.stat1.label"),
        desc: store_get($$store_subs ??= {}, "$t", t)("why.stat1.desc"),
        logos: [
          "https://placehold.co/50x20?text=A",
          "https://placehold.co/50x20?text=B",
          "https://placehold.co/50x20?text=C"
        ]
      },
      {
        value: "95%",
        index: "02",
        label: store_get($$store_subs ??= {}, "$t", t)("why.stat2.label"),
        desc: store_get($$store_subs ??= {}, "$t", t)("why.stat2.desc"),
        logos: [
          "/logos/clients/kron-imobiliare.png",
          "/logos/clients/kronburg.png",
          "/logos/clients/adedari.png"
        ]
      }
    ];
    $$renderer2.push(`<section class="px-6 md:px-12 py-24 bg-[var(--color-background)] max-w-8xl"><div class="flex items-center gap-3 mb-12"><div class="w-6 h-6 rounded-full border border-black flex items-center justify-center"><div class="w-2.5 h-2.5 rounded-full bg-black"></div></div> <p class="font-geist text-black text-md font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("why.label"))}</p></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-16"><div class="flex justify-center lg:justify-start"><div class="relative group w-full max-w-sm rounded-[26px] overflow-hidden shadow-sm aspect-[3/5] bg-black/5"><img${attr("src", image)} alt="Why choose us" class="w-full h-full object-cover transition-all duration-700 ease-out lg:group-hover:scale-110 lg:group-hover:blur-sm lg:group-hover:brightness-[0.65]"/> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute bottom-6 left-6 right-6 text-white opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500"><p class="font-geist text-base md:text-lg leading-relaxed drop-shadow-xl">${html(store_get($$store_subs ??= {}, "$t", t)("why.overlay.text"))}</p> <a href="/contact" class="mt-4 group/cta inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-geist text-sm hover:bg-white/90 transition-all duration-300">${escape_html(store_get($$store_subs ??= {}, "$t", t)("why.overlay.cta"))} <span class="w-2 h-2 rounded-full bg-black transition-transform duration-300 ease-out group-hover/cta:translate-x-1"></span></a></div> <div class="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-sm backdrop-blur-sm shadow-lg">+</div></div></div> <div class="lg:col-span-2 space-y-12"><div><h1 class="font-calsans text-4xl md:text-6xl leading-[1.15] text-black">${escape_html(title)}</h1> <h1 class="font-calsans text-4xl md:text-6xl leading-[1.15] text-black mt-2 text-black/60">${escape_html(title2)}</h1></div> <p class="font-inter text-lg text-black/70 max-w-2xl leading-relaxed">${escape_html(subtitle)}</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-1"><!--[-->`);
    const each_array = ensure_array_like(stats);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let s = each_array[i];
      $$renderer2.push(`<div class="bg-white rounded-3xl p-8 shadow-sm"><div class="flex items-start justify-between mb-6"><p class="font-calsans text-4xl md:text-5xl text-black">${escape_html(s.value)}</p> <p class="font-inter text-xs text-black/40">${escape_html(s.index)}</p></div> <p class="font-geist text-sm text-black font-semibold mb-6">${escape_html(s.label)}</p> `);
      if (s.desc) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="font-inter text-sm text-black/60 mb-6 leading-relaxed">${escape_html(s.desc)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (i === 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex items-center gap-4 opacity-70"><!--[-->`);
        const each_array_1 = ensure_array_like(s.logos);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let l = each_array_1[$$index];
          $$renderer2.push(`<img${attr("src", l)} alt="client logo" class="w-14 h-auto object-contain"/>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { image });
  });
}
function Services($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let openId = null;
    const VISIBLE_TAGS = 5;
    let expandedCategories = {};
    const services = [
      {
        id: "01",
        titleKey: "services.01.title",
        descKey: "services.01.desc",
        image: "/content/services/mockup-open-laptop.jpg",
        categories: [
          "services.01.cat.1",
          "services.01.cat.2",
          "services.01.cat.3",
          "services.01.cat.4",
          "services.01.cat.5",
          "services.01.cat.6"
        ]
      },
      {
        id: "02",
        titleKey: "services.02.title",
        descKey: "services.02.desc",
        image: "/content/services/saas-code-2.jpg",
        categories: [
          "services.02.cat.1",
          "services.02.cat.2",
          "services.02.cat.3",
          "services.02.cat.4",
          "services.02.cat.5",
          "services.02.cat.6",
          "services.02.cat.7",
          "services.02.cat.8"
        ]
      },
      {
        id: "03",
        titleKey: "services.03.title",
        descKey: "services.03.desc",
        image: "/content/services/design.jpg",
        categories: [
          "services.03.cat.1",
          "services.03.cat.2",
          "services.03.cat.3",
          "services.03.cat.4",
          "services.03.cat.5",
          "services.03.cat.6"
        ]
      },
      {
        id: "04",
        titleKey: "services.04.title",
        descKey: "services.04.desc",
        image: "/content/services/web-view.jpg",
        categories: [
          "services.04.cat.1",
          "services.04.cat.2",
          "services.04.cat.3",
          "services.04.cat.4",
          "services.04.cat.5",
          "services.04.cat.6",
          "services.04.cat.7"
        ]
      },
      {
        id: "05",
        titleKey: "services.05.title",
        descKey: "services.05.desc",
        image: "/content/services/app-development.jpg",
        categories: [
          "services.05.cat.1",
          "services.05.cat.2",
          "services.05.cat.3",
          "services.05.cat.4",
          "services.05.cat.5",
          "services.05.cat.6"
        ]
      }
    ];
    $$renderer2.push(`<section class="relative bg-black text-white px-6 md:px-14 py-42 overflow-hidden" data-aos="fade-up"><div class="absolute inset-0 pointer-events-none bg-cover bg-center opacity-[1]" style="background-image: url('/content/abstract-dark.jpg');"></div> <div class="absolute inset-0 pointer-events-none bg-black/70"></div> <div class="relative z-10"><div class="max-w-7xl mx-auto mb-24" data-aos="fade-up"><div class="flex items-center gap-3 text-sm text-white/60 mb-6"><span class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">+</span> <span>${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.kicker"))}</span></div> <h2 class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.heading"))}<span class="text-white/40"></span></h2></div> <div class="max-w-7xl mx-auto divide-y divide-white/10"><!--[-->`);
    const each_array = ensure_array_like(services);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let s = each_array[i];
      $$renderer2.push(`<div class="py-8" data-aos="fade-up"${attr("data-aos-delay", i * 100)}><button class="w-full flex items-center justify-between gap-8 text-left group cursor-pointer"><div class="flex items-center gap-10"><span class="text-white/40 text-sm w-16">(${escape_html(s.id)})</span> <h3 class="text-xl md:text-2xl font-semibold">${escape_html(store_get($$store_subs ??= {}, "$t", t)(s.titleKey))}</h3></div> <span class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 group-hover:border-white group-hover:text-white transition">${escape_html(openId === s.id ? "–" : "+")}</span></button> `);
      if (openId === s.id) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-10 pl-[6.5rem] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12 transition-all duration-300" data-aos="fade-in" data-aos-delay="80"><div class="w-28 h-28 rounded-xl overflow-hidden bg-white/10 shrink-0"><img${attr("src", s.image)} alt="" class="w-full h-full object-cover"/></div> <div><p class="text-white/60 max-w-xl mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)(s.descKey))}</p></div> <div class="max-w-sm"><span class="block text-xs uppercase tracking-wider text-white/40 mb-3">${escape_html(store_get($$store_subs ??= {}, "$t", t)("services.categoriesLabel"))}</span> <div class="flex flex-wrap gap-2"><!--[-->`);
        const each_array_1 = ensure_array_like(expandedCategories[s.id] ? s.categories : s.categories.slice(0, VISIBLE_TAGS));
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let c = each_array_1[$$index];
          $$renderer2.push(`<span class="px-3 py-1.5 text-xs rounded-full bg-white text-black font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)(c))}</span>`);
        }
        $$renderer2.push(`<!--]--> `);
        if (s.categories.length > VISIBLE_TAGS) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button type="button" class="px-3 py-1.5 text-xs rounded-full bg-white/10 text-white/70 cursor-pointer hover:bg-white/20 hover:text-white transition">${escape_html(expandedCategories[s.id] ? store_get($$store_subs ??= {}, "$t", t)("services.showLess") : `+${s.categories.length - VISIBLE_TAGS}`)}</button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function AboutUs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      label = null,
      brand = null,
      titleBold = null,
      titleRest = null,
      description = null
    } = $$props;
    const labelText = label ?? store_get($$store_subs ??= {}, "$t", t)("about.label");
    const brandText = brand ?? store_get($$store_subs ??= {}, "$t", t)("about.brand");
    const titleBoldText = titleBold ?? store_get($$store_subs ??= {}, "$t", t)("about.titleBold");
    const titleRestText = titleRest ?? store_get($$store_subs ??= {}, "$t", t)("about.titleRest");
    const descriptionText = description ?? store_get($$store_subs ??= {}, "$t", t)("about.description");
    $$renderer2.push(`<section class="px-6 md:px-12 py-20 md:py-32"><div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"><div class="md:col-span-2 flex items-center gap-3"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0"><div class="w-2 h-2 rounded-full bg-black"></div></div> <p class="font-inter text-sm font-medium text-black">${escape_html(labelText)}</p></div> <div class="md:col-span-8 md:col-start-4"><p class="font-inter text-sm text-black/60 mb-4 md:mb-6">${escape_html(brandText)}</p> <h1 class="font-inter text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[1.15] text-black"><span class="block md:inline font-semibold">${escape_html(titleBoldText)}</span>  <span class="block md:inline text-black/45">${escape_html(titleRestText)}</span></h1> <p class="font-inter text-base md:text-lg text-black/60 max-w-xl mt-6 md:mt-8 leading-relaxed">${escape_html(descriptionText)}</p></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Testimonials($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      eyebrow = null,
      title = null,
      year = null,
      summary = null,
      testimonials = null
    } = $$props;
    const eyebrowText = eyebrow ?? store_get($$store_subs ??= {}, "$t", t)("testimonials.eyebrow");
    const titleText = title ?? store_get($$store_subs ??= {}, "$t", t)("testimonials.title");
    const yearText = year ?? store_get($$store_subs ??= {}, "$t", t)("testimonials.year");
    const summaryData = summary ?? {
      rating: store_get($$store_subs ??= {}, "$t", t)("testimonials.summary.rating"),
      text: store_get($$store_subs ??= {}, "$t", t)("testimonials.summary.text")
    };
    const testimonialsData = testimonials ?? [
      {
        name: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.1.name"),
        role: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.1.role"),
        text: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.1.text"),
        rating: 5
      },
      {
        name: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.2.name"),
        role: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.2.role"),
        text: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.2.text"),
        rating: 5
      },
      {
        name: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.3.name"),
        role: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.3.role"),
        text: store_get($$store_subs ??= {}, "$t", t)("testimonials.items.3.text"),
        rating: 5
      }
    ];
    $$renderer2.push(`<section class="px-6 md:px-12 py-32 max-w-8xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20 overflow-x-hidden"><div class="flex items-center gap-3 md:col-span-2"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0"><div class="w-2 h-2 rounded-full bg-black"></div></div> <p class="font-inter text-sm font-medium text-black">${escape_html(eyebrowText)}</p></div> <div class="md:col-span-8 md:col-start-4"><h2 class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight">${escape_html(titleText)}</h2> <p class="font-inter text-sm text-black/50 mt-3">${escape_html(yearText)}</p></div></div> <div class="grid grid-cols-1 md:grid-cols-4 gap-1 md:ml-[16.666%]"><div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between"><div><p class="font-inter text-5xl text-black mb-2">${escape_html(summaryData.rating)} <span class="text-lg text-black/50">/5</span></p> <p class="font-inter text-sm text-black/60">${escape_html(summaryData.text)}</p></div> <button class="mt-8 w-full rounded-full bg-black text-white py-3 text-sm font-inter hover:bg-black/90 transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("testimonials.cta.leaveReview"))}</button></div> <!--[-->`);
    const each_array = ensure_array_like(testimonialsData);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array[$$index_1];
      $$renderer2.push(`<div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between"><div class="flex gap-1 text-sm text-black/80 mb-6"><!--[-->`);
      const each_array_1 = ensure_array_like(Array(item.rating));
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        each_array_1[$$index];
        $$renderer2.push(`<span>★</span>`);
      }
      $$renderer2.push(`<!--]--></div> <p class="font-inter text-lg text-black leading-relaxed mb-8">${escape_html(item.text)}</p> <div><p class="font-inter text-sm text-black">${escape_html(item.name)}</p> <p class="font-inter text-xs text-black/50">${escape_html(item.role)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function linear(t2) {
  return t2;
}
function cubicOut(t2) {
  const f = t2 - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t2) => arr.map((fn) => fn(t2));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t2) => new Date(an + t2 * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t2) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t2);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t2) => a + t2 * delta;
  }
  return () => b;
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
function CaseStudy($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let {
      caseStudy: caseStudyProp = null,
      performance: performanceProp = null,
      visits: visitsProp = null
    } = $$props;
    caseStudyProp ?? {
      label: store_get($$store_subs ??= {}, "$t", t)("case.label"),
      tags: store_get($$store_subs ??= {}, "$t", t)("case.tags"),
      description: store_get($$store_subs ??= {}, "$t", t)("case.description")
    };
    performanceProp ?? {
      boost: store_get($$store_subs ??= {}, "$t", t)("case.performance.boost"),
      conversion: store_get($$store_subs ??= {}, "$t", t)("case.performance.conversion"),
      testimonial: store_get($$store_subs ??= {}, "$t", t)("case.performance.testimonial"),
      author: store_get($$store_subs ??= {}, "$t", t)("case.performance.author")
    };
    visitsProp ?? {
      months: [
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.dec"),
          value: 1
        },
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.jan"),
          value: 1.3
        },
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.feb"),
          value: 1.1
        },
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.mar"),
          value: 1.5
        },
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.apr"),
          value: 2.3
        },
        {
          label: store_get($$store_subs ??= {}, "$t", t)("case.month.may"),
          value: 5.3
        }
      ]
    };
    tweened(0, { duration: 2700, easing: cubicOut });
    $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-6 md:px-12 py-24">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Team($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { team: teamProp = null } = $$props;
    const team = teamProp ?? [
      {
        name: "Stefan Kovacs",
        role: store_get($$store_subs ??= {}, "$t", t)("team.member.stefan.role"),
        desc: store_get($$store_subs ??= {}, "$t", t)("team.member.stefan.desc"),
        image: "/content/team/stefan.jpg",
        delay: 0
      },
      {
        name: "Teodora Szelyes",
        role: store_get($$store_subs ??= {}, "$t", t)("team.member.teodora.role"),
        desc: store_get($$store_subs ??= {}, "$t", t)("team.member.teodora.desc"),
        image: "/content/team/teodora-portrait.jpeg",
        delay: 100
      },
      {
        name: "Mihai Kelemen",
        role: store_get($$store_subs ??= {}, "$t", t)("team.member.mihai.role"),
        desc: store_get($$store_subs ??= {}, "$t", t)("team.member.mihai.desc"),
        image: "/content/team/mihai-portrait.jpg",
        delay: 200
      },
      {
        name: "Stefan Dulca",
        role: store_get($$store_subs ??= {}, "$t", t)("team.member.dulca.role"),
        desc: store_get($$store_subs ??= {}, "$t", t)("team.member.dulca.desc"),
        image: "/content/team/stefan-dulca-portrait.png",
        delay: 300
      }
    ];
    $$renderer2.push(`<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24" data-aos="fade-up"><div class="mb-20"><div class="flex items-center gap-3 mb-6"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-black"></div></div> <p class="font-geist text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("team.eyebrow"))}</p></div> <h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("team.titleA"))} <span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("team.titleB"))}</span></h2> <p class="mt-6 max-w-xl font-inter text-lg text-black/60">${escape_html(store_get($$store_subs ??= {}, "$t", t)("team.subtitle"))}</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
    const each_array = ensure_array_like(team);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let member = each_array[$$index];
      $$renderer2.push(`<div class="group rounded-3xl bg-white border border-black/5 overflow-hidden" data-aos="fade-up"${attr("data-aos-delay", member.delay)}><div class="aspect-[4/5] overflow-hidden"><img${attr("src", member.image)}${attr("alt", member.name)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/></div> <div class="p-6"><p class="font-calsans text-xl">${escape_html(member.name)}</p> <p class="font-inter text-sm text-black/60 mb-4">${escape_html(member.role)}</p> <p class="font-inter text-sm text-black/70 leading-relaxed">${escape_html(member.desc)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function FAQ($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let open = -1;
    let { faqs: faqsProp = null } = $$props;
    const faqs = faqsProp ?? [
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.1.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.1.a")
      },
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.2.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.2.a")
      },
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.3.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.3.a")
      },
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.4.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.4.a")
      },
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.5.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.5.a")
      },
      {
        q: store_get($$store_subs ??= {}, "$t", t)("faq.6.q"),
        a: store_get($$store_subs ??= {}, "$t", t)("faq.6.a")
      }
    ];
    $$renderer2.push(`<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16"><div class="lg:col-span-4"><h2 class="font-calsans text-6xl md:text-7xl tracking-tight mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)("faq.title"))}<span class="text-black/40"></span></h2> <p class="font-inter text-lg text-black/60 max-w-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("faq.subtitle"))}</p></div> <div class="lg:col-span-8 space-y-4"><!--[-->`);
    const each_array = ensure_array_like(faqs);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<div class="rounded-2xl bg-white border border-black/5 px-8 py-6 transition cursor-pointer"><button class="w-full flex items-center justify-between text-left cursor-pointer" type="button"><span class="font-geist text-lg">${escape_html(item.q)}</span> <span${attr_class("w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm transition-transform duration-300 cursor-pointer", void 0, { "rotate-45": open === i })}>+</span></button> `);
      if (open === i) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="overflow-hidden"><p class="mt-4 font-inter text-sm text-black/60 max-w-2xl leading-relaxed">${escape_html(item.a)}</p></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Blog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const posts = [...blogPosts].reverse();
    const featured = posts[0];
    const smallPosts = posts.slice(1, 3);
    $$renderer2.push(`<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24"><div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16"><div class="md:col-span-4 lg:col-span-7"><h2 class="font-calsans text-[32px] sm:text-[40px] md:text-5xl lg:text-7xl tracking-tight leading-[1.05]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.section.titleA"))} <span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.section.titleB"))}</span></h2></div> <div class="md:col-span-2 lg:col-span-5 flex flex-col md:items-start lg:items-end md:justify-between gap-6"><p class="font-inter text-base sm:text-lg text-black/60 max-w-sm">${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.section.subtitle"))}</p> <a href="/blog" class="inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 md:py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-geist hover:bg-black/90 transition">${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.section.cta"))} <span class="inline-block w-2 h-2 rounded-full bg-white"></span></a></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><!--[-->`);
    const each_array = ensure_array_like(smallPosts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let post = each_array[$$index];
      $$renderer2.push(`<article class="lg:col-span-3 group rounded-3xl bg-white border border-black/5 p-6 flex flex-col justify-between"><div><img${attr("src", post.authorAvatar)}${attr("alt", post.author)} class="w-12 h-12 rounded-xl object-cover mb-6"/> <p class="text-xs text-black/40 mb-2">${escape_html(post.date)}</p> <h3 class="font-calsans text-xl leading-tight mb-3">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}</h3> <p class="font-inter text-sm text-black/60 leading-relaxed">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.descriptionKey))}</p></div> <div class="mt-6 flex justify-end"><a${attr("href", `/blog/${post.slug}`)} class="w-8 h-8 flex items-center justify-center rounded-full border border-black text-sm group-hover:bg-black group-hover:text-white transition">+</a></div></article>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (featured) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<article class="lg:col-span-6 group relative rounded-3xl overflow-hidden min-h-[420px] flex items-end"><img${attr("src", featured.image)}${attr("alt", store_get($$store_subs ??= {}, "$t", t)(featured.titleKey))} class="absolute inset-0 w-full h-full object-cover"/> <div class="absolute inset-0 bg-black/40"></div> <div class="relative z-10 p-10 text-white max-w-md"><p class="font-geist text-sm mb-2">${escape_html(featured.author)}</p> <h3 class="font-calsans text-4xl leading-tight mb-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)(featured.titleKey))}</h3> <p class="font-inter text-sm text-white/80">${escape_html(store_get($$store_subs ??= {}, "$t", t)(featured.descriptionKey))}</p></div> <div class="absolute top-6 right-6"><a${attr("href", `/blog/${featured.slug}`)} class="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-lg group-hover:bg-white group-hover:text-black transition">+</a></div></article>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let title, description;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    title = `${store_get($$store_subs ??= {}, "$t", t)("home.meta.title")} | Nomadic Digital`;
    description = store_get($$store_subs ??= {}, "$t", t)("home.meta.description");
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/>`);
    });
    $$renderer2.push(`<div class="mb-4" data-aos="fade">`);
    Hero($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mt-8 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    Clients($$renderer2, {});
    $$renderer2.push(`<!----></div> <div id="selected-work" class="mt-16 max-w-[1500px] mx-auto px-6 md:px-12" data-aos="fade-up">`);
    SectionHeader($$renderer2, {
      count: store_get($$store_subs ??= {}, "$t", t)("home.projects.count"),
      title: store_get($$store_subs ??= {}, "$t", t)("home.projects.title"),
      description: store_get($$store_subs ??= {}, "$t", t)("home.projects.description")
    });
    $$renderer2.push(`<!----></div> <div class="max-w-[1500px] mx-auto" data-aos="fade-up">`);
    Portfolio($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mt-12 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    WhyChooseUs($$renderer2, {});
    $$renderer2.push(`<!----></div> <div class="my-2" data-aos="fade-up">`);
    Services($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    AboutUs($$renderer2, {});
    $$renderer2.push(`<!----></div> <div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    HowItWorks($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    Testimonials($$renderer2, {});
    $$renderer2.push(`<!----></div> <div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    Stats($$renderer2, {});
    $$renderer2.push(`<!----></div> <div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">`);
    CaseStudy($$renderer2, {});
    $$renderer2.push(`<!----></div> <div data-aos="zoom-in" id="pricing">`);
    Pricing($$renderer2, {});
    $$renderer2.push(`<!----></div> <div data-aos="fade-up">`);
    Team($$renderer2, {});
    $$renderer2.push(`<!----></div> <div data-aos="fade-up">`);
    FAQ($$renderer2, {});
    $$renderer2.push(`<!----></div> <div data-aos="fade-up">`);
    Blog($$renderer2);
    $$renderer2.push(`<!----></div> <div data-aos="fade-up">`);
    Contact($$renderer2);
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
