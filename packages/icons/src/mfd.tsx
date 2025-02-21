import type { SVGProps } from 'react';

import { cn } from '@repo/utils/cn';

interface Props extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const MFDLogo = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1196 420"
      className={cn('w-24', className)}
      fill="none"
      aria-label="Mission Focus Developer Logo"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path
        d="M0 420V0H104.4L191.4 185.4C222 250.2 232.2 277.2 238.2 297.6C243.6 277.2 253.8 250.2 284.4 185.4L372 0H472.8V420H390.6V250.2C390.6 193.2 392.4 165 396.6 128.4L256.8 420H216L76.2 128.4C80.4 165 82.2 193.2 82.2 250.2V420H0Z"
        fill="currentColor"
      />
      <path
        d="M532.617 420V0H779.217V75.6H616.617V174H776.217V248.4H616.617V420H532.617Z"
        fill="currentColor"
      />
      <path
        d="M830.273 420V0H980.273C1125.47 0 1195.67 90 1195.67 210.6C1195.67 330.6 1125.47 420 980.273 420H830.273ZM914.273 344.4H970.073C1069.67 344.4 1108.67 286.8 1108.67 210.6C1108.67 134.4 1069.67 75.6 970.073 75.6H914.273V344.4Z"
        fill="currentColor"
      />
    </svg>
  );
};
