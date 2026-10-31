import React, { useId } from 'react';

interface AuvyqLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const AuvyqLogo: React.FC<AuvyqLogoProps> = ({
  className = '',
  width = 180,
  height = 40,
}) => {
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const goldGradId = `goldGrad_${safeId}`;
  const slashGradId = `slashGrad_${safeId}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 80"
      width={width}
      height={height}
      style={{ display: 'block' }}
      className={className}
      role="img"
      aria-label="AUVYQ DIGITAL STUDIO"
    >
      <defs>
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#D9D5C7" />
          <stop offset="100%" stopColor="#9A9483" />
        </linearGradient>
        <linearGradient id={slashGradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FFF5D6" />
        </linearGradient>
      </defs>

      {/* Geometric 'A' Icon Mark */}
      <g transform="translate(10, 8)">
        <path d="M 32 8 L 58 56 L 45 56 L 38 43 L 26 43 L 19 56 L 6 56 Z" fill={`url(#${goldGradId})`} />
        <polygon points="32,21 36,31 28,31" fill="#0A0A0A" />
        <path d="M 37 40 L 54 61 L 47 62 L 32 45 Z" fill={`url(#${slashGradId})`} />
      </g>

      {/* Typography */}
      <text
        x="82"
        y="44"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Syne', 'Inter', sans-serif"
        fontSize="28"
        fontWeight="900"
        letterSpacing="2.5"
        fill="#F4F4F0"
      >
        AUVYQ
      </text>
      <text
        x="83"
        y="58"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="5"
        fill="#8E8D8A"
      >
        DIGITAL STUDIO
      </text>
      <circle cx="282" cy="40" r="2.5" fill="#D4AF37" />
    </svg>
  );
};
