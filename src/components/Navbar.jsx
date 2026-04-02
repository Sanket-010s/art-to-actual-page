import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/achievement", label: "Achievement" },
    { path: "/resume", label: "Resume" },
];

const Navbar = () => {
    const location = useLocation();
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-nav-active"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    );
};

export default Navbar;
