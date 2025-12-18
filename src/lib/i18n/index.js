import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

import en from './en.json';
import ro from './ro.json';

const DICTS = { en, ro };
const DEFAULT_LOCALE = 'en';

export const locale = writable(DEFAULT_LOCALE);

function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, k) => (acc != null ? acc[k] : undefined), obj);
}

function getValue(dict, key) {
  // 1) flat key support: { "footer.desc": "..." }
  if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];

  // 2) nested key support: { footer: { desc: "..." } }
  return getByPath(dict, key);
}

/**
 * t is a derived store that returns a function:
 *   $t('key')
 *   $t('key', { name: 'Stefan' })
 */
export const t = derived(locale, ($locale) => {
  const dict = DICTS[$locale] || DICTS[DEFAULT_LOCALE];
  const fallback = DICTS[DEFAULT_LOCALE];

  return (key, vars) => {
    let str = getValue(dict, key);
    if (str == null) str = getValue(fallback, key);
    if (typeof str !== 'string') str = key;

    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replaceAll(`{${k}}`, String(v));
      }
    }

    return str;
  };
});

export function setLocale(next, persist = false) {
  const safe = next in DICTS ? next : DEFAULT_LOCALE;
  locale.set(safe);

  if (browser && persist) {
    document.cookie = `lang=${safe}; Path=/; Max-Age=31536000; SameSite=Lax`;
    try {
      localStorage.setItem('lang', safe);
    } catch { }
  }
}

export function initLocaleClient(fallback = DEFAULT_LOCALE) {
  if (!browser) return;

  let stored = null;
  try {
    stored = localStorage.getItem('lang');
  } catch { }

  const nav = navigator.language?.slice(0, 2);
  const safeNav = nav in DICTS ? nav : null;

  const next = (stored && stored in DICTS ? stored : null) || safeNav || fallback;
  locale.set(next);
}
