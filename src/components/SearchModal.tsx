import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (action: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');

  const quickLinks = [
    { title: 'Full-Stack Web Apps', cat: 'Projects', desc: 'React, Next.js, Node.js, Express architectures' },
    { title: 'Cyberpunk UI Systems', cat: 'Design', desc: 'Tailwind CSS, HUD components, reactive motion' },
    { title: 'Cloud & DevOps Setup', cat: 'Services', desc: 'Docker, CI/CD, Cloud Run, serverless backends' },
    { title: 'API Integrations', cat: 'Skills', desc: 'REST, GraphQL, WebSockets, Gemini GenAI' },
  ];

  if (!isOpen) return null;

  const filtered = quickLinks.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.cat.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0c0e17] border border-[#ff1a1a]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(255,26,26,0.25)]"
        id="search-modal"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-4">
          <Search className="w-5 h-5 text-[#ff1a1a]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, projects, stack, or services..."
            className="w-full bg-transparent text-white placeholder-zinc-500 font-space text-base focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] font-chakra uppercase font-bold tracking-widest text-zinc-400">
            QUICK RESULTS
          </span>
          <div className="space-y-1.5 mt-2">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectAction(item.title);
                  onClose();
                }}
                className="p-3 rounded-xl bg-[#141624]/60 hover:bg-[#1a1e32] border border-zinc-800/80 hover:border-[#ff1a1a]/60 cursor-pointer flex items-center justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-[#ff1a1a] font-orbitron transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] uppercase font-chakra px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {item.cat}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-space mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ff1a1a] group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
