import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel3D = ({ items, renderCard }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getPosition = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Spotlight effect */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(260 70% 60% / 0.25) 0%, hsl(260 70% 60% / 0.08) 40%, transparent 70%)",
        }}
      />

      {/* Cards container */}
      <div className="relative w-full h-[420px] flex items-center justify-center perspective-[1200px]">
        {items.map((item, index) => {
          const pos = getPosition(index);
          const isActive = pos === 0;
          const absPos = Math.abs(pos);

          // Calculate 3D transforms
          const translateX = pos * 280;
          const translateZ = isActive ? 0 : -150 * absPos;
          const scale = isActive ? 1.1 : Math.max(0.7, 1 - absPos * 0.15);
          const opacity = absPos > 2 ? 0 : isActive ? 1 : Math.max(0.4, 1 - absPos * 0.3);
          const rotateY = pos * -15;
          const zIndex = 10 - absPos;

          return (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                x: translateX,
                z: translateZ,
                scale,
                opacity,
                rotateY,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`w-[280px] rounded-2xl p-6 relative overflow-hidden cursor-pointer transition-shadow duration-500 ${
                  isActive ? "shadow-[0_0_60px_hsl(260_70%_60%/0.3)]" : ""
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(160deg, hsl(225 20% 14% / 0.95), hsl(225 20% 8% / 0.9))"
                    : "linear-gradient(160deg, hsl(225 20% 12% / 0.8), hsl(225 20% 6% / 0.6))",
                  backdropFilter: "blur(20px)",
                  border: isActive
                    ? "1px solid hsl(260 50% 40% / 0.6)"
                    : "1px solid hsl(260 30% 25% / 0.3)",
                }}
              >
                {/* Gradient border glow for active */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, hsl(260 70% 60% / 0.6), hsl(200 80% 50% / 0.2), hsl(260 70% 60% / 0.4))",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                    }}
                  />
                )}
                {renderCard(item, isActive)}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-6 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel3D;
