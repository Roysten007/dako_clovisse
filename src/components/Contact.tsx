import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xovqpzgq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "hsl(232 36% 8%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Travaillons ensemble</h2>
          <p className="text-text-secondary font-body mt-3">
            Un projet, une question, une opportunité ? Je suis disponible pour en discuter.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <ScrollReveal>
            {submitted ? (
              <div className="h-full flex items-center justify-center p-8 rounded-xl bg-card border border-primary/30 text-center shadow-[0_0_30px_rgba(255,180,0,0.1)]">
                <div>
                  <p className="text-primary font-body font-bold text-xl">Message envoyé !</p>
                  <p className="text-text-secondary font-body text-sm mt-3">Je vous répondrai très bientôt.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  required
                  className="w-full h-[72px] px-6 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:shadow-[0_0_20px_rgba(255,180,0,0.2)] text-foreground font-body text-sm transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  required
                  className="w-full h-[72px] px-6 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:shadow-[0_0_20px_rgba(255,180,0,0.2)] text-foreground font-body text-sm transition-all"
                />
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Dites-moi en quoi je peux vous aider..."
                    required
                    className="w-full h-[72px] px-6 py-6 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:shadow-[0_0_20px_rgba(255,180,0,0.2)] text-foreground font-body text-sm resize-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-[72px] bg-primary text-primary-foreground font-body font-bold rounded-xl hover:brightness-110 transition-all text-sm shadow-[0_0_25px_rgba(255,180,0,0.3)] hover:shadow-[0_0_35px_rgba(255,180,0,0.5)]"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", text: "Voir mon profil" },
                { label: "WhatsApp", href: "https://wa.me/22955836540", text: "Me contacter" },
                { label: "Email", href: "mailto:dakowegbe@gmail.com", text: "Envoyer un email" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 px-6 h-[72px] rounded-xl bg-card border border-border hover:border-primary transition-all group hover:shadow-[0_0_20px_rgba(255,180,0,0.2)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <span className="font-body font-bold text-xs">{c.label[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-body font-bold text-foreground">{c.label}</p>
                    <p className="text-[10px] uppercase tracking-widest text-text-secondary group-hover:text-primary transition-colors">{c.text}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-5 px-6 h-[72px] rounded-xl bg-card border border-border hover:border-primary transition-all group hover:shadow-[0_0_20px_rgba(255,180,0,0.2)]">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm">📍</span>
                </div>
                <p className="text-sm font-body font-medium text-text-secondary">Bénin 🇧🇯 · INSTI Lokossa</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
