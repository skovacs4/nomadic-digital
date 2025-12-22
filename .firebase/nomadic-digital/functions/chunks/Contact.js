import { b as attr, s as store_get, u as unsubscribe_stores } from "./index2.js";
import { t } from "./index3.js";
import { V as escape_html } from "./context.js";
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let name = "";
    let email = "";
    let message = "";
    let loading = false;
    $$renderer2.push(`<section class="w-full px-4 md:px-12 py-32"><div class="relative mx-auto rounded-[40px] overflow-hidden bg-black text-white"><img src="/content/team-working.jpg" alt="People working on laptops" class="absolute inset-0 w-full h-full object-cover opacity-35"/> <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div> <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 px-8 md:px-16 py-24 items-center"><div class="lg:col-span-4 lg:col-start-2"><div class="bg-white text-black rounded-3xl p-8 shadow-2xl"><p class="font-geist text-xs text-black/60 mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.brand"))}</p> <h3 class="font-calsans text-2xl mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.title"))}</h3> <form class="space-y-4"><input${attr("value", name)} type="text"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.name"))} class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"/> <input${attr("value", email)} type="email"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.email"))} class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"/> <textarea rows="4"${attr("placeholder", store_get($$store_subs ??= {}, "$t", t)("contact.form.message"))} class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none">`);
    const $$body = escape_html(message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> <button type="submit"${attr("disabled", loading, true)} class="w-full rounded-full bg-black text-white py-3 text-sm font-medium hover:bg-black/90 transition disabled:opacity-60 cursor-pointer">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.form.send"))}</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <p class="text-[11px] text-black/40 mt-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.legal"))}</p></form></div></div> <div class="lg:col-span-5 lg:col-start-7"><h2 class="font-calsans text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.title"))}</h2> <p class="font-inter text-lg text-white/70 max-w-lg mb-14">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.subtitle"))}</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16"><div><p class="font-geist text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.benefit1.title"))}</p> <p class="text-sm text-white/60 leading-relaxed">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.benefit1.text"))}</p></div> <div><p class="font-geist text-sm mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.benefit2.title"))}</p> <p class="text-sm text-white/60 leading-relaxed">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.benefit2.text"))}</p></div></div> <div class="group flex flex-col sm:flex-row sm:items-center gap-4 bg-white text-black rounded-2xl p-4 sm:px-5 sm:py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"><img src="/content/teodora.jpeg" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover" alt=""/> <div class="flex-1"><p class="text-[11px] sm:text-xs text-black/60">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.card.role"))}</p> <p class="font-geist text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.card.name"))}</p></div> <a href="https://wa.me/40754209068" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto text-center rounded-full bg-black text-white px-4 py-2 text-xs transition-all duration-300 hover:bg-black/90 hover:scale-[1.03] active:scale-95 whitespace-nowrap">${escape_html(store_get($$store_subs ??= {}, "$t", t)("contact.card.cta"))}</a></div></div></div></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  Contact as C
};
