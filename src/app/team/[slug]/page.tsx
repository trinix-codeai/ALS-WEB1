import { useParams } from "react-router-dom";
import { AppImage } from "@/components/app-image";
import { FadeInSection } from "@/components/fade-in-section";
import { useDocumentMeta } from "@/lib/meta";
import NotFoundPage from "@/app/not-found";
import { teamMembers } from "@/lib/site-data";

function getMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export default function TeamProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getMember(slug) : undefined;

  useDocumentMeta({
    title: member ? member.name : "Team Member Not Found",
    description: member
      ? `${member.name} - ${member.role} at Alpha Legal Solutions`
      : "The requested team profile could not be found.",
  });

  if (!member) {
    return <NotFoundPage />;
  }

  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero-grid">
        <div className="surface-card overflow-hidden">
          <div className="relative h-[28rem]">
            <AppImage
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-[#0b1c2c]/14" />
          </div>
        </div>

        <div>
          <p className="eyebrow">Team Profile</p>
          <h1 className="page-title mt-5">{member.name}</h1>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#c8a96a]">
            {member.role}
          </p>
          <p className="page-copy mt-6 max-w-2xl">{member.summary}</p>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-20 pt-14 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="section-title">Professional Overview</h2>
          <p className="mt-5 text-[#5e6c7b]">{member.bio}</p>
        </div>
        <div className="surface-card p-6 md:p-8">
          <h2 className="text-2xl text-[#0b1c2c]">Focus Areas</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#5e6c7b]">
            {member.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </div>
  );
}
