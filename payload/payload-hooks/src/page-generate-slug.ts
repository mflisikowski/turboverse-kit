import type { FieldHook, FieldHookArgs } from 'payload';

export const pageGenerateSlug: FieldHook = async ({
  siblingData,
  value = [],
  req,
}: FieldHookArgs) => {
  if (!value?.length) {
    req.payload.logger.warn('No value');
    return value;
  }

  const lastItem = value.at(-1);
  if (!lastItem?.url) {
    req.payload.logger.warn('No last item url found');
    return value;
  }

  req.payload.logger.info('Setup slug');
  siblingData.slug = lastItem.url;

  return value;
};
