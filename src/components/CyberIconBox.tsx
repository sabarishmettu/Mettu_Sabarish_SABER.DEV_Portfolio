import React from 'react';

interface CyberIconBoxProps {
  icon?: React.ComponentType<{ className?: string }>;
}

export const CyberIconBox: React.FC<CyberIconBoxProps> = ({ icon: Icon }) => {
  return (
    <div className="relative w-[82px] h-[82px] sm:w-[88px] sm:h-[88px] flex items-center justify-center select-none">
      {/* SVG Segmented Cyber Squircle Border */}
      <svg
        viewBox="0 0 88 88"
        className="w-full h-full absolute inset-0 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="iconNeonGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Squircle Frosted Red Glass Fill with Subtle Border */}
        <rect
          x="6"
          y="6"
          width="76"
          height="76"
          rx="16"
          fill="rgba(255, 26, 26, 0.08)"
          stroke="rgba(255, 80, 80, 0.3)"
          strokeWidth="1.2"
        />

        {/* Segmented Glowing Red Neon Outer Accents */}
        <g filter="url(#iconNeonGlow)" stroke="#ff1a1a" strokeWidth="2.5" strokeLinecap="round">
          {/* Top Segment */}
          <path d="M 28 6 L 60 6" />
          {/* Bottom Segment */}
          <path d="M 28 82 L 60 82" />
          {/* Left Segment */}
          <path d="M 6 28 L 6 60" />
          {/* Right Segment */}
          <path d="M 82 28 L 82 60" />

          {/* Top-Left Corner Arc */}
          <path d="M 12 18 Q 18 10 24 8" strokeWidth="2" />
          {/* Top-Right Corner Arc */}
          <path d="M 76 18 Q 70 10 64 8" strokeWidth="2" />
          {/* Bottom-Left Corner Arc */}
          <path d="M 12 70 Q 18 78 24 80" strokeWidth="2" />
          {/* Bottom-Right Corner Arc */}
          <path d="M 76 70 Q 70 78 64 80" strokeWidth="2" />
        </g>
      </svg>

      {/* Center Glowing Red Icon */}
      {Icon && (
        <div className="relative z-10 flex items-center justify-center transform group-hover:scale-108 transition-transform duration-300">
          <Icon className="w-7 h-7 sm:w-[32px] sm:h-[32px] text-[#ff1a1a] drop-shadow-[0_0_10px_#ff1a1a] stroke-[2.2]" />
        </div>
      )}
    </div>
  );
};



