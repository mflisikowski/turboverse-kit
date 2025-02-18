import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export const WelcomeEmail: React.FC = () => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Welcome to our service! This is an example email template.</Preview>
      <Body className="bg-gray-50 font-sans">
        <Container className="bg-white mx-auto py-5">
          <Section className="px-12">
            <Text className="text-gray-600 text-base leading-6 text-left">
              Hi there! Welcome to our service. We're excited to have you on board.
            </Text>
          </Section>
          <Section className="px-12">
            <Text className="text-gray-600 text-base leading-6 text-left">
              This is an example email template that demonstrates the styling and layout
              capabilities of our email system. Feel free to customize this template with your own
              content, branding, and styling to create beautiful, responsive emails for your users.
              Best regards, The Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default WelcomeEmail;
