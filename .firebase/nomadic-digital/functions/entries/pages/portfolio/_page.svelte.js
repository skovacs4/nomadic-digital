import { s as store_get, h as head, u as unsubscribe_stores, b as attr } from "../../../chunks/index2.js";
import { P as Portfolio } from "../../../chunks/Portfolio.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    head("1uo84gz", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.title"))}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.description"))}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.title"))}/> <meta property="og:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.description"))}/> <meta property="og:url"${attr("content", url)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.title"))}/> <meta name="twitter:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("portfolio.meta.description"))}/>`);
    });
    $$renderer2.push(`<section class="max-w-[1600px] mx-auto px-2 md:px-12 py-48 text-center" data-aos="fade-up"><h1 class="text-6xl md:text-8xl tracking-tight leading-[1.05] mb-24">${escape_html(store_get($$store_subs ??= {}, "$t", t)("portfolio.pageTitle"))}</h1> `);
    Portfolio($$renderer2);
    $$renderer2.push(`<!----></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
