import React from 'react';

interface CyberBtnProps {
  onClick?: () => void;
  id?: string;
  label?: string;
}

export const CyberOutlineBtn: React.FC<CyberBtnProps> = ({
  onClick,
  id = 'btn-cyber-outline',
  label = 'VIEW ALL SERVICES',
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="relative group cursor-pointer select-none outline-none focus:outline-none inline-flex items-center transition-transform duration-200 active:scale-[0.98] h-[46px] sm:h-[50px]"
      aria-label={label}
    >
      <svg
        viewBox="0 0 395 54"
        className="h-full w-auto max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle dark red gradient background on hover */}
          <linearGradient id="cyberOutlineBtnBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0.2" />
          </linearGradient>

          {/* Glowing highlight filter for slanted right edge */}
          <filter id="cyberOutlineSlantGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ================= BUTTON MAIN BODY ================= */}
        {/* Background Fill (Subtle cyber fill on hover) */}
        <path
          d="M 12 3 
             L 242 3 
             L 218 51 
             L 12 51 
             L 3 42 
             L 3 12 
             Z"
          fill="url(#cyberOutlineBtnBg)"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Main Outer Border with Chamfered Left Corners and Slanted Right Edge */}
        <path
          d="M 12 3 
             L 242 3"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 12 
             L 12 3"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 12 
             L 3 42"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 42 
             L 12 51"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Bottom edge with characteristic subtle gap notch */}
        <path
          d="M 12 51 
             L 206 51"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Glowing Slanted Right Edge with Bottom Notch Accent */}
        <path
          d="M 212 51 
             L 218 51 
             L 242 3"
          stroke="#ff1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#cyberOutlineSlantGlow)"
          className="group-hover:stroke-[#ff3d3d] transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,26,26,0.85)]"
        />

        {/* ================= BUTTON CONTENT: TEXT & ARROW ================= */}
        {/* Label Text */}
        <text
          x="28"
          y="32"
          fill="#ffffff"
          fontSize="13.5"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Space Grotesk', sans-serif"
          fontWeight="700"
          letterSpacing="0.08em"
          className="tracking-wider group-hover:fill-white select-none transition-colors duration-200 uppercase"
        >
          {label}
        </text>

        {/* Cyber Arrow -> */}
        <g className="transform group-hover:translate-x-1.5 transition-transform duration-300">
          {/* Arrow Stem */}
          <line
            x1="186"
            y1="27"
            x2="202"
            y2="27"
            stroke="#ff1a1a"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-[#ff4d4d]"
          />
          {/* Arrow Head */}
          <path
            d="M 196 21 
               L 202 27 
               L 196 33"
            stroke="#ff1a1a"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="group-hover:stroke-[#ff4d4d]"
          />
        </g>

        {/* ================= 3 PARALLEL SLANTED HASH STRIPES (///) ================= */}
        {/* Stripe 1 */}
        <path
          d="M 262 3 
             L 277 3 
             L 253 51 
             L 238 51 
             Z"
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />

        {/* Stripe 2 */}
        <path
          d="M 291 3 
             L 306 3 
             L 282 51 
             L 267 51 
             Z"
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />

        {/* Stripe 3 */}
        <path
          d="M 320 3 
             L 335 3 
             L 311 51 
             L 296 51 
             Z"
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />
      </svg>
    </button>
  );
};
