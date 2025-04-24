import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_EMAIL_URL: z.string().min(1).url(),
  },

  server: {
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
    RESEND_FROM_NAME: z.string().min(1),
    RESEND_FROM_EMAIL_NOREPLY: z.string().min(1),
    RESEND_SMTP_HOST: z.string().min(1),
    RESEND_SMTP_PORT: z.coerce.number().min(1),
    RESEND_SMTP_USER: z.string().min(1),
    RESEND_SMTP_PASSWORD: z.string().min(1),
    RESEND_UNSUBSCRIBE_URL: z.string().min(1).url(),
    RESEND_AUDIENCE_ID: z.string().min(1),
  },

  runtimeEnv: {
    NEXT_PUBLIC_EMAIL_URL: process.env.NEXT_PUBLIC_EMAIL_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_FROM_NAME: process.env.RESEND_FROM_NAME,
    RESEND_FROM_EMAIL_NOREPLY: process.env.RESEND_FROM_EMAIL_NOREPLY,
    RESEND_SMTP_HOST: process.env.RESEND_SMTP_HOST,
    RESEND_SMTP_PORT: process.env.RESEND_SMTP_PORT,
    RESEND_SMTP_USER: process.env.RESEND_SMTP_USER,
    RESEND_SMTP_PASSWORD: process.env.RESEND_SMTP_PASSWORD,
    RESEND_UNSUBSCRIBE_URL: process.env.RESEND_UNSUBSCRIBE_URL,
    RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  },
});
