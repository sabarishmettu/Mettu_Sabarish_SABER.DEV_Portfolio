import React from 'react';
import { Code2, Cpu, Gauge, Shield, Wrench, ArrowRight } from 'lucide-react';
import { CyberOutlineBtn } from './CyberOutlineBtn.tsx';
import { CyberServiceCardBg } from './CyberServiceCardBg.tsx';
import { CyberIconBox } from './CyberIconBox.tsx';

interface ServicesSectionProps {
  onExploreService?: (serviceName: string) => void;
  onViewAllServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onExploreService,
  onViewAllServices,
}) => {
  const services = [
    {
      id: 'web-dev',
      icon: Code2,
      title: 'WEB DEVELOPMENT',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    {
      id: 'ui-ux',
      icon: Cpu,
      title: 'UI/UX DESIGN',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences.',
    },
    {
      id: 'performance',
      icon: Gauge,
      title: 'PERFORMANCE OPTIMIZATION',
      description: 'Optimized websites for speed, SEO, and maximum performance.',
    },
    {
      id: 'security',
      icon: Shield,
      title: 'CYBERSECURITY',
      description: 'Vulnerability assessments, code hardening, and end-to-end data protection.',
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: 'MAINTENANCE & SUPPORT',
      description: 'Ongoing support, continuous updates, and system health monitoring.',
    },
  ];

  return (
    <section id="services" className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20">
      {/* Header Row: Eyebrow + Title + View All Services Button */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[#ff1a1a] font-bold text-sm tracking-wider">—</span>
            <span className="text-[#ff1a1a] text-xs sm:text-[13px] font-chakra font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(255,26,26,0.8)]">
              WHAT I OFFER
            </span>
          </div>
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-orbitron font-extrabold text-white tracking-wider uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            SERVICES
          </h2>
        </div>

        {/* Top Right "VIEW ALL SERVICES" Button matching VIEW PROJECTS cyber chamfered outline */}
        <div className="flex items-center">
          <CyberOutlineBtn
            id="btn-view-all-services"
            label="VIEW ALL SERVICES"
            onClick={onViewAllServices}
          />
        </div>
      </div>

      {/* Cyber Service Cards Grid with Red Tint Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-5 2xl:gap-6">
        {services.map((service) => {
           return (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="relative bg-gradient-to-b from-[#ff1a1a]/[0.12] via-[#24050a]/60 to-[#0c0204]/80 backdrop-blur-xl rounded-xl border border-[#ff1a1a]/30 hover:border-[#ff1a1a] pt-10 sm:pt-11 pb-7 sm:pb-8 px-5 sm:px-6 flex flex-col items-center text-center justify-between min-h-[430px] sm:min-h-[455px] group transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_0_24px_rgba(255,26,26,0.12)] hover:shadow-[0_0_40px_rgba(255,26,26,0.45),inset_0_0_30px_rgba(255,26,26,0.25)] hover:-translate-y-1.5 cursor-pointer select-none overflow-hidden"
              onClick={() => onExploreService && onExploreService(service.title)}
            >
              {/* Glass Top Specular Light Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-20" />
              
              {/* Red ambient glass glow layer */}
              <div className="absolute inset-0 bg-radial from-[#ff1a1a]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Detailed Sci-Fi Circuit HUD Frame & Background with Central Optical Flare */}
              <CyberServiceCardBg />

              {/* Glowing Red Icon Box with Segmented Cyber Squircle & Under-Light Pedestal Light */}
              <div className="relative mt-2 mb-1 z-10 flex items-center justify-center">
                <CyberIconBox icon={service.icon} />
              </div>

              {/* Card Title (Positioned cleanly below the glowing pedestal red light) */}
              <div className="relative z-10 mt-5 sm:mt-6 mb-3 flex items-center justify-center min-h-[44px]">
                <h3 className="text-[14px] sm:text-[15px] font-orbitron font-extrabold text-white tracking-wider uppercase group-hover:text-white transition-colors drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-[12px] sm:text-[12.5px] text-zinc-300 font-space font-normal leading-relaxed mb-6 px-1 z-10 max-w-[240px] opacity-85 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>

              {/* Explore Link with red arrow */}
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-chakra font-bold tracking-[0.25em] text-[#ff1a1a] uppercase group-hover:drop-shadow-[0_0_10px_#ff1a1a] transition-all mt-auto z-10 pb-1">
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ff1a1a] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

