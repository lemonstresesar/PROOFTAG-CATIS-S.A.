import { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface BrandLogoProps {
  variant?: 'color' | 'white';
  className?: string;
}

export function BrandLogo({ variant = 'color', className = 'h-9 w-auto' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = variant === 'white' ? SITE_CONFIG.logos.whiteDarkBg : SITE_CONFIG.logos.colorLightBg;

  if (failed) {
    return (
      <span
        className={`font-bold tracking-tight whitespace-nowrap ${
          variant === 'white' ? 'text-white' : 'text-[var(--color-primary)]'
        }`}
      >
        PROOFTAG-CATIS S.A.
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="PROOFTAG-CATIS S.A."
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${className} object-contain select-none`}
    />
  );
}
