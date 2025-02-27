import type { Config } from 'payload';

import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';

import { defaultLocale, localeLabels } from '../config';
import { translations } from './translations';

export const localization: Config['localization'] = {
  defaultLocale: defaultLocale,
  fallback: true,
  locales: [...localeLabels.map(({ code }) => code)],
};

export const i18n: Config['i18n'] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: defaultLocale,
  translations,
};
