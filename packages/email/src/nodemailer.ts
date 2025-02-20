import type { ReactElement } from 'react';
import type { CreateEmailOptions } from 'resend';

import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

import { env } from '@repo/env/email';

export const sendViaNodeMailer = async ({
  email,
  subject,
  text,
  react,
}: Pick<CreateEmailOptions, 'subject' | 'text' | 'react'> & {
  email: string;
}) => {
  if (
    !env.RESEND_SMTP_HOST ||
    !env.RESEND_SMTP_PORT ||
    !env.RESEND_SMTP_USER ||
    !env.RESEND_SMTP_PASSWORD
  ) {
    console.info('SMTP is not configured. Skipping sending email.');
    return;
  }

  if (!env.RESEND_FROM_EMAIL_NOREPLY) {
    console.info('RESEND_FROM_EMAIL_NOREPLY is not set in the .env. Skipping sending email.');
    return;
  }

  const transporter = nodemailer.createTransport({
    // @ts-ignore (Fix this)
    host: env.RESEND_SMTP_HOST,
    port: env.RESEND_SMTP_PORT,
    auth: {
      user: env.RESEND_SMTP_USER,
      pass: env.RESEND_SMTP_PASSWORD,
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  return await transporter.sendMail({
    from: env.RESEND_FROM_EMAIL_NOREPLY,
    to: email,
    subject,
    text,
    html: await render(react as ReactElement),
  });
};
