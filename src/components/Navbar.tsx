import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Track Order", href: "#tracking" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-xl font-bold text-primary tracking-tight">
          Dhanamma Food's
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full h-10 px-6 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-primary text-primary-foreground rounded-full h-10 leading-10 text-sm font-semibold"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
