import React, { useState, useEffect, useRef } from 'react';
import { Terminal, RotateCcw } from 'lucide-react';

interface CyberTypewriterSkillsProps {
  skills: string[];
  cardIndex?: number;
}

export const CyberTypewriterSkills: React.FC<CyberTypewriterSkillsProps> = ({
  skills,
  cardIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>(() => skills.map(() => ''));
  const [activeLine, setActiveLine] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0); // Used to restart animation

  // Viewport intersection observer to start typing when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing effect engine
  useEffect(() => {
    if (!isInView) return;

    // Reset displayed lines at start of run
    setDisplayedLines(skills.map(() => ''));
    setActiveLine(0);
    setIsFinished(false);

    // Initial stagger delay based on cardIndex so cards type with a nice wave effect
    const initialDelay = cardIndex * 120;
    let isCancelled = false;

    const timeoutId = setTimeout(() => {
      let currentLine = 0;
      let currentChar = 0;

      const typeInterval = setInterval(() => {
        if (isCancelled) {
          clearInterval(typeInterval);
          return;
        }

        if (currentLine >= skills.length) {
          setIsFinished(true);
          clearInterval(typeInterval);
          return;
        }

        const targetSkill = skills[currentLine];

        if (currentChar <= targetSkill.length) {
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[currentLine] = targetSkill.slice(0, currentChar);
            return next;
          });
          setActiveLine(currentLine);
          currentChar++;
        } else {
          // Move to next line after small pause
          currentLine++;
          currentChar = 0;
        }
      }, 22); // Fast, crisp typing cadence (22ms per char)

      return () => clearInterval(typeInterval);
    }, initialDelay);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isInView, skills, cardIndex, key]);

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setKey((prev) => prev + 1);
  };

  return (
    <div ref={containerRef} className="relative min-h-[140px] flex flex-col justify-between group/typewriter">
      <ul className="space-y-2">
        {skills.map((fullSkill, sIdx) => {
          const text = displayedLines[sIdx] || '';
          const isCurrentlyTyping = !isFinished && activeLine === sIdx && isInView;
          const hasStarted = sIdx <= activeLine && isInView;

          return (
            <li
              key={sIdx}
              className={`flex items-start gap-2 text-xs font-space transition-opacity duration-200 ${
                hasStarted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Terminal bullet */}
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300 ${
                  isCurrentlyTyping
                    ? 'bg-[#ff1a1a] shadow-[0_0_8px_#ff1a1a] scale-125'
                    : text.length === fullSkill.length
                    ? 'bg-[#ff1a1a]/80'
                    : 'bg-zinc-700'
                }`}
              />

              {/* Typed text */}
              <span className="text-zinc-300 leading-relaxed break-words">
                {text}
                {isCurrentlyTyping && (
                  <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#ff1a1a] align-middle animate-pulse shadow-[0_0_6px_#ff1a1a]" />
                )}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Terminal Replay Status / Indicator at bottom */}
      <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-chakra text-zinc-500">
        <span className="flex items-center gap-1">
          <Terminal className="w-3 h-3 text-[#ff1a1a]" />
          <span>{isFinished ? 'LIVE SYNCED' : 'PROCESSING...'}</span>
        </span>
        <button
          onClick={handleRestart}
          title="Re-run terminal typing"
          className="opacity-0 group-hover/typewriter:opacity-100 hover:text-[#ff1a1a] transition-all flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-2.5 h-2.5" />
          <span>REPLAY</span>
        </button>
      </div>
    </div>
  );
};
