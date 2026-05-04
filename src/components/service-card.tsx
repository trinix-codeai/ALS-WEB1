import { AppLink } from "@/components/app-link";
import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/lib/site-data";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card card-lift">
      <div className="service-card__icon">
        <ServiceIcon slug={service.slug} className="h-14 w-14" />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.shortDescription}</p>
        <AppLink href={`/services/${service.slug}`} className="service-card__link">
          Learn More
        </AppLink>
      </div>
    </article>
  );
}
