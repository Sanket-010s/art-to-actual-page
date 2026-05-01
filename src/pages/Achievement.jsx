import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
  }),
};

const achievements = [
  {
    year: "2023",
    title: "Best Design Award",
    description: "Recognized for outstanding visual identity work at the National Design Conference 2023.",
    icon: Trophy,
    color: "hsl(42 90% 48%)",
    bg: "hsl(42 90% 48% / 0.08)",
    border: "hsl(42 90% 55% / 0.25)",
  },
  {
    year: "2023",
    title: "Brand Excellence",
    description: "Awarded Brand Excellence for a complete corporate visual identity and branding system.",
    icon: Star,
    color: "hsl(200 80% 35%)",
    bg: "hsl(200 80% 35% / 0.08)",
    border: "hsl(200 70% 55% / 0.25)",
  },
  {
    year: "2022",
    title: "Award Certificate",
    description: "Received recognition for creative design excellence at a regional competition.",
    icon: Award,
    color: "hsl(145 60% 38%)",
    bg: "hsl(145 60% 38% / 0.08)",
    border: "hsl(145 55% 55% / 0.25)",
  },
  {
    year: "2022",
    title: "Excellence Recognition",
    description: "Acknowledged for outstanding contributions to graphic design and visual communication.",
    icon: Star,
    color: "hsl(280 60% 50%)",
    bg: "hsl(280 60% 50% / 0.07)",
    border: "hsl(280 55% 65% / 0.25)",
  },
];

const Achievement = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievement"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(195 30% 93%)" }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(42 90% 55% / 0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 50% / 0.07), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(200 70% 45%)" }}>
            Recognition
          </p>
          <h2
            className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(200 80% 22%), hsl(190 65% 42%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ACHIEVEMENTS
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative rounded-3xl p-7 overflow-hidden transition-all duration-400"
                style={{
                  background: "hsl(200 40% 97%)",
                  border: `1.5px solid ${a.border}`,
                  boxShadow: "0 4px 20px hsl(200 40% 60% / 0.07)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = a.bg;
                  e.currentTarget.style.boxShadow = `0 16px 48px ${a.color}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "hsl(200 40% 97%)";
                  e.currentTarget.style.boxShadow = "0 4px 20px hsl(200 40% 60% / 0.07)";
                }}
              >
                {/* Year badge */}
                <span
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-display font-black"
                  style={{
                    background: a.color + "18",
                    color: a.color,
                    border: `1px solid ${a.color}30`,
                  }}
                >
                  {a.year}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: a.color + "16",
                    border: `1.5px solid ${a.color}28`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: a.color }} />
                </div>

                <h3
                  className="font-display font-black text-xl mb-3"
                  style={{ color: "hsl(200 60% 22%)" }}
                >
                  {a.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(200 15% 48%)" }}>
                  {a.description}
                </p>

                {/* Decorative accent line */}
                <div
                  className="absolute bottom-0 left-7 right-7 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${a.color}40, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
