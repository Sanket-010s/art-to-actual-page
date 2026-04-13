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
    <section id="achievement" className="py-24">
        <div className="container mx-auto px-8">
          <motion.h2
            className="section-title mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6"
              >
                <item.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Achievement;
