export function FireIce({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fi-flame" x1="0" y1="4" x2="0" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffd24a" />
          <stop offset="0.5" stopColor="#ff5a1f" />
          <stop offset="1" stopColor="#e8431a" />
        </linearGradient>
        <linearGradient id="fi-ice" x1="24" y1="6" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#bfe2ff" />
          <stop offset="1" stopColor="#1e7fff" />
        </linearGradient>
      </defs>
      {/* Flame half */}
      <path
        d="M24 4c1.8 5.4-2.9 8.2-4.7 11.6-1.9 3.5-3.1 6.6-3.1 10.2 0 6.7 4.1 11.4 8.8 12.8-2.2-2.6-2.7-5.4-1.3-8.4 1.1-2.4 3-3.7 3.4-6.6.9 1.6 1.6 3.2 1.7 5.1 2.2-2.7 3-5.6 2.6-9.1-.6-5.6-5.2-8.9-7.4-12.8C24 6.6 24 5.3 24 4Z"
        fill="url(#fi-flame)"
      />
      {/* Ice snowflake accent */}
      <g stroke="url(#fi-ice)" strokeWidth="2" strokeLinecap="round">
        <path d="M37 14v14" />
        <path d="M30 21h14" />
        <path d="M32.5 16.5l9 9" />
        <path d="M41.5 16.5l-9 9" />
      </g>
    </svg>
  );
}
