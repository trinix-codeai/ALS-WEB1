import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/site-data";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="case-card card-lift">
      <div className="case-card__media">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="case-card__body">
        <p className="case-card__category">{study.category}</p>
        <h3 className="case-card__title">{study.title}</h3>
        <p className="case-card__summary">{study.summary}</p>
        <Link href={`/case-studies/${study.slug}`} className="service-card__link mt-5">
          View Case
        </Link>
      </div>
    </article>
  );
}
