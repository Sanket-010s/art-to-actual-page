import { motion } from "framer-motion";

const softwareSkills = [
  { name: "Photoshop", level: 90 },
  { name: "Illustrator", level: 85 },
  { name: "InDesign", level: 80 },
  { name: "Premiere", level: 70 },
  { name: "After Effects", level: 65 },
];

const languages = [
  { name: "English", level: 95 },
  { name: "Arabic", level: 70 },
];

const experience = [
  {
    company: "White Fish Advertising Co.",
    role: "Art Director",
    color: "bg-primary",
  },
  {
    company: "Pyramids Sun Advertising Co.",
    role: "Senior Graphic Designer",
    color: "bg-primary",
  },
  {
    company: "Planet Stationary & Printing Services Co.",
    role: "Graphic Designer",
    color: "bg-primary",
  },
  {
    company: "Play Graphic Advertising Agency",
    role: "Graphic Designer",
    color: "bg-primary",
  },
  {
    company: "Marco Florida Internet & Computers Services Co.",
    role: "Graphic Designer",
    color: "bg-primary",
  },
];

const whatCanIDo = [
  "Logo · Stationary · Branding",
  "Newsletters · Packaging · Poster",
  "Strategy · Advertisement · Marketing",
];

const designSkills = [
  "Creativity · Planning & Strategy",
  "Signs & Typography · Layout",
  "Grid · Color sense · Inspiration",
];

const hobbies = ["Reading", "Traveling", "Photography", "Music"];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-foreground font-body">{name}</span>
    </div>
    <div className="h-1.5 bg-skill-bar-track rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-skill-bar rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay }}
      />
    </div>
  </div>
);

const Resume = () => {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-6">
              Software Skills
            </h3>
            {softwareSkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
            ))}

            <h3 className="font-display text-xl font-bold uppercase text-foreground mt-10 mb-6">
              Languages
            </h3>
            {languages.map((lang, i) => (
              <SkillBar key={lang.name} {...lang} delay={0.5 + i * 0.1} />
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-3 h-3 rounded-full bg-timeline-dot mt-1 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-semibold font-body">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-xs font-body">
                      {exp.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-4">
              What Can I Do?
            </h3>
            <ul className="space-y-1 mb-8">
              {whatCanIDo.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm font-body">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-4">
              Design Skills
            </h3>
            <ul className="space-y-1 mb-8">
              {designSkills.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm font-body">
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-4">
              Hobbies & Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="text-muted-foreground text-sm font-body"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
