import React from 'react';

interface CyberWorkTogetherBtnProps {
  onClick?: () => void;
  id?: string;
  className?: string;
}

export const CyberWorkTogetherBtn: React.FC<CyberWorkTogetherBtnProps> = ({
  onClick,
  id = 'btn-work-together',
  className = '',
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`relative group cursor-pointer select-none outline-none focus:outline-none inline-flex items-center transition-all duration-300 active:scale-[0.98] ${className}`}
      aria-label="Let's Work Together"
    >
      <svg
        viewBox="0 0 340 56"
        className="w-[295px] sm:w-[325px] md:w-[340px] h-[48px] sm:h-[54px] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense Neon Red Bloom Glow for the Right Cyber Bracket */}
          <filter id="workBtnNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Solid Dark Fill with subtle gradient */}
          <linearGradient id="workBtnBgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#0a0204" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1e0407" stopOpacity="0.95" />
          </linearGradient>

          {/* Interactive Hover Fill Gradient */}
          <linearGradient id="workBtnHoverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        {/* 1. Base Chamfered Background Body */}
        <path
          d="M 16 6 
             L 314 6 
             L 328 20 
             L 328 36 
             L 314 50 
             L 16 50 
             L 6 40 
             L 6 16 
             Z"
          fill="url(#workBtnBgGrad)"
        />

        {/* 2. Interactive Hover Glow Background Layer */}
        <path
          d="M 16 6 
             L 314 6 
             L 328 20 
             L 328 36 
             L 314 50 
             L 16 50 
             L 6 40 
             L 6 16 
             Z"
          fill="url(#workBtnHoverGrad)"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* 3. Single Clean Outer Border Perimeter */}
        <path
          d="M 16 6 
             L 314 6 
             L 328 20 
             L 328 36 
             L 314 50 
             L 16 50 
             L 6 40 
             L 6 16 
             Z"
          stroke="#4a0910"
          strokeWidth="1.5"
          strokeLinejoin="miter"
          className="group-hover:stroke-[#ff1a1a]/50 transition-colors duration-300"
        />

        {/* 4. Glowing Neon Red Right Cyber Bracket (Follows the exact right contour with no extra lines) */}
        <path
          d="M 250 6 
             L 314 6 
             L 328 20 
             L 328 36 
             L 314 50 
             L 250 50"
          stroke="#ff1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#workBtnNeonGlow)"
          className="group-hover:stroke-[#ff4d4d] transition-all duration-300"
        />

        {/* 5. Left Circle Play Icon (▷) */}
        <circle
          cx="36"
          cy="28"
          r="15"
          stroke="#ff1a1a"
          strokeWidth="1.5"
          fill="#000000"
          className="group-hover:stroke-[#ff4d4d] transition-colors duration-300 drop-shadow-[0_0_6px_rgba(255,26,26,0.6)]"
        />
        {/* Outlined Play Triangle */}
        <path
          d="M 33 21.5 
             L 42 28 
             L 33 34.5 
             Z"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="group-hover:fill-white/20 transition-all duration-200"
        />

        {/* 6. Red Dash Connector (-) */}
        <line
          x1="62"
          y1="28"
          x2="72"
          y2="28"
          stroke="#ff1a1a"
          strokeWidth="2.4"
          strokeLinecap="round"
          filter="url(#workBtnNeonGlow)"
          className="group-hover:stroke-[#ff4d4d]"
        />

        {/* 7. Button Text: LET'S WORK TOGETHER */}
        <text
          x="84"
          y="33"
          fill="#ffffff"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontWeight="800"
          letterSpacing="0.06em"
          className="tracking-wider group-hover:fill-white select-none transition-colors duration-200"
        >
          LET'S WORK TOGETHER
        </text>

        {/* 8. Right Arrow (→) */}
        <g className="transform group-hover:translate-x-1.5 transition-transform duration-300">
          <line
            x1="278"
            y1="28"
            x2="299"
            y2="28"
            stroke="#ff1a1a"
            strokeWidth="1.8"
            strokeLinecap="round"
            filter="url(#workBtnNeonGlow)"
            className="group-hover:stroke-[#ff4d4d]"
          />
          <path
            d="M 292 21 
               L 299 28 
               L 292 35"
            stroke="#ff1a1a"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#workBtnNeonGlow)"
            className="group-hover:stroke-[#ff4d4d]"
          />
        </g>
      </svg>
    </button>
  );
};
