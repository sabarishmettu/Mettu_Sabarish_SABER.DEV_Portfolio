import React, { useState } from 'react';
import { X, Sparkles, Star, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ReviewsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  tag: string;
  date: string;
  text: string;
  metrics: string;
}

const allReviews: ReviewItem[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'CEO',
    company: 'TechNova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Web Development',
    date: 'Verified Client',
    text: 'Saber Dev delivered a website beyond expectations. Fast, responsive, and visually stunning. Truly transformed our brand presence with top-notch execution.',
    metrics: '100% On-Time • 5.0 ★'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Founder',
    company: 'BrightStart',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'UI/UX Redesign',
    date: 'Verified Client',
    text: 'Professional, reliable and easy to work with. The project was delivered on time and exactly as I envisioned. The micro-interactions and dark theme are exquisite.',
    metrics: '+45% Retention • 5.0 ★'
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'CTO',
    company: 'InnovateLab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Full-Stack Architecture',
    date: 'Verified Client',
    text: 'Great communication and excellent code quality. Zero memory leaks, clean modular TypeScript, and blazing-fast load times. Will definitely work together on future sprints.',
    metrics: '99.9% Uptime • 5.0 ★'
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'CyberMatrix',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Cybersecurity & Auth',
    date: 'Verified Client',
    text: 'The cybersecurity hardening and biometric authentication overhaul made our fintech portal bank-grade secure while keeping global latency under 150ms.',
    metrics: 'A+ Security Audit • 5.0 ★'
  },
  {
    id: '5',
    name: 'David Chen',
    role: 'Lead Architect',
    company: 'Nexus Protocol',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Real-Time Systems',
    date: 'Verified Client',
    text: 'Remarkable attention to detail on our real-time WebSockets analytics dashboard. Handled heavy telemetry throughput effortlessly with zero dropped frames.',
    metrics: '60 FPS Steady • 5.0 ★'
  },
  {
    id: '6',
    name: 'Amara Okafor',
    role: 'Co-Founder',
    company: 'Solis Health',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Performance Optimization',
    date: 'Verified Client',
    text: 'Transformed our sluggish legacy platform into a slick, modern application with 100/100 Lighthouse performance scores and instant navigation.',
    metrics: '3.4x Faster TTI • 5.0 ★'
  },
  {
    id: '7',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Horizon Media',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Interactive Frontend',
    date: 'Verified Client',
    text: 'An absolute wizard with responsive interfaces, custom animations, and accessible frontend engineering. Delivered ahead of schedule with zero friction.',
    metrics: 'Delivered Early • 5.0 ★'
  },
  {
    id: '8',
    name: 'Sophia Lindqvist',
    role: 'Head of Design',
    company: 'Nordic Labs',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Creative Direction',
    date: 'Verified Client',
    text: 'Bridged the gap between futuristic sci-fi aesthetics and rock-solid usability flawlessly. Our user engagement spiked by 48% immediately post-launch.',
    metrics: '+48% Engagement • 5.0 ★'
  },
  {
    id: '9',
    name: 'Liam Gallagher',
    role: 'Engineering Lead',
    company: 'Quantum Leap',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    tag: 'Cloud & Infrastructure',
    date: 'Verified Client',
    text: 'Uncompromising code quality, impeccable documentation, and delivered with surgical precision. One of the best developers we have ever contracted.',
    metrics: 'Flawless Deploy • 5.0 ★'
  }
];

export const ReviewsDrawer: React.FC<ReviewsDrawerProps> = ({ isOpen, onClose }) => {
  const [visibleCount, setVisibleCount] = useState<number>(7);

  if (!isOpen) return null;

  const displayedReviews = allReviews.slice(0, visibleCount);
  const hasMore = visibleCount < allReviews.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, allReviews.length));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#090b12] border border-[#ff1a1a]/50 rounded-2xl p-5 sm:p-8 shadow-[0_0_60px_rgba(255,26,26,0.35)]"
        id="reviews-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors z-20 cursor-pointer"
          aria-label="Close Reviews Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 sm:mb-8 pr-8">
          <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra text-xs tracking-widest uppercase font-bold mb-1.5">
            <Sparkles className="w-3.5 h-3.5 drop-shadow-[0_0_6px_#ff1a1a]" />
            <span>&lt;CLIENT_INTELLIGENCE // VERIFIED_FEEDBACK&gt;</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white tracking-wider">
              CLIENT TESTIMONIALS
            </h3>
            <span className="text-xs sm:text-sm font-chakra font-bold text-[#ff1a1a] bg-[#ff1a1a]/10 border border-[#ff1a1a]/30 px-3 py-1 rounded-full self-start sm:self-auto">
              SHOWING {displayedReviews.length} OF {allReviews.length} REVIEWS
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-space mt-1.5 leading-relaxed">
            Verified feedback from founders, executives, and engineering leads across high-growth startups and tech enterprises.
          </p>
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-4">
          {displayedReviews.map((rev) => (
            <div 
              key={rev.id}
              className="p-5 sm:p-6 rounded-xl bg-[#111422] border border-zinc-800 hover:border-[#ff1a1a]/60 hover:shadow-[0_0_25px_rgba(255,26,26,0.15)] transition-all duration-300 group"
            >
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                {/* Author Info */}
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="w-11 h-11 rounded-full object-cover border border-[#ff1a1a]/40 group-hover:border-[#ff1a1a] transition-colors"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#ff1a1a] flex items-center justify-center text-black">
                      <ShieldCheck className="w-2.5 h-2.5 text-black stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors">
                        {rev.name}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-chakra tracking-wide">
                      {rev.role}, <span className="text-zinc-300 font-semibold">{rev.company}</span>
                    </p>
                  </div>
                </div>

                {/* Stars & Tag */}
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  <span className="text-[11px] font-chakra uppercase px-2.5 py-0.5 rounded-full bg-[#ff1a1a]/15 text-[#ff1a1a] font-bold border border-[#ff1a1a]/30">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-0.5 bg-black/40 px-2 py-0.5 rounded border border-zinc-800">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ff1a1a] text-[#ff1a1a]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Body */}
              <p className="text-xs sm:text-sm text-zinc-300 font-space leading-relaxed mt-2 pl-0 sm:pl-1">
                "{rev.text}"
              </p>

              {/* Footer inside Card */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-chakra">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {rev.date}
                </span>
                <span className="font-bold text-zinc-300">
                  {rev.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-6 pt-4 flex flex-col items-center justify-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#ff1a1a]/15 hover:bg-[#ff1a1a] text-[#ff1a1a] hover:text-black font-chakra font-black text-xs sm:text-sm tracking-widest uppercase border border-[#ff1a1a]/50 hover:border-[#ff1a1a] shadow-[0_0_20px_rgba(255,26,26,0.25)] hover:shadow-[0_0_35px_rgba(255,26,26,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>LOAD MORE REVIEWS (+2)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-chakra font-bold text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-5 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#ff1a1a]" />
              <span>ALL {allReviews.length} REVIEWS LOADED</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
