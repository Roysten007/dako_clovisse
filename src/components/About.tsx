import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { BlueprintIcon, TrussIcon, CompassIcon, HardhatIcon } from "./BtpIcons";

const About = () => (
  <>
    {/* Divider */}
    <div className="w-full h-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 70%)" }}>
        <div className="w-full h-full bg-section-alt" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-primary rounded-full" />
    </div>

    <section id="apropos" className="py-20 lg:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - text */}
          <div className="space-y-6">
            <ScrollReveal>
              <span className="text-xs font-body font-medium uppercase tracking-widest text-primary">Qui suis-je ?</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground leading-tight">
                Je suis <br /><span className="text-primary">DAKO Clovisse</span>
              </h2>
              <div className="w-14 h-[3px] bg-primary rounded-full mt-4" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary font-body leading-relaxed">
                Je m'appelle Clovisse DAKO, étudiant en 2ᵉ année de Génie Civil à l'INSTI Lokossa. Le BTP, c'est plus qu'une filière pour moi — c'est une façon de penser l'espace, de lire un terrain et d'imaginer ce qu'on peut y bâtir. Ce portfolio est ma vitrine numérique — il parle pour moi avant même qu'on se rencontre.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <blockquote className="border-l-2 border-primary pl-4 italic text-text-secondary font-body text-sm">
                "Le numérique avant tout — parce que c'est là que tout commence aujourd'hui."
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex gap-3">
                {[
                  { href: "https://linkedin.com", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { href: "https://wa.me/", label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-border hover:border-primary text-text-secondary hover:text-primary transition-colors min-h-[44px]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - photo + cards */}
          <div className="space-y-4">
            <ScrollReveal>
              <div className="clip-parallelogram w-full max-w-xs mx-auto aspect-[3/4] bg-card-elevated border-2 border-primary/40 flex items-center justify-center">
                <HardhatIcon className="w-16 h-16 text-primary/30" />
              </div>
              <div className="text-center mt-3">
                <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-body font-medium">
                  Génie Civil · BTP
                </span>
              </div>
            </ScrollReveal>

            <div className="grid gap-3 mt-4">
              {[
                { icon: BlueprintIcon, title: "Plans & Conception", tools: "ArchiCAD · AutoCAD" },
                { icon: TrussIcon, title: "Analyse Structurelle", tools: "Robot · Revit" },
                { icon: CompassIcon, title: "Étude de Terrain", tools: "Topographie · Faisabilité" },
              ].map((s, i) => (
                <ScrollReveal key={i} delay={0.1 * i}>
                  <div className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                    <s.icon className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-body font-medium text-foreground">{s.title}</p>
                      <p className="text-xs text-text-secondary">{s.tools}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-primary/20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter target={2} suffix="+" label="Années de formation" />
          <AnimatedCounter target={4} label="Logiciels maîtrisés" />
          <AnimatedCounter target={3} label="Projets en cours" />
          <AnimatedCounter target={1} label="École d'excellence" />
        </div>
      </div>
    </section>
  </>
);

export default About;
