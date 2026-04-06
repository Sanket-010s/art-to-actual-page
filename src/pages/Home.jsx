import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { Award, Star, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const roles = ["Computer Science Engineer", "Frontend Developer", "Photographer", "Graphic Designer"];

const skills = [
  { category: "Design", items: ["Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"] },
  { category: "Motion", items: ["After Effects", "Premiere Pro", "Cinema 4D"] },
  { category: "Web", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"] },
  { category: "Branding", items: ["Logo Design", "Brand Identity", "Typography", "Packaging"] },
];

const achievements = [
  { icon: Trophy, title: "Best Design Award", description: "Recognized for outstanding visual identity work at the National Design Conference 2023." },
  { icon: Award, title: "Brand Excellence", description: "Awarded Brand Excellence for a complete corporate rebranding project." },
  { icon: Star, title: "Top Creative Director", description: "Named Top Creative Director by the Regional Advertising Association." },
  { icon: Award, title: "Client Satisfaction", description: "Maintained a 98% client satisfaction rate across 50+ branding projects." },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="relative z-10 container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-muted-foreground text-lg mb-2 font-body font-semibold">Hey! I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
              Jason
            </h1>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight" style={{ background: "linear-gradient(135deg, hsl(260 70% 60%), hsl(200 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Martin
            </h1>
            <p className="mt-6 text-muted-foreground text-sm font-body tracking-wide">
              {roles.map((role, i) => (
                <span key={role}>
                  {role}
                  {i < roles.length - 1 && <span className="mx-3 text-border">|</span>}
                </span>
              ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <img src={heroBg} alt="Creative workspace" className="w-full h-[80vh] object-cover rounded-2xl" width={1920} height={1080} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-transparent via-transparent to-background" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-20">
        <div className="container mx-auto px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title mb-2">About</h2>
            <a href="mailto:j.martin@uptowork.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              <Mail className="inline w-4 h-4 mr-1" />
              j.martin@uptowork.com
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-8">
                <p className="text-muted-foreground leading-relaxed font-body text-sm">
                  Graphic Designer with over 10 years of experience specializing in
                  IT Department management for international logistics companies. I
                  can implement effective IT Strategies at local and global levels.
                  My greatest strength is business awareness, which enables me to
                  permanently streamline infrastructure and applications.
                </p>
                <div className="flex items-center gap-2 mt-8 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Florida, Orlando</span>
                </div>
                <p className="text-muted-foreground text-xs ml-6">12529 State Road 535</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center">
              <img src={profileImg} alt="Jason Martin" className="w-full max-w-sm object-cover rounded-2xl" loading="lazy" width={800} height={1000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-20">
        <div className="container mx-auto px-8 py-16">
          <motion.h2 className="section-title mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group, i) => (
              <motion.div key={group.category} className="glass-card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm font-body">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="min-h-screen pt-20">
        <div className="container mx-auto px-8 py-16">
          <motion.h2 className="section-title mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div key={item.title} className="glass-card flex gap-4 items-start p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
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

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-20">
        <div className="container mx-auto px-8 py-16">
          <motion.h2 className="section-title mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Contact
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-8">
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
                  Feel free to reach out for collaborations, freelance work, or just a friendly chat. I'm always open to new opportunities and ideas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:j.martin@uptowork.com" className="hover:text-primary transition-colors">j.martin@uptowork.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Florida, Orlando – 12529 State Road 535</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="glass-card p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/60" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/60" />
              <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary resize-none placeholder:text-muted-foreground/60" />
              <button type="submit" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_hsl(260_70%_60%/0.3)]">
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
