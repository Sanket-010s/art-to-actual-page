import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievement from "./Achievement";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <img src={heroBg} alt="Creative workspace" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        <div className="relative z-10 container mx-auto px-8">
          <div className="flex items-center justify-between">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <p className="text-muted-foreground text-lg mb-2 font-body font-semibold">Hey ! I'm</p>
              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none" style={{ background: "linear-gradient(135deg, hsl(200 80% 35%), hsl(190 60% 50%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                SANKET SUTAR
              </h1>
              <div className="mt-6 text-muted-foreground text-base font-body tracking-wide space-y-1">
                <p>Computer Science Engineer <span className="mx-3 text-border">|</span> Frontend Developer</p>
                <p>Photographer</p>
                <p>Graphic Designer</p>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                <a href="https://github.com/sanketsutar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/sanketsutar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sanketsutar010@gmail.com" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex items-center justify-center flex-shrink-0"
            >
              <div className="relative w-72 lg:w-96">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-3xl" />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-xl" />
                <img src={profileImg} alt="Sanket Sutar" className="relative w-full object-contain drop-shadow-[0_20px_40px_hsl(200_60%_30%/0.3)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Achievement />

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-8">
          <motion.h2 className="section-title mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Contact
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-8">
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  Feel free to reach out for collaborations, freelance work, or just a friendly chat. I'm always open to new opportunities and ideas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:sanketsutar010@gmail.com" className="hover:text-primary transition-colors">sanketsutar010@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Khubi, Karad, Maharashtra</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="glass-card p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/60" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/60" />
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary resize-none placeholder:text-muted-foreground/60" />
              <button type="submit" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_hsl(260_70%_55%/0.2)]">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
