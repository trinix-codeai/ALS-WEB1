import { AppLink } from "@/components/app-link";
import { useDocumentMeta } from "@/lib/meta";

export default function NotFoundPage() {
  useDocumentMeta({
    title: "Page Not Found",
    description: "The requested page could not be found.",
  });

  return (
    <div className="als-container page-shell">
      <section className="page-hero">
        <p className="eyebrow">404</p>
        <h1 className="page-title mt-5">Page not found</h1>
        <p className="page-copy mt-6 max-w-2xl">
          The page you are trying to reach does not exist or the link is no longer valid.
        </p>
        <AppLink href="/" className="btn-primary mt-8">
          Return Home
        </AppLink>
      </section>
    </div>
  );
}
