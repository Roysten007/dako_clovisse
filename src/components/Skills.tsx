import ScrollReveal from "./ScrollReveal";
import AnimatedProgressBar from "./AnimatedProgressBar";
import { BlueprintIcon, TerrainIcon, CompassIcon, TrussIcon, CraneIcon } from "./BtpIcons";

const skills = [
  { icon: BlueprintIcon, title: "Lecture & interprétation de plans", value: 80 },
  { icon: TerrainIcon, title: "Analyse et étude de terrain", value: 70 },
  { icon: CompassIcon, title: "Dessin technique / AutoCAD", value: 85 },
  { icon: TrussIcon, title: "Conception structurelle", value: 75 },
  { icon: TerrainIcon, title: "Topographie de base", value: 65 },
  { icon: CraneIcon, title: "Suivi & gestion de chantier BTP", value: 60 },
];

const Skills = () => (
  <section id="competences" className="py-20 lg:py-28" style={{ backgroundColor: "hsl(232 36% 8%)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal className="text-center mb-12">
        <span className="text-xs font-body font-medium uppercase tracking-widest text-primary">Expertise</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mt-2">Ce que je sais faire</h2>
        <p className="text-text-secondary font-body mt-3 max-w-2xl mx-auto">
          Des savoir-faire techniques construits jour après jour, entre la théorie et le chantier.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-5 rounded-lg bg-card border-l-[3px] border-primary hover:border-l-primary hover:-translate-y-1 transition-all duration-300 h-full hover:shadow-[0_0_20px_-5px_rgba(255,180,0,0.2)]">
              <s.icon className="w-8 h-8 text-primary mb-3" />
              <p className="font-body font-medium text-foreground text-sm mb-3">{s.title}</p>
              <AnimatedProgressBar value={s.value} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
