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
        </defs>

        {/* ================= PLAIN BASE BACKGROUND ================= */}
        <rect width="400" height="480" rx="12" fill="#000000" />

        {/* Outer Dark Bezel Frame */}
        <rect
          x="4"
          y="4"
          width="392"
          height="472"
          rx="10"
          stroke="#420a12"
          strokeWidth="1.4"
          fill="none"
        />

        {/* Inner Fine Border */}
        <rect
          x="8"
          y="8"
          width="384"
          height="464"
          rx="8"
          stroke="#690f1b"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
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
