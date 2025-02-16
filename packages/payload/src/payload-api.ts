import { getPayload as getPayloadService } from 'payload';
import configPromise from './payload.config';

export const getPayload = async () =>
  getPayloadService({
    config: configPromise,
  });
