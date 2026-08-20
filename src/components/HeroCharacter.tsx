import React, { useState } from 'react';
import heroArtwork from '../main_image_2.png';

export const HeroCharacter: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      id="hero-character-container"
      className="absolute left-1/2 bottom-6 sm:bottom-8 mb-0 -translate-x-1/2 pointer-events-none z-10 select-none flex flex-col items-center justify-end w-[440px] sm:w-[540px] md:w-[620px] lg:w-[720px] xl:w-[780px] 2xl:w-[840px] h-[82vh] lg:h-[88vh] overflow-visible"
    >
      {/* Cyber character artwork - in front of WEB DEVELOPER, bottom touching bottom of Stats HUD */}
      {!hasError && (
        <div className="relative w-full h-full flex items-end justify-center">
          <img
            src={heroArtwork}
            alt="Cyberpunk Developer Cyborg"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter brightness-105 contrast-105 transition-all duration-500 opacity-100"
          />
        </div>
      )}
    </div>
  );
};

