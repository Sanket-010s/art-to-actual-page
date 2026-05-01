import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Achievement", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "shadow-xl backdrop-blur-xl"
              : "backdrop-blur-md"
          }`}
          style={{
            background: scrolled
              ? "hsl(195 40% 96% / 0.92)"
              : "hsl(195 40% 96% / 0.6)",
            border: "1px solid hsl(200 40% 85% / 0.5)",
          }}
        >
          {/* Logo */}
          <motion.span
            className="font-display font-black text-xl uppercase tracking-tight"
            style={{
              background: "linear-gradient(135deg, hsl(200 80% 28%), hsl(185 70% 48%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SS.
          </motion.span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="relative px-4 py-2 text-sm font-medium font-body rounded-xl transition-colors duration-200"
                style={{
                  color: active === link ? "hsl(200 80% 28%)" : "hsl(200 20% 45%)",
                }}
              >
                {active === link && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "hsl(200 80% 35% / 0.12)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl text-muted-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 shadow-2xl md:hidden"
            style={{
              background: "hsl(195 40% 96% / 0.97)",
              border: "1px solid hsl(200 40% 85% / 0.5)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium font-body transition-colors"
                style={{
                  color: active === link ? "hsl(200 80% 28%)" : "hsl(200 20% 40%)",
                  background: active === link ? "hsl(200 80% 35% / 0.1)" : "transparent",
                }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
