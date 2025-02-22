import { type Locale, defaultLocale, isValidLocale, locales } from './config';

export const nextIntlConfig = {
  defaultLocale,
  locales,
} as const;

export interface I18nParams {
  lang: Locale;
}

export const getI18nParams = (params: { lang?: string }): I18nParams => {
  const lang = params.lang && isValidLocale(params.lang) ? params.lang : defaultLocale;
  return { lang };
};
