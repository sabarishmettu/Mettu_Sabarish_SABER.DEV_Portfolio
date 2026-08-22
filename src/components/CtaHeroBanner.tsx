import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import backPoseBg from '../back_pose_background.png';
import backPosePerson from '../back_pose.png';

interface CtaHeroBannerProps {
  onConnectClick?: () => void;
}

export const CtaHeroBanner: React.FC<CtaHeroBannerProps> = ({ onConnectClick }) => {
  const [bgSrc, setBgSrc] = useState(backPoseBg || '/back_pose_background.png');
  const [personSrc, setPersonSrc] = useState(backPosePerson || '/back_pose.png');

  return (
    <div className="relative w-full pt-8 sm:pt-12 pb-6 overflow-visible">
      {/* The boxed frame with background image neatly clipped to rounded border */}
      <div
        id="cta-hero-banner"
        className="relative w-full rounded-2xl border border-[#ff1a1a]/80 shadow-[0_0_50px_rgba(255,26,26,0.35)] min-h-[380px] sm:min-h-[290px] md:min-h-[290px] lg:min-h-[300px] overflow-hidden flex flex-col sm:flex-row items-center justify-between"
      >
        {/* Background image & gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-[position:85%_top] sm:bg-[position:61%_center] md:bg-[position:62.5%_center] lg:bg-[position:62.5%_center] bg-no-repeat opacity-60 sm:opacity-100"
          style={{ backgroundImage: `url(${bgSrc}), url('/back_pose_background.png')` }}
        />
        {/* Dark Overlay for complete text clarity across all mobile viewports */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/50 sm:to-transparent pointer-events-none" />

        {/* Corner Neon Accents */}
        <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#ff1a1a] pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#ff1a1a] pointer-events-none" />
        <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#ff1a1a] pointer-events-none" />
        <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#ff1a1a] pointer-events-none" />

        {/* Inner Content Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-6 items-center px-5 sm:px-8 lg:px-14 py-8 sm:py-10 relative z-30">
          {/* Left Column: Heading & Text & CTA Button */}
          <div className="sm:col-span-7 md:col-span-7 lg:col-span-7 flex flex-col items-start space-y-3 sm:space-y-4 max-w-sm sm:max-w-md lg:max-w-xl">
            <div className="space-y-0.5 sm:space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-orbitron font-extrabold text-white tracking-wider uppercase leading-tight">
                LET'S BUILD
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-orbitron font-extrabold text-[#ff1a1a] tracking-wider uppercase leading-tight drop-shadow-[0_0_20px_rgba(255,26,26,0.95)]">
                SOMETHING AMAZING
              </h2>
            </div>

            <p className="text-xs sm:text-sm lg:text-[14px] text-zinc-200 sm:text-zinc-300 font-space font-normal leading-relaxed max-w-xs sm:max-w-md">
              Have a project in mind? Let's collaborate and turn your ideas into powerful, secure, and high-performance digital experiences.
            </p>

            <div className="pt-2 sm:pt-3">
              <button
                id="banner-connect-btn"
                onClick={onConnectClick}
                className="flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff1a1a] hover:bg-[#e00818] text-[#050507] font-chakra font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,26,26,0.75),0_0_50px_rgba(255,26,26,0.4)] hover:shadow-[0_0_35px_rgba(255,26,26,0.95),0_0_70px_rgba(255,26,26,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer whitespace-nowrap"
              >
                <span className="font-black text-[#050507] tracking-wider">LET'S CONNECT</span>
                <ArrowRight className="w-4 h-4 text-[#050507] stroke-[3.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column Spacer for tablet & desktop */}
          <div className="hidden sm:block sm:col-span-5 md:col-span-5 lg:col-span-5 relative h-full min-h-[160px]" />
        </div>
      </div>

      {/* Character Image (Back Pose) with Cat Ears protruding above the top border */}
      <div className="absolute right-[-10px] sm:right-auto sm:left-[61%] md:left-[62.5%] sm:-translate-x-1/2 bottom-6 z-10 sm:z-20 pointer-events-none flex justify-center items-end opacity-40 sm:opacity-100">
        <img
          src={personSrc}
          alt="Cyberpunk Dev Back Pose"
          loading="eager"
          decoding="sync"
          onError={() => setPersonSrc('/back_pose.png')}
          className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[385px] xl:h-[410px] w-auto max-w-none object-contain select-none filter drop-shadow-[0_0_25px_rgba(255,26,26,0.6)]"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
