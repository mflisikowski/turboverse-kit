import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from './routing';

type SupportedLocale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as SupportedLocale)) {
    locale = routing.defaultLocale;
  }

  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound();
  }

  return {
    messages: (await import(`./translations/${locale}.json`)).default,
    locale,
  };
});
