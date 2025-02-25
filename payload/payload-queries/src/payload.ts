import configPromise from '@repo/payload-config';
import { getPayload as getPayloadService } from 'payload';

export const getPayload = async () =>
  getPayloadService({
    config: configPromise,
  });
