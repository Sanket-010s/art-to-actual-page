import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations and a clean design system.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "https://github.com/Sanket-010s",
    featured: true,
    color: "hsl(200 80% 35%)",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard with analytics, product management, and order tracking features. Real-time data visualization.",
    tags: ["React", "Chart.js", "Node.js"],
    live: "#",
    github: "https://github.com/Sanket-010s",
    color: "hsl(183 65% 40%)",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts, beautiful UI transitions, and 7-day forecast view.",
    tags: ["JavaScript", "API", "CSS"],
    live: "#",
    github: "https://github.com/Sanket-010s",
    color: "hsl(195 75% 38%)",
  },
  {
    title: "Photography Portfolio",
    description: "A minimalist gallery website showcasing photography work with lightbox, category filters, and lazy loading.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "https://github.com/Sanket-010s",
    color: "hsl(205 70% 40%)",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(195 35% 95%)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(185 65% 60% / 0.08), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(200 70% 45%)" }}>
            What I've built
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
            PROJECTS
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-7 transition-all duration-400"
              style={{
                background: "hsl(200 40% 97%)",
                border: "1.5px solid hsl(200 30% 88%)",
                boxShadow: "0 4px 20px hsl(200 40% 60% / 0.07)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.color + "55";
                e.currentTarget.style.boxShadow = `0 16px 48px ${p.color}18, 0 0 0 1px ${p.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "hsl(200 30% 88%)";
                e.currentTarget.style.boxShadow = "0 4px 20px hsl(200 40% 60% / 0.07)";
              }}
            >
              {/* Number */}
              <div
                className="absolute top-6 right-6 font-display font-black text-5xl leading-none select-none pointer-events-none"
                style={{ color: p.color + "12" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Color bar */}
              <div
                className="w-8 h-1 rounded-full mb-5 transition-all duration-300 group-hover:w-16"
                style={{ background: p.color }}
              />

              <h3
                className="font-display font-black text-xl mb-3 leading-tight"
                style={{ color: "hsl(200 60% 22%)" }}
              >
                {p.title}
              </h3>

              <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "hsl(200 15% 48%)" }}>
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-body font-semibold"
                    style={{
                      background: p.color + "14",
                      color: p.color,
                      border: `1px solid ${p.color}28`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={p.live}
                  className="flex items-center gap-1.5 text-xs font-body font-semibold transition-colors duration-200"
                  style={{ color: p.color }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
                <span style={{ color: "hsl(200 20% 75%)" }}>·</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-body font-semibold transition-colors duration-200"
                  style={{ color: "hsl(200 20% 50%)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.color)}
                  onMouseLeave={e => (e.currentTarget.style.color = "hsl(200 20% 50%)")}
                >
                  <Github className="w-3.5 h-3.5" />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sanket-010s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-body font-semibold text-sm transition-all"
            style={{
              border: "1.5px solid hsl(200 60% 65% / 0.4)",
              color: "hsl(200 70% 38%)",
              background: "hsl(200 60% 96%)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "hsl(200 80% 35% / 0.08)";
              e.currentTarget.style.borderColor = "hsl(200 70% 50%)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "hsl(200 60% 96%)";
              e.currentTarget.style.borderColor = "hsl(200 60% 65% / 0.4)";
            }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
