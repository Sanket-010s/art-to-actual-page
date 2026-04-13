import { motion } from "framer-motion";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";

const achievements = [
  { image: cert1, title: "Best Design Award", description: "Recognized for outstanding visual identity work at the National Design Conference 2023.", date: "2023" },
  { image: cert2, title: "Brand Excellence", description: "Awarded Brand Excellence for a complete corporate rebranding project.", date: "2023" },
  { image: cert3, title: "Top Creative Director", description: "Named Top Creative Director by the Regional Advertising Association.", date: "2022" },
  { image: cert4, title: "Client Satisfaction", description: "Maintained a 98% client satisfaction rate across 50+ branding projects.", date: "2022" },
];

const Achievement = () => {
  return (
    <section id="achievement" className="py-24">
      <div className="container mx-auto px-8">
        <motion.h2
          className="section-title mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={704}
                  height={512}
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-body font-semibold">
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
