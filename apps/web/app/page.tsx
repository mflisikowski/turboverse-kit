import { getPayload } from '@repo/payload/payload-api';
import type { User } from '@repo/payload/payload.types';

import { User as UserIcon } from '@repo/icons';
import { MFDLogo } from '@repo/icons';

import { notFound } from 'next/navigation';
import { cache } from 'react';

const getUser = cache(async (): Promise<User | null> => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'users',
    pagination: false,
    select: {
      email: true,
    },
    limit: 1,
    depth: 0,
  });

  if (!result?.docs?.length) {
    return null;
  }

  return result.docs[0] as User;
});

export const generateStaticParams = async () => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'users',
    depth: 0,
    pagination: false,
  });

  return result.docs.map((user) => ({
    id: user.id,
  }));
};

export default async function HomePage() {
  const user = await getUser();

  if (!user) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 flex items-center gap-2 justify-center">
          <MFDLogo className="w-24" />
          Web
        </h1>
        <p className="text-xl text-gray-600">
          A modern web application built with Next.js, React, and TypeScript in a Turborepo monorepo
        </p>

        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 text-left">
          <div className="flex items-center gap-2 mb-4">
            <UserIcon className="w-4 h-4" />
            <p className="text-lg font-medium text-gray-700">
              Displaying user data fetched from PayloadCMS
            </p>
          </div>

          <code className="block p-4 rounded-lg bg-gray-50 text-sm font-mono text-gray-800 whitespace-pre overflow-x-auto">
            {JSON.stringify(user, null, 2)}
          </code>
        </div>
      </div>
    </main>
  );
}
