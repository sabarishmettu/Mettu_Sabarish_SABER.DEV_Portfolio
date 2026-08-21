import React, { useEffect, useRef, useState } from 'react';

// Preload list of key image assets
import mainHeroImg from '../main_image_2.png';
import backPoseImg from '../back_pose.png';
import backPoseBgImg from '../back_pose_background.png';
import pickImg from '../pick.png';

interface LoadingScreenProps {
  onLoaded: () => void;
}

const MATRIX_CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]*#%$&+=~^:;01';

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING MATRIX CORE...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  // 1. Matrix Stream Left -> Right Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const fontSize = 16;
    const rows = Math.floor(height / (fontSize * 1.4));
    
    // Each row represents a horizontal stream traveling from left to right
    const streams: Array<{
      x: number;
      speed: number;
      length: number;
      chars: string[];
      headColor: string;
      y: number;
    }> = [];

    for (let i = 0; i < rows; i++) {
      const length = Math.floor(Math.random() * 20) + 12;
      const chars: string[] = [];
      for (let j = 0; j < length; j++) {
        chars.push(MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]);
      }
      streams.push({
        x: Math.random() * -width, // start at various offsets off-screen left
        speed: Math.random() * 4 + 3.5, // speed moving to the right
        length,
        chars,
        headColor: '#ffffff',
        y: i * (fontSize * 1.4) + fontSize,
      });
    }

    const render = () => {
      // Create trailing motion blur with dark background
      ctx.fillStyle = 'rgba(5, 5, 7, 0.22)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px "Chakra Petch", "Space Grotesk", monospace`;

      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];

        // Draw each character in the stream from tail to head
        for (let j = 0; j < stream.length; j++) {
          const charX = stream.x - (stream.length - 1 - j) * (fontSize * 1.1);
          
          // Only draw if within visible canvas bounds
          if (charX > -50 && charX < width + 50) {
            // Randomly mutate character periodically
            if (Math.random() < 0.04) {
              stream.chars[j] = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
            }

            const isHead = j === stream.length - 1;
            const isNearHead = j >= stream.length - 3;

            if (isHead) {
              // Glowing white/bright red laser head
              ctx.fillStyle = '#ffffff';
              ctx.shadowColor = '#ff1a1a';
              ctx.shadowBlur = 12;
            } else if (isNearHead) {
              // Bright neon red
              ctx.fillStyle = '#ff2b2b';
              ctx.shadowColor = '#ff1a1a';
              ctx.shadowBlur = 6;
            } else {
              // Dimmer trail towards dark red/ruby
              const alpha = Math.max(0.12, (j / stream.length) * 0.7);
              ctx.fillStyle = `rgba(255, 26, 26, ${alpha})`;
              ctx.shadowBlur = 0;
            }

            ctx.fillText(stream.chars[j], charX, stream.y);
          }
        }

        // Move stream horizontally to the right
        stream.x += stream.speed;

        // Reset to left when the whole stream passes off the right edge
        if (stream.x - stream.length * (fontSize * 1.1) > width) {
          stream.x = Math.random() * -150 - 50;
          stream.speed = Math.random() * 4 + 3.5;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 2. Real Asset & DOM Preloader with genuine progress tracking
  useEffect(() => {
    let isMounted = true;
    let animationFrameId: number;
    let targetProgress = 0;
    let displayedProgress = 0;

    // List of all critical image assets to decode and prepare in GPU memory
    const imageSources = [
      mainHeroImg,
      backPoseImg,
      backPoseBgImg,
      pickImg,
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    ];

    const totalUnits = imageSources.length + 2; // +1 for fonts, +1 for DOM ready
    let loadedUnits = 0;

    const incrementUnit = (log: string) => {
      if (!isMounted) return;
      loadedUnits++;
      const pct = Math.min(Math.round((loadedUnits / totalUnits) * 96), 96);
      targetProgress = Math.max(targetProgress, pct);
      setStatusText(log);
    };

    // Smooth counter animation interpolating to real loaded progress
    const updateProgressLoop = () => {
      if (!isMounted) return;
      if (displayedProgress < targetProgress) {
        displayedProgress += Math.max(1, Math.ceil((targetProgress - displayedProgress) * 0.15));
        if (displayedProgress > targetProgress) displayedProgress = targetProgress;
        setProgress(displayedProgress);
      }
      animationFrameId = requestAnimationFrame(updateProgressLoop);
    };
    animationFrameId = requestAnimationFrame(updateProgressLoop);

    // Initial starting pulse
    targetProgress = 10;
    setStatusText('INITIALIZING MATRIX CORE...');

    // 1. Font Ready Check
    const checkFonts = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch {
        // Continue safely
      }
      incrementUnit('FONTS & STYLESHEETS COMPILED');
    };

    // 2. Real DOM Document Ready Check
    const checkDom = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        const onDomLoad = () => {
          window.removeEventListener('load', onDomLoad);
          resolve();
        };
        window.addEventListener('load', onDomLoad);
      }
    }).then(() => {
      incrementUnit('DOM STRUCTURE PARSED');
    });

    // 3. Preload & Decode each image directly to GPU / Browser Cache
    const imagePromises = imageSources.map((src, idx) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;

        const onFinish = async () => {
          try {
            // decode() decompresses image into memory before rendering
            if (typeof img.decode === 'function') {
              await img.decode().catch(() => {});
            }
          } catch {
            // Ignore decode failures
          }
          incrementUnit(`DECODING ASSET [${idx + 1}/${imageSources.length}]`);
          resolve();
        };

        if (img.complete && img.naturalWidth !== 0) {
          onFinish();
        } else {
          img.onload = () => onFinish();
          img.onerror = () => {
            incrementUnit(`PROCESSED ASSET [${idx + 1}/${imageSources.length}]`);
            resolve();
          };
        }
      });
    });

    // When all actual assets + fonts + DOM tree are completely decoded:
    Promise.all([checkFonts(), checkDom, ...imagePromises]).then(() => {
      // Ensure smooth ramp to 100%
      targetProgress = 100;
      
      const checkCompletion = () => {
        if (!isMounted) return;
        if (displayedProgress >= 99) {
          setProgress(100);
          setStatusText('SYSTEM ONLINE // ALL ASSETS READY');

          // Clean transition out: Page behind is 100% decoded with zero layout shift
          setTimeout(() => {
            if (!isMounted) return;
            setIsFadingOut(true);
            setTimeout(() => {
              if (!isMounted) return;
              onLoaded();
            }, 550);
          }, 300);
        } else {
          setTimeout(checkCompletion, 40);
        }
      };

      checkCompletion();
    });

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [onLoaded]);

  return (
    <div
      id="cyber-loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] overflow-hidden select-none transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Matrix Canvas - Left to Right Stream */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
      />

      {/* Cyber Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,26,26,0.15)_0%,rgba(5,5,7,0.75)_65%,rgba(5,5,7,0.95)_100%)] pointer-events-none z-10" />

      {/* Center Cyber HUD Container */}
      <div className="relative z-20 flex flex-col items-center justify-center p-8 sm:p-12 max-w-lg w-full">
        {/* Ambient Infinite Glow Behind Center */}
        <div className="absolute w-56 h-32 bg-[#ff1a1a]/25 rounded-full blur-[50px] pointer-events-none animate-pulse" />

        {/* Mathematically Accurate Infinite (∞) Lemniscate Loading Animation */}
        <div className="relative w-44 sm:w-56 h-24 sm:h-32 flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 240 120"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glowing Neon Red Filters */}
              <filter id="inf-glow-strong" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur1" />
                <feGaussianBlur stdDeviation="2" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="inf-tracer-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#ff1a1a" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Perfect Lemniscate Geometric Infinite Path: Center is (120, 60), Left loop center ~ (60, 60), Right loop center ~ (180, 60) */}
            {/* Base Background Track */}
            <path
              d="M 120,60 C 145,28 175,22 195,35 C 220,52 220,68 195,85 C 175,98 145,92 120,60 C 95,28 65,22 45,35 C 20,52 20,68 45,85 C 65,98 95,92 120,60 Z"
              stroke="rgba(255, 26, 26, 0.16)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Faint Core Guide Track */}
            <path
              d="M 120,60 C 145,28 175,22 195,35 C 220,52 220,68 195,85 C 175,98 145,92 120,60 C 95,28 65,22 45,35 C 20,52 20,68 45,85 C 65,98 95,92 120,60 Z"
              stroke="#ff1a1a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              filter="url(#inf-glow-strong)"
            />

            {/* Glowing Neon Red Tracer Beam 1 */}
            <path
              d="M 120,60 C 145,28 175,22 195,35 C 220,52 220,68 195,85 C 175,98 145,92 120,60 C 95,28 65,22 45,35 C 20,52 20,68 45,85 C 65,98 95,92 120,60 Z"
              stroke="url(#inf-tracer-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="110 390"
              filter="url(#inf-glow-strong)"
              className="animate-infinity-loop"
            />

            {/* White-Hot Leading Particle 2 */}
            <path
              d="M 120,60 C 145,28 175,22 195,35 C 220,52 220,68 195,85 C 175,98 145,92 120,60 C 95,28 65,22 45,35 C 20,52 20,68 45,85 C 65,98 95,92 120,60 Z"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="25 475"
              filter="url(#inf-glow-strong)"
              className="animate-infinity-loop"
            />
          </svg>
        </div>

        {/* Loading Percentage with Glitch Accents */}
        <div className="flex items-baseline gap-2 mb-3 font-chakra">
          <span className="text-4xl sm:text-5xl font-black tracking-wider text-white drop-shadow-[0_0_15px_rgba(255,26,26,0.8)]">
            {progress}
          </span>
          <span className="text-lg sm:text-xl font-bold text-[#ff1a1a]">%</span>
        </div>

        {/* Cyber Progress Bar */}
        <div className="w-56 sm:w-64 h-1.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden mb-4 relative shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          <div
            className="h-full bg-gradient-to-r from-[#ff1a1a]/60 via-[#ff1a1a] to-white rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_#ff1a1a]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text / Log Terminal */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-chakra font-bold tracking-[0.2em] text-zinc-400 uppercase">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff1a1a] animate-ping" />
          <span className="text-zinc-300">{statusText}</span>
        </div>

        {/* Japanese Subtext Branding */}
        <div className="mt-4 text-[9px] font-chakra tracking-[0.3em] text-zinc-600 uppercase">
          サイバー・マトリックス // SYSTEM V3.0
        </div>
      </div>

      {/* Embedded SVG Infinite Animation Styles */}
      <style>{`
        @keyframes infinityDash {
          0% {
            stroke-dashoffset: 500;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-infinity-loop {
          animation: infinityDash 2.4s linear infinite;
        }
      `}</style>
    </div>
  );
};
