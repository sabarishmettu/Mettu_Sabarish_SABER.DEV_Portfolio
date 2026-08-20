import React from 'react';
import { Star, ArrowRight, Shield, Sparkles, Cpu, Radio, Code2 } from 'lucide-react';
import { CyberOutlineBtn } from './CyberOutlineBtn.tsx';
import backPoseBg from '../back_pose_background.png';
import backPosePerson from '../back_pose.png';

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
    { name: 'TechNova', icon: Shield },
    { name: 'BrightStart', icon: Sparkles },
    { name: 'InnovateLab', icon: Cpu },
    { name: 'DigitalWave', icon: Radio },
    { name: 'CodeCraft', icon: Code2 },
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
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#ff1a1a]/70 p-0.5 shadow-[0_0_10px_rgba(255,26,26,0.4)]">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
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

      {/* Client Logos Bar */}
      <div className="w-full py-6 sm:py-8 border-y border-zinc-800/60 bg-[#05060a]/40 mb-16 sm:mb-24">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 opacity-75 hover:opacity-100 transition-opacity">
          {clientLogos.map((client) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
              >
                <Icon className="w-5 h-5 text-zinc-500 group-hover:text-[#ff1a1a] transition-colors group-hover:drop-shadow-[0_0_8px_#ff1a1a]" />
                <span className="font-chakra font-bold text-sm sm:text-base tracking-wider uppercase">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Large Cyberpunk CTA Banner: "LET'S BUILD SOMETHING AMAZING" with Backlit Portal Cyborg & protruding ears */}
      <div className="relative w-full pt-10 sm:pt-14 pb-2 overflow-visible">
        {/* The boxed frame with background image neatly clipped to rounded border */}
        <div
          id="cta-hero-banner"
          className="relative w-full rounded-2xl border border-[#ff1a1a]/80 shadow-[0_0_50px_rgba(255,26,26,0.35)] min-h-[380px] sm:min-h-[290px] md:min-h-[290px] lg:min-h-[300px] overflow-hidden flex flex-col sm:flex-row items-center justify-between"
        >
          {/* Background image & gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-[position:85%_top] sm:bg-[position:61%_center] md:bg-[position:62.5%_center] lg:bg-[position:62.5%_center] bg-no-repeat opacity-60 sm:opacity-100"
            style={{ backgroundImage: `url(${backPoseBg})` }}
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
                Have a project in mind? Let's collaborate and turn your ideas into powerful digital experiences.
              </p>

              <div className="pt-2 sm:pt-3">
                <button
                  id="banner-connect-btn"
                  onClick={onConnectClick}
                  className="flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff1a1a] hover:bg-[#e00818] text-[#050507] font-chakra font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,26,26,0.85)] hover:shadow-[0_0_40px_rgba(255,26,26,1)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowRight className="w-4 h-4 text-[#050507] stroke-[3.5] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column Spacer for tablet & desktop */}
            <div className="hidden sm:block sm:col-span-5 md:col-span-5 lg:col-span-5 relative h-full min-h-[160px]" />
          </div>
        </div>

        {/* Character Image (Back Pose) with Cat Ears protruding above the top border */}
        {/* On mobile (<sm screens): placed toward the right background at reduced opacity and scale so text is 100% unobstructed */}
        {/* On tablet/desktop (sm+ screens): positioned cleanly over the center circle as before with ears popping out */}
        <div className="absolute right-[-10px] sm:right-auto sm:left-[61%] md:left-[62.5%] sm:-translate-x-1/2 bottom-2 z-10 sm:z-20 pointer-events-none flex justify-center items-end opacity-40 sm:opacity-100">
          <img
            src={backPosePerson}
            alt="Cyberpunk Dev Back Pose"
            className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[385px] xl:h-[410px] w-auto max-w-none object-contain select-none filter drop-shadow-[0_0_25px_rgba(255,26,26,0.6)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
