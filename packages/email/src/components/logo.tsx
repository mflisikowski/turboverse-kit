import { Img, Section } from '@react-email/components';
import { env } from '@repo/env/email';

export const Logo = () => {
  return (
    <Section className="mt-[32px]">
      <Img
        src={`${env.NEXT_PUBLIC_EMAIL_URL}/logo.png`}
        className="my-0 mx-auto block"
        height="45"
        width="45"
      />
    </Section>
  );
};
