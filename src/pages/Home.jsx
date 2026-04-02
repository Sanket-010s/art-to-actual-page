import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Computer Science Engineer", "Frontend Developer", "Photographer", "Graphic Designer"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-muted-foreground text-lg mb-2 font-body font-semibold">Hey! I'm</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
            Jason
          </h1>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight text-foreground">
            Martin
          </h1>

          <div className="mt-6">
            <div className="inline-block px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-purple-500/10 min-w-[280px] text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="text-foreground text-sm font-body tracking-wide inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Home;
