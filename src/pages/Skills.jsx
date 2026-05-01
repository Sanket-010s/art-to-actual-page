import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Code2, Terminal, Wrench, Figma, PenTool } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const skillCategories = [
  {
    id: "webdev",
    title: "WEB DEVELOPMENT",
    subtitle: "Frontend & UI Engineering",
    icon: Code2,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind", level: 88 },
    ],
    accent: "#3b82f6",
    border: "hsl(210 70% 85% / 0.5)",
  },
  {
    id: "programming",
    title: "PROGRAMMING",
    subtitle: "Backend & Data",
    icon: Terminal,
    skills: [
      { name: "Python", level: 78 },
      { name: "Java", level: 72 },
    ],
    accent: "#22c55e",
    border: "hsl(150 65% 80% / 0.5)",
  },
  {
    id: "design",
    title: "DESIGN TOOLS",
    subtitle: "Visual Identity & UI",
    icon: Palette,
    skills: [
      { name: "Photoshop", level: 95 },
      { name: "Illustrator", level: 92 },
      { name: "Figma", level: 90 },
      { name: "InDesign", level: 85 },
    ],
    accent: "#a855f7",
    border: "hsl(280 60% 80% / 0.5)",
  },
  {
    id: "tools",
    title: "TOOLS",
    subtitle: "Development & Design",
    icon: Wrench,
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Docker", level: 75 },
    ],
    accent: "#f97316",
    border: "hsl(30 75% 80% / 0.5)",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(195 30% 93%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(200 80% 45% / 0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(185 65% 60% / 0.1), transparent 70%)",
          filter: "blur(80px)",
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
            What I do
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
            SKILLS
          </h2>
        </motion.div>

{/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isHovered = hovered === cat.id;

            return (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-5 transition-all duration-300 cursor-default"
                style={{
                  background: "transparent",
                  border: `1.5px solid ${isHovered ? cat.accent : cat.border}`,
                }}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "transparent",
                      border: `1.5px solid ${cat.accent}`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg" style={{ color: cat.accent }}>
                      {cat.title}
                    </h3>
                    <p className="font-body text-xs" style={{ color: "hsl(200 20% 55%)" }}>
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

{/* Skills list with individual bars */}
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 + j * 0.05, duration: 0.4 }}
                      className="flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 font-body text-sm" style={{ color: "hsl(200 20% 38%)" }}>
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{ background: cat.accent }}
                          />
                          {skill.name}
                        </span>
                        <span className="text-xs font-medium" style={{ color: cat.accent }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "hsl(200 20% 90%)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.4 + i * 0.08 + j * 0.05, duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: cat.accent }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
