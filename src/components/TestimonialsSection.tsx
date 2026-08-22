import React from 'react';
import { Star, Shield, Sparkles, Cpu, Radio, Code2, ShieldCheck, Layers, Activity, Globe, Compass, Zap } from 'lucide-react';
import { CyberOutlineBtn } from './CyberOutlineBtn.tsx';

interface TestimonialsSectionProps {
  onConnectClick?: () => void;
  onViewAllReviews?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onConnectClick,
  onViewAllReviews,
}) => {
  const reviews = [
    {
      id: 'alex',
      name: 'Alex Johnson',
      role: 'CEO, TechNova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Saber Dev delivered a website beyond expectations. Fast, responsive and visually stunning. Highly recommended!',
    },
    {
      id: 'sarah',
      name: 'Sarah Williams',
      role: 'Founder, BrightStart',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      text: 'Professional, reliable and easy to work with. The project was delivered on time and exactly as I envisioned.',
    },
    {
      id: 'michael',
      name: 'Michael Brown',
      role: 'CTO, InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Great communication and excellent code quality. Will definitely work together again on future projects.',
    },
  ];

  const clientLogos = [
    { name: 'TECHNOVA', icon: Shield },
    { name: 'BRIGHTSTART', icon: Sparkles },
    { name: 'INNOVATELAB', icon: Cpu },
    { name: 'CYBERMATRIX', icon: ShieldCheck },
    { name: 'NEXUS PROTOCOL', icon: Layers },
    { name: 'SOLIS HEALTH', icon: Activity },
    { name: 'HORIZON MEDIA', icon: Globe },
    { name: 'NORDIC LABS', icon: Compass },
    { name: 'QUANTUM LEAP', icon: Zap },
    { name: 'DIGITALWAVE', icon: Radio },
    { name: 'CODECRAFT', icon: Code2 },
  ];

  return (
    <section id="testimonials" className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20 overflow-visible">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[#ff1a1a] font-bold text-sm tracking-wider">—</span>
            <span className="text-[#ff1a1a] text-xs sm:text-[13px] font-chakra font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(255,26,26,0.8)]">
              WHAT CLIENTS SAY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-orbitron font-extrabold text-white tracking-wider uppercase">
            TESTIMONIALS
          </h2>
        </div>

        {/* View All Reviews Button */}
        <div className="flex items-center">
          <CyberOutlineBtn
            id="btn-view-all-reviews"
            label="VIEW ALL REVIEWS"
            onClick={onViewAllReviews}
          />
        </div>
      </div>

      {/* Testimonials 3-Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            id={`testimonial-card-${rev.id}`}
            className="relative bg-[#06070e]/85 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-[#ff1a1a]/60 hover:shadow-[0_0_35px_rgba(255,26,26,0.2)] transition-all duration-300 hover:-translate-y-1 cyber-hud-card"
          >
            {/* Top decorative elements */}
            <div>
              {/* Double Quote & 5 Red Stars */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl text-zinc-600 font-serif font-black select-none group-hover:text-[#ff1a1a] transition-colors leading-none">
                  “
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#ff1a1a] text-[#ff1a1a] drop-shadow-[0_0_6px_#ff1a1a]"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-zinc-300 font-space font-normal leading-relaxed mb-6">
                {rev.text}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-900">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#ff1a1a]/70 p-0.5 shadow-[0_0_10px_rgba(255,26,26,0.4)] bg-[#111422] flex items-center justify-center">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `<span class="text-xs font-chakra font-black text-[#ff1a1a]">${rev.name.split(' ').map(n => n[0]).join('')}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-orbitron font-bold text-white tracking-wide group-hover:text-[#ff1a1a] transition-colors">
                  {rev.name}
                </span>
                <span className="text-xs text-zinc-400 font-space">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Client Logos Infinite Continuous Marquee (Same as Skills Marquee) */}
      <div className="relative w-full py-6 sm:py-8 border-y border-zinc-800/60 bg-[#05060a]/50 mb-16 sm:mb-24 overflow-hidden flex select-none group">
        {/* Left & Right Gradient Fade Masks for seamless vanishing effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#030408] via-[#030408]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#030408] via-[#030408]/80 to-transparent z-10 pointer-events-none" />

        {/* Sibling Track 1 */}
        <div
          className="animate-marquee-track flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20 shrink-0"
          style={{ '--marquee-duration': '28s' } as React.CSSProperties}
        >
          {clientLogos.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={`client-t1-${client.name}-${index}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer shrink-0 group/item hover:scale-105"
              >
                <Icon className="w-5 h-5 text-zinc-500 group-hover/item:text-[#ff1a1a] transition-colors group-hover/item:drop-shadow-[0_0_8px_#ff1a1a]" />
                <span className="font-chakra font-bold text-sm sm:text-base tracking-widest uppercase whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Sibling Track 2 (Exact mirror clone for 0-gap seamless continuous scroll) */}
        <div
          aria-hidden="true"
          className="animate-marquee-track flex items-center gap-12 sm:gap-16 lg:gap-20 pr-12 sm:pr-16 lg:pr-20 shrink-0"
          style={{ '--marquee-duration': '28s' } as React.CSSProperties}
        >
          {clientLogos.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={`client-t2-${client.name}-${index}`}
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer shrink-0 group/item hover:scale-105"
              >
                <Icon className="w-5 h-5 text-zinc-500 group-hover/item:text-[#ff1a1a] transition-colors group-hover/item:drop-shadow-[0_0_8px_#ff1a1a]" />
                <span className="font-chakra font-bold text-sm sm:text-base tracking-widest uppercase whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
