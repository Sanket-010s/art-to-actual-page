import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard with analytics, product management, and order tracking features.",
    tech: ["React", "Chart.js", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and beautiful UI.",
    tech: ["JavaScript", "API", "CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Photography Portfolio",
    description: "A minimalist gallery website showcasing photography work with lightbox viewer.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 page-padding">
      <div className="container mx-auto px-10">
        <motion.h2
          className="section-title mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 text-xs font-body font-medium rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

