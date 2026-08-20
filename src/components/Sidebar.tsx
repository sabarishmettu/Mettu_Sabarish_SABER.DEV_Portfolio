import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

interface SidebarProps {
  onSocialClick?: (platform: string) => void;
  onScrollDown?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSocialClick, onScrollDown }) => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 lg:w-20 hidden md:flex flex-col items-center justify-between py-6 z-30 pointer-events-auto border-r border-zinc-800/40 bg-[#050507]/40 backdrop-blur-[2px]">
      {/* Top element: 4-square grid / cyber badge */}
      <div className="flex flex-col items-center gap-5">
        <div 
          id="sidebar-grid-icon"
          className="grid grid-cols-2 gap-1.5 p-2 rounded cursor-pointer group"
          title="Cyber Matrix"
        >
          <div className="w-2 h-2 rounded-[1.5px] bg-[#ff1a1a] shadow-[0_0_8px_#ff1a1a] group-hover:scale-125 transition-transform" />
          <div className="w-2 h-2 rounded-[1.5px] bg-white group-hover:bg-[#ff1a1a] transition-colors" />
          <div className="w-2 h-2 rounded-[1.5px] bg-white group-hover:bg-[#ff1a1a] transition-colors" />
          <div className="w-2 h-2 rounded-[1.5px] bg-[#ff1a1a] shadow-[0_0_8px_#ff1a1a] group-hover:scale-125 transition-transform" />
        </div>

        {/* Small vertical connector line */}
        <div className="w-[1px] h-6 bg-gradient-to-b from-zinc-700 via-[#ff1a1a]/50 to-zinc-800" />

        {/* Cyber micro-badge */}
        <div 
          id="sidebar-cyber-badge"
          className="w-7 h-7 rounded border border-[#ff1a1a]/60 bg-[#ff1a1a]/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,26,26,0.3)] cursor-pointer hover:bg-[#ff1a1a]/25 transition-all"
        >
          <span className="text-[10px] font-chakra font-bold text-[#ff1a1a]">DEV</span>
        </div>
      </div>

      {/* Middle element: FELLOW ME vertical text + Social Icons */}
      <div className="flex flex-col items-center gap-6 my-auto">
        <div className="w-[1px] h-8 bg-zinc-800" />
        
        {/* Rotated text - matches reference "FOLLOW ME" */}
        <div className="h-28 flex items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap text-[10px] font-chakra uppercase tracking-[0.3em] text-zinc-400 font-bold select-none">
            FOLLOW ME
          </span>
        </div>

        {/* Social Icons Stack */}
        <div className="flex flex-col items-center gap-4.5 mt-2">
          {/* GitHub / Git */}
          <button
            id="social-github-btn"
            onClick={() => onSocialClick && onSocialClick('GitHub')}
            aria-label="GitHub Profile"
            className="text-zinc-400 hover:text-white hover:drop-shadow-[0_0_10px_#ff1a1a] hover:scale-110 transition-all p-1 cursor-pointer"
          >
            <Github className="w-4 h-4 stroke-[1.8]" />
          </button>

          {/* LinkedIn */}
          <button
            id="social-linkedin-btn"
            onClick={() => onSocialClick && onSocialClick('LinkedIn')}
            aria-label="LinkedIn Profile"
            className="text-zinc-400 hover:text-[#0077b5] hover:drop-shadow-[0_0_10px_#0077b5] hover:scale-110 transition-all p-1 cursor-pointer"
          >
            <Linkedin className="w-4 h-4 stroke-[1.8]" />
          </button>

          {/* Instagram */}
          <button
            id="social-instagram-btn"
            onClick={() => onSocialClick && onSocialClick('Instagram')}
            aria-label="Instagram Profile"
            className="text-zinc-400 hover:text-[#e1306c] hover:drop-shadow-[0_0_10px_#e1306c] hover:scale-110 transition-all p-1 cursor-pointer"
          >
            <Instagram className="w-4 h-4 stroke-[1.8]" />
          </button>

          {/* Mail / Direct Contact */}
          <button
            id="social-mail-btn"
            onClick={() => onSocialClick && onSocialClick('Email')}
            aria-label="Direct Email / Contact"
            className="text-zinc-400 hover:text-[#ff1a1a] hover:drop-shadow-[0_0_10px_#ff1a1a] hover:scale-110 transition-all p-1 cursor-pointer"
            title="Direct Email"
          >
            <Mail className="w-4 h-4 stroke-[1.8]" />
          </button>
        </div>

        <div className="w-[1px] h-8 bg-zinc-800" />
      </div>

      {/* Bottom element: SCROLL DOWN indicator with red slider dot */}
      <div 
        className="flex flex-col items-center gap-3 cursor-pointer group"
        onClick={onScrollDown}
        id="sidebar-scroll-down"
        title="Scroll to explore"
      >
        <div className="text-[9px] font-chakra font-bold uppercase tracking-[0.2em] text-zinc-400 text-center leading-tight">
          <div>SCROLL</div>
          <div className="text-[#ff1a1a]">DOWN</div>
        </div>

        {/* Glowing slider track */}
        <div className="w-[2px] h-14 bg-zinc-800 rounded-full relative overflow-visible flex justify-center">
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#ff1a1a]/40 to-[#ff1a1a]" />
          {/* Animated glowing pill dot */}
          <div className="absolute bottom-1 w-2.5 h-2.5 -left-[4px] rounded-full bg-[#ff1a1a] shadow-[0_0_12px_#ff1a1a,0_0_20px_#ff1a1a] animate-pulse" />
        </div>
      </div>
    </aside>
  );
};
