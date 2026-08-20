import React, { useEffect, useRef, useState } from 'react';

export const GlitchTitle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(0);

  // Periodic subtle cyberpunk glitch pulse
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setGlitchTrigger((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(pulseTimer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      renderCrystalClearDistressedTitle(canvas, ctx, isHovered);
    };

    render();
    if (document.fonts) {
      document.fonts.ready.then(render);
    }

    const handleResize = () => {
      render();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isHovered, glitchTrigger]);

  const renderCrystalClearDistressedTitle = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    hovered: boolean
  ) => {
    const fontSize = 380;
    const fontSpec = `900 ${fontSize}px "Bebas Neue", "Anton", "Teko", "Chakra Petch", sans-serif`;

    const word1 = 'WEB';
    const word2 = 'DEVELOPER';
    const letterTracking = 16; // Clean tracking between letters for high legibility
    const wordGap = 88; // Standard word space matching reference image

    // Measure character positions with explicit tracking
    const measureCanvas = document.createElement('canvas');
    const mCtx = measureCanvas.getContext('2d')!;
    mCtx.font = fontSpec;

    interface CharPos {
      char: string;
      x: number;
      width: number;
    }

    const charPositions: CharPos[] = [];
    let currentX = 0;

    // Word 1: WEB
    for (const ch of word1) {
      const w = mCtx.measureText(ch).width;
      charPositions.push({ char: ch, x: currentX, width: w });
      currentX += w + letterTracking;
    }

    currentX += wordGap;

    // Word 2: DEVELOPER
    for (const ch of word2) {
      const w = mCtx.measureText(ch).width;
      charPositions.push({ char: ch, x: currentX, width: w });
      currentX += w + letterTracking;
    }

    const totalTextWidth = currentX - letterTracking;
    const padX = 110;
    const padY = 95;
    const W = Math.ceil(totalTextWidth + padX * 2);
    const H = Math.ceil(fontSize + padY * 2);

    canvas.width = W;
    canvas.height = H;

    // 1. Offscreen Canvas for Razor-Sharp Letter Mask
    const glyphCanvas = document.createElement('canvas');
    glyphCanvas.width = W;
    glyphCanvas.height = H;
    const gCtx = glyphCanvas.getContext('2d')!;

    gCtx.clearRect(0, 0, W, H);
    gCtx.fillStyle = '#ffffff';
    gCtx.textAlign = 'left';
    gCtx.textBaseline = 'middle';
    gCtx.font = fontSpec;

    const startX = padX;
    const centerY = H / 2;

    for (const item of charPositions) {
      gCtx.fillText(item.char, startX + item.x, centerY);
    }

    const glyphImgData = gCtx.getImageData(0, 0, W, H);
    const gPixels = glyphImgData.data;

    // 2. Offscreen Canvas for Distressed Texture (Intense Crimson/Scarlet Red Weathered Paint on Concrete/Metal)
    const texCanvas = document.createElement('canvas');
    texCanvas.width = W;
    texCanvas.height = H;
    const tCtx = texCanvas.getContext('2d')!;

    const texImageData = tCtx.createImageData(W, H);
    const tData = texImageData.data;

    // Deterministic pseudo-random seed generator
    let seed = 582194;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Fine, crisp multi-frequency noise for stone / concrete / industrial paint grain
    const noise2D = (nx: number, ny: number) => {
      const v1 = Math.sin(nx * 1.6 + ny * 1.1) * 0.4;
      const v2 = Math.cos(nx * 3.4 - ny * 2.6) * 0.25;
      const v3 = Math.sin(nx * 7.8 + ny * 6.9) * 0.15;
      return v1 + v2 + v3;
    };

    // Sharp, thin realistic fractures and vertical fissures
    const crackPattern = (cx: number, cy: number) => {
      const v1 = Math.abs(Math.sin(cx * 0.032 + Math.cos(cy * 0.019) * 4));
      const v2 = Math.abs(Math.cos(cx * 0.052 - Math.sin(cy * 0.038) * 3.5));
      const v3 = Math.abs(Math.sin((cx + cy) * 0.042 + Math.cos(cx * 0.016) * 2));
      return Math.min(v1, v2, v3);
    };

    for (let y = 0; y < H; y++) {
      const normY = Math.max(0, Math.min(1, (y - padY) / fontSize));
      for (let x = 0; x < W; x++) {
        const idx = (y * W + x) * 4;
        const alpha = gPixels[idx + 3];

        if (alpha === 0) continue;

        // Base gradient: Pure Cyber Scarlet & Crimson (#ff2a2a top -> #e50914 mid -> #880000 base)
        const grain = noise2D(x * 0.014, y * 0.016);
        const crackVal = crackPattern(x, y);

        // Core electric pure scarlet red RGB calculation
        let r = 255;
        let g = Math.round(18 + (1 - normY) * 58 + grain * 48);
        let b = Math.round(18 + (1 - normY) * 48 + grain * 42);

        // Sharp, thin crack lines (darkened deep black-crimson fissures)
        const isCrack = crackVal < 0.026;
        const isMicroFissure = crackVal < 0.048 && rnd() > 0.58;
        const isSpeckle = rnd() > 0.986;

        if (isCrack || isMicroFissure || isSpeckle) {
          // Sharp dark fissure inside the red paint
          const darkFactor = isCrack ? 0.14 : 0.32;
          r = Math.max(35, Math.round(r * darkFactor * 1.35));
          g = Math.max(4, Math.round(g * darkFactor * 0.3));
          b = Math.max(6, Math.round(b * darkFactor * 0.35));
        } else {
          // Luminous crest highlight (crisp coral-white rim)
          if (normY < 0.38 && grain > 0.12) {
            g = Math.min(225, g + 65);
            b = Math.min(210, b + 55);
          }
        }

        tData[idx] = r;
        tData[idx + 1] = g;
        tData[idx + 2] = b;
        tData[idx + 3] = alpha;
      }
    }

    tCtx.putImageData(texImageData, 0, 0);

    // 3. Controlled Digital Glitch Slices (Clean horizontal displacement preserving letter recognition)
    const sliceCount = hovered ? 14 : 9;
    for (let i = 0; i < sliceCount; i++) {
      const sliceY = Math.floor(rnd() * (fontSize - 50)) + padY + 25;
      const sliceH = Math.floor(rnd() * 10) + 3;
      const shiftX = (rnd() > 0.5 ? 1 : -1) * (Math.floor(rnd() * 14) + 4);

      const regionW = totalTextWidth + 40;
      const sliceData = tCtx.getImageData(startX - 20, sliceY, regionW, sliceH);
      tCtx.clearRect(startX - 20, sliceY, regionW, sliceH);
      tCtx.putImageData(sliceData, startX - 20 + shiftX, sliceY);
    }

    // 4. Subtle Fragmented Glitch Spur Overlays
    tCtx.fillStyle = '#ff1a1a';
    for (let i = 0; i < 40; i++) {
      const fx = Math.floor(rnd() * totalTextWidth) + startX;
      const fy = Math.floor(rnd() * (fontSize - 40)) + padY + 20;
      const checkIdx = (fy * W + fx) * 4;
      if (gPixels[checkIdx + 3] > 150) {
        const fw = Math.floor(rnd() * 22) + 6;
        const fh = Math.floor(rnd() * 3) + 1;
        const dir = rnd() > 0.5 ? 1 : -1;
        tCtx.fillRect(fx + dir * (Math.floor(rnd() * 8) + 3), fy, fw, fh);
      }
    }

    // 5. Final Assembly on Main Canvas: Ultra-Crisp Letter Contours & Intense Pure Red Neon Glow
    ctx.clearRect(0, 0, W, H);

    // Layer A: Wide Atmospheric Deep Crimson Outer Glow
    ctx.save();
    ctx.shadowColor = '#bb0000';
    ctx.shadowBlur = 48;
    ctx.drawImage(texCanvas, 0, 0);
    ctx.restore();

    // Layer B: Intense Electric Red Core Neon Rim
    ctx.save();
    ctx.shadowColor = '#ff1a1a';
    ctx.shadowBlur = 18;
    ctx.drawImage(texCanvas, 0, 0);
    ctx.restore();

    // Layer C: Crisp Weathered Letters
    ctx.drawImage(texCanvas, 0, 0);

    // Layer D: Subtle Edge Contour Stroke for Maximum Letter Definition
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 60, 60, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = fontSpec;
    for (const item of charPositions) {
      ctx.strokeText(item.char, startX + item.x, centerY);
    }
    ctx.restore();
  };

  return (
    <div 
      className="relative w-full select-none my-1 sm:my-2 flex items-center justify-center cursor-default group"
      id="hero-main-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background atmospheric neon red outer bloom aura */}
      <div 
        className="absolute inset-0 w-full mx-auto rounded-full bg-[#ff1a1a]/22 blur-[90px] lg:blur-[140px] pointer-events-none transition-all duration-700"
        style={{
          opacity: isHovered ? 0.65 : 0.4,
          transform: isHovered ? 'scale(1.02)' : 'scale(1)'
        }}
      />

      {/* Main Massive High-Definition Bebas Neue Title */}
      <div className="w-full max-w-[1750px] 2xl:max-w-[1920px] mx-auto flex items-center justify-center px-0 relative">
        <canvas
          ref={canvasRef}
          id="glitch-title-canvas"
          className="w-full h-auto max-w-full transition-transform duration-300 group-hover:scale-[1.004]"
        />
      </div>
    </div>
  );
};
