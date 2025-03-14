'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-amber-950">
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="mb-2">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-amber-600/20 text-amber-300 mb-4 tracking-wide uppercase">
            {t('tagline')}
          </span>
        </div>

        <div className="flex flex-col gap-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-300 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-amber-100/80 leading-relaxed max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
      </div>
    </div>
  );
}
