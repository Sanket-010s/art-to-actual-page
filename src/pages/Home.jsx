import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { Award, Star, Trophy } from "lucide-react";
import Carousel3D from "@/components/Carousel3D";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Computer Science Engineer", "Frontend Developer", "Photographer", "Graphic Designer"];

const skills = [
  { category: "Design", items: ["Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"], icon: "🎨" },
  { category: "Motion", items: ["After Effects", "Premiere Pro", "Cinema 4D"], icon: "🎬" },
  { category: "Web", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"], icon: "💻" },
  { category: "Branding", items: ["Logo Design", "Brand Identity", "Typography", "Packaging"], icon: "✦" },
];

const achievements = [
  { icon: Trophy, title: "Best Design Award", description: "Recognized for outstanding visual identity work at the National Design Conference 2023." },
  { icon: Award, title: "Brand Excellence", description: "Awarded Brand Excellence for a complete corporate rebranding project." },
  { icon: Star, title: "Top Creative Director", description: "Named Top Creative Director by the Regional Advertising Association." },
  { icon: Award, title: "Client Satisfaction", description: "Maintained a 98% client satisfaction rate across 50+ branding projects." },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <img src={heroBg} alt="Creative workspace" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="relative z-10 container mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
            <p className="text-muted-foreground text-lg mb-2 font-body font-semibold">Hey ! I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground leading-none">
              Sutar
            </h1>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight leading-none" style={{ background: "linear-gradient(135deg, hsl(260 70% 60%), hsl(200 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Sanket
            </h1>
            <div className="mt-6 text-muted-foreground text-sm font-body tracking-wide">
              <p>Computer Science Engineer <span className="mx-3 text-border">|</span> Frontend Developer</p>
              <p>Photographer</p>
              <p>Graphic Designer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title mb-2">About</h2>
            <a href="mailto:sanketsutar010@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              <Mail className="inline w-4 h-4 mr-1" />
              sanketsutar010@gmail.com
            </a>
          </motion.div>

          <div className="flex gap-5 mt-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-muted-foreground leading-relaxed font-body text-sm mt-20 max-w-lg">
                I'm a passionate Frontend Developer with a strong interest in building responsive, user-friendly, and visually appealing web applications. I enjoy turning ideas into interactive digital experiences using modern web technologies.

                Beyond frontend development, I'm actively exploring Full Stack Development, Machine Learning, and Software Development to broaden my skill set and create more impactful solutions.

                I also have a creative side—I work as a Graphic Designer and Photographer, which helps me bring a unique blend of design thinking and technical skills into every project I build.

                I'm always eager to learn, experiment, and take on new challenges that push my boundaries and help me grow as a developer and creator.
              </p>
              <div className="flex items-center gap-2 mt-6 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Khubi, Karad</span>
              </div>
              <p className="text-muted-foreground text-xs ml-6">Maharashtra 415-108</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center">
              <img src="" alt="Profile" className="w-100 max-w-sm object-cover rounded-2xl" loading="lazy" width={800} height={1000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - 3D Carousel */}
      <section id="skills" className="py-24 overflow-hidden">
        <div className="container mx-auto px-8">
          <motion.h2 className="section-title mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Skills
          </motion.h2>
          <Carousel3D
            items={skills}
            renderCard={(group) => (
              <>
                <div className="text-3xl mb-3">{group.icon}</div>
                <h3 className="font-display text-lg font-bold uppercase text-primary mb-1">{group.category}</h3>
                <p className="text-muted-foreground/60 text-xs mb-4 font-body">Core proficiency area</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm font-body flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          />
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="py-24">
        <div className="container mx-auto px-8">
          <motion.h2 className="section-title mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
