/**
 * Central capability and industry data.
 *
 * Ported from the 2026 design package so the home page, capabilities
 * overview, individual capability pages, nav and footer all read from one
 * source. Copy is verbatim from the approved package; do not add client
 * claims, statistics or outcomes that are not in this file.
 */

export interface Capability {
  number: string;
  /** Short title used in nav, cards and mosaic tiles */
  title: string;
  /** One-line summary used on the capabilities overview */
  description: string;
  /** Very short line used on the home-page mosaic tile */
  brief: string;
  href: string;
  /** Compact technical tags in the house style */
  tags: string[];
  /** Editorial image for the mosaic tile, empty for a text-only tile */
  image?: string;
}

export const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Market-entry strategy',
    description:
      'Define the first customer, commercial case and evidence required to enter a new geography or customer market with confidence.',
    brief: 'Choose the first market, customer and proof point.',
    href: '/capabilities/market-entry-strategy',
    tags: ['Market evidence', 'Beachhead segment', 'Commercial model'],
    image: '/images/editorial/chess-opening-poster.webp',
  },
  {
    number: '02',
    title: 'Regulatory and compliance',
    description:
      'Map standards, approvals, claims and specialist inputs into the commercial pathway before launch.',
    brief: 'Bring approval requirements into the commercial plan early.',
    href: '/capabilities/regulatory-and-compliance',
    tags: ['Approvals', 'Claims', 'Evidence'],
  },
  {
    number: '03',
    title: 'Distribution and channel',
    description:
      'Design the partner, margin, service and operating model required to reach customers and fulfil demand.',
    brief: 'Build a route to market that works for every participant.',
    href: '/capabilities/channel-strategy',
    tags: ['Channels', 'Partner model', 'Unit economics'],
    image: '/images/editorial/executive-workshop.webp',
  },
  {
    number: '04',
    title: 'Concurrent Product and Process Design',
    description:
      'Design the offer, delivery process and market pathway together so each decision supports the others.',
    brief: 'Design the offer and the operating process together.',
    href: '/capabilities/concurrent-product-process-design',
    tags: ['Offer design', 'Delivery system', 'Commercial readiness'],
  },
  {
    number: '05',
    title: 'Launch and demand generation',
    description:
      'Turn the market case into a controlled launch with clear messages, conversion points and measures.',
    brief: 'Turn positioning into measurable demand and conversion.',
    href: '/capabilities/go-to-market-strategy',
    tags: ['Positioning', 'Demand', 'First sale'],
    image: '/images/editorial/marketing-operations.webp',
  },
  {
    number: '06',
    title: 'Capital-efficient growth',
    description:
      'Find and sequence the growth already latent in existing customers, assets, channels and capabilities.',
    brief: 'Find new revenue inside the capacity already funded.',
    href: '/capabilities/capital-efficient-growth',
    tags: ['Latent capacity', 'Adjacency', 'Growth governance'],
  },
  {
    number: '07',
    title: 'AI advisory and governance',
    description:
      'Prioritise valuable AI use cases, establish practical governance and carry approved opportunities into implementation.',
    brief: 'Prioritise valuable use cases with accountable controls.',
    href: '/capabilities/ai-advisory',
    tags: ['AI readiness', 'Use-case portfolio', 'Responsible AI'],
    image: '/images/editorial/digital-business-systems-poster.webp',
  },
  {
    number: '08',
    title: 'Strategy, transformation and feasibility',
    description:
      'Turn a complex growth mandate into executive evidence, stakeholder pathways, staged options and a governed decision programme.',
    brief: 'Move complex mandates through evidence and investment gates.',
    href: '/capabilities/strategy-and-transformation',
    tags: ['Executive studies', 'Transformation roadmap', 'Feasibility'],
    image: '/images/editorial/chess-executive-poster.webp',
  },
];

/** The four questions every initiative must answer before capital is released */
export const governance = [
  {
    number: '01',
    title: 'Target customer',
    description:
      'Name the buyer, the urgent problem and the reason the offer deserves attention now.',
  },
  {
    number: '02',
    title: 'Acquisition channel',
    description:
      'Choose the credible route to the customer and make the channel economics explicit.',
  },
  {
    number: '03',
    title: 'Conversion mechanism',
    description:
      'Define what moves interest into a pilot, purchase, expansion or investment decision.',
  },
  {
    number: '04',
    title: 'Measurable outcome',
    description:
      'Agree the evidence that will release the next phase of capital, inventory or organisational effort.',
  },
];

/** Five concurrent workstreams and six evidence gates */
export const workstreams = ['Market', 'Offer', 'Delivery', 'Economics', 'Evidence'];
export const gates = ['Frame', 'Criteria', 'Design', 'Integrate', 'Verify', 'Learn'];

export const homeFaqs = [
  {
    question: 'What does Divine Lab Worx do?',
    answer:
      'Divine Lab Worx turns complex strategy into evidence, decisions and market action. We help organisations enter markets, launch new offers, evaluate transformation opportunities and grow from what they already have across Australia and international markets.',
  },
  {
    question: 'Can Divine Lab Worx support both launch and growth?',
    answer:
      'Yes. Launch engagements build the market, compliance, channel and demand pathway for a new offer. Growth engagements find underused capacity in existing customers, assets, channels and capabilities.',
  },
  {
    question: 'Who leads Divine Lab Worx?',
    answer:
      'Divine Lab Worx is led by strategist Dainu Devis and operates as the consultancy division of Sharktech Global. The structure connects strategic advice to practical delivery capability.',
  },
  {
    question: 'How does an engagement begin?',
    answer:
      'Most work begins with a contained diagnostic. It clarifies the commercial decision, tests the key assumptions and produces a board-ready recommendation for the next stage.',
  },
  {
    question: 'What makes the Divine Lab Worx methodology different?',
    answer:
      'The DivineLab Concurrent Method develops strategy, the offer, operating process, delivery capability, economics and evidence together. This concurrent product and process design approach exposes dependencies early and uses evidence gates to control major commitments.',
  },
];
