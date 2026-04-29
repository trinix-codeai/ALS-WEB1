export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  image: string;
  keyServices: string[];
  processSteps: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  summary: string;
  focusAreas: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: "Corporate" | "Criminal" | "Family" | "Property" | "IP" | "Litigation";
  summary: string;
  image: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    shortDescription:
      "Strategic advisory for governance, structuring, contracts, and regulatory alignment.",
    overview:
      "We guide founders, boards, and enterprises through high-value decisions with practical legal architecture and risk-aware execution.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Entity structuring and compliance audits",
      "Shareholder and investment agreements",
      "M&A due diligence and transaction documentation",
      "Governance advisory for board and leadership teams",
    ],
    processSteps: [
      "Initial legal risk and objective mapping",
      "Framework design and documentation strategy",
      "Execution support and post-closure compliance guidance",
    ],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    shortDescription:
      "Confidential, decisive representation across investigation, bail, trial, and appeal stages.",
    overview:
      "Our criminal defense team builds strong procedural and evidentiary strategy to protect client rights at every stage.",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Anticipatory and regular bail strategy",
      "Police and investigation-stage representation",
      "Trial defense and cross-examination planning",
      "Appeals and revision petitions",
    ],
    processSteps: [
      "Case file, FIR, and evidence assessment",
      "Defense roadmap and immediate relief actions",
      "Trial and appellate representation",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    shortDescription:
      "Sensitive and structured legal counsel for matrimonial and family matters.",
    overview:
      "We handle family disputes with discretion, balancing legal rigor with the emotional realities of each matter.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Divorce and mutual consent proceedings",
      "Custody, guardianship, and visitation matters",
      "Maintenance and alimony proceedings",
      "Mediation and negotiated settlement support",
    ],
    processSteps: [
      "Conflict and rights assessment",
      "Negotiation-first strategy and documentation",
      "Court representation where required",
    ],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    shortDescription:
      "Legal diligence and dispute support across property acquisition, development, and transfer.",
    overview:
      "We secure property transactions and resolve land disputes through thorough title review and litigation readiness.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Title due diligence and encumbrance checks",
      "Development and sale agreement drafting",
      "Property dispute litigation",
      "Registration and transfer legal support",
    ],
    processSteps: [
      "Document and title verification",
      "Risk notes and transaction structuring",
      "Execution and dispute contingency planning",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortDescription:
      "Brand and innovation protection through registration, enforcement, and strategic defense.",
    overview:
      "We support businesses and creators in securing, monetizing, and enforcing intellectual property rights.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Trademark search, filing, and prosecution",
      "Copyright and design rights advisory",
      "IP infringement and passing-off litigation",
      "Licensing and assignment agreements",
    ],
    processSteps: [
      "IP asset audit and registration plan",
      "Protection and enforcement strategy",
      "Opposition, dispute, and litigation handling",
    ],
  },
  {
    slug: "litigation",
    title: "Litigation",
    shortDescription:
      "End-to-end representation for complex civil and commercial disputes.",
    overview:
      "Our litigation practice combines disciplined pleading strategy, procedural control, and courtroom advocacy for measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1528744598421-b7f70e12dfd4?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Civil and commercial dispute representation",
      "Interim relief and injunction applications",
      "Contractual and recovery litigation",
      "Execution and decree enforcement proceedings",
    ],
    processSteps: [
      "Claim viability and jurisdiction strategy",
      "Pleadings, evidence, and hearing preparation",
      "Trial support and enforcement execution",
    ],
  },
  {
    slug: "employment-labor-law",
    title: "Employment & Labor Law",
    shortDescription:
      "Workplace advisory, investigations, contracts, and dispute representation for employers and senior executives.",
    overview:
      "We advise on day-to-day employment risk, internal processes, executive exits, and contentious labor matters with documentation that stands up in scrutiny.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Employment contracts, policies, and handbook drafting",
      "POSH and workplace misconduct investigation support",
      "Executive separation, confidentiality, and restrictive covenant advisory",
      "Labor court, industrial dispute, and service matter representation",
    ],
    processSteps: [
      "Workplace risk review and objective mapping",
      "Documentation, policy, or investigation strategy",
      "Resolution, representation, and compliance follow-through",
    ],
  },
  {
    slug: "arbitration-mediation",
    title: "Arbitration & Mediation",
    shortDescription:
      "Private dispute resolution strategy for commercial, shareholder, and contractual conflicts.",
    overview:
      "Our team structures arbitration and mediation matters to control timelines, preserve leverage, and reduce commercial disruption.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Arbitration clause review and dispute-trigger planning",
      "Emergency relief and interim measure applications",
      "Arbitral pleadings, evidence, and hearing strategy",
      "Negotiated settlements and mediation representation",
    ],
    processSteps: [
      "Dispute review and forum-position analysis",
      "Claim or defense strategy with evidence planning",
      "Hearing, settlement, or award-enforcement execution",
    ],
  },
  {
    slug: "tax-regulatory-advisory",
    title: "Tax & Regulatory Advisory",
    shortDescription:
      "Structured legal guidance on regulatory exposure, notices, licensing, and sector-specific compliance.",
    overview:
      "We support businesses facing regulatory notices, licensing issues, and compliance pressure with clear, defensible action plans.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Regulatory notice response and authority representation",
      "License, registration, and compliance advisory",
      "Tax dispute support with documentation strategy",
      "Sector-specific legal reviews for ongoing operations",
    ],
    processSteps: [
      "Exposure review and regulator-position assessment",
      "Response drafting and compliance restructuring",
      "Representation, closure strategy, and monitoring",
    ],
  },
  {
    slug: "banking-insolvency",
    title: "Banking & Insolvency",
    shortDescription:
      "Creditor, borrower, and stakeholder representation in recovery, restructuring, and insolvency proceedings.",
    overview:
      "We handle stressed-asset matters with a focus on recoverability, negotiation leverage, and procedural control across tribunals and lenders.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Debt recovery and security enforcement strategy",
      "IBC admission, defense, and committee-stage advisory",
      "Restructuring negotiations and settlement terms",
      "Banking documentation review and lender-side support",
    ],
    processSteps: [
      "Default-position and security review",
      "Tribunal or restructuring roadmap",
      "Recovery, settlement, or resolution-plan execution",
    ],
  },
  {
    slug: "cyber-data-privacy",
    title: "Cyber Law & Data Privacy",
    shortDescription:
      "Legal response for data exposure, digital fraud, platform issues, and privacy compliance.",
    overview:
      "We advise businesses and individuals on digital incidents, privacy obligations, takedowns, and cyber-related disputes in a fast-moving environment.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Data privacy policy and compliance advisory",
      "Cyber incident response and breach-position support",
      "Platform takedown, digital defamation, and online enforcement",
      "Technology contracting and user-data governance reviews",
    ],
    processSteps: [
      "Incident or compliance assessment",
      "Containment, notices, and legal positioning",
      "Enforcement, remediation, and governance hardening",
    ],
  },
  {
    slug: "white-collar-crime",
    title: "White-Collar Crime",
    shortDescription:
      "Strategic defense in fraud, corruption, economic offense, and enforcement-led investigations.",
    overview:
      "We represent executives, promoters, and companies in sensitive investigations where procedural precision and reputational protection are essential.",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1600&q=80",
    keyServices: [
      "Enforcement inquiry and summons response strategy",
      "Economic offense and fraud-defense planning",
      "Document production, internal review, and witness preparation",
      "Bail, quashing, and trial-stage representation",
    ],
    processSteps: [
      "Investigation-risk and exposure assessment",
      "Immediate defense positioning and evidence review",
      "Hearing, trial, or negotiated resolution support",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "gaurav-gupta",
    name: "GAURAV GUPTA",
    role: "Senior Lawyer",
    bio: "Senior counsel for civil, corporate, and dispute matters with a strategy-first approach to complex legal issues.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Gaurav Gupta advises clients on high-stakes disputes, commercial strategy, and courtroom representation with a focus on practical outcomes and disciplined preparation.",
    focusAreas: [
      "Civil and commercial disputes",
      "Corporate legal advisory",
      "Contract enforcement and recovery",
      "Strategic hearing preparation",
    ],
  },
  {
    slug: "raghav-mehta",
    name: "Adv. Raghav Mehta",
    role: "Managing Partner",
    bio: "Commercial disputes, strategic litigation, and executive legal risk advisory.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Raghav Mehta leads the firm’s litigation and business-risk mandates, combining courtroom depth with board-level advisory support.",
    focusAreas: [
      "Strategic litigation",
      "Executive risk advisory",
      "Shareholder and governance disputes",
      "Interim relief and urgent hearings",
    ],
  },
  {
    slug: "kriti-sharma",
    name: "Adv. Kriti Sharma",
    role: "Head - Civil Practice",
    bio: "Property, recovery, and civil dispute strategy with evidence-led courtroom execution.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Kriti Sharma handles civil and property disputes with a strong focus on documentation control, procedural accuracy, and enforceable legal remedies.",
    focusAreas: [
      "Property and title disputes",
      "Civil recovery actions",
      "Evidence and pleadings strategy",
      "Settlement structuring",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "cross-border-shareholder-conflict",
    title: "Cross-Border Shareholder Conflict Resolved Pre-Trial",
    category: "Corporate",
    summary:
      "Advised a growth-stage technology company in a high-value shareholder dispute involving multiple jurisdictions.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "An investor dispute threatened governance continuity and fundraising momentum across two jurisdictions.",
    approach:
      "Built an integrated strategy covering board resolutions, negotiation terms, and contingency litigation posture.",
    outcome:
      "Matter settled before trial with governance continuity preserved and operational risk significantly reduced.",
    highlights: [
      "Pre-trial commercial settlement achieved",
      "Board continuity maintained",
      "Disruption risk contained within four weeks",
    ],
  },
  {
    slug: "urgent-criminal-bail-intervention",
    title: "Urgent Criminal Bail Intervention in High-Pressure Matter",
    category: "Criminal",
    summary:
      "Secured timely legal relief in a high-pressure criminal matter with severe reputational exposure.",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Client faced immediate custody risk and reputational damage due to rapid investigative escalation.",
    approach:
      "Coordinated evidence readiness, anticipatory bail strategy, and hearing preparation under strict timelines.",
    outcome:
      "Obtained relief at first critical hearing and stabilized legal position for subsequent proceedings.",
    highlights: [
      "Relief secured at first critical hearing",
      "Escalation risk minimized",
      "Defense strategy structured for trial stage",
    ],
  },
  {
    slug: "high-stakes-family-settlement",
    title: "High-Stakes Family Settlement with Child-Centric Terms",
    category: "Family",
    summary:
      "Resolved a sensitive matrimonial dispute through structured mediation and enforceable settlement design.",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Disputed custody and financial claims created prolonged uncertainty and emotional pressure.",
    approach:
      "Led negotiation and mediation with child-focused terms and clear legal enforceability safeguards.",
    outcome:
      "Mutually accepted settlement finalized without protracted trial process.",
    highlights: [
      "Custody and visitation terms finalized",
      "Litigation duration reduced",
      "Enforceable settlement documentation completed",
    ],
  },
  {
    slug: "title-risk-property-transaction",
    title: "Property Acquisition Protected Through Title-Risk Intervention",
    category: "Property",
    summary:
      "Prevented significant post-acquisition dispute risk in a commercial property transaction.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Historic title defects and pending claims posed major risk to deal closure.",
    approach:
      "Performed deep title audit, restructured representations, and negotiated protective indemnity clauses.",
    outcome:
      "Transaction closed with clear legal risk controls and dispute exposure reduced.",
    highlights: [
      "Title defects identified pre-closure",
      "Deal protections renegotiated",
      "Post-acquisition dispute exposure reduced",
    ],
  },
  {
    slug: "trademark-enforcement-program",
    title: "Trademark Enforcement Program for Fast-Scaling Brand",
    category: "IP",
    summary:
      "Designed and executed IP enforcement strategy for a rapidly scaling consumer brand.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Brand faced repeated imitation and unauthorized use across digital and retail channels.",
    approach:
      "Created trademark protection map, enforcement notices, and selective litigation strategy.",
    outcome:
      "Core infringement channels curtailed and brand positioning strengthened.",
    highlights: [
      "Trademark enforcement framework deployed",
      "Infringing listings reduced significantly",
      "Brand protection posture strengthened",
    ],
  },
  {
    slug: "commercial-recovery-litigation-win",
    title: "Commercial Recovery Litigation with Favorable Decree",
    category: "Litigation",
    summary:
      "Managed a complex recovery suit involving layered contractual disputes and procedural defenses.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
    challenge:
      "Counterclaims and procedural delays prolonged recovery and increased financial pressure.",
    approach:
      "Streamlined pleadings, prioritized interim relief, and executed evidence-led hearing strategy.",
    outcome:
      "Favorable decree obtained with enforceable recovery pathway.",
    highlights: [
      "Favorable decree achieved",
      "Procedural delay strategy neutralized",
      "Execution roadmap finalized",
    ],
  },
];

export const caseCategories = [
  "All",
  "Corporate",
  "Criminal",
  "Family",
  "Property",
  "IP",
  "Litigation",
] as const;
