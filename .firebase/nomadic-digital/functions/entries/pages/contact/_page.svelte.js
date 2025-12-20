import { s as store_get, h as head, b as attr, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let loading = false;
    let form = { name: "", email: "", message: "" };
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    const title = `${store_get($$store_subs ??= {}, "$t", t)("contact.meta.title")} | Nomadic Digital`;
    const description = store_get($$store_subs ??= {}, "$t", t)("contact.meta.description");
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/>`);
    });
    $$renderer2.push(`<section class="mx-auto py-24"><div class="relative mb-24 overflow-hidden bg-black text-white text-center min-h-[500px] flex items-center justify-center" data-aos="fade" data-aos-duration="300"><img src="https://thenomadicdigital.com/wp-content/uploads/2024/09/IMG.png"${attr("alt", store_get($$store_subs ??= {}, "$t", t)("contact.hero.imageAlt"))} class="absolute inset-0 w-full h-full object-cover opacity-35"/> <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div> <div class="relative z-10 px-8 md:px-16 max-w-" data-aos="fade-up" data-aos-delay="50"><p class="font-geist text-sm text-white/70 mb-4">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.hero.eyebrow"))}</p> <h2 class="font-calsans text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6" data-aos="fade-up" data-aos-delay="250">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.hero.title"))} <span class="text-white/50">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.hero.titleMuted"))}</span></h2> <p class="font-inter text-lg text-white/70" data-aos="fade-up" data-aos-delay="150">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.hero.subtitle"))}</p></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-[1600px] mx-auto px-6 md:px-12"><div class="lg:col-span-5"><div class="flex items-center gap-3 mb-6"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-black"></div></div> <p class="font-geist text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.kicker"))}</p></div> <h1 class="font-calsans text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.title"))}<span class="text-black/40"></span></h1> <p class="font-inter text-lg text-black/60 max-w-md mb-12">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.description"))}</p> <div class="space-y-8"><div><p class="font-geist text-sm mb-1">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.emailLabel"))}</p> <p class="font-inter text-black/60">contact@thenomadicdigital.com</p></div> <div><p class="font-geist text-sm mb-1">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.responseLabel"))}</p> <p class="font-inter text-black/60">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.left.responseValue"))}</p></div></div></div> <div class="lg:col-span-6 lg:col-start-7"><div class="bg-white border border-black/5 rounded-3xl p-8 md:p-10" data-aos="fade-up" data-aos-delay="250" data-aos-duration="700"><form class="space-y-6"><div><label class="block font-inter text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.nameLabel"))}</label> <input${attr("value", form.name)} required class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.namePlaceholder"))}/></div> <div><label class="block font-inter text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.emailLabel"))}</label> <input type="email"${attr("value", form.email)} required class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.emailPlaceholder"))}/></div> <div><label class="block font-inter text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.messageLabel"))}</label> <textarea rows="5" required class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-200 focus:scale-[1.01]"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.messagePlaceholder"))}>`);
    const $$body = escape_html(form.message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div> <button type="submit"${attr("disabled", loading, true)} class="w-full rounded-full bg-black text-white py-3 text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-black/90 active:scale-[0.98] disabled:opacity-60">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.send"))}</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p class="text-[11px] text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.privacyNote"))}</p></form></div></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
