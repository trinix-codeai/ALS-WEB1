import Link from "next/link";
import { FadeInSection } from "@/components/fade-in-section";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export function HomeServicesSection() {
  return (
    <FadeInSection className="als-container section-block">
      <div className="section-head">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-4">Legal services designed for decisive outcomes</h2>
        </div>
        <p className="section-copy max-w-xl">
          From corporate structuring to sensitive disputes, our practice is built to
          give clients clarity, speed, and strong legal positioning.
        </p>
      </div>

      <div className="services-grid mt-10">
        {services.slice(0, 8).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/services" className="btn-secondary">
          View All Services
        </Link>
      </div>
    </FadeInSection>
  );
}
