import { s as store_get, h as head, a as attr_class, e as ensure_array_like, b as attr, g as attr_style, u as unsubscribe_stores, d as stringify } from "../../../chunks/index2.js";
import { b as blogPosts } from "../../../chunks/blogPosts.js";
import { t } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { V as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const url = store_get($$store_subs ??= {}, "$page", page).url.href;
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$t", t)("meta.blog.title"))}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.blog.description"))}/> <link rel="canonical"${attr("href", url)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.blog.title"))}/> <meta property="og:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.blog.description"))}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:image" content="/og/blog.jpg"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.blog.title"))}/> <meta name="twitter:description"${attr("content", store_get($$store_subs ??= {}, "$t", t)("meta.blog.description"))}/> <meta name="twitter:image" content="/og/blog.jpg"/>`);
    });
    $$renderer2.push(`<section class="py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"><h2${attr_class(`font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05] mb-2 transition-all duration-700 ease-out ${stringify("opacity-0 translate-y-4")}`)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.index.title"))}</h2> <p${attr_class(`text-gray-500 font-[600] mb-12 transition-all duration-700 ease-out delay-100 ${stringify("opacity-0 translate-y-4")}`)}>${escape_html(store_get($$store_subs ??= {}, "$t", t)("blog.index.subtitle"))}</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"><!--[-->`);
    const each_array = ensure_array_like(blogPosts);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let post = each_array[i];
      $$renderer2.push(`<a${attr("href", `/blog/${post.slug}`)}${attr_class(`show block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white transform transition-all duration-700 ease-out ${stringify("opacity-0 translate-y-6")}`)}${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><img${attr("src", post.image)}${attr("alt", store_get($$store_subs ??= {}, "$t", t)(post.titleKey))} class="w-full h-48 object-cover"/> <div class="p-6"><h3 class="text-lg font-semibold text-gray-900 mb-2">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.titleKey))}</h3> <p class="text-sm text-gray-600 font-[600]">${escape_html(store_get($$store_subs ??= {}, "$t", t)(post.descriptionKey))}</p></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
