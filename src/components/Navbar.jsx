import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
];
const Navbar = () => {
    const location = useLocation();
    return (<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (<Link key={link.path} to={link.path} className={`text-sm font-body tracking-wide transition-colors hover:text-primary ${location.pathname === link.path
                ? "text-nav-active"
                : "text-muted-foreground"}`}>
            {link.label}
          </Link>))}
      </div>
      <a href="tel:+17785553820" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <Phone className="w-4 h-4"/>
        778-555-3820
      </a>
    </nav>);
};
export default Navbar;
