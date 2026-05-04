import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeServicesSection } from "@/components/home/home-services-section";
import { HomeCaseStudiesSection } from "@/components/home/home-case-studies-section";
import { HomeValuesSection } from "@/components/home/home-values-section";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { useDocumentMeta } from "@/lib/meta";

export default function HomePage() {
  useDocumentMeta();

  return (
    <div>
      <HomeHeroSection />
      <HomeServicesSection />
      <HomeCaseStudiesSection />
      <HomeValuesSection />
      <HomeContactSection />
    </div>
  );
}
