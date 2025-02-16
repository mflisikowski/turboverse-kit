import { getPayload } from '@repo/payload/payload-api';

export default async function HomePage() {
  const payload = await getPayload();

  const users = await payload.find({
    collection: 'users',
    select: {
      email: true,
    },
    pagination: false,
    depth: 0,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">Web</h1>
        <p className="text-xl text-gray-600">
          A modern web application built with Next.js, React, and TypeScript in a Turborepo monorepo
        </p>

        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 text-left">
          <p className="text-lg font-medium text-gray-700 mb-4">
            Displaying user data fetched from PayloadCMS
          </p>
          <code className="block p-4 rounded-lg bg-gray-50 text-sm font-mono text-gray-800 whitespace-pre overflow-x-auto">
            {JSON.stringify(users?.docs?.[0], null, 2)}
          </code>
        </div>
      </div>
    </main>
  );
}
