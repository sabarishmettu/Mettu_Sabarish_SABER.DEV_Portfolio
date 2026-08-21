import React, { useState, useEffect, useRef } from 'react';
import { Search, Layers, Palette, Terminal, ShieldAlert, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understanding your goals and requirements.',
      icon: Search,
    },
    {
      number: '02',
      title: 'PLAN',
      description: 'Planning the structure, features and timeline.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'Designing wireframes and visual prototypes.',
      icon: Palette,
    },
    {
      number: '04',
      title: 'DEVELOP',
      description: 'Building clean, efficient and scalable code.',
      icon: Terminal,
    },
    {
      number: '05',
      title: 'TEST',
      description: 'Testing for performance, responsiveness and bugs.',
      icon: ShieldAlert,
    },
    {
      number: '06',
      title: 'DEPLOY',
      description: 'Deploying and delivering with confidence.',
      icon: Rocket,
    },
  ];

  // Coordinated State for Synced Particle, Line, and Node Glows
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [particleProgress, setParticleProgress] = useState<number>(0); // 0 (Node 0) to 1 (Node 5)
  const [particleOpacity, setParticleOpacity] = useState<number>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Total cycle configuration:
    // 5 segments (between 6 nodes).
    // Each segment travel time = 1400ms.
    // Node arrival dwell/highlight time = 400ms.
    // Segment cycle = 1800ms. Total 5 segments = 9000ms. Reset fade = 600ms. Total = 9600ms.
    const segmentTravelTime = 1350;
    const nodeDwellTime = 400;
    const segmentTotalTime = segmentTravelTime + nodeDwellTime; // 1750ms per node-to-node
    const totalTravelTime = segmentTotalTime * 5; // 8750ms to reach DEPLOY
    const deployDwellTime = 700; // time to stay on DEPLOY
    const resetTime = 550; // fade out & reset
    const totalCycle = totalTravelTime + deployDwellTime + resetTime; // 10000ms

    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = (time - startTimeRef.current) % totalCycle;

      if (elapsed < totalTravelTime + deployDwellTime) {
        setParticleOpacity(1);

        if (elapsed < totalTravelTime) {
          const segmentIndex = Math.min(Math.floor(elapsed / segmentTotalTime), 4);
          const timeInSegment = elapsed - segmentIndex * segmentTotalTime;

          if (timeInSegment < nodeDwellTime) {
            // Particle is resting/pulsing at node `segmentIndex`
            setParticleProgress(segmentIndex / 5);
            setActiveNodeIndex(segmentIndex);
          } else {
            // Particle is traveling along the line from `segmentIndex` to `segmentIndex + 1`
            const travelFraction = (timeInSegment - nodeDwellTime) / segmentTravelTime;
            const currentProgress = (segmentIndex + travelFraction) / 5;
            setParticleProgress(currentProgress);

            // Glow logic:
            // 1. As particle leaves current node, current node glow turns off immediately
            // 2. While in transit (0.05 to 0.65), only the line & particle glow
            // 3. Before reaching next node (at travelFraction >= 0.65), next node glow lights up in anticipation!
            if (travelFraction < 0.15) {
              setActiveNodeIndex(segmentIndex);
            } else if (travelFraction >= 0.65) {
              setActiveNodeIndex(segmentIndex + 1);
            } else {
              setActiveNodeIndex(-1); // Neither node glows; line & particle glow on the link
            }
          }
        } else {
          // Reached DEPLOY (Node 5)
          setParticleProgress(1);
          setActiveNodeIndex(5);
        }
      } else {
        // Resetting back to Node 0 (DISCOVER)
        const resetProgress = (elapsed - (totalTravelTime + deployDwellTime)) / resetTime;
        setParticleOpacity(Math.max(0, 1 - resetProgress * 2.5));
        if (resetProgress > 0.5) {
          setParticleProgress(0);
          setActiveNodeIndex(0);
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Compute exact horizontal coordinates:
  // Node 0 is at 8.333% (1/12th of width), Node 5 is at 91.666% (11/12th of width).
  // Total span = 83.333%.
  const totalTrackSpan = 83.333;
  const particleLeftPercent = 8.333 + particleProgress * totalTrackSpan;
  const currentSegmentIdx = Math.min(Math.floor(particleProgress * 5), 4);
  const segmentStartPercent = 8.333 + (currentSegmentIdx / 5) * totalTrackSpan;
  const segmentSpan = totalTrackSpan / 5; // 16.6666%
  
  // Laser beam packet length (traveling laser segment with glowing red tail and white tip)
  const beamLength = segmentSpan * 0.48;
  const headPos = particleLeftPercent;
  const tailPos = Math.max(segmentStartPercent, headPos - beamLength);
  const activeBeamWidth = Math.max(0, headPos - tailPos);
  
  // Relative percentage within the total track (0% to 100%)
  const beamLeftInTrack = ((tailPos - 8.333) / totalTrackSpan) * 100;
  const beamWidthInTrack = (activeBeamWidth / totalTrackSpan) * 100;

  return (
    <section id="process" className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 relative z-20">
      {/* Outer Cyber Frame Container with corner brackets and red cyber accents */}
      <div 
        id="process-hud-frame"
        className="relative bg-[#05060c]/70 backdrop-blur-xl border border-zinc-800/80 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.85)] cyber-hud-card"
      >
        {/* Corner Neon Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff1a1a]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff1a1a]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff1a1a]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff1a1a]" />

        {/* Top glowing red hairline */}
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#ff1a1a]/70 to-transparent" />

        {/* Eyebrow & Title */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[#ff1a1a] font-bold text-sm tracking-wider">—</span>
            <span className="text-[#ff1a1a] text-xs sm:text-[13px] font-chakra font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(255,26,26,0.8)]">
              HOW I WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-orbitron font-extrabold text-white tracking-wider uppercase">
            PROCESS
          </h2>
        </div>

        {/* Process Flow: Connected Nodes Pipeline */}
        <div className="relative w-full">
          {/* Base Horizontal Connecting Pipeline Track (Desktop) - Strictly at z-0 BEHIND the circles */}
          <div className="hidden lg:block absolute top-[44px] left-[8.333%] right-[8.333%] h-[2px] bg-zinc-800/90 pointer-events-none rounded-full z-0 overflow-hidden">
            {/* Ambient baseline glow */}
            <div className="w-full h-full bg-[#ff1a1a]/25" />

            {/* Active Synchronized Laser Line Segment traveling along the track */}
            <div 
              className="absolute top-0 h-full pointer-events-none z-0 transition-opacity duration-200"
              style={{
                left: `${beamLeftInTrack}%`,
                width: `${beamWidthInTrack}%`,
                opacity: particleOpacity,
              }}
            >
              {/* Laser line matching reference: Red glow gradient fading to sharp white leading edge */}
              <div className="w-full h-full bg-gradient-to-r from-transparent via-[#ff1a1a] to-white shadow-[0_0_12px_#ff1a1a,0_0_22px_#ff1a1a] flex items-center justify-end">
                <div className="w-4 h-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>
            </div>
          </div>

          {/* 6 Steps Grid / Row - z-10 on container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              // Node is highlighted if mouse hovered OR if triggered by the synchronized particle sequence
              const isGlowActive = hoveredIndex === idx || activeNodeIndex === idx;

              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  className="flex flex-col items-center text-center group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glowing Circular Cyber Node */}
                  <div className="relative mb-5 flex flex-col items-center">
                    {/* Concentric ambient glow - active on sync or hover */}
                    <div 
                      className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none z-0 ${
                        isGlowActive 
                          ? 'bg-[#ff1a1a]/50 blur-xl scale-125' 
                          : 'bg-[#ff1a1a]/15 blur-md group-hover:bg-[#ff1a1a]/40'
                      }`} 
                    />

                    {/* Outer circle with solid opaque background so line is 100% hidden behind it */}
                    <div 
                      className={`relative z-20 w-[88px] h-[88px] rounded-full border bg-[#0c0d16] flex items-center justify-center p-1.5 transition-all duration-300 ${
                        isGlowActive
                          ? 'border-[#ff1a1a] shadow-[0_0_35px_rgba(255,26,26,0.7),0_0_15px_#ff1a1a] scale-105'
                          : 'border-[#ff1a1a]/40 shadow-[0_0_15px_rgba(255,26,26,0.2)] group-hover:border-[#ff1a1a] group-hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] group-hover:scale-105'
                      }`}
                    >
                      {/* Inner solid circular chamber */}
                      <div 
                        className={`w-full h-full rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isGlowActive
                            ? 'border-[#ff1a1a] bg-[#1a080d] shadow-[inset_0_0_12px_rgba(255,26,26,0.5)]'
                            : 'border-[#ff1a1a]/30 bg-[#13070b]'
                        }`}
                      >
                        <Icon 
                          className={`w-7 h-7 transition-all duration-300 ${
                            isGlowActive
                              ? 'text-white drop-shadow-[0_0_14px_#ff1a1a] scale-110'
                              : 'text-[#ff1a1a] drop-shadow-[0_0_10px_#ff1a1a] group-hover:text-white group-hover:scale-110'
                          }`} 
                        />
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div 
                      className={`mt-[-14px] relative z-30 px-3 py-0.5 rounded-full border transition-all duration-300 ${
                        isGlowActive
                          ? 'bg-[#ff1a1a] border-white shadow-[0_0_16px_#ff1a1a] scale-105'
                          : 'bg-[#0a0507] border-[#ff1a1a] shadow-[0_0_10px_#ff1a1a] group-hover:bg-[#ff1a1a] group-hover:border-white'
                      }`}
                    >
                      <span 
                        className={`text-[11px] font-orbitron font-black tracking-widest transition-colors duration-300 ${
                          isGlowActive ? 'text-white' : 'text-[#ff1a1a] group-hover:text-white'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 
                    className={`text-sm sm:text-base font-orbitron font-extrabold tracking-wider uppercase mb-2 transition-all duration-300 ${
                      isGlowActive
                        ? 'text-[#ff1a1a] drop-shadow-[0_0_10px_rgba(255,26,26,0.9)] scale-105'
                        : 'text-white group-hover:text-[#ff1a1a]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-zinc-400 font-space font-normal leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

