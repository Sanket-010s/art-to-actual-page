import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const Carousel3D = ({ items, renderCard }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Mouse/touch drag to scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    };
    const onUp = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
      const diff = endX - startX.current;
      if (Math.abs(diff) > 50) {
        diff > 0 ? prev() : next();
      }
    };
    const onLeave = () => { isDragging.current = false; };

    // Mouse wheel horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
        e.preventDefault();
        e.deltaX > 0 ? next() : prev();
      }
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchend", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchend", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [next, prev]);

  const getPosition = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="relative flex flex-col items-center select-none" ref={containerRef}>
      {/* Cards container */}
      <div className="relative w-full h-[420px] flex items-center justify-center perspective-[1200px]" style={{ cursor: "grab" }}>
        {items.map((item, index) => {
          const pos = getPosition(index);
          const isActive = pos === 0;
          const absPos = Math.abs(pos);

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
              animate={{ x: translateX, z: translateZ, scale, opacity, rotateY }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              style={{ zIndex, transformStyle: "preserve-3d" }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`w-[280px] rounded-2xl p-6 relative overflow-hidden cursor-pointer transition-shadow duration-500`}
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
                {/* Spotlight effect on active card */}
                {isActive && (
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-[200px] h-[120px] pointer-events-none z-0"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, hsl(260 70% 60% / 0.35) 0%, hsl(260 70% 60% / 0.1) 50%, transparent 80%)",
                    }}
                  />
                )}
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
                <div className="relative z-10">{renderCard(item, isActive)}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel3D;
