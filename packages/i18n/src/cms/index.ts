import type { Config } from 'payload';

import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';

import { SupportedLocales } from '../config';
import { translations } from './translations';

export const LocaleLabels = {
  [SupportedLocales.PL]: 'Polski',
  [SupportedLocales.EN]: 'English',
};

export const payloadLocalizationConfig: Config['localization'] = {
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

export const payloadI18nConfig: Config['i18n'] = {
  supportedLanguages: { en, pl },
  fallbackLanguage: SupportedLocales.PL,
  translations,
};
