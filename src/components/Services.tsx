import { BlueprintIcon, TrussIcon, CompassIcon } from "./BtpIcons";

const serviceCards = [
  { 
    icon: BlueprintIcon, 
    title: "Plans & Conception", 
    description: "Conception de plans architecturaux détaillés et modélisation 3D pour tous types de structures.",
    tools: "ArchiCAD · AutoCAD" 
  },
  { 
    icon: TrussIcon, 
    title: "Analyse Structurelle", 
    description: "Calculs de structures, dimensionnement des éléments porteurs et vérification de stabilité.",
    tools: "Robot · Revit" 
  },
  { 
    icon: CompassIcon, 
    title: "Étude de Terrain", 
    description: "Analyse topographique, études de faisabilité et implantation précise sur site.",
    tools: "Topographie · Faisabilité" 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "hsl(232 36% 8%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-body font-bold uppercase tracking-widest text-primary">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mt-2 mb-4">
            Mes Services
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(255,180,0,0.8)] mb-6" />
          <p className="text-text-secondary font-body max-w-2xl mx-auto text-base">
            Des solutions d'ingénierie civile complètes, alliant précision technique et innovation numérique.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((service, i) => (
            <div
              key={i}
              className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 flex flex-col shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,180,0,0.35)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(255,180,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,180,0,0.4)]">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary font-body text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Tools footer */}
              <div className="pt-5 border-t border-border/50">
                <p className="text-[10px] font-body font-bold uppercase tracking-widest text-primary mb-1">
                  Outils & Logiciels
                </p>
                <p className="text-xs font-body text-foreground/80">{service.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
