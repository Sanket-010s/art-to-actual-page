import { motion } from "framer-motion";

const skills = [
  { category: "Design", items: ["Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"] },
  { category: "Motion", items: ["After Effects", "Premiere Pro", "Cinema 4D"] },
  { category: "Web", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"] },
  { category: "Branding", items: ["Logo Design", "Brand Identity", "Typography", "Packaging"] },
];

const Skills = () => {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.h2
          className="font-display text-3xl font-bold uppercase text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold uppercase text-primary mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm font-body">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
