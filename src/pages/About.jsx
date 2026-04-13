import { motion } from "framer-motion";
import { MapPin, Mail, Cake, Languages } from "lucide-react";
import profileImg from "@/assets/profile.png";
const About = () => {
    return (<section id="about" className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-5xl font-bold uppercase text-foreground mb-2">
            About
          </h2>
          <a href="mailto:j.martin@uptowork.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
            <Mail className="inline w-4 h-4 mr-1"/>
            j.martin@uptowork.com
          </a>
        </motion.div>

        <div className="flex w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-muted-foreground leading-relaxed font-body text-m w-3/4 mt-12">
              <p>I’m a 2nd-year Computer Science Engineering student and frontend developer passionate about building modern, responsive, and user-friendly web applications. I’m currently strengthening my problem-solving skills through Data Structures and Algorithms (DSA) and exploring Machine Learning to broaden my technical expertise.</p>

              <p>
                Beyond coding, I enjoy photography and graphic design, which enhance my creativity and attention to detail. I’m always eager to learn, grow, and take on new challenges to build impactful projects.
              </p>

    
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full lg:w-[125%] relative z-10">
              <div className="bg-card border border-border/40 rounded-2xl p-4 flex flex-row items-center gap-4 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3.5 rounded-[14px] text-blue-600 dark:text-blue-400">
                  <Cake className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">19</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Years Old</p>
                </div>
              </div>

              <div className="bg-card border border-border/40 rounded-2xl p-4 flex flex-row items-center gap-4 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3.5 rounded-[14px] text-blue-600 dark:text-blue-400">
                  <MapPin className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">Orlando</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Florida, USA</p>
                </div>
              </div>

              <div className="bg-card border border-border/40 rounded-2xl p-4 flex flex-row items-center gap-4 shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3.5 rounded-[14px] text-blue-600 dark:text-blue-400">
                  <Languages className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-foreground text-xl leading-tight">3</h3>
                  <p className="text-muted-foreground text-[13px] font-medium leading-tight mt-1">Languages: EN | ES | FR</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center w-2/3">
            <img src={profileImg} alt="Jason Martin" className="w-full max-w-sm object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>);
};
export default About;
