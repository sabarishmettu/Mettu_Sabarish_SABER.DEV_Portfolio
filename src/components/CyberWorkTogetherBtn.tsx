import React from 'react';

interface CyberWorkTogetherBtnProps {
  onClick?: () => void;
  id?: string;
}

export const CyberWorkTogetherBtn: React.FC<CyberWorkTogetherBtnProps> = ({
  onClick,
  id = 'btn-work-together',
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="relative group cursor-pointer select-none outline-none focus:outline-none inline-flex items-center transition-transform duration-200 active:scale-[0.98] h-[52px]"
      aria-label="Let's Work Together"
    >
      <svg
        viewBox="0 0 352 54"
        className="h-full w-auto max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle dark red gradient background on hover */}
          <linearGradient id="workBtnBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0.2" />
          </linearGradient>

          {/* Intense neon bloom for right cyber bracket */}
          <filter id="workNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= BUTTON MAIN BODY ================= */}
        {/* Hover Background Fill */}
        <path
          d="M 12 3 
             L 336 3 
             L 348 15 
             L 348 39 
             L 336 51 
             L 12 51 
             L 3 42 
             L 3 12 
             Z"
          fill="url(#workBtnBg)"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Base Outer Border (Darker Crimson) for Left & Middle segments */}
        {/* Top edge (from left chamfer to near right) */}
        <path
          d="M 12 3 L 290 3"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Top-Left 45deg Chamfer */}
        <path
          d="M 3 12 L 12 3"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Left Vertical Edge */}
        <path
          d="M 3 12 L 3 42"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Bottom-Left 45deg Chamfer */}
        <path
          d="M 3 42 L 12 51"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Bottom Edge (from left chamfer to right) */}
        <path
          d="M 12 51 L 295 51"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* ================= LUMINOUS RIGHT CYBER BRACKET WITH NEON GLOW ================= */}
        {/* Bright Glowing Right Enclosure with Chamfer Corners and Characteristic Cyber Notch */}
        <path
          d="M 290 3 
             L 336 3 
             L 348 15 
             L 348 39 
             L 336 51 
             L 295 51"
          stroke="#ff1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#workNeonGlow)"
          className="group-hover:stroke-[#ff4d4d] transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,26,26,0.9)]"
        />

        {/* Small top-right cyber tick / notch marker */}
        <line
          x1="344"
          y1="9"
          x2="348"
          y2="9"
          stroke="#ff1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="drop-shadow-[0_0_4px_rgba(255,26,26,0.9)]"
        />

        {/* Small bottom-right diagonal accent line */}
        <line
          x1="334"
          y1="49"
          x2="344"
          y2="39"
          stroke="#ff1a1a"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="drop-shadow-[0_0_4px_rgba(255,26,26,0.9)]"
        />

        {/* ================= LEFT CIRCLE PLAY ICON ================= */}
        {/* Outer Circular Rim */}
        <circle
          cx="37"
          cy="27"
          r="16"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Clean Outlined Play Triangle (▷) */}
        <path
          d="M 34 21 
             L 43 27 
             L 34 33 
             Z"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          className="group-hover:fill-white/10 transition-all duration-200"
        />

        {/* Small Red Connector Dash / Hyphen (-) */}
        <line
          x1="63"
          y1="27"
          x2="71"
          y2="27"
          stroke="#ff1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="drop-shadow-[0_0_5px_rgba(255,26,26,0.85)]"
        />

        {/* ================= CENTER TEXT: LET'S WORK TOGETHER ================= */}
        <text
          x="83"
          y="32"
          fill="#ffffff"
          fontSize="13.5"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Space Grotesk', sans-serif"
          fontWeight="700"
          letterSpacing="0.06em"
          className="tracking-wider group-hover:fill-white select-none transition-colors duration-200"
        >
          LET'S WORK TOGETHER
        </text>

        {/* ================= RIGHT ARROW (->) ================= */}
        <g className="transform group-hover:translate-x-1.5 transition-transform duration-300">
          {/* Arrow Stem */}
          <line
            x1="300"
            y1="27"
            x2="318"
            y2="27"
            stroke="#ff1a1a"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-[#ff4d4d]"
          />
          {/* Arrow Head */}
          <path
            d="M 311 20 
               L 318 27 
               L 311 34"
            stroke="#ff1a1a"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="group-hover:stroke-[#ff4d4d]"
          />
        </g>
      </svg>
    </button>
  );
};
