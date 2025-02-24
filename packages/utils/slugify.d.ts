declare module 'slugify' {
  function createSlug(text: string, options?: { lower?: boolean; strict?: boolean }): string;
  export default createSlug;
}
