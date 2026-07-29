/**
 * The DivineLab Concurrent Method.
 *
 * Five commercial applications of one decision system. Copy is ported
 * verbatim from the approved 2026 design package.
 */

export interface MethodStep {
  number: string;
  title: string;
  headline: string;
  detail: string;
  output: string;
}

export interface MethodApplication {
  id: string;
  label: string;
  kicker: string;
  summary: string;
  tracks: string[];
  stages: string[];
  lineOfSight: string[];
  steps: MethodStep[];
}

export const applications: MethodApplication[] = [
  {
    id: 'market-entry',
    label: 'International market entry',
    kicker: 'Concurrent method for international market entry',
    summary:
      'For international market entry, Divine Lab Worx develops the market thesis, customer offer, channel model, delivery readiness and commercial economics together. This exposes weak assumptions before inventory, hiring or launch capital is committed.',
    tracks: ['Market', 'Offer', 'Channel', 'Delivery', 'Economics'],
    stages: ['Frame', 'Segment', 'Design', 'Integrate', 'Prove', 'Scale'],
    lineOfSight: ['Market decision', 'Priority buyer', 'Commercial offer', 'Route and delivery', 'Demand evidence', 'Repeatable entry'],
    steps: [
      {
        number: '01',
        title: 'Market decision',
        headline: 'Define the entry decision before commissioning activity.',
        detail: 'Clarify the geography, category, investment boundary and evidence required to release the next stage.',
        output: 'market entry thesis',
      },
      {
        number: '02',
        title: 'Buyer system',
        headline: 'Design around the people who make the purchase happen.',
        detail: 'Separate buyer, user, evaluator, partner and blocker. Map urgency, criteria, procurement and switching friction.',
        output: 'buying system map',
      },
      {
        number: '03',
        title: 'Commercial proposition',
        headline: 'Shape value, proof, price and customer effort together.',
        detail: 'The offer must be attractive to buy, credible to support and commercially viable to deliver.',
        output: 'market-ready offer',
      },
      {
        number: '04',
        title: 'Route and delivery',
        headline: 'Build channel and operating readiness as one system.',
        detail: 'Partner roles, sales coverage, onboarding, service, data and decision rights develop around the same customer journey.',
        output: 'executable route to market',
      },
      {
        number: '05',
        title: 'Commercial proof',
        headline: 'Use a contained launch to test the whole model.',
        detail: 'Verify acquisition, conversion, delivery effort, margin and retention at realistic terms before expansion.',
        output: 'demand and delivery evidence',
      },
      {
        number: '06',
        title: 'Repeatable entry',
        headline: 'Scale only when the revenue system can repeat.',
        detail: 'Expansion follows evidence that demand, channel, fulfilment and customer value reinforce one another.',
        output: 'governed market expansion',
      },
    ],
  },
  {
    id: 'commercialisation',
    label: 'Product commercialisation',
    kicker: 'Concurrent method for product commercialisation',
    summary:
      'For product commercialisation, Divine Lab Worx develops customer requirements, the product offer, production or service delivery, assurance and target economics in parallel. The result is an offer that can be sold, delivered and supported repeatedly.',
    tracks: ['Customer', 'Product', 'Process', 'Assurance', 'Economics'],
    stages: ['Need', 'Criteria', 'Design', 'Integrate', 'Verify', 'Learn'],
    lineOfSight: ['Customer need', 'Buying criteria', 'Target offer', 'Product and process', 'Verification', 'Field learning'],
    steps: [
      {
        number: '01',
        title: 'Usage context',
        headline: 'Start with the operating problem, not the feature list.',
        detail: 'Observe the buyer, user, installer and maintainer in the conditions where performance matters.',
        output: 'customer and use context',
      },
      {
        number: '02',
        title: 'Buying criteria',
        headline: 'Turn customer evidence into testable requirements.',
        detail: 'Separate mandatory performance, purchase drivers, differentiation and trust requirements.',
        output: 'measurable specification',
      },
      {
        number: '03',
        title: 'Offer architecture',
        headline: 'Design the product and commercial offer together.',
        detail: 'Product scope, service boundary, pricing logic and proof are shaped around one buying decision.',
        output: 'testable offer architecture',
      },
      {
        number: '04',
        title: 'Product and process',
        headline: 'Develop the offer and its delivery process in parallel.',
        detail: 'Materials, suppliers, production, quality, onboarding and support evolve as connected design choices.',
        output: 'integrated product-process model',
      },
      {
        number: '05',
        title: 'Verification',
        headline: 'Release commitment through technical and commercial evidence.',
        detail: 'Prototype, test and validate performance, process capability, cost and customer acceptance.',
        output: 'verified readiness',
      },
      {
        number: '06',
        title: 'Field learning',
        headline: 'Treat launch as the next source of design evidence.',
        detail: 'Real use, service demand, conversion and reliability reshape the offer and operating process.',
        output: 'evidence-led improvement',
      },
    ],
  },
  {
    id: 'transformation',
    label: 'Business transformation',
    kicker: 'Concurrent method for business transformation',
    summary:
      'For business transformation, Divine Lab Worx aligns strategic intent, stakeholder pathways, operating design, technology and investment logic before major commitments are made. This connects executive ambition to an implementable transformation programme.',
    tracks: ['Strategy', 'Stakeholders', 'Operations', 'Technology', 'Economics'],
    stages: ['Mandate', 'Baseline', 'Outcomes', 'System', 'Pilot', 'Scale'],
    lineOfSight: ['Business need', 'Evidence baseline', 'Target outcome', 'Operating system', 'Pilot evidence', 'Scaled change'],
    steps: [
      {
        number: '01',
        title: 'Transformation mandate',
        headline: 'Frame the change around a measurable business outcome.',
        detail: 'Define the affected customers, teams and economics, plus the boundary that the programme must govern.',
        output: 'transformation mandate',
      },
      {
        number: '02',
        title: 'Evidence baseline',
        headline: 'Establish what is true before selecting the intervention.',
        detail: 'Connect commercial data, operating performance, stakeholder evidence and institutional constraints.',
        output: 'shared baseline',
      },
      {
        number: '03',
        title: 'Target outcomes',
        headline: 'Translate ambition into owned and testable outcomes.',
        detail: 'Set measures, time horizons, dependencies and proof conditions for each material result.',
        output: 'outcome architecture',
      },
      {
        number: '04',
        title: 'Operating system',
        headline: 'Design process, technology and ownership together.',
        detail: 'The operating model, decision rights, data, workforce and investment path mature as one system.',
        output: 'integrated transformation design',
      },
      {
        number: '05',
        title: 'Pilot evidence',
        headline: 'Use a bounded pilot to test operating reality.',
        detail: 'Verify adoption, delivery capacity, controls and economic effect before wider organisational release.',
        output: 'scale evidence',
      },
      {
        number: '06',
        title: 'Scaled change',
        headline: 'Expand verified change and keep the evidence loop open.',
        detail: 'Results guide sequencing, investment and the next transformation decision.',
        output: 'governed transformation',
      },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Critical infrastructure',
    kicker: 'Concurrent method for critical infrastructure strategy',
    summary:
      'For critical infrastructure, Divine Lab Worx connects site intelligence, utility capacity, delivery sequencing, assurance and operating readiness. The method protects investment by testing the whole system before a location or build pathway is treated as viable.',
    tracks: ['Site', 'Utilities', 'Delivery', 'Assurance', 'Operations'],
    stages: ['Context', 'Thresholds', 'Design', 'Integrate', 'Assure', 'Operate'],
    lineOfSight: ['Service need', 'Viability criteria', 'System concept', 'Integrated pathway', 'Assurance case', 'Operating evidence'],
    steps: [
      {
        number: '01',
        title: 'Service context',
        headline: 'Define the service the infrastructure must sustain.',
        detail: 'Map users, operators, interdependencies, demand and the consequence of failure.',
        output: 'service context',
      },
      {
        number: '02',
        title: 'Viability criteria',
        headline: 'Set non-negotiable site and performance thresholds.',
        detail: 'Translate the mandate into power, planning, connectivity, water, resilience and operating criteria.',
        output: 'viability framework',
      },
      {
        number: '03',
        title: 'System concept',
        headline: 'Design the asset concept around real site conditions.',
        detail: 'Capacity, phasing, utilities, technology and maintainability are tested as one architecture.',
        output: 'integrated concept',
      },
      {
        number: '04',
        title: 'Delivery pathway',
        headline: 'Control the interfaces where infrastructure decisions fail.',
        detail: 'Ownership and evidence are attached to regulators, contractors, utilities, technology and operations.',
        output: 'controlled dependencies',
      },
      {
        number: '05',
        title: 'Assurance case',
        headline: 'Build readiness evidence while the system develops.',
        detail: 'Verification, commissioning, resilience and approval evidence mature before irreversible commitment.',
        output: 'investment confidence',
      },
      {
        number: '06',
        title: 'Operating evidence',
        headline: 'Use real performance to govern renewal and growth.',
        detail: 'Operations, incidents, maintenance and changing demand shape the next capital decision.',
        output: 'whole-of-life learning',
      },
    ],
  },
  {
    id: 'applied-ai',
    label: 'Applied AI and automation',
    kicker: 'Concurrent method for AI advisory and implementation',
    summary:
      'For applied AI, Divine Lab Worx develops the value case, target workflow, data pathway, governance controls and adoption model together. This moves AI strategy from a technology idea to a measurable and accountable operating use case.',
    tracks: ['Value', 'Workflow', 'Data', 'Governance', 'Adoption'],
    stages: ['Need', 'Baseline', 'Design', 'Control', 'Prove', 'Scale'],
    lineOfSight: ['Operating need', 'Value baseline', 'Use-case design', 'Controls and workflow', 'Measured pilot', 'Governed scale'],
    steps: [
      {
        number: '01',
        title: 'Operating need',
        headline: 'Start with a valuable constraint in a real workflow.',
        detail: 'Identify the decision, delay, cost or service problem that creates a measurable reason to act.',
        output: 'sharp AI use case',
      },
      {
        number: '02',
        title: 'Value baseline',
        headline: 'Measure the current state before forecasting benefit.',
        detail: 'Establish volume, effort, quality, delay, risk and the human work affected.',
        output: 'value baseline',
      },
      {
        number: '03',
        title: 'Use-case design',
        headline: 'Design model behaviour and workflow change together.',
        detail: 'Define data, integrations, human judgement, exceptions and the outcome the system must support.',
        output: 'operating solution design',
      },
      {
        number: '04',
        title: 'Governance controls',
        headline: 'Put accountability inside the operating design.',
        detail: 'Privacy, security, transparency, testing, oversight and decision ownership are explicit before deployment.',
        output: 'governed implementation path',
      },
      {
        number: '05',
        title: 'Measured pilot',
        headline: 'Test value, control and adoption in the real workflow.',
        detail: 'A contained implementation verifies performance, user behaviour, operating burden and risk.',
        output: 'decision-grade pilot evidence',
      },
      {
        number: '06',
        title: 'Governed scale',
        headline: 'Expand only when value and control can repeat.',
        detail: 'Measured results release the next investment stage while monitoring and human ownership remain active.',
        output: 'accountable AI scale',
      },
    ],
  },
];

/** Practitioner note shown under the method system */
export const workstreamsNote =
  'The DivineLab Concurrent Method applies concurrent product and process design principles to business strategy, commercialisation and transformation.';

export const advantages = [
  { number: '01', title: 'Concurrent by design', description: 'Interdependent decisions mature together.' },
  { number: '02', title: 'Evidence before commitment', description: 'Every gate names the proof required to proceed.' },
  { number: '03', title: 'Commercial and operating fit', description: 'The offer must work for the buyer and the delivery system.' },
  { number: '04', title: 'Learning remains open', description: 'Field evidence guides the next investment decision.' },
];

export const disciplineRows = [
  {
    decision: 'The recommendation',
    weak: 'Recommendation first. Delivery constraints surface after approval.',
    strong: 'Recommendation and delivery fit. Operating reality shapes the strategy from the beginning.',
  },
  {
    decision: 'The pilot',
    weak: 'Pilot as demonstration. Activity is mistaken for commercial evidence.',
    strong: 'Pilot as decision gate. Measured results control the next commitment.',
  },
];

export const methodologyFaqs = [
  {
    question: 'What is the DivineLab Concurrent Method?',
    answer:
      'The DivineLab Concurrent Method is an evidence-led business strategy methodology that develops the proposition, delivery system, commercial economics, assurance and market evidence together. It applies concurrent product and process design principles to market entry, product commercialisation, business transformation, critical infrastructure and applied AI.',
  },
  {
    question: 'What is Concurrent Product and Process Design?',
    answer:
      'Concurrent Product and Process Design develops what an organisation will offer and how it will produce, deliver, support and improve that offer at the same time. The method exposes dependencies early, before cost, compliance risk and operating complexity become difficult to reverse.',
  },
  {
    question: 'How is Divine Lab Worx different from a traditional strategy consultancy?',
    answer:
      'Traditional strategy consulting can separate the recommendation from implementation. Divine Lab Worx connects market evidence, operating design, technology, delivery ownership and investment gates from the beginning, so the strategy is tested against the conditions required to execute it.',
  },
  {
    question: 'When should an organisation use the methodology?',
    answer:
      'Use the methodology when entering a new market, commercialising a product, redesigning an operating model, evaluating infrastructure, selecting an AI use case or making a complex investment decision with multiple interdependent workstreams.',
  },
];
