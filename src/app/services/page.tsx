import { AppLink } from "@/components/app-link";
import { FadeInSection } from "@/components/fade-in-section";
import { ServiceCard } from "@/components/service-card";
import { useDocumentMeta } from "@/lib/meta";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  useDocumentMeta({
    title: "Services",
    description:
      "Explore Alpha Legal Solutions practice areas across corporate, disputes, property, compliance, employment, arbitration, and other legal services.",
  });

  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero">
        <p className="eyebrow">Services</p>
        <h1 className="page-title mt-5">Legal expertise across critical practice areas</h1>
        <p className="page-copy mt-6 max-w-3xl">
          Our service architecture combines strategic advisory, dispute management,
          and courtroom execution for businesses and private clients.
        </p>
      </FadeInSection>

      <FadeInSection className="section-divider mt-16 pt-12">
        <div className="section-head">
          <div>
            <h2 className="section-title">Practice Areas</h2>
            <p className="section-copy mt-3 max-w-2xl">
              Each mandate is handled with a structured legal strategy, clear risk
              framing, and practical execution support.
            </p>
          </div>
          <AppLink href="/consult" className="btn-secondary">
            Request Consultation
          </AppLink>
        </div>

        <div className="services-grid mt-10">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
