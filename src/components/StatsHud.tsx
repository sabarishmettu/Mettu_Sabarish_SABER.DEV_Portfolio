import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Users, Eye } from 'lucide-react';

interface StatItem {
  id: string;
  icon: 'briefcase' | 'code' | 'calendar' | 'users' | 'eye';
  title: string;
  value: string;
  description: string;
}

export const StatsHud: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [visitorDisplay, setVisitorDisplay] = useState('14.8K+');

  useEffect(() => {
    const stored = localStorage.getItem('mettu_portfolio_visitor_count');
    if (stored) {
      const num = parseInt(stored, 10);
      if (!isNaN(num)) {
        if (num >= 1000) {
          setVisitorDisplay(`${(num / 1000).toFixed(1)}K+`);
        } else {
          setVisitorDisplay(`${num}+`);
        }
      }
    }
  }, []);

  const stats: StatItem[] = [
    {
      id: 'stat-visitors',
      icon: 'eye',
      title: 'PORTFOLIO VISITORS',
      value: visitorDisplay,
      description: 'Verified global traffic.',
    },
    {
      id: 'stat-projects',
      icon: 'briefcase',
      title: 'PROJECTS COMPLETED',
      value: '+25',
      description: 'Successful projects delivered worldwide.',
    },
    {
      id: 'stat-tech',
      icon: 'code',
      title: 'TECHNOLOGIES MASTERED',
      value: '+10',
      description: 'Modern technologies and frameworks.',
    },
    {
      id: 'stat-experience',
      icon: 'calendar',
      title: 'YEARS EXPERIENCE',
      value: '03+',
      description: 'Building solutions that make impact.',
    },
    {
      id: 'stat-clients',
      icon: 'users',
      title: 'HAPPY CLIENTS',
      value: '+15',
      description: 'Clients who trust my work.',
    },
  ];

  const renderIcon = (type: StatItem['icon']) => {
    switch (type) {
      case 'eye':
        return <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff1a1a] stroke-[1.8]" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff1a1a] stroke-[1.8]" />;
      case 'code':
        return (
          <span className="font-chakra font-black text-base sm:text-lg text-[#ff1a1a] tracking-tight">
            &lt;/&gt;
          </span>
        );
      case 'calendar':
        return <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff1a1a] stroke-[1.8]" />;
      case 'users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff1a1a] stroke-[1.8]" />;
    }
  };

  return (
    <div className="w-full max-w-[1720px] 2xl:max-w-[1900px] mx-auto px-4 sm:px-8 lg:px-12 mt-6 sm:mt-8 mb-6 relative z-30">
      {/* Outer Cyber HUD Frame with 30-35% translucent glass backdrop so character torso is clearly visible behind it */}
      <div 
        id="stats-hud-container"
        className="relative bg-[#05060a]/35 backdrop-blur-md border border-zinc-800/60 p-6 sm:p-7 lg:py-7 lg:px-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#ff1a1a]/40 group cyber-hud-card"
      >
        {/* Subtle top red glowing hairline */}
        <div className="absolute -top-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#ff1a1a]/60 to-transparent" />
        <div className="absolute -bottom-[1px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        
        {/* Futuristic Technical Corner Notches */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#ff1a1a] pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-zinc-400 pointer-events-none" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-zinc-400 pointer-events-none" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#ff1a1a] pointer-events-none" />

        {/* Small top-right cyber tick line */}
        <div className="absolute top-0 right-14 w-8 h-[2px] bg-[#ff1a1a]" />

        {/* 5 Stats Grid with concentric radar circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 items-center">
          {stats.map((stat, index) => {
            const isHovered = activeHover === stat.id;
            return (
              <div 
                key={stat.id}
                id={stat.id}
                onMouseEnter={() => setActiveHover(stat.id)}
                onMouseLeave={() => setActiveHover(null)}
                className="flex items-center gap-4 sm:gap-4.5 group/item transition-all duration-300 hover:translate-y-[-2px] relative"
              >
                {/* Glowing Concentric Radar Icon Container */}
                <div className="relative shrink-0 flex items-center justify-center">
                  {/* Outer radar ring */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isHovered 
                      ? 'border-[#ff1a1a] bg-[#ff1a1a]/15 shadow-[0_0_25px_rgba(255,26,26,0.5)] scale-105' 
                      : 'border-[#ff1a1a]/35 bg-[#ff1a1a]/5 shadow-[0_0_15px_rgba(255,26,26,0.15)]'
                  }`}>
                    {/* Middle concentric ring */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#ff1a1a]/30 flex items-center justify-center">
                      {/* Inner core */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d0a14] flex items-center justify-center shadow-inner">
                        {renderIcon(stat.icon)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Info Block */}
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="text-[11px] sm:text-xs font-orbitron font-bold tracking-wider text-zinc-300 group-hover/item:text-white uppercase truncate">
                    {stat.title}
                  </span>
                  <span className="text-2xl sm:text-3xl font-orbitron font-black text-[#ff1a1a] drop-shadow-[0_0_15px_rgba(255,26,26,0.85)] my-0.5 tracking-tight">
                    {stat.value}
                  </span>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-space leading-snug">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
