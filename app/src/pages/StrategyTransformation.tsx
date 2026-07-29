import ServiceLanding from '../components/ServiceLanding';

/**
 * Strategy, transformation and feasibility capability page.
 *
 * Copy ported from the approved 2026 design package
 * (src/pages/work.astro and the strategy, transformation and feasibility
 * entry in capabilities/index.astro), rendered through the shared
 * ServiceLanding template.
 */

const StrategyTransformation = () => (
  <ServiceLanding
    eyebrow="Strategy and transformation consulting"
    code="WRK / 01"
    title="Evidence designed to move"
    titleAccent="the next decision."
    lede="Our work is measured by whether it creates a defensible decision, a controlled implementation pathway and visible ownership of the outcome."
    seoTitle="Business strategy and transformation | Divine Lab Worx"
    metaDescription="Business strategy and transformation consulting from Divine Lab Worx: decision-ready evidence, prioritised pathways and clear investment gates."
    path="/capabilities/strategy-and-transformation"
    answerQuestion="What does a Divine Lab Worx engagement produce?"
    answer="A Divine Lab Worx engagement produces decision-ready evidence, a prioritised pathway, accountable workstreams and clear investment gates. Depending on the mandate, the work can continue into implementation, adoption and outcome measurement."
    media={{
      src: '/images/editorial/chess-executive-poster.webp',
      alt: 'Executive decision programme under review',
      caption: 'Move complex mandates through evidence and investment gates.',
    }}
    audienceHeading="Evidence before commitment."
    audienceCopy="The work makes assumptions, constraints and confidence visible before a major market, technology or investment decision is released."
    audienceItems={[
      {
        title: 'Complex growth and transformation mandates',
        description: 'Executive research, cross-market evidence, stakeholder pathways, commercial options and staged feasibility are framed around one mandate.',
      },
      {
        title: 'Boards weighing a staged feasibility decision',
        description: 'A decision-ready study, governed roadmap and contained next phase are established before major investment is released.',
      },
      {
        title: 'Programmes that cross commercial, technical and operating questions',
        description: 'Market, technology, delivery and investment questions are held together in one evidence plan rather than answered in separate workstreams.',
      },
      {
        title: 'Mandates that must remain confidential',
        description: 'Client names and commercially sensitive details are withheld where engagements are confidential, so the work is described by mandate and output.',
      },
    ]}
    scopeHeading="Commercial, technical and operating questions held together."
    scopeCopy="Selected engagement patterns are described by mandate and output across market entry, applied AI, infrastructure, construction and international strategy."
    scopeItems={[
      {
        title: 'Market entry: launch pathway for an overseas product business',
        description: 'Mandate: Clarify the first customer, compliance inputs, channel structure and evidence required before national commitment. Output: A staged roadmap with a contained demand test, accountable workstreams and explicit investment gates.',
      },
      {
        title: 'Applied AI: from broad AI ambition to a governed operating use case',
        description: 'Mandate: Rank opportunities, define value, identify data dependencies and select a use case suitable for contained implementation. Output: A funded priority, solution pathway, control model and measurement plan.',
      },
      {
        title: 'Infrastructure: site screening for an energy-intensive advanced facility',
        description: 'Mandate: Compare locations across power, planning, connectivity, water, land and confidence of evidence. Output: A defensible shortlist, evidence register and integrated route toward build-ready status.',
      },
      {
        title: 'Construction: commercial pathway for a modern construction system',
        description: 'Mandate: Align the target project, approval requirements, supply model, pilot criteria and repeatable economics. Output: A delivery pathway connecting the first demonstrator to a credible repeatable offer.',
      },
      {
        title: 'International strategy: cross-market growth and transformation',
        description: 'Mandate: Connect market evidence, customer journeys, distribution, discoverability, governance and operating readiness. Output: A decision-ready evidence pack, prioritised roadmap and contained feasibility phase.',
      },
    ]}
    processHeading="Confidence is made visible."
    processCopy="We distinguish sourced facts, tested evidence, working assumptions and unresolved dependencies. Decision-makers can see not only the recommendation, but what it depends on and what would change it."
    processItems={[
      {
        title: 'Frame the mandate',
        description: 'Agree the commercial outcome, the constraints, the unresolved questions and the decision the evidence has to move.',
      },
      {
        title: 'Build the evidence base',
        description: 'Separate sourced facts, tested evidence, working assumptions and unresolved dependencies, marked as verified evidence, tested assumptions or open dependencies.',
      },
      {
        title: 'Set the pathway and the gates',
        description: 'Turn the evidence into a prioritised pathway with accountable workstreams, visible ownership and clear investment gates.',
      },
      {
        title: 'Carry the decision into delivery',
        description: 'Depending on the mandate, the work can continue into implementation, adoption and outcome measurement.',
      },
    ]}
    faqs={[
      {
        question: 'What does a strategy and transformation engagement produce?',
        answer: 'It produces decision-ready evidence, a prioritised pathway, accountable workstreams and clear investment gates. Depending on the mandate, the work can continue into implementation, adoption and outcome measurement.',
      },
      {
        question: 'What kinds of mandates does the work cover?',
        answer: 'Selected engagement patterns include a launch pathway for an overseas product business, a governed operating AI use case, site screening for an energy-intensive advanced facility, a commercial pathway for a modern construction system, and cross-market growth and transformation.',
      },
      {
        question: 'How is confidence in the evidence shown?',
        answer: 'We distinguish sourced facts, tested evidence, working assumptions and unresolved dependencies. Decision-makers can see not only the recommendation, but what it depends on and what would change it.',
      },
      {
        question: 'Are client names shared?',
        answer: 'Client names and commercially sensitive details are withheld where engagements are confidential. Engagement patterns are described by their mandate and their output instead.',
      },
    ]}
    ctaEyebrow="A contained first phase"
    ctaTitle="Define the decision. Then build the evidence around it."
    ctaCopy="Bring the outcome, the constraints and the unresolved questions. We will structure the evidence and define the next investment gate."
    ctaLabel="Start a conversation"
    serviceName="Strategy, transformation and feasibility consulting"
    serviceType={[
      'Business strategy consulting',
      'Business transformation consulting',
      'Feasibility study consulting',
      'Strategy implementation consulting',
    ]}
  />
);

export default StrategyTransformation;
