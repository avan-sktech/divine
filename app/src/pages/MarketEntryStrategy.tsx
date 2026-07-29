import ServiceLanding from '../components/ServiceLanding';

/**
 * /capabilities/market-entry-strategy
 *
 * Australian market entry consulting. Copy ported from the approved 2026
 * design package (market-entry-australia) and the marketEntryFaqs array.
 */
const MarketEntryStrategy = () => (
  <ServiceLanding
    eyebrow="Australian market entry consulting"
    code="ENT / AU"
    title="Enter Australia with evidence,"
    titleAccent="not assumptions."
    lede="Validate the first customer, map the local requirements and prove a route to revenue before committing heavily to market entry."
    seoTitle="Australian market entry consulting | Divine Lab Worx"
    metaDescription="Australian market entry strategy for overseas and expanding businesses. Validate demand, map requirements, design channels and stage investment."
    path="/capabilities/market-entry-strategy"
    answerQuestion="How should a business enter the Australian market?"
    answer="A business should enter Australia through a staged market entry strategy that validates the first customer, tests the commercial model, maps regulatory and delivery requirements, selects the right route to market and builds local revenue evidence before broader investment."
    media={{
      src: '/images/editorial/chess-opening-poster.webp',
      alt: 'Strategy session opening a new market position',
      caption: 'Choose the first market, customer and proof point.',
    }}
    audienceHeading="Built for businesses that need more than a market report."
    audienceCopy="The service connects market insight to the compliance, channel, operating and investment decisions required to produce revenue in Australia."
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
        title: 'Established businesses entering a new sector',
        description: 'Your capabilities are credible, but the buying group, tender pathway and route to first revenue are different.',
      },
      {
        title: 'Boards testing an entry thesis',
        description: 'A defensible evidence base is required before committing inventory, people, partnerships or establishment costs.',
      },
    ]}
    scopeHeading="The Australian entry case in one view."
    scopeCopy="Market, regulatory and delivery evidence is developed together so the launch plan remains commercially coherent."
    scopeItems={[
      {
        title: 'Market attractiveness',
        description: 'Assess demand, category structure, growth drivers, alternatives, market access and the segments that merit deeper testing.',
      },
      {
        title: 'Customer validation',
        description: 'Identify the first viable customer, buying criteria, decision-makers, objections and the evidence required to win confidence.',
      },
      {
        title: 'Competitive position',
        description: 'Compare local offers, substitutes, price logic, claims, service expectations and the whitespace the proposition can credibly own.',
      },
      {
        title: 'Regulatory pathway',
        description: 'Map standards, registrations, certifications, claims and specialist advice into the commercial programme before launch commitments.',
      },
      {
        title: 'Channel and local delivery',
        description: 'Design partner roles, margins, fulfilment, installation, support and local operating ownership around the buying journey.',
      },
      {
        title: 'Pilot and investment gates',
        description: 'Define a contained first market test, success measures and the evidence that determines whether to stop, adapt or scale.',
      },
    ]}
    processHeading="Reduce uncertainty before increasing commitment."
    processCopy="Each stage is designed to resolve a material question and protect the next use of inventory, capital or leadership attention."
    processItems={[
      {
        title: 'Set the Australian entry mandate',
        description: 'Clarify the commercial objective, risk tolerance, timing, target return and decisions that need local evidence.',
      },
      {
        title: 'Build the market evidence',
        description: 'Test customers, competitors, price, requirements, channels and delivery assumptions against current Australian conditions.',
      },
      {
        title: 'Design the entry pathway',
        description: 'Connect market position, compliance, partners, operations, launch activity, ownership and capital into one staged plan.',
      },
      {
        title: 'Prove the first revenue case',
        description: 'Use a pilot customer, channel test or controlled release to improve confidence before wider establishment and scale.',
      },
    ]}
    comparisonHeading="A practical market entry strategy is staged."
    comparisonCopy="The strongest pathway replaces broad confidence with specific customer, compliance, channel and operating evidence."
    comparisonRows={[
      {
        decision: 'Market research',
        weak: 'A national market size with limited evidence about who will buy first.',
        strong: 'A beachhead customer, buying trigger, decision group and testable demand case.',
      },
      {
        decision: 'Compliance',
        weak: 'A technical task left until the product and launch plan are fixed.',
        strong: 'A commercial workstream linked to claims, timing, inventory, partners and cost.',
      },
      {
        decision: 'Local partner',
        weak: 'Appoint a distributor and transfer responsibility for market creation.',
        strong: 'Define partner role, incentive, enablement, service ownership and productive coverage.',
      },
      {
        decision: 'Investment',
        weak: 'Commit the full launch budget before local conversion evidence exists.',
        strong: 'Release resources in stages as customer, channel and operating evidence improves.',
      },
    ]}
    faqs={[
      {
        question: 'What is Australian market entry consulting?',
        answer: 'Australian market entry consulting helps an overseas or interstate business test demand, identify the first viable customer, understand local requirements, select a route to market and build a staged commercial plan before committing heavily to launch.',
      },
      {
        question: 'What should an Australian market entry strategy include?',
        answer: 'It should include market validation, customer segmentation, competitor and substitute analysis, positioning, pricing and unit economics, regulatory and claims mapping, channel design, local delivery requirements, a pilot plan and clear investment gates.',
      },
      {
        question: 'Is market entry consulting the same as business registration or legal advice?',
        answer: 'No. Divine Lab Worx focuses on the commercial pathway. Legal, tax, regulatory, engineering and certification advice is provided by appropriately qualified specialists where the mandate requires it.',
      },
      {
        question: 'How do you reduce the risk of entering Australia?',
        answer: 'Risk is reduced by validating the first customer and use case, mapping approvals early, testing channel economics, running a contained pilot and releasing capital in stages as evidence improves.',
      },
      {
        question: 'Can Divine Lab Worx support implementation after the strategy?',
        answer: 'Yes. The engagement can continue into partner activation, sales material, demand testing, digital implementation and delivery coordination with Sharktech Global and relevant specialists.',
      },
    ]}
    ctaEyebrow="Australian market entry assessment"
    ctaTitle="Test the entry thesis before funding the launch."
    ctaCopy="Define the first customer, local requirements, route to market, pilot and evidence gates in a contained initial engagement."
    ctaLabel="Request a market entry assessment"
    serviceName="Australian market entry consulting"
    serviceType={[
      'Market entry consulting',
      'Australian market entry strategy',
      'Go-to-market strategy',
    ]}
  />
);

export default MarketEntryStrategy;
