import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Cake, MapPin, Languages } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const stats = [
  { icon: Cake, value: "19", label: "Years Old" },
  { icon: MapPin, value: "Karad", label: "Maharashtra, India" },
  { icon: Languages, value: "3", label: "Languages: EN · HI · MR" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(195 35% 95%)" }}
    >
      {/* Decorative bg shape */}
      <div
        className="absolute top-0 left-0 w-full h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(200 70% 60% / 0.3), transparent)" }}
      />
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(200 70% 60% / 0.08), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(200 70% 45%)" }}>
            Who I am
          </p>
          <h2
            className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(200 80% 22%), hsl(190 65% 42%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABOUT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text */}
          <div className="space-y-6">
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-body text-base sm:text-lg leading-relaxed"
              style={{ color: "hsl(200 15% 35%)" }}
            >
              I'm a <strong style={{ color: "hsl(200 70% 35%)" }}>2nd-year Computer Science Engineering</strong> student
              and frontend developer passionate about building modern, responsive, and user-friendly web applications.
              I'm currently strengthening my problem-solving skills through Data Structures and Algorithms (DSA) and
              exploring Machine Learning to broaden my technical expertise.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-body text-base sm:text-lg leading-relaxed"
              style={{ color: "hsl(200 15% 45%)" }}
            >
              Beyond coding, I enjoy photography and graphic design, which enhance my creativity and attention to detail.
              I'm always eager to learn, grow, and take on new challenges to build impactful projects.
            </motion.p>

            <motion.a
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-body font-semibold text-white text-sm mt-2 transition-all"
              style={{
                background: "linear-gradient(135deg, hsl(200 80% 32%), hsl(183 65% 48%))",
                boxShadow: "0 6px 24px hsl(200 80% 40% / 0.3)",
              }}
            >
              <FileText className="w-4 h-4" />
              View & Download Resume
            </motion.a>
          </div>

          {/* Right — Stats */}
          <div className="space-y-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ x: 6, scale: 1.01 }}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: "hsl(200 40% 97%)",
                  border: "1px solid hsl(200 30% 88%)",
                  boxShadow: "0 2px 12px hsl(200 40% 60% / 0.07)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "hsl(200 80% 35% / 0.1)",
                    border: "1px solid hsl(200 80% 35% / 0.15)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "hsl(200 70% 38%)" }} />
                </div>
                <div>
                  <p className="font-display font-black text-xl" style={{ color: "hsl(200 70% 30%)" }}>
                    {value}
                  </p>
                  <p className="font-body text-sm" style={{ color: "hsl(200 15% 50%)" }}>
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Creative decorative block */}
            <motion.div
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-5 rounded-2xl mt-2"
              style={{
                background: "linear-gradient(135deg, hsl(200 80% 35% / 0.06), hsl(185 65% 50% / 0.06))",
                border: "1px solid hsl(200 60% 70% / 0.25)",
              }}
            >
              <p className="font-body text-sm italic" style={{ color: "hsl(200 40% 45%)" }}>
                "Blending logic with aesthetics — I build things that work beautifully and look functional."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
