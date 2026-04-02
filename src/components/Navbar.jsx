const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "achievement", label: "Achievement" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-8 py-4 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-sm font-body tracking-wide transition-colors hover:text-primary text-muted-foreground"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
