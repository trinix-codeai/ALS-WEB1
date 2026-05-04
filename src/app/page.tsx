import dynamic from "next/dynamic";
import { HomeHeroSection } from "@/components/home/home-hero-section";

const HomeServicesSection = dynamic(() =>
  import("@/components/home/home-services-section").then((mod) => mod.HomeServicesSection),
);
const HomeCaseStudiesSection = dynamic(() =>
  import("@/components/home/home-case-studies-section").then(
    (mod) => mod.HomeCaseStudiesSection,
  ),  
);
const HomeValuesSection = dynamic(() =>
  import("@/components/home/home-values-section").then((mod) => mod.HomeValuesSection),
);
const HomeContactSection = dynamic(() =>
  import("@/components/home/home-contact-section").then((mod) => mod.HomeContactSection),
);

export default function Home() {
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
