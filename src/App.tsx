import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import ServiceDetailPage from "@/app/services/[slug]/page";
import CaseStudiesPage from "@/app/case-studies/page";
import CaseStudyDetailPage from "@/app/case-studies/[slug]/page";
import ContactPage from "@/app/contact/page";
import ConsultPage from "@/app/consult/page";
import TeamProfilePage from "@/app/team/[slug]/page";
import NotFoundPage from "@/app/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="site-main flex-1 pt-28 md:pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<Navigate replace to="/about" />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/legal-services" element={<Navigate replace to="/services" />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<Navigate replace to="/contact" />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/consult-a-lawyer" element={<Navigate replace to="/consult" />} />
          <Route path="/team/:slug" element={<TeamProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
