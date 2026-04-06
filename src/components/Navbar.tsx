import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Outils", href: "#outils" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#accueil" className="font-heading font-bold text-xl text-foreground">
            DAKO C<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-md border border-border hover:border-primary transition-colors"
            >
              <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-md hover:brightness-110 transition-all min-h-[44px] flex items-center"
            >
              Me contacter
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-md min-h-[44px]"
            >
              Me contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
