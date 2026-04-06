import ScrollReveal from "./ScrollReveal";

const socials = [
  { label: "Voir mon profil professionnel", href: "https://linkedin.com", platform: "LinkedIn", filled: false },
  { label: "Suivre ma progression BTP", href: "https://instagram.com", platform: "Instagram", filled: false },
  { label: "Me contacter directement", href: "https://wa.me/", platform: "WhatsApp", filled: true },
];

const SocialSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Suivez ma progression</h2>
        <p className="text-text-secondary font-body mt-3 max-w-xl mx-auto">
          Je documente mon parcours, mes apprentissages et mes projets en cours sur les réseaux. Rejoignez la communauté avant que les projets soient terminés.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-4 mt-10">
        {socials.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-4 px-6 rounded-lg font-body font-semibold text-sm transition-all duration-300 min-h-[44px] ${
                s.filled
                  ? "bg-primary text-primary-foreground hover:brightness-110"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {s.platform} — {s.label}
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialSection;
