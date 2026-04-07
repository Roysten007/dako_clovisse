import SplitText from "./SplitText";
import FloatingParticles from "./FloatingParticles";
import ScrollReveal from "./ScrollReveal";
import Aurora from "./Aurora";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const socials = [
  { href: "https://www.linkedin.com/in/clovisse-dako-wegbe-a3b225401?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { href: "https://www.facebook.com/profile.php?id=61579292697877", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: "https://wa.me/22955836540", label: "WhatsApp", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
];

const PortraitCard = ({ small = false }) => (
  <div className={`relative group ${small ? "max-w-[260px] sm:max-w-[300px] mx-auto" : "w-full max-w-sm"}`}>
    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
    <div className="relative">
      <div className="clip-parallelogram w-full aspect-[4/5] bg-card-elevated border-2 border-primary/40 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-primary shadow-[0_0_40px_-10px_rgba(255,180,0,0.4)] hover:shadow-[0_0_60px_-5px_rgba(255,180,0,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src="/images/hero-portrait.jpg"
          alt="DAKO Clovisse - Hero"
          className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-card-elevated to-transparent pt-12 text-center sm:text-left">
          <p className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-primary mb-1">Expert BTP</p>
          <p className={`font-heading font-extrabold text-white ${small ? "text-base" : "text-xl"}`}>Génie Civil</p>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="accueil" ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#FFB400', '#FFD700', '#FFB400']}
          amplitude={1.0}
          blend={0.5}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
      </div>
      <FloatingParticles />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 flex flex-col justify-center">

        {/* Mobile/Tablet */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <PortraitCard small />
          </motion.div>

          <div className="flex flex-col items-center text-center gap-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-xs font-body font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Génie Civil · BTP · INSTI Lokossa
            </motion.div>

            <h1 className="font-heading font-extrabold text-foreground leading-tight w-full" style={{ fontSize: "clamp(2rem, 8vw, 3rem)" }}>
              <SplitText text="Je construis l'avenir, une structure à la fois." textAlign="center" className="w-full" tag="span" threshold={0.01} rootMargin="0px" />
            </h1>

            <div className="w-14 h-[3px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,180,0,0.8)]" />

            <p className="text-text-secondary font-body leading-relaxed max-w-sm text-sm sm:text-base">
              Étudiant passionné par la conception structurelle et l'analyse de terrain. Je construis ma réputation dans le numérique avant même d'entrer dans la vie active.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#competences" className="px-6 py-3 bg-primary text-primary-foreground font-body font-bold rounded-xl hover:brightness-110 transition-all min-h-[48px] flex items-center justify-center text-sm shadow-[0_5px_20px_rgba(255,180,0,0.3)]">
                Voir mes compétences
              </a>
              <a 
                href="https://wa.me/22955836540" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-body font-semibold rounded-xl hover:border-primary hover:text-primary transition-all min-h-[48px] flex items-center justify-center text-sm"
              >
                Me contacter
              </a>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:border-primary text-text-secondary hover:text-primary transition-all duration-300 bg-card/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,180,0,0.3)]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center w-full">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-body font-bold uppercase tracking-widest w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Génie Civil · BTP · INSTI Lokossa
            </motion.div>

            <h1 className="font-heading font-extrabold text-foreground leading-tight" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              <SplitText text="Je construis l'avenir, une structure à la fois." textAlign="left" className="w-full" tag="span" threshold={0.01} rootMargin="0px" />
            </h1>

            <div className="w-14 h-[3px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,180,0,0.8)]" />

            <p className="text-text-secondary font-body leading-relaxed max-w-lg text-base">
              Étudiant passionné par la conception structurelle et l'analyse de terrain. Je construis ma réputation dans le numérique avant même d'entrer dans la vie active.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#competences" className="px-6 py-3 bg-primary text-primary-foreground font-body font-bold rounded-xl hover:brightness-110 transition-all min-h-[48px] flex items-center text-sm shadow-[0_5px_20px_rgba(255,180,0,0.3)]">
                Voir mes compétences
              </a>
              <a 
                href="https://wa.me/22955836540" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-body font-semibold rounded-xl hover:border-primary hover:text-primary transition-all min-h-[48px] flex items-center text-sm"
              >
                Me contacter
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:border-primary text-text-secondary hover:text-primary transition-all duration-300 bg-card/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,180,0,0.3)]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-center pb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-sm relative"
            >
              <PortraitCard />
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollReveal className="relative z-10 text-center pb-8 mt-auto">
        <p className="text-xs text-muted-foreground font-body mb-2 uppercase tracking-widest">Découvrir l'univers</p>
        <svg className="w-5 h-5 mx-auto text-primary animate-bounce-down" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 8l5 5 5-5" />
        </svg>
      </ScrollReveal>
    </section>
  );
};

const HardhatSVG = ({ small = false }: { small?: boolean }) => (
  <svg className={`${small ? "w-14 h-14" : "w-20 h-20"} text-primary/30`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M6 20C6 20 6 14 16 10C26 14 26 20 26 20" />
    <path d="M4 20H28V24C28 25 27 26 26 26H6C5 26 4 25 4 24V20Z" />
    <line x1="16" y1="6" x2="16" y2="10" />
    <circle cx="16" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

export default Hero;
