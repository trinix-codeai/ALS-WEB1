import { FadeInSection } from "@/components/fade-in-section";

const values = [
  {
    title: "Precision",
    text: "Every matter is framed with disciplined legal analysis and an execution plan that can hold under pressure.",
  },
  {
    title: "Confidentiality",
    text: "Sensitive mandates are managed with discretion, controlled communication, and client-first handling.",
  },
  {
    title: "Commercial Judgment",
    text: "We balance legal risk with real-world timelines, leverage, and decision-making needs.",
  },
];

export function HomeValuesSection() {
  return (
    <FadeInSection className="als-container section-block">
      <div className="section-head">
        <div>
          <p className="eyebrow">Values</p>
          <h2 className="section-title mt-4">Measured advice. Modern execution. Trusted counsel.</h2>
        </div>
        <p className="section-copy max-w-xl">
          The firm is structured to feel calm, prepared, and exacting even in moments
          of urgency. That discipline shows up in every filing, hearing, and client decision.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          {values.map((value) => (
            <article key={value.title} className="surface-card p-7">
              <h3 className="text-2xl text-[#0b1c2c]">{value.title}</h3>
              <p className="mt-3 text-sm text-[#5e6c7b]">{value.text}</p>
            </article>
          ))}
        </div>

        <article className="surface-card-dark flex flex-col justify-between p-8 md:p-10">
          <div>
            <p className="eyebrow text-[#c8a96a]">Firm Ethos</p>
            <h3 className="mt-4 text-4xl text-white md:text-5xl">
              Legal strategy should feel composed, not chaotic.
            </h3>
          </div>
          <p className="mt-6 max-w-xl text-[#d7e0ea]">
            We combine advisory depth with courtroom readiness so clients move from
            uncertainty to a clear legal position without noise, delay, or template thinking.
          </p>
        </article>
      </div>
    </FadeInSection>
  );
}
