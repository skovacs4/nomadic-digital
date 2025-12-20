import { s as store_get, e as ensure_array_like, u as unsubscribe_stores } from "./index2.js";
import { t } from "./index3.js";
import { V as escape_html } from "./context.js";
function Stats($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { stats: statsProp = null } = $$props;
    const stats = statsProp ?? [
      {
        value: store_get($$store_subs ??= {}, "$t", t)("stats.1.value"),
        label: store_get($$store_subs ??= {}, "$t", t)("stats.1.label")
      },
      {
        value: store_get($$store_subs ??= {}, "$t", t)("stats.2.value"),
        label: store_get($$store_subs ??= {}, "$t", t)("stats.2.label")
      },
      {
        value: store_get($$store_subs ??= {}, "$t", t)("stats.3.value"),
        label: store_get($$store_subs ??= {}, "$t", t)("stats.3.label")
      },
      {
        value: store_get($$store_subs ??= {}, "$t", t)("stats.4.value"),
        label: store_get($$store_subs ??= {}, "$t", t)("stats.4.label")
      }
    ];
    let displayValues = [];
    $$renderer2.push(`<section class="px-6 md:px-12 py-24 max-w-8xl mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center text-center lg:text-left lg:justify-items-start lg:ml-[16.666%]"><!--[-->`);
    const each_array = ensure_array_like(stats);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let s = each_array[i];
      $$renderer2.push(`<div class="max-w-xs"><p class="font-inter text-6xl sm:text-7xl lg:text-8xl leading-none font-semibold">${escape_html(displayValues[i] ?? "0")}</p> <p class="font-inter text-base text-black/60 mt-4 leading-relaxed">${escape_html(s.label)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  Stats as S
};
