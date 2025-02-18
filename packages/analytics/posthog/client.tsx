'use client';

import posthogRaw, { type PostHog } from 'posthog-js';
import { PostHogProvider as PostHogProviderRaw } from 'posthog-js/react';
import type { FC, ReactNode } from 'react';

import { env } from '@repo/env/analytics';

export const analytics = posthogRaw.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: '/ingest',
  ui_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  person_profiles: 'identified_only',
  capture_pageleave: true, // Overrides the `capture_pageview` setting
  capture_pageview: false, // Disable automatic pageview capture, as we capture manually
}) as PostHog;

type PostHogProviderProps = {
  children: ReactNode;
};

export const PostHogProvider: FC<Omit<PostHogProviderProps, 'client'>> = (properties) => (
  <PostHogProviderRaw client={analytics} {...properties} />
);
