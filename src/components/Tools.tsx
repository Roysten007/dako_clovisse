import ScrollReveal from "./ScrollReveal";
import AnimatedProgressBar from "./AnimatedProgressBar";

const ArchiCADLogo = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
    <rect width="80" height="80" rx="12" fill="#E2132B"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">AC</text>
  </svg>
);

const RobotStructuralLogo = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
    <rect width="80" height="80" rx="12" fill="#0696D7"/>
    <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">ROBOT</text>
    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontFamily="Arial, sans-serif">STRUCTURAL</text>
  </svg>
);

const RevitLogo = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
    <rect width="80" height="80" rx="12" fill="#3E5DA8"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">Rv</text>
  </svg>
);

const AutoCADLogo = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
    <rect width="80" height="80" rx="12" fill="#0696D7"/>
    <path d="M40 20 L22 55 L40 48 L58 55 Z" fill="white" opacity="0.2"/>
    <path d="M40 20 L22 55 L40 48 L58 55 Z" stroke="white" strokeWidth="2.5" fill="none"/>
    <line x1="28" y1="47" x2="52" y2="47" stroke="white" strokeWidth="2.5"/>
    <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">AutoCAD</text>
  </svg>
);

const tools = [
  {
    Logo: ArchiCADLogo,
    title: "ArchiCAD",
    desc: "Modélisation BIM, plans architecturaux et coupes techniques",
    progress: 85,
    badge: "BIM & Plans",
  },
  {
    Logo: RobotStructuralLogo,
    title: "Robot Structural",
    desc: "Calcul et vérification des structures béton et métal",
    progress: 75,
    badge: "Calcul Structure",
  },
  {
    Logo: RevitLogo,
    title: "Revit",
    desc: "Modélisation 3D et coordination BIM multi-disciplinaire",
    progress: 70,
    badge: "BIM 3D",
  },
  {
    Logo: AutoCADLogo,
    title: "AutoCAD",
    desc: "Dessin technique 2D/3D et mise en plan professionnelle",
    progress: 90,
    badge: "Dessin Technique",
  },
];

const Tools = () => (
  <section id="outils" className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal className="text-center mb-12">
        <span className="text-xs font-body font-medium uppercase tracking-widest text-primary">Logiciels</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mt-2">Mes outils de conception</h2>
        <p className="text-text-secondary font-body mt-3 max-w-2xl mx-auto">
          De l'esquisse au rendu final — je maîtrise les logiciels qui font la différence dans le BTP moderne.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {tools.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 h-full hover:shadow-[0_0_30px_-5px_rgba(255,180,0,0.3)]">
              <div className="w-full h-32 rounded-lg bg-card-elevated flex items-center justify-center mb-4 overflow-hidden">
                <t.Logo />
              </div>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-body font-medium uppercase tracking-wider bg-primary/10 text-primary mb-2">
                {t.badge}
              </span>
              <h3 className="text-lg font-body font-semibold text-foreground">{t.title}</h3>
              <p className="text-sm text-text-secondary font-body mt-1 mb-4">{t.desc}</p>
              <AnimatedProgressBar value={t.progress} label="Maîtrise" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3} className="text-center mt-10">
        <p className="text-sm text-text-secondary font-body italic">
          Ces outils me permettent de livrer des rendus propres, lisibles et professionnels — même en phase d'apprentissage.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Tools;
