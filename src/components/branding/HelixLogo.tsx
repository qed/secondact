import React from 'react';

interface HelixLogoProps {
  variant?: 'full' | 'mark';
  className?: string;
  size?: number;
}

export function HelixLogo({ variant = 'full', className = '', size = 40 }: HelixLogoProps) {
  const HelixMark = () => (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4735E', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#C4634E', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="sageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B9D83', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7B8D73', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* DNA Double Helix - Terracotta strand (Taste) */}
      <path
        d="M20 8 C28 16, 36 16, 44 8 C36 24, 28 24, 20 8"
        fill="none"
        stroke="url(#terracottaGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 24 C28 32, 36 32, 44 24 C36 40, 28 40, 20 24"
        fill="none"
        stroke="url(#terracottaGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 40 C28 48, 36 48, 44 40 C36 56, 28 56, 20 40"
        fill="none"
        stroke="url(#terracottaGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* DNA Double Helix - Sage strand (Talent) */}
      <path
        d="M44 8 C36 16, 28 16, 20 8 C28 24, 36 24, 44 8"
        fill="none"
        stroke="url(#sageGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M44 24 C36 32, 28 32, 20 24 C28 40, 36 40, 44 24"
        fill="none"
        stroke="url(#sageGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M44 40 C36 48, 28 48, 20 40 C28 56, 36 56, 44 40"
        fill="none"
        stroke="url(#sageGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Connection bars (projects built together) */}
      <line x1="26" y1="12" x2="38" y2="12" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="26" y1="28" x2="38" y2="28" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="26" y1="44" x2="38" y2="44" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );

  if (variant === 'mark') {
    return <HelixMark />;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <HelixMark />
      <span className="font-serif text-xl font-bold tracking-tight text-helix-brown">
        Helix
      </span>
    </div>
  );
}
