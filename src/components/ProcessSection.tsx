import React from 'react';
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
          {/* Horizontal Connecting Red Neon Pipeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#ff1a1a]/40 via-[#ff1a1a] to-[#ff1a1a]/40 shadow-[0_0_12px_#ff1a1a]" />

          {/* 6 Steps Grid / Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Glowing Circular Cyber Node */}
                  <div className="relative mb-5 flex flex-col items-center">
                    {/* Concentric ambient glow */}
                    <div className="absolute inset-0 rounded-full bg-[#ff1a1a]/20 blur-lg group-hover:bg-[#ff1a1a]/40 transition-all duration-300" />

                    {/* Outer circle with dual red ring */}
                    <div className="relative w-[88px] h-[88px] rounded-full border border-[#ff1a1a]/50 bg-[#0c0d16] flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(255,26,26,0.25)] group-hover:border-[#ff1a1a] group-hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] group-hover:scale-105 transition-all duration-300">
                      {/* Inner dashed ring */}
                      <div className="w-full h-full rounded-full border border-[#ff1a1a]/30 flex items-center justify-center bg-[#13070b]">
                        <Icon className="w-7 h-7 text-[#ff1a1a] drop-shadow-[0_0_10px_#ff1a1a]" />
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="mt-[-14px] relative z-20 px-3 py-0.5 rounded-full bg-[#0a0507] border border-[#ff1a1a] shadow-[0_0_10px_#ff1a1a]">
                      <span className="text-[11px] font-orbitron font-black text-[#ff1a1a] tracking-widest">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-sm sm:text-base font-orbitron font-extrabold text-white tracking-wider uppercase mb-2 group-hover:text-[#ff1a1a] transition-colors">
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
