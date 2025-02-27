import { type Locale, defaultLocale, isValidLocale, locales } from '../config';

export const nextIntlConfig = {
  defaultLocale,
  locales,
} as const;
