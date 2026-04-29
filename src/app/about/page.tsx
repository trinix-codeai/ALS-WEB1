import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeInSection } from "@/components/fade-in-section";
import { teamMembers } from "@/lib/site-data";

const values = [
  {
    title: "Integrity",
    text: "We advise with independence, discretion, and uncompromising legal ethics.",
  },
  {
    title: "Precision",
    text: "Each matter is managed with structured legal analysis and disciplined execution.",
  },
  {
    title: "Client Focus",
    text: "Strategy is always aligned to client priorities, timelines, and practical outcomes.",
  },
];

const timeline = [
  {
    year: "2012",
    detail: "Firm founded with focus on litigation and high-stakes dispute support.",
  },
  {
    year: "2017",
    detail: "Expanded advisory practice for corporate and regulatory mandates.",
  },
  {
    year: "2022",
    detail: "Built integrated pan-India counsel network for multi-city matters.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Alpha Legal Solutions, our mission, values, team, and legal experience timeline.",
};

export default function AboutPage() {
  return (
    <div className="als-container page-shell">
      <FadeInSection className="page-hero-grid">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="page-title mt-5">
            Trusted Legal Expertise with Modern Strategic Discipline
          </h1>
          <p className="page-copy mt-6 max-w-2xl">
            Alpha Legal Solutions combines courtroom depth with advisory precision,
            delivering legal intelligence for clients operating in high-stakes
            environments.
          </p>
        </div>
        <div className="surface-card p-7 md:p-9">
          <h2 className="text-2xl text-[#0b1c2c]">Mission & Values</h2>
          <p className="mt-3 text-sm text-[#5e6c7b]">
            We deliver legal solutions that are clear, timely, and outcomes-focused,
            while preserving confidentiality and long-term client trust.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-20 pt-14">
        <h2 className="section-title">Core Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="surface-card p-7 card-lift">
              <h3 className="text-2xl text-[#0b1c2c]">{value.title}</h3>
              <p className="mt-3 text-sm text-[#5e6c7b]">{value.text}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-20 pt-14">
        <div className="section-head">
          <div>
            <h2 className="section-title">Our Team</h2>
            <p className="section-copy mt-3 max-w-2xl">
              Leadership profiles are available directly from each card, giving the
              team section a more intentional and navigable structure.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="surface-card overflow-hidden card-lift"
            >
              <div className="relative h-60">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0b1c2c]/18" />
              </div>
              <div className="p-5">
                <h3 className="text-2xl text-[#0b1c2c]">{member.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#c8a96a]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-[#5e6c7b]">{member.bio}</p>
                <p className="mt-4 text-sm text-[#0b1c2c]">View Profile</p>
              </div>
            </Link>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="section-divider mt-20 pt-14">
        <h2 className="section-title">Experience Timeline</h2>
        <div className="mt-8 space-y-5">
          {timeline.map((item) => (
            <article key={item.year} className="surface-card p-6 card-lift">
              <p className="text-xs uppercase tracking-[0.16em] text-[#c8a96a]">{item.year}</p>
              <p className="mt-2 text-[#5e6c7b]">{item.detail}</p>
            </article>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
