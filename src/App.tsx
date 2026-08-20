/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { GlitchTitle } from './components/GlitchTitle.tsx';
import { HeroCharacter } from './components/HeroCharacter.tsx';
import { StatsHud } from './components/StatsHud.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { ConnectModal } from './components/ConnectModal.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { ProjectsDrawer } from './components/ProjectsDrawer.tsx';
import { CyberViewProjectsBtn } from './components/CyberViewProjectsBtn.tsx';
import { CyberWorkTogetherBtn } from './components/CyberWorkTogetherBtn.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleSocialClick = (platform: string) => {
    if (platform === 'Email') {
      setIsConnectOpen(true);
    } else {
      console.log(`Navigating to ${platform}`);
    }
  };

  const handleScrollDown = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      const statsElem = document.getElementById('stats-hud-container');
      if (statsElem) {
        statsElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavSelect = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'HOME':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'ABOUT':
        scrollToSection('process');
        break;
      case 'PROJECTS':
        setIsProjectsOpen(true);
        break;
      case 'SERVICES':
        scrollToSection('services');
        break;
      case 'SKILLS':
        scrollToSection('skills');
        break;
      case 'CONTACT':
        scrollToSection('contact');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e0e0e6] relative overflow-x-hidden font-space flex flex-col justify-between selection:bg-[#ff1a1a] selection:text-white">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle top aura */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[880px] h-[420px] bg-[#ff1a1a]/10 rounded-full blur-[140px]" />
      </div>

      {/* Left HUD Sidebar */}
      <Sidebar 
        onSocialClick={handleSocialClick}
        onScrollDown={handleScrollDown}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen md:pl-16 lg:pl-20">
        {/* Hero Section Container */}
        <div id="home" className="relative min-h-screen flex flex-col justify-between">
          {/* Top Navigation */}
          <Navbar 
            activeTab={activeTab}
            onSelectTab={handleNavSelect}
            onConnectClick={() => setIsConnectOpen(true)}
            onSearchClick={() => setIsSearchOpen(true)}
          />

          {/* Hero Central Section: Ultra-wide spacious layout matching reference */}
          <main className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 pt-2 sm:pt-4 flex-1 flex flex-col justify-center relative">
            {/* Eyebrows Row (Above giant title) */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-2 sm:mb-3 px-2 relative z-20">
              {/* Eyebrow Left */}
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-10 h-[2.5px] bg-[#ff1a1a] shadow-[0_0_10px_#ff1a1a]" />
                <span className="text-xs sm:text-sm font-chakra font-black tracking-[0.28em] text-zinc-200 uppercase">
                  BUILDING THE DIGITAL FUTURE
                </span>
              </div>

              {/* Eyebrow Right */}
              <div className="text-right font-mono text-[11px] sm:text-xs tracking-widest text-zinc-400 font-semibold leading-tight">
                <div>CODE, DESIGN, DEPLOY,</div>
                <div className="flex items-center justify-end gap-1.5 text-zinc-200 font-bold">
                  <span>SOLVE. BUILD. REPEAT.</span>
                  <span className="text-[#ff1a1a] font-extrabold animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Massive Cyberpunk Distressed Title in Bebas Neue: WEB DEVELOPER in Pure Electric Red */}
            <GlitchTitle />

            {/* Sub-hero Columns (FULL-STACK DEVELOPER & WHAT I DO) positioned symmetrically on sides */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 lg:gap-48 xl:gap-64 mt-4 sm:mt-6 lg:mt-8 px-2 sm:px-4 items-start relative z-20">
              {/* Left Column: FULL-STACK DEVELOPER */}
              <div className="flex flex-col items-start space-y-3 sm:space-y-3.5 max-w-md lg:max-w-lg">
                <h2 className="text-lg sm:text-xl lg:text-[24px] font-orbitron font-extrabold text-[#ff1a1a] tracking-wider uppercase drop-shadow-[0_0_14px_rgba(255,26,26,0.65)]">
                  FULL-STACK DEVELOPER
                </h2>
                <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-300 font-space font-normal leading-relaxed">
                  I design and develop modern, high-performance websites and web applications with clean code and immersive experiences.
                </p>

                {/* Action Button: Cyberpunk Chamfered VIEW PROJECTS Button with Slanted Slashes */}
                <div className="pt-1.5 sm:pt-2">
                  <CyberViewProjectsBtn
                    id="btn-view-projects"
                    onClick={() => setIsProjectsOpen(true)}
                  />
                </div>
              </div>

              {/* Right Column: WHAT I DO */}
              <div className="flex flex-col items-start md:items-start space-y-3 sm:space-y-3.5 max-w-md lg:max-w-lg md:ml-auto">
                <h2 className="text-lg sm:text-xl lg:text-[24px] font-orbitron font-extrabold text-[#ff1a1a] tracking-wider uppercase drop-shadow-[0_0_14px_rgba(255,26,26,0.65)]">
                  WHAT I DO
                </h2>
                <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-300 font-space font-normal leading-relaxed">
                  From responsive websites to powerful web applications, I turn ideas into fast, scalable digital experiences.
                </p>

                {/* Action Button: Cyberpunk Chamfered LET'S WORK TOGETHER Button */}
                <div className="pt-1.5 sm:pt-2">
                  <CyberWorkTogetherBtn
                    id="btn-work-together"
                    onClick={() => setIsConnectOpen(true)}
                  />
                </div>
              </div>
            </div>
          </main>

          {/* Bottom Cybernetic Stats HUD */}
          <StatsHud />

          {/* Central Cyborg Character - enlarged and anchored so bottom reaches the bottom of the Stats HUD box */}
          <HeroCharacter />
        </div>

        {/* Section 1: SERVICES (What I Offer) */}
        <ServicesSection 
          onExploreService={(svc) => {
            setIsProjectsOpen(true);
          }}
          onViewAllServices={() => setIsProjectsOpen(true)}
        />

        {/* Section 2: SKILLS (Tech Arsenal & Moving Right-to-Left Marquee Track) */}
        <SkillsSection />

        {/* Section 3: PROCESS (How I Work: 6 connected cyber nodes) */}
        <ProcessSection />

        {/* Section 3: TESTIMONIALS (What Clients Say + Brand Logos + Big CTA Banner) */}
        <TestimonialsSection 
          onConnectClick={() => setIsConnectOpen(true)}
          onViewAllReviews={() => setIsConnectOpen(true)}
        />

        {/* Section 4: BANNER & FOOTER (Callout Box + 4 Columns + Copyright) */}
        <FooterSection 
          onNavClick={handleNavSelect}
          onConnectClick={() => setIsConnectOpen(true)}
          onSocialClick={handleSocialClick}
        />
      </div>

      {/* Interactive Modals */}
      <ConnectModal 
        isOpen={isConnectOpen} 
        onClose={() => setIsConnectOpen(false)} 
        onSelectTab={() => {}}
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={(action) => {
          if (action.includes('Projects')) setIsProjectsOpen(true);
          else setIsConnectOpen(true);
        }}
      />

      <ProjectsDrawer 
        isOpen={isProjectsOpen} 
        onClose={() => setIsProjectsOpen(false)} 
      />
    </div>
  );
}
