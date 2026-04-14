import { motion } from "framer-motion";
import { MapPin, Mail, Cake, Languages, FileDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-32 page-padding">
      <div className="container mx-auto">
        <motion.h2
          className="section-title mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed font-body text-base mb-4">
              I'm a 2nd-year Computer Science Engineering student and frontend developer passionate about building modern, responsive, and user-friendly web applications. I'm currently strengthening my problem-solving skills through Data Structures and Algorithms (DSA) and exploring Machine Learning to broaden my technical expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body text-base mb-8">
              Beyond coding, I enjoy photography and graphic design, which enhance my creativity and attention to detail. I'm always eager to learn, grow, and take on new challenges to build impactful projects.
            </p>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_hsl(260_70%_55%/0.2)]"
            >
              <FileDown className="w-4 h-4" />
              View & Download Resume
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="glass-card p-6 flex flex-row items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-[14px] text-primary">
                  <Cake className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">19</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Years Old</p>
                </div>
              </div>

              <div className="glass-card p-6 flex flex-row items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-[14px] text-primary">
                  <MapPin className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">Karad</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Maharashtra, India</p>
                </div>
              </div>

              <div className="glass-card p-6 flex flex-row items-center gap-6">
                <div className="bg-primary/10 p-4 rounded-[14px] text-primary">
                  <Languages className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">3</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Languages: EN | HI | MR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

