import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Computer Science Engineer", "Frontend Developer", "Photographer", "Graphic Designer"];

const Home = () => {
    return (
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Creative workspace" className="w-full h-full object-cover" width={1920} height={1080}/>
          <div className="absolute inset-0 bg-hero-overlay"/>
        </div>

        <div className="relative z-10 container mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-muted-foreground text-lg mb-2 font-body font-semibold">Hey! I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
              Jason
            </h1>
            <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight text-foreground">
              Martin
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-5 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-body tracking-wide"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
};
export default Home;
