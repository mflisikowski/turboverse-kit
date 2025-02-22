export const defaultLocale = 'en' as const;

export const locales = ['en', 'pl'] as const;

export type Locale = (typeof locales)[number];

export interface LocaleLabel {
  label: string;
  code: Locale;
}

export const localeLabels: LocaleLabel[] = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
];

export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};
