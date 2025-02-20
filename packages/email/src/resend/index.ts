import type { CreateEmailOptions } from 'resend';

import { env } from '@repo/env/email';

import { Resend } from 'resend';

export const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export const sendEmailViaResend = async ({
  email,
  replyTo,
  subject,
  from,
  bcc,
  text,
  react,
  scheduledAt,
}: Omit<CreateEmailOptions, 'to' | 'from'> & {
  email: string;
  from?: string;
}) => {
  if (!resend) {
    console.info('RESEND_API_KEY is not set in the .env. Skipping sending email.');
    return;
  }

  if (!env.RESEND_UNSUBSCRIBE_URL) {
    console.info('RESEND_UNSUBSCRIBE_URL is not set in the .env. Skipping sending email.');
    return;
  }

  if (!env.RESEND_FROM_EMAIL) {
    console.info('RESEND_FROM_EMAIL is not set in the .env. Skipping sending email.');
    return;
  }

  return await resend.emails.send({
    to: email,
    from: from || env.RESEND_FROM_EMAIL,
    bcc: bcc,
    replyTo,
    subject,
    text,
    react,
    scheduledAt,
    headers: {
      'List-Unsubscribe': env.RESEND_UNSUBSCRIBE_URL,
    },
  });
};
