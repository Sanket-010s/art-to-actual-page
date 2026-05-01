import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievement from "./Achievement";
import Contact from "./Contact";

const Home = () => {
  const roles1 = ["CS Engineer", "Frontend Dev", "Graphic Designer"];
  const roles2 = ["Photographer", "Cinematographer"];

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero Section ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* ── Background layers ── */}
        <div className="absolute inset-0 bg-background" />

        {/* Animated mesh blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, hsl(190 70% 50% / 0.18), hsl(200 80% 35% / 0.08) 60%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[-15%] left-[-8%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(200 80% 40% / 0.12), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(200 80% 35%) 1px, transparent 1px), linear-gradient(90deg, hsl(200 80% 35%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 w-full container mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* ── Left Text Block ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex-1 max-w-2xl text-center lg:text-left"
            >
              {/* Greeting badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary/80 text-sm font-medium tracking-widest uppercase font-body">
                  Hey, I'm
                </span>
              </motion.div>

              {/* Name */}
              <h1
                className="font-display font-black uppercase leading-[0.9] mb-6 text-[clamp(3.5rem,10vw,7rem)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200 80% 28%) 0%, hsl(190 65% 48%) 50%, hsl(185 70% 58%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                SANKET
                <br />
                SUTAR
              </h1>

              {/* ── Roles ── */}
              <div className="mb-10 space-y-3">
                {/* Row 1 – 3 roles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1 gap-y-2"
                >
                  {roles1.map((role, i) => (
                    <span key={role} className="flex items-center gap-1">
                      <span className="text-muted-foreground font-body text-base sm:text-lg font-medium tracking-wide whitespace-nowrap">
                        {role}
                      </span>
                      {i < roles1.length - 1 && (
                        <span className="text-primary/40 mx-2 text-lg select-none">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </motion.div>

                {/* Row 2 – 2 roles */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1 gap-y-2"
                >
                  {roles2.map((role, i) => (
                    <span key={role} className="flex items-center gap-1">
                      <span className="text-muted-foreground/70 font-body text-base sm:text-lg font-medium tracking-wide whitespace-nowrap">
                        {role}
                      </span>
                      {i < roles2.length - 1 && (
                        <span className="text-primary/30 mx-2 text-lg select-none">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* ── Social Links ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Sanket-010s",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sanket-sutar-a4b598339",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:sanketsutar010@gmail.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground shadow-md hover:shadow-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
                    style={{ width: "3.25rem", height: "3.25rem" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-5 h-5 relative z-10" />
                  </motion.a>
                ))}

                {/* CTA button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="ml-2 px-6 py-3 rounded-2xl text-sm font-semibold font-body text-white shadow-md hover:shadow-xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200 80% 35%), hsl(185 70% 50%))",
                  }}
                >
                  Let's Connect
                </motion.a>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="hidden lg:flex items-center gap-2 mt-16 text-muted-foreground/40 text-xs font-body tracking-widest uppercase"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
                Scroll to explore
              </motion.div>
            </motion.div>

            {/* ── Right — Profile Image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative flex-shrink-0 flex items-center justify-center"
            >
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-dashed border-primary/15"
                style={{
                  width: "calc(100% + 60px)",
                  height: "calc(100% + 60px)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-primary/8"
                style={{
                  width: "calc(100% + 110px)",
                  height: "calc(100% + 110px)",
                }}
              />

              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, hsl(190 70% 50% / 0.25) 0%, hsl(200 80% 35% / 0.1) 50%, transparent 75%)",
                  filter: "blur(30px)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Circular image container */}
              <div
                className="relative rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl"
                style={{
                  width: "clamp(260px, 35vw, 480px)",
                  height: "clamp(260px, 35vw, 480px)",
                  boxShadow:
                    "0 0 0 1px hsl(200 80% 35% / 0.1), 0 30px 80px hsl(200 80% 35% / 0.25), inset 0 0 60px hsl(190 60% 50% / 0.05)",
                }}
              >
                {/* Inner gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={profileImg}
                  alt="Sanket Sutar"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-0 w-3 h-3 rounded-full bg-primary/60"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-primary/40"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
    </div>
  );
};

export default Home;
