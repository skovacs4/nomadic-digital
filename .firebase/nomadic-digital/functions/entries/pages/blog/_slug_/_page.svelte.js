import { s as store_get, h as head, b as attr, u as unsubscribe_stores, f as bind_props } from "../../../../chunks/index2.js";
import { t } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { V as escape_html } from "../../../../chunks/context.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    const { post } = data;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.titleKey))} — Nomadic Digital</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$t", t)(post.descriptionKey))}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="article"/> <meta property="og:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}/> <meta property="og:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)(post.descriptionKey))}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:image"${attr("content", post.image)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}/> <meta name="twitter:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)(post.descriptionKey))}/> <meta name="twitter:image"${attr("content", post.image)}/>`);
    });
    $$renderer2.push(`<section class="max-w-5xl mx-auto py-36 md:py-48 mb-12 px-4 sm:px-6 lg:px-8"><div class="text-sm text-gray-400 font-[600] mb-8"><a href="/blog" class="hover:underline">Blog</a> / ${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}</div> <h1 class="font-calsans text-3xl md:text-5xl tracking-tight leading-[1.05] my-6">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}</h1> <div class="flex justify-between items-center mb-10"><div class="flex items-center gap-3"><img${attr("src", post.authorAvatar)}${attr("alt", post.author)} class="w-10 h-10 rounded-full object-cover"/> <div class="text-sm"><p class="text-gray-800 font-semibold">${escape_html(post.author)}</p> <p class="text-gray-500">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.roleKey))}</p></div></div> <p class="text-gray-500 text-sm">${escape_html(post.date)}</p></div> <img${attr("src", post.image)}${attr("alt", store_get($$store_subs ??= {}, "$t", t)(post.titleKey))} class="w-full rounded-xl mb-16"/> <div class="prose prose-lg max-w-none text-gray-800">${html(store_get($$store_subs ??= {}, "$t", t)(post.contentKey))}</div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
