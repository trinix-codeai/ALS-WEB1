import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/case-study-grid";
import { FadeInSection } from "@/components/fade-in-section";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore legal case studies from Alpha Legal Solutions across corporate, criminal, family, property, IP, and litigation matters.",
};

export default function CaseStudiesPage() {
  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero">
        <p className="eyebrow">Case Studies</p>
        <h1 className="page-title mt-5">
          Legal Outcomes Built on Precision and Strategy
        </h1>
        <p className="page-copy mt-6 max-w-2xl">
          A selection of matters showing how structured legal thinking and timely
          execution drive measurable client outcomes.
        </p>
      </FadeInSection>

      <FadeInSection className="section-divider mt-16 pt-12">
        <CaseStudyGrid />
      </FadeInSection>
    </div>
  );
}
