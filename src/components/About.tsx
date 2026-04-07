import { motion } from "framer-motion";
import { HardhatIcon, BlueprintIcon } from "./BtpIcons";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="apropos" className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image & Floating Cards */}
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-[0_0_40px_rgba(255,180,0,0.15)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
              <img
                src="/images/about-portrait.jpg"
                alt="DAKO Clovisse - Génie Civil"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-primary/30">
                    <HardhatIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-body font-bold text-primary uppercase tracking-widest">Expertise BTP</p>
                    <p className="text-sm font-heading text-white">Génie Civil</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Blueprint Background element */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] -z-10" />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal>
              <span className="text-xs font-body font-bold uppercase tracking-widest text-primary mb-2 block">
                Qui suis-je ?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground mb-6 leading-tight">
                Je suis <span className="text-primary block mt-1">DAKO Clovisse</span>
              </h2>
              
              <div className="w-20 h-1 bg-primary rounded-full mb-8 shadow-[0_0_10px_rgba(255,180,0,0.5)]" />
              
              <div className="space-y-6 text-text-secondary font-body leading-relaxed">
                <p className="text-lg text-foreground/90 font-medium">
                  Je m'appelle Clovisse DAKO, étudiant en 2ᵉ année de Génie Civil à l'INSTI Lokossa. Le BTP, c'est plus qu'une filière pour moi — c'est une façon de penser l'espace, de lire un terrain et d'imaginer ce qu'on peut y bâtir.
                </p>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card-elevated border border-primary/20 border-l-4 border-l-primary relative overflow-hidden group hover:border-primary/50 transition-colors shadow-[0_5px_20px_rgba(255,180,0,0.05)]">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BlueprintIcon className="w-24 h-24 text-primary" />
                </div>
                <p className="relative z-10 text-lg font-heading italic text-foreground/90">
                  "Le numérique avant tout — parce que c'est là que tout commence aujourd'hui."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
