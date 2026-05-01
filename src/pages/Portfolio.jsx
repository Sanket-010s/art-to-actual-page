import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import imgBranding from "@/assets/portfolio-branding.jpg";
import imgMagazine from "@/assets/portfolio-magazine.jpg";
import imgWeb from "@/assets/portfolio-web.jpg";
import imgProduct from "@/assets/portfolio-product.jpg";
import imgLogos from "@/assets/portfolio-logos.jpg";
import imgPosters from "@/assets/portfolio-posters.jpg";
const categories = ["All", "Branding", "Print", "Digital", "Photography"];
const projects = [
    {
        title: "Brand Identity",
        category: "Branding",
        image: imgBranding,
        description: "Complete brand identity for a luxury lifestyle company including stationery and guidelines.",
    },
    {
        title: "Magazine Layout",
        category: "Print",
        image: imgMagazine,
        description: "Editorial spread design for a high-fashion quarterly publication.",
    },
    {
        title: "Web Campaign",
        category: "Digital",
        image: imgWeb,
        description: "Analytics dashboard UI design for a SaaS data-platform startup.",
    },
    {
        title: "Product Shoot",
        category: "Photography",
        image: imgProduct,
        description: "Creative product photography with dramatic lighting for a fragrance brand.",
    },
    {
        title: "Stationery Design",
        category: "Branding",
        image: imgLogos,
        description: "Business card and stationery suite with custom patterns and color palette.",
    },
    {
        title: "Poster Series",
        category: "Print",
        image: imgPosters,
        description: "Bold typographic poster series for a cultural arts festival.",
    },
];
const Portfolio = () => {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
    return (
      <section className="min-h-screen pt-24 page-padding">
        <div className="container mx-auto px-10 py-20">
          <motion.h2 className="font-display text-5xl font-bold uppercase text-foreground mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Portfolio
          </motion.h2>

          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`text-sm font-body px-6 py-2 transition-all border ${active === cat
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group relative aspect-[4/3] overflow-hidden bg-card border border-border cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={600}/>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl uppercase text-foreground mb-2">
                      {project.title}
                    </h3>
                    <span className="text-primary text-sm font-body tracking-widest uppercase">
                      {project.category}
                    </span>
                    <p className="text-muted-foreground text-sm font-body mt-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-body border border-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                        View Project <ExternalLink className="w-4 h-4"/>
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default Portfolio;

