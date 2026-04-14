import { motion } from "framer-motion";
import Carousel3D from "@/components/Carousel3D";

const skills = [
  {
    category: "Design",
    items: ["Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"],
  },
  { category: "Motion", items: ["After Effects", "Premiere Pro", "Cinema 4D"] },
  {
    category: "Web",
    items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Branding",
    items: ["Logo Design", "Brand Identity", "Typography", "Packaging"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 page-padding overflow-hidden">
      <div className="container mx-auto px-10">
        <motion.h2
          className="section-title mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <Carousel3D
          items={skills}
          renderCard={(group) => (
            <>
              <div className="text-3xl mb-4">{group.icon}</div>
              <h3 className="font-display text-xl font-bold uppercase text-primary mb-2">
                {group.category}
              </h3>
              <p className="text-muted-foreground/60 text-sm font-body mb-6">
                Core proficiency area
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm font-body flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        />
      </div>
    </section>
  );
};

export default Skills;

