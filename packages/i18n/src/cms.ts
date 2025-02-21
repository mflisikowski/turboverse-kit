import type { Config } from 'payload';

import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';

import { translations } from './cms-translations';
import { SupportedLocales } from './config';

export const LocaleLabels = {
  [SupportedLocales.PL]: 'Polski',
  [SupportedLocales.EN]: 'English',
};

export const localization: Config['localization'] = {
  defaultLocale: SupportedLocales.PL,
  fallback: true,

  locales: [
    {
      label: LocaleLabels[SupportedLocales.PL],
      code: SupportedLocales.PL,
    },
    {
      label: LocaleLabels[SupportedLocales.EN],
      code: SupportedLocales.EN,
    },
  ],
};

export const i18n: Config['i18n'] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: SupportedLocales.PL,
  translations,
};
