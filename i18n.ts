import Vue from 'vue';
import VueI18n from 'vue-i18n';
import czDictionary from './locales/cz.json';

/**
 * Overloads VueI18n interface to avoid needing to cast return value to string.
 * @see https://github.com/kazupon/vue-i18n/issues/410
 */
declare module 'vue-i18n/types' {
  export default class VueI18n {
    t(key: Path, locale: Locale, values?: Values): string;
    t(key: Path, values?: Values): string;
  }
}

/******************************************************************************
 * VUE-I18N, https://github.com/kazupon/vue-i18n
 *****************************************************************************/
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {
    cs: czDictionary,
  },
});

export default i18n;
