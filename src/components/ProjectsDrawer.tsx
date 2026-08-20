import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface ProjectsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsDrawer: React.FC<ProjectsDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projects = [
    {
      title: 'CYBER-NEXUS OS',
      tag: 'Full-Stack Web App',
      description: 'Futuristic web operating system interface built with React, WebGL shaders, and high-frequency real-time WebSockets.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      metrics: '99.9% Uptime • 60 FPS'
    },
    {
      title: 'NEO-PAY DEFI MATRIX',
      tag: 'Fintech & Web3',
      description: 'Ultra-low latency crypto dashboard with live trading charts, automated smart contract feeds, and biometric authentication.',
      tech: ['Next.js', 'Ethers.js', 'Tailwind', 'Express'],
      metrics: '150k+ DAU • <100ms Latency'
    },
    {
      title: 'SYNTH-AI ENGINE',
      tag: 'AI Generative Suite',
      description: 'Multi-modal generative AI studio orchestrating Gemini models for automated code synthesis, asset generation, and voice synthesis.',
      tech: ['Gemini API', 'React', 'FastAPI', 'Vite'],
      metrics: '10x Productivity Gain'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090b12] border border-[#ff1a1a]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(255,26,26,0.35)]"
        id="projects-modal"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1.5 rounded-full hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra text-xs tracking-widest uppercase font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>&lt;PORTFOLIO_SHOWCASE&gt;</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-orbitron font-extrabold text-white">
            FEATURED PROJECTS
          </h3>
          <p className="text-sm text-zinc-400 font-space mt-1">
            Explore selected production systems engineered with clean code and cutting-edge performance.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((proj, i) => (
            <div 
              key={i}
              className="p-5 rounded-xl bg-[#111422] border border-zinc-800 hover:border-[#ff1a1a]/60 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-orbitron font-bold text-white group-hover:text-[#ff1a1a] transition-colors">
                      {proj.title}
                    </h4>
                    <span className="text-[11px] font-chakra uppercase px-2.5 py-0.5 rounded-full bg-[#ff1a1a]/15 text-[#ff1a1a] font-bold border border-[#ff1a1a]/30">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-space mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-chakra font-semibold text-zinc-400">
                  {proj.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
