import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import pickArtwork from '../pick.png';

interface FooterSectionProps {
  onNavClick?: (target: string) => void;
  onConnectClick?: () => void;
  onSocialClick?: (platform: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavClick,
  onConnectClick,
  onSocialClick,
}) => {
  const quickLinks = ['Home', 'About', 'Projects', 'Services', 'Skills', 'Contact'];

  return (
    <footer id="contact" className="w-full bg-[#030408] border-t border-zinc-900 text-zinc-400 relative z-20 pt-10 sm:pt-16 pb-8">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Callout Banner Container (overflow-visible to allow ears and hair to protrude) */}
        <div className="relative w-full pt-10 sm:pt-14 pb-2 mb-16 sm:mb-20 overflow-visible">
          {/* Main Boxed Frame */}
          <div
            id="footer-callout-box"
            className="relative w-full bg-black border border-[#4a0812] px-6 sm:px-10 lg:px-12 py-7 sm:py-9 lg:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 shadow-[0_10px_35px_rgba(0,0,0,0.95)] min-h-[140px] sm:min-h-[160px] overflow-hidden group"
          >
            {/* 4 Precise Glowing Neon Red L-Corner Brackets */}
            <div className="absolute top-0 left-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-l-2 border-[#ff1a1a] drop-shadow-[0_0_6px_#ff1a1a] pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-r-2 border-[#ff1a1a] drop-shadow-[0_0_6px_#ff1a1a] pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-l-2 border-[#ff1a1a] drop-shadow-[0_0_6px_#ff1a1a] pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-r-2 border-[#ff1a1a] drop-shadow-[0_0_6px_#ff1a1a] pointer-events-none z-20" />

            {/* Left Text Content */}
            <div className="flex flex-col items-start space-y-1.5 max-w-xl lg:max-w-2xl relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[30px] font-orbitron font-black text-white tracking-wide uppercase leading-tight">
                LET'S BUILD SOMETHING AMAZING<br />
                <span>TOGETHER</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-space font-normal">
                Have a project in mind? Let's turn your ideas into reality.
              </p>
            </div>

            {/* Center-Right Pill Connect Button */}
            <div className="relative z-10 flex items-center md:mr-[280px] lg:mr-[340px] xl:mr-[390px]">
              <button
                id="footer-connect-btn"
                onClick={onConnectClick}
                className="flex items-center gap-2.5 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#ff1a1a] hover:bg-[#ff3333] text-black font-chakra font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_#ff1a1a,0_0_50px_rgba(255,26,26,0.85)] hover:shadow-[0_0_35px_#ff1a1a,0_0_70px_#ff1a1a] transition-all duration-300 active:scale-95 group/btn cursor-pointer whitespace-nowrap"
              >
                <span>LET'S CONNECT</span>
                <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Cyberpunk Character with Ears and Hair Protruding Above Top Border */}
          <div className="absolute right-0 sm:right-2 lg:right-4 bottom-2 z-30 pointer-events-none flex items-end justify-end select-none">
            <img
              src={pickArtwork}
              alt="Cyberpunk Character"
              className="h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] w-auto max-w-none object-contain object-bottom filter drop-shadow-[0_0_25px_rgba(255,26,26,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* 4-Columns Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-zinc-900">
          {/* Col 1: Brand & Slogan (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3" id="footer-logo">
              <div className="flex items-center text-[#ff1a1a] font-bold text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(255,26,26,0.85)] font-chakra">
                <span className="text-[#ff1a1a] font-black text-2xl">&lt;/&gt;</span>
              </div>
              <span className="text-white font-orbitron font-extrabold text-xl tracking-wider uppercase">
                SABER DEV
              </span>
              <span className="text-zinc-700 font-light text-xl mx-1 select-none">|</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-space leading-relaxed max-w-sm">
              Building the digital future with code, creativity, and cutting-edge technology.
            </p>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-3.5">
            <h4 className="text-sm font-orbitron font-extrabold text-white tracking-widest uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-space">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavClick && onNavClick(link.toUpperCase())}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
                  >
                    <span className="text-[#ff1a1a] text-xs font-black">▸</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-3.5">
            <h4 className="text-sm font-orbitron font-extrabold text-white tracking-widest uppercase">
              CONTACT INFO
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-space">
              <li className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#ff1a1a] text-xs font-black">▸</span>
                <span className="text-zinc-500">Email:</span>
                <a href="mailto:hello@saberdev.com" className="text-zinc-300 hover:text-[#ff1a1a] transition-colors">
                  hello@saberdev.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#ff1a1a] text-xs font-black">▸</span>
                <span className="text-zinc-500">Phone:</span>
                <span className="text-zinc-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#ff1a1a] text-xs font-black">▸</span>
                <span className="text-zinc-500">Location:</span>
                <span className="text-zinc-300">Worldwide</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Me (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-3.5">
            <h4 className="text-sm font-orbitron font-extrabold text-white tracking-widest uppercase">
              FOLLOW ME
            </h4>
            <div className="flex items-center gap-2.5">
              {[
                { name: 'GitHub', icon: Github },
                { name: 'Twitter', icon: Twitter },
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'Instagram', icon: Instagram },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    id={`footer-social-${item.name.toLowerCase()}`}
                    onClick={() => onSocialClick && onSocialClick(item.name)}
                    aria-label={item.name}
                    className="w-10 h-10 rounded-xl border border-zinc-800 bg-[#0c0d16] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#ff1a1a] hover:bg-[#ff1a1a]/15 hover:shadow-[0_0_15px_rgba(255,26,26,0.6)] transition-all cursor-pointer group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Cyberpunk Mantra */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-chakra tracking-widest uppercase text-zinc-500">
          <div>© 2025 Saber Dev. All rights reserved.</div>
          <div className="text-[11px] tracking-[0.25em] text-zinc-400 font-bold hover:text-[#ff1a1a] transition-colors">
            CODE. DESIGN. DEPLOY. SOLVE. BUILD. REPEAT.
          </div>
        </div>
      </div>
    </footer>
  );
};
