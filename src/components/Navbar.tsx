import React from 'react';
import { Search, ArrowRight, Terminal, FileText } from 'lucide-react';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  onConnectClick?: () => void;
  onSearchClick?: () => void;
  onTerminalClick?: () => void;
  onResumeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'HOME',
  onSelectTab,
  onConnectClick,
  onSearchClick,
  onTerminalClick,
  onResumeClick,
}) => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 z-40 relative">
      {/* Brand Logo & Separator */}
      <div 
        className="flex items-center gap-3.5 group cursor-pointer" 
        id="brand-logo" 
        onClick={() => onSelectTab && onSelectTab('HOME')}
      >
        <div className="flex items-center text-[#ff1a1a] font-bold text-2xl tracking-tighter drop-shadow-[0_0_12px_rgba(255,26,26,0.85)] font-chakra">
          <span className="text-[#ff1a1a] font-black text-2xl sm:text-3xl mr-1">&lt;/&gt;</span>
        </div>
        <span className="text-white font-orbitron font-extrabold text-xl sm:text-2xl tracking-wider uppercase group-hover:text-[#ff1a1a] transition-colors duration-300">
          SABER DEV
        </span>
        <span className="text-zinc-700 font-light text-2xl mx-1 select-none hidden md:inline">|</span>
      </div>

      {/* Navigation Links with refined spacing & readable text */}
      <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-xs lg:text-[13px] font-chakra tracking-widest font-bold uppercase text-zinc-300" id="main-navigation">
        {navItems.map((item, idx) => {
          const isActive = activeTab === item.name;
          return (
            <React.Fragment key={item.name}>
              {idx > 0 && (
                <span className="text-[#ff1a1a] text-xs select-none opacity-80 drop-shadow-[0_0_6px_#ff1a1a]">
                  •
                </span>
              )}
              <button
                id={`nav-item-${item.name.toLowerCase()}`}
                onClick={() => onSelectTab && onSelectTab(item.name)}
                className={`relative px-3 py-1.5 transition-all duration-200 tracking-widest hover:text-white group cursor-pointer ${
                  isActive ? 'text-white font-extrabold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#ff1a1a] shadow-[0_0_12px_#ff1a1a,0_0_20px_#ff1a1a] rounded-full" />
                )}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Terminal Easter-Egg CLI Trigger */}
        {onTerminalClick && (
          <button
            onClick={onTerminalClick}
            id="nav-terminal-btn"
            title="Open Interactive Cyber CLI (Hotkeys: ` or ~)"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-zinc-800 bg-[#0d0e17]/90 text-zinc-300 hover:text-[#ff1a1a] hover:border-[#ff1a1a]/60 transition-all text-xs font-chakra font-bold group cursor-pointer shadow-inner"
          >
            <Terminal className="w-3.5 h-3.5 text-[#ff1a1a] group-hover:scale-110 transition-transform" />
            <span className="hidden lg:inline text-[11px] tracking-wider text-zinc-400 group-hover:text-white font-mono">CLI</span>
          </button>
        )}

        {/* Resume Dossier button */}
        {onResumeClick && (
          <button
            onClick={onResumeClick}
            id="nav-resume-btn"
            title="View & Download Resume Dossier"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] text-zinc-300 hover:text-white hover:border-[#ff1a1a]/60 hover:bg-[#ff1a1a]/10 transition-all text-xs font-chakra font-bold tracking-wider uppercase cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#ff1a1a]" />
            <span className="text-[11px]">RESUME</span>
          </button>
        )}

        {/* Search button: Rounded pill / capsule button */}
        <div className="flex items-center rounded-full border border-zinc-800 bg-[#0d0e17]/90 px-3 py-2 hover:border-[#ff1a1a]/60 transition-colors shadow-inner group">
          <button
            id="nav-search-btn"
            onClick={onSearchClick}
            aria-label="Search"
            className="flex items-center justify-center text-zinc-300 hover:text-white transition-all group-hover:scale-105"
          >
            <Search className="w-3.5 h-3.5 text-zinc-300 group-hover:text-[#ff1a1a] transition-all" />
          </button>
        </div>

        {/* Let's Connect CTA: Solid glowing scarlet-red pill button */}
        <button
          id="nav-connect-btn"
          onClick={onConnectClick}
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#ff1a1a] hover:bg-[#e00818] text-[#050507] font-chakra font-black text-xs sm:text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(255,26,26,0.75)] hover:shadow-[0_0_30px_rgba(255,26,26,0.95)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer whitespace-nowrap"
        >
          <span className="font-black text-[#050507] tracking-wider">LET'S CONNECT</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#050507] stroke-[3.5] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </header>
  );
};
