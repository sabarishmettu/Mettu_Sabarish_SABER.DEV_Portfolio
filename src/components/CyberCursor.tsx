import React, { useEffect, useState } from 'react';

export const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Only activate for non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsEnabled(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer'
        );
        setIsPointer(isClickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing reticle animation loop
  useEffect(() => {
    if (!isEnabled) return;
    let animationFrameId: number;

    const smoothTrail = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(smoothTrail);
    };

    animationFrameId = requestAnimationFrame(smoothTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isEnabled]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Center Laser Dot */}
      <div
        className={`fixed w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#ff1a1a] shadow-[0_0_10px_#ff1a1a] transition-transform duration-75 ${
          isMouseDown ? 'scale-150 bg-white shadow-[0_0_15px_#ffffff]' : isPointer ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trailing Cyber Crosshair / Reticle */}
      <div
        className={`fixed -ml-5 -mt-5 rounded-full border transition-all duration-150 flex items-center justify-center ${
          isPointer
            ? 'w-12 h-12 -ml-6 -mt-6 border-[#ff1a1a] bg-[#ff1a1a]/10 shadow-[0_0_15px_rgba(255,26,26,0.5)] rotate-45'
            : 'w-10 h-10 border-[#ff1a1a]/50 bg-transparent rotate-0'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {/* Crosshair Target Marks */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#ff1a1a]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#ff1a1a]" />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-[#ff1a1a]" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-[#ff1a1a]" />
        
        {/* Small corner brackets when locking target */}
        {isPointer && (
          <span className="absolute text-[8px] font-chakra font-black text-[#ff1a1a] tracking-tighter scale-75 uppercase -top-3.5">
            LOCK
          </span>
        )}
      </div>
    </div>
  );
};
