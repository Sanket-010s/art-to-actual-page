import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Branding", "Print", "Digital", "Photography"];

const projects = [
  { title: "Brand Identity", category: "Branding", color: "from-primary/40 to-background" },
  { title: "Magazine Layout", category: "Print", color: "from-primary/30 to-secondary" },
  { title: "Web Campaign", category: "Digital", color: "from-accent/40 to-background" },
  { title: "Product Shoot", category: "Photography", color: "from-primary/20 to-muted" },
  { title: "Logo Design", category: "Branding", color: "from-accent/30 to-background" },
  { title: "Poster Series", category: "Print", color: "from-primary/35 to-secondary" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.h2
          className="font-display text-4xl font-bold uppercase text-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Portfolio
        </motion.h2>

        <div className="flex gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-body px-4 py-1.5 transition-all border ${
                active === cat
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden bg-card border border-border cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-display text-xl uppercase text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 font-body">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
