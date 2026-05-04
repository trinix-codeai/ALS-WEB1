import { useParams } from "react-router-dom";
import { AppImage } from "@/components/app-image";
import { AppLink } from "@/components/app-link";
import { FadeInSection } from "@/components/fade-in-section";
import { useDocumentMeta } from "@/lib/meta";
import NotFoundPage from "@/app/not-found";
import { caseStudies } from "@/lib/site-data";

function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useDocumentMeta({
    title: study ? study.title : "Case Study Not Found",
    description: study?.summary,
  });

  if (!study) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <section className="detail-hero">
        <div className="absolute inset-0">
          <AppImage
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="detail-hero__overlay" />
        </div>
        <div className="als-container relative z-[2] py-24 md:py-28">
          <p className="eyebrow">{study.category}</p>
          <h1 className="mt-5 max-w-4xl text-5xl text-white md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-[#e6edf5]">{study.summary}</p>
        </div>
      </section>

      <div className="als-container page-shell">
        <FadeInSection className="grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="section-title">Case Breakdown</h2>
            <div className="mt-6 space-y-5">
              <article className="surface-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Challenge</p>
                <p className="mt-2 text-sm text-[#5e6c7b]">{study.challenge}</p>
              </article>
              <article className="surface-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Approach</p>
                <p className="mt-2 text-sm text-[#5e6c7b]">{study.approach}</p>
              </article>
              <article className="surface-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Outcome</p>
                <p className="mt-2 text-sm text-[#5e6c7b]">{study.outcome}</p>
              </article>
            </div>
          </div>

          <aside className="surface-card p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Highlights</p>
            <ul className="mt-4 space-y-3 text-sm text-[#5e6c7b]">
              {study.highlights.map((item) => (
                <li key={item} className="border-b border-[#e6edf4] pb-2">
                  {item}
                </li>
              ))}
            </ul>
            <AppLink href="/consult" className="btn-primary mt-8">
              Book Consultation
            </AppLink>
          </aside>
        </FadeInSection>
      </div>
    </div>
  );
}
