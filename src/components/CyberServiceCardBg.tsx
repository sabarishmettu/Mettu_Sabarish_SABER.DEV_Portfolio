import React from 'react';

export const CyberServiceCardBg: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
      <svg
        viewBox="0 0 400 480"
        className="w-full h-full object-fill absolute inset-0 select-none"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Corner Glow Filter */}
          <filter id="neonRedGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Red Tint Glass Gradient */}
          <linearGradient id="redGlassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff3333" stopOpacity="0.18" />
            <stop offset="35%" stopColor="#3b080f" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#1f0307" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0d0204" stopOpacity="0.75" />
          </linearGradient>

          {/* Center Ambient Red Glass Glow */}
          <radialGradient id="redGlassAura" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#ff1a1a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0" />
          </radialGradient>

          {/* Glass Top Edge Specular Reflection */}
          <linearGradient id="glassReflection" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0" />
            <stop offset="25%" stopColor="#ff6666" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#ff6666" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ================= RED TINT GLASS BASE BACKGROUND ================= */}
        <rect width="400" height="480" rx="12" fill="url(#redGlassGrad)" />

        {/* Ambient Red Aura Light inside glass */}
        <rect width="400" height="480" rx="12" fill="url(#redGlassAura)" />

        {/* Glass Top Specular Highlight */}
        <line x1="20" y1="2" x2="380" y2="2" stroke="url(#glassReflection)" strokeWidth="1.5" />

        {/* Outer Red Glass Bezel Frame */}
        <rect
          x="4"
          y="4"
          width="392"
          height="472"
          rx="10"
          stroke="rgba(255, 80, 80, 0.22)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Inner Fine Red Border */}
        <rect
          x="8"
          y="8"
          width="384"
          height="464"
          rx="8"
          stroke="#ff1a1a"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />

        {/* ================= 4 BOLD GLOWING NEON RED CORNER BRACKETS ================= */}
        {/* Top-Left Corner Bracket */}
        <g filter="url(#neonRedGlow)">
          <path
            d="M 12 52 
               L 12 20 
               Q 12 16 16 16 
               L 42 16 
               L 42 22 
               L 20 22 
               L 20 52 
               Z"
            fill="#ff1a1a"
          />
        </g>

        {/* Top-Right Corner Bracket */}
        <g filter="url(#neonRedGlow)">
          <path
            d="M 388 52 
               L 388 20 
               Q 388 16 384 16 
               L 358 16 
               L 358 22 
               L 380 22 
               L 380 52 
               Z"
            fill="#ff1a1a"
          />
        </g>

        {/* Bottom-Left Corner Bracket */}
        <g filter="url(#neonRedGlow)">
          <path
            d="M 12 428 
               L 12 460 
               Q 12 464 16 464 
               L 42 464 
               L 42 458 
               L 20 458 
               L 20 428 
               Z"
            fill="#ff1a1a"
          />
        </g>

        {/* Bottom-Right Corner Bracket */}
        <g filter="url(#neonRedGlow)">
          <path
            d="M 388 428 
               L 388 460 
               Q 388 464 384 464 
               L 358 464 
               L 358 458 
               L 380 458 
               L 380 428 
               Z"
            fill="#ff1a1a"
          />
        </g>
      </svg>
    </div>
  );
};
