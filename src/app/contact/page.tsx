import { AppLink } from "@/components/app-link";
import { ContactForm } from "@/components/contact-form";
import { FadeInSection } from "@/components/fade-in-section";
import { useDocumentMeta } from "@/lib/meta";

export default function ContactPage() {
  useDocumentMeta({
    title: "Contact",
    description:
      "Connect with Alpha Legal Solutions for confidential legal advisory and consultation support.",
  });

  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title mt-5 max-w-4xl">
          Trusted Legal Counsel, When It Matters Most
        </h1>
        <p className="page-copy mt-6 max-w-2xl">
          Confidential, strategic legal support tailored to your needs.
        </p>
      </FadeInSection>

      <FadeInSection className="section-divider mt-16 pt-12">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="info-shell-grid p-6 md:p-8">
            <h2 className="text-3xl text-white">Office Details</h2>
            <div className="mt-7 space-y-7 text-[#b8c2cc]">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Address</p>
                <p className="mt-2">401, Apex Chambers, Connaught Place</p>
                <p>New Delhi, India 110001</p>
              </div>
              <div className="section-divider pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Phone</p>
                <a href="tel:+917284872848" className="link-underline mt-2 inline-block text-xl text-white">
                  +91 72848 72848
                </a>
              </div>
              <div className="section-divider pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">Email</p>
                <a
                  href="mailto:contact@alphalegal.in"
                  className="link-underline mt-2 inline-block text-white"
                >
                  contact@alphalegal.in
                </a>
              </div>
              <p className="section-divider pt-6 text-sm">Available Mon-Sat | 9:00 AM - 7:00 PM</p>
              <AppLink
                href="https://maps.google.com/?q=Connaught%20Place%20New%20Delhi"
                target="_blank"
                className="link-underline inline-block text-sm text-[#c8a96a] hover:text-[#d4b879]"
              >
                Open Google Maps
              </AppLink>
            </div>
          </div>

          <div className="form-shell-light p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#9d7c3f]">Consultation</p>
            <h2 className="mt-3 text-3xl text-[#0b1c2c]">Request Consultation</h2>
            <ContactForm />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-16 pt-12">
        <div className="overflow-hidden rounded-[1.75rem] border border-[#dce5ee] shadow-[0_18px_40px_rgba(10,31,53,0.08)]">
          <iframe
            title="Alpha Legal Solutions Office"
            src="https://maps.google.com/maps?q=Connaught%20Place%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-72 w-full md:h-96"
            loading="lazy"
          />
        </div>
      </FadeInSection>
    </div>
  );
}
