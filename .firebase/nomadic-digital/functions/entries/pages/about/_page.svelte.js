import { e as ensure_array_like, b as attr, g as attr_style, d as stringify, f as bind_props, s as store_get, h as head, a as attr_class, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { Y as fallback, V as escape_html } from "../../../chunks/context.js";
import { C as Contact } from "../../../chunks/Contact.js";
import { S as Stats } from "../../../chunks/Stats.js";
function ClientsV2($$renderer, $$props) {
  let clients = fallback(
    $$props["clients"],
    () => [
      { logo: "/logos/clients/softone.png", year: "2024" },
      {
        logo: "/logos/clients/kronburg.png",
        year: "2024",
        maxWidth: "90px"
      },
      // 👈 smaller
      { logo: "/logos/clients/filicori.png", year: "2024" },
      { logo: "/logos/clients/conte.png", year: "2024" },
      { logo: "/logos/clients/natscent.png", year: "2025" },
      { logo: "/logos/clients/qbs.png", year: "2025" }
    ],
    true
  );
  $$renderer.push(`<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36"><div class="flex items-center gap-24 mb-20"><div class="flex items-center gap-3"><span class="w-6 h-6 rounded-full border border-black flex items-center justify-center"><span class="text-sm leading-none">+</span></span> <h2 class="font-geist text-base font-bold">Our clients</h2></div> <p class="font-inter text-sm text-black/40 font-bold">(Long term partnerships built on trust)</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
  const each_array = ensure_array_like(clients);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let client = each_array[$$index];
    $$renderer.push(`<div class="relative bg-white rounded-[28px] h-[320px] flex items-center justify-center border border-black/5"><img${attr("src", client.logo)} alt="Client logo" class="object-contain grayscale w-full px-6"${attr_style(`max-height: ${stringify(client.maxWidth ?? "200px")};`)}/> <span class="absolute bottom-6 right-6 text-xs font-inter text-black/40 font-bold">/${escape_html(client.year)}</span></div>`);
  }
  $$renderer.push(`<!--]--></div></section>`);
  bind_props($$props, { clients });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    head("cwls5q", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("meta.about.title"))}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.about.description"))}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.about.title"))}/> <meta property="og:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.about.description"))}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:image" content="/og/about.jpg"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.about.title"))}/> <meta name="twitter:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.about.description"))}/> <meta name="twitter:image" content="/og/about.jpg"/>`);
    });
    $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36 md:py-48"><h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-28">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.pageTitle"))}</h1> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3"><span class="w-6 h-6 rounded-full border border-black flex items-center justify-center"><span class="text-sm leading-none">+</span></span> <h2 class="text-base font-[900]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.studio"))}</h2></div> <div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8"><h3 class="font-geist text-xl md:text-4xl max-w-5xl"><span class="text-black font-[700] block">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.hero.bold"))}</span> <span class="text-black/50 font-[600] block mt-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.hero.sub"))}</span></h3> <div class="flex items-center gap-6 pt-6"><div class="flex -space-x-2"><img class="w-10 h-10 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=128&amp;auto=format&amp;fit=crop" alt=""/> <img class="w-10 h-10 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=128&amp;auto=format&amp;fit=crop" alt=""/> <img class="w-10 h-10 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=128&amp;auto=format&amp;fit=crop" alt=""/> <div class="w-10 h-10 rounded-full border border-white bg-black text-white flex items-center justify-center text-xs font-geist">56+</div></div> <p class="font-inter text-sm text-black/50 font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.hero.socialProof"))}</p></div></div> <div data-aos="fade-up" data-aos-delay="300" class="lg:col-span-2"><p class="font-inter text-sm text-black/40 leading-relaxed font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.hero.note"))}</p></div></div> <div data-aos="fade-up" data-aos-delay="400" class="mt-32"><div class="relative overflow-hidden rounded-3xl group"><img src="/content/wheel.png"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("about.hero.imageAlt"))} class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"/></div></div></section> <section class="max-w-[1600px] mx-auto">`);
    Stats($$renderer2, {});
    $$renderer2.push(`<!----></section> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" class="lg:col-span-3"><p class="font-geist text-base font-bold mb-3">Nomadic Digital ®</p> <p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.kicker"))}</p></div> <div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-10"><p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight"><span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.line1"))}</span>  <span class="text-black font-[700]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.line2"))}</span>  <span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.line3"))}</span></p> <p class="font-inter text-lg text-black/50 leading-relaxed max-w-2xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.body"))}</p> <a href="/portfolio" class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.approach.cta"))} <span class="w-2 h-2 rounded-full bg-white"></span></a></div></div></section> `);
    ClientsV2($$renderer2, {});
    $$renderer2.push(`<!----> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36"><div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"><div data-aos="fade-up" class="lg:col-span-3"><p class="font-geist text-base font-bold mb-3">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.title"))}</p> <p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.subtitle"))}</p></div> <div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-10"><p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight"><span class="text-black font-[700]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.bold"))}</span>  <span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.rest"))}</span></p> <p class="font-inter text-lg text-black/50 leading-relaxed max-w-2xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.body"))}</p> <a href="/contact" class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("about.difference.cta"))} <span class="w-2 h-2 rounded-full bg-white"></span></a></div></div></section> <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><!--[-->`);
    const each_array = ensure_array_like([
      {
        img: "/content/team-working.jpg",
        title: store_get($$store_subs ??= {}, "$t", t)("about.editorial.1.title"),
        year: "People"
      },
      {
        img: "/content/dev-working.png",
        title: store_get($$store_subs ??= {}, "$t", t)("about.editorial.2.title"),
        year: "Execution",
        tall: true
      }
    ]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let card = each_array[i];
      $$renderer2.push(`<div data-aos="fade-up"${attr("data-aos-delay", i * 120)} class="group"><div class="relative overflow-hidden rounded-[28px] bg-neutral-100"><img${attr("src", card.img)}${attr("alt", card.title)}${attr_class(`w-full ${card.tall ? "h-[525px]" : "h-full"} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`)}/></div> <div class="flex items-center gap-3 mt-6"><p class="font-inter text-base font-bold">${escape_html(card.title)}</p> <span class="text-sm text-black/40 font-bold">/${escape_html(card.year)}</span></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="max-w-[1700px] mx-auto">`);
    Contact($$renderer2);
    $$renderer2.push(`<!----></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
