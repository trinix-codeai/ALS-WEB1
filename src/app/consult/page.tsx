import type { Metadata } from "next";
import { ConsultForm } from "@/components/consult-form";
import { FadeInSection } from "@/components/fade-in-section";

const expectations = [
  "Submit Your Details",
  "Initial Consultation",
  "Clear Legal Direction",
];

export const metadata: Metadata = {
  title: "Consult",
  description:
    "Book a confidential legal consultation with Alpha Legal Solutions.",
};

export default function ConsultPage() {
  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero-grid">
        <div>
          <p className="eyebrow">Consultation</p>
          <h1 className="page-title mt-5 max-w-3xl">
            Speak with a Lawyer Who Understands Your Case
          </h1>
          <p className="page-copy mt-6 max-w-2xl">
            Confidential legal assessment with clear recommendations, timelines,
            and strategic next steps.
          </p>
          <a href="#consult-form" className="btn-primary mt-8">
            Consult a Lawyer
          </a>
        </div>
        <div className="surface-card p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Trust Signals</p>
          <ul className="mt-4 space-y-3 text-sm text-[#5e6c7b]">
            <li>Client Confidentiality Guaranteed</li>
            <li>Experienced Legal Professionals</li>
            <li>Responsive Within 24 Hours</li>
          </ul>
        </div>
      </FadeInSection>

      <FadeInSection id="consult-form" className="section-divider mt-20 pt-14">
        <div className="max-w-4xl">
          <h2 className="section-title">Consultation Form</h2>
          <div className="form-shell-light mt-8 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-[#9d7c3f]">Private Intake</p>
            <p className="mt-3 max-w-2xl text-sm text-[#516173]">
              Use the form below to outline your issue, preferred service area, and
              contact details. We will review it before the first consultation.
            </p>
            <ConsultForm />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-20 pt-14">
        <h2 className="section-title">What to Expect</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {expectations.map((item, index) => (
            <article key={item} className="surface-card p-6 card-lift">
              <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Step 0{index + 1}</p>
              <p className="mt-2 text-[#0b1c2c]">{item}</p>
            </article>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
