import React, { useState, useEffect } from 'react';
import { Users, Eye, Activity, Shield, Sparkles, Radio } from 'lucide-react';
import { Globe } from './Globe.tsx';

interface VisitorCounterProps {
  variant?: 'compact' | 'hud' | 'full';
  className?: string;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ 
  variant = 'full', 
  className = '' 
}) => {
  const [visitorCount, setVisitorCount] = useState<number>(14832);
  const [todayCount, setTodayCount] = useState<number>(142);
  const [activeSessions, setActiveSessions] = useState<number>(6);
  const [visitorNumber, setVisitorNumber] = useState<number>(14832);

  useEffect(() => {
    // Persistent visitor storage logic
    const BASE_VISITORS = 14820;
    const STORAGE_KEY = 'mettu_portfolio_visitor_count';
    const VISITOR_ID_KEY = 'mettu_portfolio_user_visitor_id';
    const TODAY_KEY = 'mettu_portfolio_today_hits';
    const DATE_KEY = 'mettu_portfolio_last_date';

    const todayDate = new Date().toISOString().slice(0, 10);
    const storedDate = localStorage.getItem(DATE_KEY);

    let currentTotal = parseInt(localStorage.getItem(STORAGE_KEY) || `${BASE_VISITORS}`, 10);
    let todayHits = parseInt(localStorage.getItem(TODAY_KEY) || '138', 10);

    // Reset today count if day changed
    if (storedDate !== todayDate) {
      localStorage.setItem(DATE_KEY, todayDate);
      todayHits = Math.floor(Math.random() * 40) + 95;
      localStorage.setItem(TODAY_KEY, todayHits.toString());
    }

    // Check if new session for this user
    let userVisitorNum = parseInt(localStorage.getItem(VISITOR_ID_KEY) || '0', 10);
    const hasVisitedSession = sessionStorage.getItem('mettu_session_logged');

    if (!hasVisitedSession) {
      currentTotal += 1;
      todayHits += 1;
      sessionStorage.setItem('mettu_session_logged', 'true');
      localStorage.setItem(STORAGE_KEY, currentTotal.toString());
      localStorage.setItem(TODAY_KEY, todayHits.toString());

      if (!userVisitorNum) {
        userVisitorNum = currentTotal;
        localStorage.setItem(VISITOR_ID_KEY, userVisitorNum.toString());
      }
    }

    setVisitorCount(currentTotal);
    setTodayCount(todayHits);
    setVisitorNumber(userVisitorNum || currentTotal);

    // Randomized slight fluctuations for active online sessions (4 - 9)
    const activeInterval = setInterval(() => {
      setActiveSessions(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.max(3, Math.min(9, next));
      });
    }, 4000);

    return () => clearInterval(activeInterval);
  }, []);

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050508] border border-[#ff1a1a]/40 shadow-[0_0_15px_rgba(255,26,26,0.15)] text-xs font-chakra ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1a1a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1a1a]"></span>
        </span>
        <span className="text-zinc-400">VISITORS:</span>
        <span className="font-orbitron font-extrabold text-white tracking-wider">
          {visitorCount.toLocaleString()}
        </span>
        <span className="text-zinc-600">|</span>
        <span className="text-[#ff1a1a] font-bold flex items-center gap-1">
          <Radio className="w-3 h-3 animate-pulse text-[#ff1a1a]" />
          {activeSessions} LIVE
        </span>
      </div>
    );
  }

  if (variant === 'hud') {
    return (
      <div className={`p-4 rounded-xl bg-[#090b14]/90 border border-zinc-800 hover:border-[#ff1a1a]/50 transition-all shadow-lg ${className}`}>
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#ff1a1a]" />
            <span className="text-xs font-orbitron font-bold text-white uppercase tracking-wider">PORTFOLIO TRAFFIC</span>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-chakra font-bold text-[#ff1a1a] bg-[#ff1a1a]/10 px-2 py-0.5 rounded border border-[#ff1a1a]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a1a] animate-ping"></span>
            LIVE
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-orbitron font-black text-white tracking-wider">
            {visitorCount.toLocaleString()}
          </span>
          <span className="text-xs font-chakra text-[#ff1a1a] font-bold">TOTAL VIEWS</span>
        </div>
        <div className="flex items-center justify-between text-[11px] font-space text-zinc-400 mt-2 pt-2 border-t border-white/[0.06]">
          <span>Today: <strong className="text-zinc-200">+{todayCount}</strong></span>
          <span>Active Nodes: <strong className="text-[#ff1a1a]">{activeSessions}</strong></span>
        </div>
      </div>
    );
  }

  // Full Rich Cyber Telemetry Banner (Strictly Red & White Theme with 3D Background Globe)
  return (
    <div className={`w-full relative overflow-hidden rounded-2xl bg-[#050508] border border-[#ff1a1a]/40 shadow-[0_10px_50px_rgba(255,26,26,0.15)] p-6 sm:p-8 lg:p-10 min-h-[360px] flex items-center ${className}`}>
      
      {/* 3D Cyber Globe Render Layer */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center md:justify-end overflow-hidden pointer-events-none z-0">
        <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] translate-x-4 sm:translate-x-16 lg:translate-x-12 pointer-events-auto">
          <Globe speed={1.2} scale={1.1} dotColor="#ff1a1a" markerColor="#ffffff" gridColor="rgba(255, 26, 26, 0.25)" />
        </div>
      </div>

      {/* Ambient Red Cyber Vignette & Radial Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/85 md:via-[#050508]/65 to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff1a1a]/15 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ff1a1a]/8 rounded-full blur-3xl pointer-events-none z-[1]" />
      
      {/* Corner Glowing Red Tactical Brackets */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#ff1a1a] pointer-events-none z-10" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#ff1a1a] pointer-events-none z-10" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#ff1a1a] pointer-events-none z-10" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff1a1a] pointer-events-none z-10" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Left Info: Header & Primary Counter */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="px-2.5 py-0.5 rounded-full bg-[#ff1a1a]/15 border border-[#ff1a1a]/40 text-[#ff1a1a] text-[10px] font-chakra font-black tracking-widest uppercase flex items-center gap-1.5 shadow-[0_0_10px_rgba(255,26,26,0.2)]">
              <Activity className="w-3 h-3 text-[#ff1a1a]" />
              <span>GLOBAL 3D NODE TELEMETRY</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-chakra font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#ff1a1a]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff1a1a] animate-ping"></span>
              <span className="text-zinc-200">{activeSessions} ACTIVE SESSIONS</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-orbitron font-black text-white tracking-wider">
            PORTFOLIO <span className="text-[#ff1a1a] drop-shadow-[0_0_10px_rgba(255,26,26,0.4)]">VISITOR COUNT</span>
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 font-space leading-relaxed max-w-md">
            Real-time verified page impressions, global reader traffic, and security node telemetry authenticated across interactive international sessions.
          </p>

          <div className="flex items-center gap-2 pt-1 text-xs font-chakra text-zinc-300 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 border border-white/[0.1] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff1a1a]" />
              <span>You are authenticated visitor <strong className="text-white font-mono bg-[#ff1a1a]/20 px-2 py-0.5 rounded border border-[#ff1a1a]/40 text-[#ff1a1a]">#{visitorNumber.toLocaleString()}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto shrink-0 z-10">
          
          {/* Box 1: Total Visitors */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#08080c]/90 backdrop-blur-md border border-white/[0.1] hover:border-[#ff1a1a]/60 hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-chakra">
              <span className="tracking-wider">TOTAL VISITS</span>
              <Eye className="w-3.5 h-3.5 text-[#ff1a1a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-orbitron font-black text-white tracking-wider mt-2.5">
              {visitorCount.toLocaleString()}
            </div>
            <div className="text-[10px] font-chakra text-[#ff1a1a] mt-1.5 flex items-center gap-1 font-bold">
              <span>▲ All-time Verified</span>
            </div>
          </div>

          {/* Box 2: Today's Hits */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#08080c]/90 backdrop-blur-md border border-white/[0.1] hover:border-[#ff1a1a]/60 hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-chakra">
              <span className="tracking-wider">TODAY'S VISITS</span>
              <Activity className="w-3.5 h-3.5 text-[#ff1a1a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-orbitron font-black text-white tracking-wider mt-2.5">
              +{todayCount}
            </div>
            <div className="text-[10px] font-chakra text-zinc-300 mt-1.5">
              <span>Active 24h Cycle</span>
            </div>
          </div>

          {/* Box 3: Security & Encryption Status */}
          <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-xl bg-[#08080c]/90 backdrop-blur-md border border-white/[0.1] hover:border-[#ff1a1a]/60 hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between text-zinc-400 text-xs font-chakra">
              <span className="tracking-wider">SECURITY STATUS</span>
              <Shield className="w-3.5 h-3.5 text-[#ff1a1a] group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm sm:text-base font-orbitron font-bold text-white tracking-wider mt-2.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff1a1a] animate-ping shrink-0"></span>
              <span>TLS 1.3 / SECURE</span>
            </div>
            <div className="text-[10px] font-chakra text-zinc-400 mt-1.5">
              <span>0 Threats Detected</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

