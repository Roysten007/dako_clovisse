const links = ["Accueil", "À propos", "Compétences", "Outils", "Projets", "Contact"];
const anchors = ["#accueil", "#apropos", "#competences", "#outils", "#projets", "#contact"];

const Footer = () => (
  <footer className="border-t border-primary/20" style={{ backgroundColor: "hsl(232 40% 4%)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-6">
      <p className="font-heading font-bold text-xl text-foreground">
        DAKO C<span className="text-primary">.</span>
      </p>

      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {links.map((l, i) => (
          <a key={l} href={anchors[i]} className="text-sm font-body text-text-secondary hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </nav>

      <div className="flex justify-center gap-3">
        {[
          { href: "https://linkedin.com", label: "Li" },
          { href: "https://twitter.com", label: "X" },
          { href: "https://wa.me/", label: "Wa" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-md border border-border hover:border-primary text-text-secondary hover:text-primary transition-colors text-xs font-body font-bold min-h-[44px]"
          >
            {s.label}
          </a>
        ))}
      </div>

      <div className="space-y-1 text-xs text-muted-foreground font-body">
        <p>© 2026 DAKO Clovisse · Ingénieur Civil en formation · Bénin</p>
        <p>INSTI Lokossa · Génie Civil</p>
      </div>
    </div>
  </footer>
);

export default Footer;
