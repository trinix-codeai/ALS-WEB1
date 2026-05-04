import { AppImage } from "@/components/app-image";
import { AppLink } from "@/components/app-link";

const heroActions = [
  { href: "/consult", label: "Talk to Lawyer", className: "btn-primary" },
  { href: "/contact", label: "Case Review", className: "btn-secondary-dark" },
];

export function HomeHeroSection() {
  return (
    <section className="hero-shell">
      <div className="hero-panel">
        <div className="hero-copy">
          <div className="hero-badge">Alpha Legal Solutions</div>
          <h1 className="hero-title">
            <span>Justice.</span>
            <span className="hero-title__accent">Guidance.</span>
            <span>Protection.</span>
          </h1>
          <p className="hero-summary">
            Expert legal guidance and instant access to verified lawyers for disputes,
            advisory, documentation, and strategic legal support.
          </p>

          <div className="hero-search">
            <div className="hero-search__input">Describe your legal problem...</div>
            <AppLink href="/consult" className="hero-search__cta">
              Get Guidance
            </AppLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {heroActions.map((action) => (
              <AppLink key={action.label} href={action.href} className={action.className}>
                {action.label}
              </AppLink>
            ))}
          </div>
        </div>

        <div className="hero-visual-shell">
          <AppImage
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=80"
            alt="Professional senior lawyer portrait"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
          <div className="hero-note">
            <p className="hero-note__eyebrow">Live Consultation</p>
            <p className="hero-note__text">
              120+ lawyers online and ready to help with confidential legal support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
