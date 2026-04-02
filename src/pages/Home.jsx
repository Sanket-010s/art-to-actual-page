import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
const Home = () => {
    return (<section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Creative workspace" className="w-full h-full object-cover" width={1920} height={1080}/>
        <div className="absolute inset-0 bg-hero-overlay"/>
      </div>

      <div className="relative z-10 container mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-muted-foreground text-lg mb-2 font-body">Hello, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
            Jason
          </h1>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight text-foreground">
            Martin
          </h1>
          <p className="text-primary text-lg mt-2 font-body tracking-widest">
            Graphic Designer
          </p>

          <div className="flex gap-4 mt-8">
            <Link to="/resume" className="px-6 py-2 border border-foreground/30 text-foreground text-sm font-body hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
              Resume
            </Link>
            <Link to="/portfolio" className="px-6 py-2 border border-foreground/30 text-foreground text-sm font-body hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
              Portfolio
            </Link>
          </div>

          <div className="flex gap-4 mt-8 text-muted-foreground">
            {["Bē", "f", "in", "𝕏", "P", "♥", "✈"].map((icon, i) => (<a key={i} href="#" className="hover:text-primary transition-colors text-lg">
                {icon}
              </a>))}
          </div>
        </motion.div>
      </div>
    </section>);
};
export default Home;
