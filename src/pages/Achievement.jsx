import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Best Design Award", description: "Recognized for outstanding visual identity work at the National Design Conference 2023." },
  { icon: Award, title: "Brand Excellence", description: "Awarded Brand Excellence for a complete corporate rebranding project." },
  { icon: Star, title: "Top Creative Director", description: "Named Top Creative Director by the Regional Advertising Association." },
  { icon: Award, title: "Client Satisfaction", description: "Maintained a 98% client satisfaction rate across 50+ branding projects." },
];

const Achievement = () => {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.h2
          className="font-display text-3xl font-bold uppercase text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-4 items-start rounded-xl border border-border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <item.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
