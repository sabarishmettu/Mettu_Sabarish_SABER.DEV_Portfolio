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
  // Calculate dynamic dimensions based on label length to ensure exact vector shape match with CyberViewProjectsBtn
  const isLongLabel = label.length > 16; // e.g. "VIEW ALL CERTIFICATES" (21 chars) vs "VIEW PROJECTS" (13 chars)
  
  // Coordinates matching the exact vector shape of CyberViewProjectsBtn:
  // For VIEW PROJECTS: bodyTopRight = 218, bodyBottomRight = 194, textX = 30, arrowStemX1 = 162, arrowStemX2 = 178, arrowHeadX1 = 172
  // For Long labels (VIEW ALL CERTIFICATES): we scale width by offset +55px so shape, angle, and hash lines stay identical
  const offset = isLongLabel ? 55 : 0;
  const bodyTopRight = 218 + offset;
  const bodyBottomRight = 194 + offset;
  const bottomEdgeRight = 182 + offset;
  const notchRight = 188 + offset;
  const viewBoxWidth = 370 + offset;
  
  // Arrow position after text
  const arrowStemX1 = (isLongLabel ? 222 : 162);
  const arrowStemX2 = (isLongLabel ? 238 : 178);
  const arrowHeadX1 = (isLongLabel ? 232 : 172);

  // 3 Parallel Hash Stripes (///) shifted by offset
  const stripe1X1 = 238 + offset;
  const stripe1X2 = 253 + offset;
  const stripe1X3 = 229 + offset;
  const stripe1X4 = 214 + offset;

  const stripe2X1 = 267 + offset;
  const stripe2X2 = 282 + offset;
  const stripe2X3 = 258 + offset;
  const stripe2X4 = 243 + offset;

  const stripe3X1 = 296 + offset;
  const stripe3X2 = 311 + offset;
  const stripe3X3 = 287 + offset;
  const stripe3X4 = 272 + offset;

  return (
    <button
      id={id}
      onClick={onClick}
      className="relative group cursor-pointer select-none outline-none focus:outline-none inline-flex items-center transition-transform duration-200 active:scale-[0.98] h-[52px]"
      aria-label={label}
    >
      <svg
        viewBox={`0 0 ${viewBoxWidth} 54`}
        className="h-full w-auto max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle dark red gradient background on hover */}
          <linearGradient id={`cyberBtnBg-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0.2" />
          </linearGradient>

          {/* Glowing highlight filter for slanted right edge */}
          <filter id={`cyberSlantGlow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
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
          d={`M 12 3 
             L ${bodyTopRight} 3 
             L ${bodyBottomRight} 51 
             L 12 51 
             L 3 42 
             L 3 12 
             Z`}
          fill={`url(#cyberBtnBg-${id})`}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Main Outer Border with Chamfered Left Corners and Slanted Right Edge */}
        <path
          d={`M 12 3 L ${bodyTopRight} 3`}
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 12 L 12 3"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 12 L 3 42"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        <path
          d="M 3 42 L 12 51"
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Bottom edge with characteristic subtle gap notch */}
        <path
          d={`M 12 51 L ${bottomEdgeRight} 51`}
          stroke="#9e1c2a"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="group-hover:stroke-[#ff1a1a] transition-colors duration-300"
        />

        {/* Glowing Slanted Right Edge with Bottom Notch Accent */}
        <path
          d={`M ${notchRight} 51 
             L ${bodyBottomRight} 51 
             L ${bodyTopRight} 3`}
          stroke="#ff1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#cyberSlantGlow-${id})`}
          className="group-hover:stroke-[#ff3d3d] transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,26,26,0.85)]"
        />

        {/* ================= BUTTON CONTENT: TEXT & ARROW ================= */}
        {/* Label Text */}
        <text
          x="30"
          y="32"
          fill="#ffffff"
          fontSize={isLongLabel ? "13.5" : "14.5"}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Space Grotesk', sans-serif"
          fontWeight="700"
          letterSpacing="0.06em"
          className="tracking-wider group-hover:fill-white select-none transition-colors duration-200 uppercase"
        >
          {label}
        </text>

        {/* Cyber Arrow -> */}
        <g className="transform group-hover:translate-x-1.5 transition-transform duration-300">
          {/* Arrow Stem */}
          <line
            x1={arrowStemX1}
            y1="27"
            x2={arrowStemX2}
            y2="27"
            stroke="#ff1a1a"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="group-hover:stroke-[#ff4d4d]"
          />
          {/* Arrow Head */}
          <path
            d={`M ${arrowHeadX1} 21 
               L ${arrowStemX2} 27 
               L ${arrowHeadX1} 33`}
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
          d={`M ${stripe1X1} 3 
             L ${stripe1X2} 3 
             L ${stripe1X3} 51 
             L ${stripe1X4} 51 
             Z`}
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />

        {/* Stripe 2 */}
        <path
          d={`M ${stripe2X1} 3 
             L ${stripe2X2} 3 
             L ${stripe2X3} 51 
             L ${stripe2X4} 51 
             Z`}
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />

        {/* Stripe 3 */}
        <path
          d={`M ${stripe3X1} 3 
             L ${stripe3X2} 3 
             L ${stripe3X3} 51 
             L ${stripe3X4} 51 
             Z`}
          stroke="#7d1622"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="group-hover:stroke-[#ff1a1a] group-hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.6)] transition-all duration-300"
        />
      </svg>
    </button>
  );
};

