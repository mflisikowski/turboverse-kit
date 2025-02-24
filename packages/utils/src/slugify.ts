import createSlug from 'slugify';

export const slugify = (text: string) => {
  return createSlug(text, { lower: true, strict: true });
};
