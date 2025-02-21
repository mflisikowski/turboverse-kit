import type { FC, ReactNode } from 'react';

import { GoogleAnalytics } from '@/google';
import { PostHogProvider } from '@/posthog/client';
import { VercelAnalytics } from '@/vercel';

import { env } from '@repo/env/analytics';

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({ children }) => (
  <PostHogProvider>
    {children}
    <VercelAnalytics />

    {env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    )}
  </PostHogProvider>
);
