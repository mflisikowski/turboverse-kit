export const SupportedLocales = {
  EN: 'en',
  PL: 'pl',
} as const;

export type SupportedLocale = (typeof SupportedLocales)[keyof typeof SupportedLocales];
