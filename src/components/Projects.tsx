import ScrollReveal from "./ScrollReveal";
import AnimatedProgressBar from "./AnimatedProgressBar";
import { CraneIcon, TerrainIcon, TrussIcon } from "./BtpIcons";

const projects = [
  {
    icon: CraneIcon,
    title: "Conception d'un espace résidentiel",
    discipline: "Architecture · Génie Civil",
    progress: 60,
    badge: "En cours · 60%",
  },
  {
    icon: TerrainIcon,
    title: "Étude de faisabilité — terrain urbain",
    discipline: "Topographie · Urbanisme",
    progress: 40,
    badge: "En cours · 40%",
  },
  {
    icon: TrussIcon,
    title: "Analyse structurelle d'un ouvrage",
    discipline: "Calcul Structure · Revit",
    progress: 30,
    badge: "En cours · 30%",
  },
];

const Projects = () => (
  <section id="projets" className="py-20 lg:py-28" style={{ backgroundColor: "hsl(232 36% 8%)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal className="text-center mb-12">
        <span className="text-xs font-body font-medium uppercase tracking-widest text-primary">Portfolio</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mt-2">Mes projets</h2>
        <p className="text-text-secondary font-body mt-3 max-w-2xl mx-auto">
          Le travail est en cours. Les réalisations arrivent bientôt.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group relative rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1">
              {/* Blurred construction-like bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-card-elevated via-card to-background opacity-80" />
              <div className="absolute inset-0 backdrop-blur-sm" />

              <div className="relative p-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-body font-medium">
                  {p.badge}
                </span>
                <p.icon className="w-10 h-10 text-primary/50" />
                <h3 className="text-base font-body font-semibold text-foreground">{p.title}</h3>
                <p className="text-xs text-text-secondary font-body">{p.discipline}</p>
                <AnimatedProgressBar value={p.progress} />

                {/* Lock overlay on hover */}
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="11" width="14" height="11" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3} className="text-center mt-10">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-primary text-primary font-body font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all min-h-[44px] text-sm"
        >
          Être notifié à la mise en ligne
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default Projects;
