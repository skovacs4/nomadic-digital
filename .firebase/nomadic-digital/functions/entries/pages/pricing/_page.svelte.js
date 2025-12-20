import { s as store_get, h as head, u as unsubscribe_stores, b as attr } from "../../../chunks/index2.js";
import { P as Pricing } from "../../../chunks/Pricing.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    const title = `${store_get($$store_subs ??= {}, "$t", t)("pricing.title")} | Nomadic Digital`;
    const description = store_get($$store_subs ??= {}, "$t", t)("pricing.meta.description");
    head("1hrotn9", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", description)}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:url"${attr("content", url)}/> <meta name="twitter:card" content="summary"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/>`);
    });
    $$renderer2.push(`<div class="py-24">`);
    Pricing($$renderer2, {});
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
