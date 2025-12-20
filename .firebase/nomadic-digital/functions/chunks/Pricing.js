import { s as store_get, e as ensure_array_like, a as attr_class, d as stringify, b as attr, u as unsubscribe_stores } from "./index2.js";
import { t } from "./index3.js";
import { V as escape_html } from "./context.js";
function Pricing($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { plans: plansProp = null } = $$props;
    const plans = plansProp ?? [
      {
        id: "starter",
        name: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.name"),
        price: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.price"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.subtitle"),
        highlight: false,
        features: [
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.features.1"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.features.2"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.features.3"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.features.4")
        ],
        cta: {
          label: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.starter.cta"),
          href: "/contact",
          variant: "primary"
        }
      },
      {
        id: "pro",
        name: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.name"),
        price: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.price"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.subtitle"),
        highlight: true,
        features: [
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.1"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.2"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.3"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.4"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.5"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.6"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.features.7")
        ],
        cta: {
          label: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.pro.cta"),
          href: "/contact",
          variant: "inverted"
        }
      },
      {
        id: "enterprise",
        name: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.name"),
        price: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.price"),
        subtitle: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.subtitle"),
        highlight: false,
        features: [
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.1"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.2"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.3"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.4"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.5"),
          store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.features.6")
        ],
        cta: {
          label: store_get($$store_subs ??= {}, "$t", t)("pricing.plan.enterprise.cta"),
          href: "/contact",
          variant: "outline"
        }
      }
    ];
    $$renderer2.push(`<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24"><div class="mb-20"><div class="flex items-center gap-3 mb-6"><div class="w-5 h-5 rounded-full border border-black flex items-center justify-center"><div class="w-2 h-2 rounded-full bg-black"></div></div> <p class="font-geist text-sm font-medium">${escape_html(store_get($$store_subs ??= {}, "$t", t)("pricing.eyebrow"))}</p></div> <h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("pricing.title"))} <span class="text-black/40">${escape_html(store_get($$store_subs ??= {}, "$t", t)("pricing.titleMuted"))}</span></h2> <p class="mt-6 max-w-2xl font-inter text-lg text-black/60">${escape_html(store_get($$store_subs ??= {}, "$t", t)("pricing.subtitle"))}</p></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(plans);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let plan = each_array[$$index_1];
      $$renderer2.push(`<div${attr_class(` rounded-3xl p-10 flex flex-col relative overflow-hidden min-h-[700px] ${stringify(plan.highlight ? "bg-black text-white" : "bg-white border border-black/5 text-black")} `)}>`);
      if (plan.highlight) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <p class="relative font-geist text-sm opacity-70 mb-4">${escape_html(plan.name)}</p> <p class="relative font-calsans text-5xl mb-2">${escape_html(plan.price)}</p> <p class="relative font-inter text-sm opacity-60 mb-8">${escape_html(plan.subtitle)}</p> <ul class="relative space-y-4 mb-10 font-inter text-sm opacity-80"><!--[-->`);
      const each_array_1 = ensure_array_like(plan.features);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let feature = each_array_1[$$index];
        $$renderer2.push(`<li>✔ ${escape_html(feature)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul> <a${attr("href", plan.cta.href)}${attr_class(` relative mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-geist text-sm transition ${stringify(plan.cta.variant === "primary" ? "bg-black text-white hover:bg-black/90" : plan.cta.variant === "inverted" ? "bg-white text-black hover:bg-white/90" : "border border-black hover:bg-black hover:text-white")} `)}>${escape_html(plan.cta.label)}</a></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  Pricing as P
};
