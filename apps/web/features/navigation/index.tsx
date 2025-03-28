import { getNavigation } from '@repo/payload-queries/navigation';
import { DesktopNavigation } from './desktop-navigation';

export const Navigation = async () => {
  const { items } = await getNavigation();

  return (
    <header className="w-full flex items-center justify-between px-4">
      <div className="mr-4 flex">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Your Logo</span>
        </a>
      </div>

      <DesktopNavigation className="hidden md:block" items={items} />
    </header>
  );
};
