type GarmentProps = {
  base: string;
  accent: string;
  category?: string;
  className?: string;
};

// Stylized premium apparel render used as product imagery for the UI.
// Lit from the upper-left with fabric folds + sheen so it reads dimensional
// enough to headline the hero without real photography.
export function Garment({ base, accent, category = "Tees", className = "" }: GarmentProps) {
  const longSleeve = category === "Long Sleeve" || category === "Jersey";
  const id = `${base}${accent}${category}`.replace(/[^a-z0-9]/gi, "").slice(0, 10);

  const body = longSleeve
    ? "M112 44 L160 64 L208 44 L246 70 L286 150 L250 176 L238 150 L238 320 Q238 332 226 332 L94 332 Q82 332 82 320 L82 150 L70 176 L34 150 L74 70 Z"
    : "M112 44 L160 66 L208 44 L250 74 L292 128 L256 162 L238 142 L238 318 Q238 330 226 330 L94 330 Q82 330 82 318 L82 142 L64 162 L28 128 L70 74 Z";

  return (
    <svg viewBox="0 0 320 380" className={className} aria-hidden="true">
      <defs>
        {/* fabric base, lit from upper-left */}
        <linearGradient id={`body-${id}`} x1="0.12" y1="0.05" x2="0.9" y2="1">
          <stop offset="0" stopColor={base} stopOpacity="1" />
          <stop offset="0.55" stopColor={base} stopOpacity="0.92" />
          <stop offset="1" stopColor={base} stopOpacity="0.66" />
        </linearGradient>
        {/* soft sheen across the chest */}
        <radialGradient id={`sheen-${id}`} cx="0.4" cy="0.3" r="0.72">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        {/* fire→ice accent for prints */}
        <linearGradient id={`accent-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd24a" />
          <stop offset="0.5" stopColor="#ff5a1f" />
          <stop offset="1" stopColor="#1e7fff" />
        </linearGradient>
        <filter id={`shadow-${id}`} x="-35%" y="-20%" width="170%" height="155%">
          <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* body */}
      <path
        filter={`url(#shadow-${id})`}
        fill={`url(#body-${id})`}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
        d={body}
      />
      {/* sheen overlay */}
      <path fill={`url(#sheen-${id})`} d={body} />

      {/* fabric fold shadows */}
      <g fill="none" strokeLinecap="round">
        <path d="M150 150 Q145 240 150 318" stroke="#000" strokeOpacity="0.16" strokeWidth="7" />
        <path d="M198 152 Q212 248 206 316" stroke="#000" strokeOpacity="0.14" strokeWidth="6" />
        <path d="M108 152 Q96 248 104 316" stroke="#000" strokeOpacity="0.14" strokeWidth="6" />
        {/* highlight crease */}
        <path d="M172 150 Q174 238 170 316" stroke="#fff" strokeOpacity="0.07" strokeWidth="9" />
        {/* shoulder seams */}
        <path d="M118 60 L96 150" stroke="#000" strokeOpacity="0.12" strokeWidth="4" />
        <path d="M202 60 L224 150" stroke="#000" strokeOpacity="0.12" strokeWidth="4" />
      </g>

      {/* ribbed crew collar */}
      <path d="M128 47 Q160 84 192 47" fill="none" stroke="rgba(0,0,0,0.38)" strokeWidth="8" />
      <path d="M132 50 Q160 78 188 50" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" />

      {/* chest mark */}
      <circle cx="124" cy="138" r="11" fill={`url(#accent-${id})`} opacity="0.95" />
      <circle cx="124" cy="138" r="11" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="1" />

      {/* center graphic */}
      <text
        x="160"
        y="232"
        textAnchor="middle"
        fontFamily="Archivo, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="-1"
        fill={`url(#accent-${id})`}
        opacity="0.96"
      >
        ONE WAY
      </text>
      <text
        x="160"
        y="256"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="11"
        letterSpacing="3"
        fill="rgba(255,255,255,0.5)"
      >
        THE RIGHT WAY
      </text>

      {/* sleeve accent patch */}
      <rect x="244" y="150" width="20" height="26" rx="4" fill={accent} opacity="0.92" />
      <rect x="244" y="150" width="20" height="26" rx="4" fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}
