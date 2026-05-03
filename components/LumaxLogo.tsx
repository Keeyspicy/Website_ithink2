interface LumaxLogoProps {
  className?: string;
  dark?: boolean;
}

export default function LumaxLogo({ className = "", dark = true }: LumaxLogoProps) {
  const nameColor = dark ? "#1C2B1C" : "#ffffff";

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lumax Results"
      role="img"
    >
      <defs>
        <linearGradient id="lmx-g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#2A8944" />
        </linearGradient>
        <linearGradient id="lmx-g2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#81C995" />
        </linearGradient>
      </defs>

      {/* Geometric L mark */}
      <rect x="2" y="5"  width="6" height="24" rx="1.5" fill="url(#lmx-g1)" />
      <rect x="2" y="23" width="18" height="6"  rx="1.5" fill="url(#lmx-g1)" />

      {/* Prism spark */}
      <path d="M13 7 L18 3 L22 10 L17 14 Z" fill="url(#lmx-g2)" opacity="0.92" />

      {/* Light rays */}
      <line x1="18" y1="3"  x2="18" y2="0"  stroke="#34A853" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <line x1="21" y1="6"  x2="26" y2="3"  stroke="#34A853" strokeWidth="1.2" strokeLinecap="round" opacity="0.40" />
      <line x1="22" y1="11" x2="28" y2="10" stroke="#34A853" strokeWidth="1"   strokeLinecap="round" opacity="0.28" />

      {/* Wordmark — "Lumax" + " Results" same size, clear business name */}
      <text
        x="34" y="28"
        fill={nameColor}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.4"
      >
        Lumax
      </text>
      <text
        x="104" y="28"
        fill="#34A853"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.4"
      >
        Results
      </text>
    </svg>
  );
}
