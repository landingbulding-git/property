import { useState, useRef, useEffect, type MouseEvent, type TouchEvent } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Eredeti állapot",
  afterLabel = "Látványterv",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: any, info: any) => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      const newPosition = (info.point.x / width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newPosition)));
    }
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-col-resize select-none shadow-2xl"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After renovation"
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
        crossOrigin="anonymous" 
      />
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm z-10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before renovation"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
          crossOrigin="anonymous" 
        />
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <MoveHorizontal className="w-6 h-6 text-brand-dark" />
        </div>
      </div>
      
      {/* Overlay Labels (Bottom) - Optional extra info */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-xs font-bold drop-shadow-md z-10 pointer-events-none">
        <span className="bg-black/40 px-2 py-1 rounded">92 m²-es tágas terek</span>
        <span className="bg-black/40 px-2 py-1 rounded">Modern amerikai konyhás nappali</span>
      </div>
    </div>
  );
}
