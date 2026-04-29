import Link from "next/link";
import { FadeInSection } from "@/components/fade-in-section";

export function HomeContactSection() {
  return (
    <FadeInSection className="section-band section-band--soft">
      <div className="als-container">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="surface-card-dark p-8 md:p-10">
            <p className="eyebrow text-[#c8a96a]">Office</p>
            <h2 className="mt-4 text-4xl text-white md:text-5xl">New Delhi office and direct access</h2>
            <div className="mt-8 space-y-6 text-[#d7e0ea]">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#c8a96a]">Address</p>
                <p className="mt-2">401, Apex Chambers, Connaught Place</p>
                <p>New Delhi, India 110001</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#c8a96a]">Contact</p>
                <p className="mt-2">+91 72848 72848</p>
                <p>contact@alphalegal.in</p>
              </div>
            </div>
          </article>

          <article className="surface-card p-8 md:p-10">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl text-[#0b1c2c] md:text-5xl">
              Begin with a confidential consultation
            </h2>
            <p className="mt-5 max-w-2xl text-base text-[#5e6c7b]">
              Share the matter, your timeline, and the outcome you are trying to
              protect. We will respond with the right next legal step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contact the Firm
              </Link>
              <Link href="/consult" className="btn-secondary">
                Request Consultation
              </Link>
            </div>
          </article>
        </div>
      </div>
    </FadeInSection>
  );
}
