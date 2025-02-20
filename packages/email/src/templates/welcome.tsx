import {
  Body,
  Container,
  Font,
  Heading,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';

import { Logo } from '@/components/logo';

export const WelcomeEmail = () => {
  return (
    <Html>
      <Tailwind>
        {/* biome-ignore lint/nursery/noHeadElement: <explanation> */}
        <head>
          <Font
            fontFamily="Geist"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: 'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-400-normal.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="Geist"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: 'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-500-normal.woff2',
              format: 'woff2',
            }}
            fontWeight={500}
            fontStyle="normal"
          />
        </head>

        <Preview>Welcome to Turboverse</Preview>

        <Body className="bg-[#fff] my-auto mx-auto font-sans text-center">
          <Container className="border-transparent md:border-[#E8E7E1] my-[40px] mx-auto p-[20px] max-w-[600px]">
            <Logo />

            <Heading className="text-[#121212] text-[21px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to Turboverse
            </Heading>

            <Text className="text-[#121212]">
              Thank you for joining us. We are excited to have you on board.
            </Text>

            <Link href="https://turboverse.dev">Visit our website</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
