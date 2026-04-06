import { useLocation } from "react-router-dom";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievement", label: "Achievement" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-sm font-body tracking-wide transition-colors hover:text-primary text-muted-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
