import ScrollReveal from "./ScrollReveal";
import { BuildingIcon, CalculatorIcon, TerrainIcon, DigitalIcon } from "./BtpIcons";

const pillars = [
  { icon: BuildingIcon, title: "Fonctionnel", desc: "Chaque conception répond à un besoin réel, pas à une esthétique vide." },
  { icon: CalculatorIcon, title: "Rentable", desc: "Une bonne structure respecte aussi les ressources disponibles." },
  { icon: TerrainIcon, title: "Adapté au terrain", desc: "Pas de solution universelle. Chaque projet commence par une lecture fine du contexte." },
  { icon: DigitalIcon, title: "Numérique", desc: "Le digital n'est pas une option. C'est le premier terrain sur lequel je construis ma réputation." },
];

const Vision = () => (
  <section className="py-20 lg:py-28 bg-card blueprint-grid">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Ma vision du métier</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-5 rounded-lg bg-background/50 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 text-center h-full hover:shadow-[0_0_30px_-10px_rgba(255,180,0,0.4)]">
              <p.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-body font-semibold text-foreground text-sm mb-2">{p.title}</h3>
              <p className="text-xs text-text-secondary font-body leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} className="text-center mt-14 max-w-2xl mx-auto">
        <blockquote className="text-lg sm:text-xl font-body italic text-text-secondary leading-relaxed">
          "Répondre aux objectifs du client par une conception <span className="text-primary">fonctionnelle</span>, <span className="text-primary">rentable</span> et <span className="text-primary">adaptée au contexte</span>."
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default Vision;
