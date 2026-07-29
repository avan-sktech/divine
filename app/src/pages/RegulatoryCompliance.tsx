import ServiceLanding from '../components/ServiceLanding';

/**
 * /capabilities/regulatory-and-compliance
 *
 * Copy ported from the approved 2026 design package: the market-entry
 * regulatory pathway scope item and compliance comparison rows, the
 * "Scope the Australian approval pathway first" insight, and the
 * regulation and compliance entries in marketEntryFaqs.
 */

const RegulatoryCompliance = () => (
  <ServiceLanding
    eyebrow="Regulatory and compliance"
    code="REG / AU"
    title="Map the approval pathway"
    titleAccent="before launch commitments."
    lede="Map standards, registrations, certifications, claims and specialist advice into the commercial programme before launch commitments."
    seoTitle="Australian regulatory and compliance consulting"
    metaDescription="Australian regulatory and compliance pathway mapping. Bring standards, registrations, certifications, claims and evidence into the plan before launch."
    path="/capabilities/regulatory-and-compliance"
    answerQuestion="Why should the Australian approval pathway be mapped first?"
    answer="The Australian approval pathway should be mapped before launch commitments because it affects product claims, evidence requirements, timing, partners, cost and the first viable customer segment."
    media={{
      src: '/images/editorial/commercial-analysis.webp',
      alt: 'Compliance evidence reviewed before launch commitments',
      caption: 'Bring approval requirements into the commercial plan early.',
    }}
    audienceHeading="Compliance is a commercial workstream, not a final technical check."
    audienceCopy="The pathway is mapped for organisations whose launch timing, product claims, partner decisions and capital commitments depend on approvals that are not yet confirmed."
    audienceItems={[
      {
        title: 'International product companies',
        description: 'You have a proven offer elsewhere and need to determine what must change for Australian customers, standards and channels.',
      },
      {
        title: 'Manufacturers and technology providers',
        description: 'Local demand may be attractive, but evidence, service, distribution and compliance have to be designed together.',
      },
      {
        title: 'Construction and industrial systems',
        description: 'Design, certification, production, logistics, site work and buyer confidence have to move together.',
      },
      {
        title: 'Boards testing an entry thesis',
        description: 'A defensible evidence base is required before committing inventory, people, partnerships or establishment costs.',
      },
    ]}
    scopeHeading="The approval pathway, mapped into the commercial programme."
    scopeCopy="Market, regulatory and delivery evidence is developed together so the launch plan remains commercially coherent."
    scopeItems={[
      {
        title: 'Standards and registrations',
        description: 'Identify the standards, registrations and market access requirements that apply to the offer while the product and launch plan can still change.',
      },
      {
        title: 'Certifications and technical evidence',
        description: 'Map the certifications, tests, technical inputs and assurance required, and where each one sits in the commercial timeline.',
      },
      {
        title: 'Claims and substantiation',
        description: 'Marketing language should follow what can be substantiated in Australia. This creates a credible promise and reduces rework close to launch.',
      },
      {
        title: 'Evidence register',
        description: 'Build an evidence register that shows the source, owner and confidence behind each requirement. Flag items that need legal, technical or regulatory confirmation.',
      },
      {
        title: 'Specialist coordination',
        description: 'Specialist advisers are introduced where legal, regulatory, engineering or technical confirmation is needed, and their inputs are held inside one commercial programme.',
      },
      {
        title: 'Release gates and timing',
        description: 'A certification delay can change inventory timing, channel agreements and cash needs, so approvals are connected to claims, partners, inventory and cost.',
      },
    ]}
    processHeading="Reduce approval uncertainty before increasing commitment."
    processCopy="Each stage is designed to resolve a material question and protect the next use of inventory, capital or leadership attention."
    processItems={[
      {
        title: 'Set the approval mandate',
        description: 'Clarify the offer, target market, launch timing, risk tolerance and the commercial decisions that depend on approval evidence.',
      },
      {
        title: 'Separate known requirements from assumptions',
        description: 'Build an evidence register that shows the source, owner and confidence behind each requirement. Flag items that need legal, technical or regulatory confirmation.',
      },
      {
        title: 'Connect approvals to the commercial plan',
        description: 'A certification delay can change inventory timing, channel agreements and cash needs. The regulatory pathway is therefore a commercial workstream, not a final technical check.',
      },
      {
        title: 'Coordinate specialists and set the gates',
        description: 'Legal, tax, regulatory, engineering and certification advice is provided by appropriately qualified specialists, with each confirmation tied to a release gate.',
      },
    ]}
    faqs={[
      {
        question: 'What does regulatory and compliance mapping cover?',
        answer: 'It maps standards, registrations, certifications, claims, technical evidence and specialist advice into the commercial timeline while decisions are still flexible. The outcome is an approval pathway that protects timing, positioning and capital.',
      },
      {
        question: 'Is this the same as legal, tax or certification advice?',
        answer: 'No. Divine Lab Worx focuses on the commercial pathway. Legal, tax, regulatory, engineering and certification advice is provided by appropriately qualified specialists where the mandate requires it.',
      },
      {
        question: 'Why map the approval pathway before launch commitments?',
        answer: 'Because it affects product claims, evidence requirements, timing, partners, cost and the first viable customer segment. A certification delay can change inventory timing, channel agreements and cash needs.',
      },
      {
        question: 'How are product claims handled?',
        answer: 'Claims are designed around evidence. Marketing language should follow what can be substantiated in Australia. This creates a credible promise and reduces rework close to launch.',
      },
    ]}
    ctaEyebrow="Approval pathway assessment"
    ctaTitle="Bring approvals into the plan while decisions are still flexible."
    ctaCopy="Map the standards, registrations, certifications, claims and evidence gaps, then connect each confirmation to the timing, partner and investment decisions that depend on it."
    ctaLabel="Request an approval pathway assessment"
    serviceName="Regulatory and compliance pathway consulting"
    serviceType={[
      'Regulatory and compliance mapping',
      'Approval pathway consulting',
      'Market entry compliance planning',
    ]}
  />
);

export default RegulatoryCompliance;
