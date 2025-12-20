import { s as store_get, e as ensure_array_like, u as unsubscribe_stores } from "./index2.js";
import { t } from "./index3.js";
import { V as escape_html } from "./context.js";
function HowItWorks($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const steps = [
      {
        step: store_get($$store_subs ??= {}, "$t", t)("how.steps.1.step"),
        title: store_get($$store_subs ??= {}, "$t", t)("how.steps.1.title"),
        description: store_get($$store_subs ??= {}, "$t", t)("how.steps.1.desc")
      },
      {
        step: store_get($$store_subs ??= {}, "$t", t)("how.steps.2.step"),
        title: store_get($$store_subs ??= {}, "$t", t)("how.steps.2.title"),
        description: store_get($$store_subs ??= {}, "$t", t)("how.steps.2.desc")
      },
      {
        step: store_get($$store_subs ??= {}, "$t", t)("how.steps.3.step"),
        title: store_get($$store_subs ??= {}, "$t", t)("how.steps.3.title"),
        description: store_get($$store_subs ??= {}, "$t", t)("how.steps.3.desc")
      },
      {
        step: store_get($$store_subs ??= {}, "$t", t)("how.steps.4.step"),
        title: store_get($$store_subs ??= {}, "$t", t)("how.steps.4.title"),
        description: store_get($$store_subs ??= {}, "$t", t)("how.steps.4.desc")
      }
    ];
    $$renderer2.push(`<section class="px-6 md:px-12 py-24 mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:ml-[0.1]"><!--[-->`);
    const each_array = ensure_array_like(steps);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let s = each_array[$$index];
      $$renderer2.push(`<div class="border-t border-black/10 pt-6"><p class="font-geist text-xs text-black/40 mb-4">${escape_html(s.step)}</p> <h3 class="font-calsans text-xl md:text-2xl leading-tight mb-3 text-black">${escape_html(s.title)}</h3> <p class="font-inter text-sm text-black/60 leading-relaxed">${escape_html(s.description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  HowItWorks as H
};
