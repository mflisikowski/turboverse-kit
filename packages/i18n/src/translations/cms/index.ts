import type { TFunction } from '@payloadcms/translations';
import type { NestedKeysStripped } from '@payloadcms/translations';
import type { DefaultTranslationKeys } from '@payloadcms/translations';

import { en } from './en';
import { pl } from './pl';

// TODO: wait for answer on this: https://github.com/payloadcms/payload/issues/9858
// @ts-expect-error: TFunction type is not automatically merged with the default translations
export const translations: Config['i18n']['translations'] = { en, pl };

export type TranslationDictionary = (typeof translations)[keyof typeof translations];
export type TranslationKeys = NestedKeysStripped<TranslationDictionary>;

export type TranslationFunction = TFunction<TranslationKeys | DefaultTranslationKeys>;
export type TLabel = { t: TranslationFunction };
