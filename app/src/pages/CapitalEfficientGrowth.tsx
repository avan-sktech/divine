import ServiceLanding from '../components/ServiceLanding';

/**
 * Capital-efficient growth capability page.
 * Copy ported verbatim from the approved 2026 design package
 * (capital-efficient-growth.astro, capabilities/capital-efficient-growth.astro)
 * and the growthFaqs array.
 */
const CapitalEfficientGrowth = () => (
  <ServiceLanding
    eyebrow="Capital-efficient growth strategy"
    code="CEG / 01"
    title="Grow from what your business"
    titleAccent="already has."
    lede="More revenue from your existing base, without heavy new investment."
    seoTitle="Strategy for capital-efficient growth | Divine Lab Worx"
    metaDescription="Consulting for capital-efficient growth across markets. Find more revenue in existing customers, assets, channels and capabilities you already fund."
    path="/capabilities/capital-efficient-growth"
    answerQuestion="What is capital-efficient growth?"
    answer="Capital-efficient growth creates more revenue or margin from customers, assets, channels, data and capabilities the business already funds. It finds the value already present before asking for heavy new investment."
    media={{
      src: '/images/editorial/team-collaboration.webp',
      alt: 'Team identifying growth inside existing capacity',
      caption: 'Find new revenue inside the capacity already funded.',
    }}
    audienceHeading="Your business may contain more growth than the plan can currently see."
    audienceCopy="Growth is often hidden in plain sight. The task is not to produce a long list of ideas. It is to identify which existing strengths can be converted into a credible revenue move and what evidence should be built before more capital is committed. Existing customers shorten the path to evidence. Existing assets reduce capital intensity. Existing channels offer a route to reach. Existing capability gives the business a right to win."
    audienceItems={[
      {
        title: 'Productive capacity that is only partly used',
        description: 'Businesses regularly fund productive capacity that is only partly used.',
      },
      {
        title: 'A customer base that knows one offer',
        description: 'A customer base knows one offer but needs another.',
      },
      {
        title: 'A distribution relationship with narrow reach',
        description: 'A distribution relationship reaches only one segment.',
      },
      {
        title: 'Capability the proposition does not yet name',
        description: 'Technical capability solves more problems than the current proposition names.',
      },
    ]}
    scopeHeading="The Latent Growth Audit."
    scopeCopy="A fixed-fee diagnostic that gives the board and executive team a ranked, evidence-led shortlist of growth moves. Every opportunity is then translated into four operating requirements before it enters the investment sequence."
    scopeItems={[
      {
        title: 'Commercial base map',
        description: 'Customers, assets, channels, data, supplier relationships, capabilities and current constraints in one view.',
      },
      {
        title: 'Latent capacity register',
        description: 'Evidence-backed areas where productive capacity, customer need or market reach is underused.',
      },
      {
        title: 'Board-ready shortlist',
        description: 'Adjacency moves compared by likely value, time to cash, evidence strength, capital needs and execution risk.',
      },
      {
        title: 'First test and decision gates',
        description: 'A contained next action, clear ownership and measures that determine whether the move should stop, adapt or scale.',
      },
      {
        title: 'Target customer',
        description: 'Name the buyer, the urgent problem and the reason the offer deserves attention now.',
      },
      {
        title: 'Acquisition channel',
        description: 'Choose the credible route to the customer and make the channel economics explicit.',
      },
      {
        title: 'Conversion mechanism',
        description: 'Define what moves interest into a pilot, purchase, expansion or investment decision.',
      },
      {
        title: 'Measurable outcome',
        description: 'Agree the evidence that will release the next phase of capital, inventory or organisational effort.',
      },
    ]}
    processHeading="Five steps from capacity to cash."
    processCopy="New growth plans often begin by adding something: a product, market, team, platform or funding round. The Latent Growth Method begins by asking what the business has already paid to build and where productive capacity is trapped. The method turns the existing business into a portfolio of testable growth moves, then sequences them by evidence and return."
    processItems={[
      {
        title: 'Map the base',
        description: 'Make the existing customers, assets, channels, data, relationships and capabilities visible.',
      },
      {
        title: 'Find latent capacity',
        description: 'Locate underused assets, unmet customer needs, weak cross-sell and productive capability without enough demand.',
      },
      {
        title: 'Rank adjacency moves',
        description: 'Compare moves by evidence, time to cash, capital intensity, strategic fit and execution risk.',
      },
      {
        title: 'Fund it from within',
        description: 'Use cash flow, working-capital release, improved utilisation or a contained pilot before heavy new capital.',
      },
      {
        title: 'Sequence and govern',
        description: 'Set ownership, measures and investment gates so each move proves the case for the next.',
      },
    ]}
    faqs={[
      {
        question: 'What is capital-efficient growth?',
        answer: 'Capital-efficient growth increases revenue or margin by using existing customers, assets, channels, data and capabilities more effectively before requiring heavy new investment.',
      },
      {
        question: 'What is latent growth?',
        answer: 'Latent growth is commercial value already present in a business but not yet activated. It may sit in unused capacity, unmet customer needs, adjacent offers, weak cross-sell or underused distribution.',
      },
      {
        question: 'What is the Latent Growth Audit?',
        answer: 'The Latent Growth Audit is a fixed-scope, fixed-fee diagnostic that maps the existing base, identifies credible adjacency moves and produces a board-ready shortlist ranked by evidence, return and execution risk.',
      },
      {
        question: 'Does growth always require more capital?',
        answer: 'No. Some of the strongest growth moves can be funded from existing cash flow, released working capital, improved utilisation or a contained pilot that proves demand before broader investment.',
      },
      {
        question: 'How are growth opportunities governed?',
        answer: 'Each move is assigned a target customer, acquisition channel, conversion mechanism and measurable outcome. Capital and effort are released in stages as evidence improves.',
      },
    ]}
    ctaEyebrow="Fixed-scope first step"
    ctaTitle="Find the growth already inside the business."
    ctaCopy="An economy grows when existing people, infrastructure, knowledge and trade are used more productively. A business is similar. Request a Latent Growth Audit for a board-ready view of the strongest moves, required evidence and practical sequence."
    ctaLabel="Request a Latent Growth Audit"
    serviceName="Capital-efficient growth consulting"
    serviceType={[
      'Capital-efficient growth strategy',
      'Latent Growth Audit',
      'Growth strategy consulting',
      'Adjacency and revenue expansion',
    ]}
  />
);

export default CapitalEfficientGrowth;
