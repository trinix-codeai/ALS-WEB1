import { useParams } from "react-router-dom";
import { AppImage } from "@/components/app-image";
import { AppLink } from "@/components/app-link";
import { FadeInSection } from "@/components/fade-in-section";
import { useDocumentMeta } from "@/lib/meta";
import NotFoundPage from "@/app/not-found";
import { services } from "@/lib/site-data";

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  useDocumentMeta({
    title: service ? service.title : "Service Not Found",
    description: service?.shortDescription,
  });

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <section className="detail-hero">
        <div className="absolute inset-0">
          <AppImage
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="detail-hero__overlay" />
        </div>
        <div className="als-container relative z-[2] py-24 md:py-28">
          <p className="eyebrow">Service Detail</p>
          <h1 className="mt-5 max-w-3xl text-5xl text-white md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#e6edf5]">{service.shortDescription}</p>
        </div>
      </section>

      <div className="als-container page-shell">
        <FadeInSection className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="section-title">Overview</h2>
            <p className="mt-5 text-[#5e6c7b]">{service.overview}</p>
          </div>
          <div className="surface-card p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Book a Consultation</p>
            <p className="mt-3 text-sm text-[#5e6c7b]">
              Speak with our legal team for service-specific strategy and next-step planning.
            </p>
            <AppLink href="/consult" className="btn-primary mt-6">
              Book Consultation
            </AppLink>
          </div>
        </FadeInSection>

        <FadeInSection className="section-divider mt-20 pt-14">
          <h2 className="section-title">Key Services</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {service.keyServices.map((item) => (
              <li key={item} className="surface-card p-5 text-sm text-[#5e6c7b]">
                {item}
              </li>
            ))}
          </ul>
        </FadeInSection>

        <FadeInSection className="section-divider mt-20 pt-14">
          <h2 className="section-title">Process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.processSteps.map((step, index) => (
              <article key={step} className="surface-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">
                  Step 0{index + 1}
                </p>
                <p className="mt-2 text-sm text-[#5e6c7b]">{step}</p>
              </article>
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
