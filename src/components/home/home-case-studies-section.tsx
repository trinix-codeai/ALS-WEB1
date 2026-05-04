import { AppLink } from "@/components/app-link";
import { FadeInSection } from "@/components/fade-in-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/site-data";

export function HomeCaseStudiesSection() {
  return (
    <FadeInSection className="section-band">
      <div className="als-container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2 className="section-title mt-4">Proof of structured legal thinking in action</h2>
          </div>
          <AppLink href="/case-studies" className="link-underline text-sm text-[#0b1c2c] hover:text-[#4fd1c5]">
            Browse all case studies
          </AppLink>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
