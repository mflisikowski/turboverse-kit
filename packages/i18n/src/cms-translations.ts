import type { Config, LabelFunction } from 'payload';

import type {
  DefaultTranslationKeys,
  NestedKeysStripped,
  TFunction,
} from '@payloadcms/translations';

// TODO: wait for answer on this: https://github.com/payloadcms/payload/issues/9858
// @ts-expect-error: TFunction type is not automatically merged with the default translations
export const translations: Config['i18n']['translations'] = {
  en: {
    custom: {
      welcome: 'Welcome',
    },
  },
  pl: {
    custom: {
      welcome: 'Witaj',
    },
  },
};

export type CustomTranslationsObject = (typeof translations)[keyof typeof translations];
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>;

export type TranslationLabelKey = CustomTranslationsKeys | DefaultTranslationKeys;

export const tl =
  (transKey: TranslationLabelKey): LabelFunction =>
  ({ t }: { t: TFunction<TranslationLabelKey> }) =>
    t(transKey);
