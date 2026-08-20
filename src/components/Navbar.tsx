import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  onConnectClick?: () => void;
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'HOME',
  onSelectTab,
  onConnectClick,
  onSearchClick
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
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Search button: Rounded pill / capsule button */}
        <div className="flex items-center rounded-full border border-zinc-800 bg-[#0d0e17]/90 px-3.5 py-2 hover:border-[#ff1a1a]/60 transition-colors shadow-inner group">
          <button
            id="nav-search-btn"
            onClick={onSearchClick}
            aria-label="Search"
            className="flex items-center justify-center text-zinc-300 hover:text-white transition-all group-hover:scale-105"
          >
            <Search className="w-4 h-4 text-zinc-300 group-hover:text-[#ff1a1a] transition-all" />
          </button>
        </div>

        {/* Let's Connect CTA: Solid glowing scarlet-red pill button */}
        <button
          id="nav-connect-btn"
          onClick={onConnectClick}
          className="flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff1a1a] hover:bg-[#e00818] text-[#050507] font-chakra font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,26,26,0.7),0_0_50px_rgba(255,26,26,0.4)] hover:shadow-[0_0_35px_rgba(255,26,26,0.95),0_0_70px_rgba(255,26,26,0.6)] transition-all duration-300 active:scale-95 group cursor-pointer"
        >
          <span className="font-black text-[#050507] tracking-wider">LET'S CONNECT</span>
          <ArrowRight className="w-4 h-4 text-[#050507] stroke-[3.5] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
};
