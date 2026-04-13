import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievement", label: "Achievement" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      for (const link of [...navLinks].reverse()) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(link.href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-xl shadow-[0_8px_32px_hsl(200_40%_40%/0.12)]">
      <div className="flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`relative px-5 py-2 rounded-full text-xs font-body font-semibold tracking-wide transition-all duration-300 ${
              active === link.href
                ? "bg-primary text-primary-foreground shadow-[0_0_16px_hsl(200_80%_40%/0.3)]"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
