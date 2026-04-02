import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-4xl font-bold uppercase text-foreground mb-2">About</h2>
          <a href="mailto:j.martin@uptowork.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
            <Mail className="inline w-4 h-4 mr-1" />j.martin@uptowork.com
          </a>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-muted-foreground leading-relaxed font-body text-sm">
              Graphic Designer with over 10 years of experience specializing in IT Department management for international logistics companies. I can implement effective IT Strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications.
            </p>
            <div className="flex items-center gap-2 mt-8 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Florida, Orlando</span>
            </div>
            <p className="text-muted-foreground text-xs ml-6">12529 State Road 535</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center">
            <img src={profileImg} alt="Jason Martin" className="w-full max-w-sm object-cover" loading="lazy" width={800} height={1000} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
