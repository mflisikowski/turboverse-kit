import type { CreateEmailOptions } from 'resend';

import { sendViaNodeMailer } from '@/nodemailer';
import { resend, sendEmailViaResend } from '@/resend';

export const sendEmail = async ({
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
  if (resend) {
    return await sendEmailViaResend({
      email,
      replyTo,
      subject,
      from,
      bcc,
      text,
      react,
      scheduledAt,
    });
  }

  const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT);

  if (smtpConfigured) {
    return await sendViaNodeMailer({
      email,
      subject,
      text,
      react,
    });
  }
};
