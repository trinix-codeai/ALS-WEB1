import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeInSection } from "@/components/fade-in-section";
import { teamMembers } from "@/lib/site-data";

type TeamProfilePageProps = {
  params: Promise<{ slug: string }>;
};

function getMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: TeamProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);

  if (!member) {
    return { title: "Team Member Not Found" };
  }

  return {
    title: member.name,
    description: `${member.name} - ${member.role} at Alpha Legal Solutions`,
  };
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
  const { slug } = await params;
  const member = getMember(slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero-grid">
        <div className="surface-card overflow-hidden">
          <div className="relative h-[28rem]">
            <Image
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
