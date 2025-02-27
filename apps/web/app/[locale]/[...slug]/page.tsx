import type { Metadata } from 'next';

import { getPageBreadcrumbs, getPageBySlug } from '@repo/payload-queries/pages';
import { notFound } from 'next/navigation';

export default async function PageTemplate({
  params,
}: {
  params: Promise<{
    locale: unknown;
    slug: string[];
  }>;
}) {
  const { slug = [], locale } = await params;

  const page = await getPageBySlug(`/${slug.join('/')}`);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{page.title}</h1>

        {page.breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            {page.breadcrumbs.map((crumb, index) => (
              <div key={crumb.id} className="flex items-center">
                {index > 0 && <span className="mx-1">/</span>}
                <span>{crumb.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <details className="mt-8 p-4 bg-gray-100 rounded-md">
        <summary className="font-medium cursor-pointer">Page Information</summary>
        <pre className="mt-4 overflow-auto">
          <code className="text-sm whitespace-pre-wrap break-words">
            {JSON.stringify(page, null, 2)}
          </code>
        </pre>
      </details>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export async function generateStaticParams() {
  const pages = await getPageBreadcrumbs();
  return pages;
}
