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
              <div className="p-8 rounded-xl bg-card border border-primary/30 text-center">
                <p className="text-primary font-body font-semibold text-lg">Message envoyé !</p>
                <p className="text-text-secondary font-body text-sm mt-2">Je vous répondrai dès que possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom complet"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-body text-sm min-h-[44px] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre adresse email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-body text-sm min-h-[44px] transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Dites-moi en quoi je peux vous aider..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-body text-sm resize-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all min-h-[44px] text-sm"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com", text: "Voir mon profil" },
                { label: "WhatsApp", href: "https://wa.me/", text: "Me contacter" },
                { label: "Email", href: "mailto:contact@dako.dev", text: "Envoyer un email" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all group min-h-[44px]"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-body font-bold text-xs">{c.label[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">{c.label}</p>
                    <p className="text-xs text-text-secondary">{c.text}</p>
                  </div>
                </a>
              ))}
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm font-body text-text-secondary">📍 Bénin 🇧🇯 · INSTI Lokossa</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
