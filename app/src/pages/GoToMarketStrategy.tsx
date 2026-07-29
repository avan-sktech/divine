import ServiceLanding from '../components/ServiceLanding';

/**
 * Go-to-market strategy capability page.
 *
 * Copy ported from the approved 2026 design package
 * (go-to-market-strategy.astro) with the FAQ set from goToMarketFaqs.
 */

const GoToMarketStrategy = () => (
  <ServiceLanding
    eyebrow="Go-to-market strategy consulting"
    code="GTM / INTL"
    title="Go-to-market strategy for an offer"
    titleAccent="that has to sell."
    lede="Define the customer, commercial model, channel, demand plan and delivery system before launch activity becomes expensive."
    seoTitle="Go-to-market strategy consulting | Divine Lab Worx"
    metaDescription="Consulting on go-to-market strategy for product and service launches in Australia and international markets. Align customer, positioning and channel."
    path="/capabilities/go-to-market-strategy"
    answerQuestion="What does a go-to-market strategy consultant do?"
    answer="A go-to-market strategy consultant determines how a specific product or service should reach and convert a defined customer. The work aligns market evidence, positioning, pricing, channel, sales, demand, delivery and measurement into one accountable commercial plan."
    media={{
      src: '/images/editorial/marketing-operations.webp',
      alt: 'Launch and demand operations under review',
      caption: 'Turn positioning into measurable demand and conversion.',
    }}
    audienceHeading="Use a GTM consultant when the launch decision crosses functions."
    audienceCopy="Go-to-market work is most useful when the answer affects product, finance, sales, marketing, operations and capital at the same time."
    audienceItems={[
      {
        title: 'Launching a new product or service',
        description:
          'You need a defined first customer, a commercial offer and a launch pathway before material spend is committed.',
      },
      {
        title: 'Entering a new segment or geography',
        description:
          'The current route to market cannot simply be copied into a different buyer, industry or geographic context.',
      },
      {
        title: 'Fixing an underperforming launch',
        description:
          'Activity is high, but pipeline, conversion, channel ownership or the economic case remains unclear.',
      },
      {
        title: 'Aligning product, sales and delivery',
        description:
          'The functions are making separate decisions and need one commercial plan with shared measures.',
      },
    ]}
    scopeHeading="One commercial system, not separate workstreams."
    scopeCopy="Every component is tested against the same target customer, conversion mechanism and economic outcome."
    scopeItems={[
      {
        title: 'Ideal customer and beachhead',
        description:
          'Define the buyer, urgent problem, buying group, use case and first segment where the offer has a credible right to win.',
      },
      {
        title: 'Positioning and value proposition',
        description:
          'Translate technical or operational capability into a clear commercial promise supported by evidence.',
      },
      {
        title: 'Pricing and commercial model',
        description:
          'Test willingness to pay, margin, delivery cost, partner economics and the commercial logic behind the offer.',
      },
      {
        title: 'Route to market',
        description:
          'Choose the direct, partner, distributor, retail, digital or hybrid path that fits how the customer actually buys.',
      },
      {
        title: 'Demand and sales motion',
        description:
          'Connect messages, proof, conversion points, sales roles and launch activity to a measurable pipeline outcome.',
      },
      {
        title: 'Delivery readiness',
        description:
          'Align onboarding, fulfilment, service, technology, compliance and operating ownership with the market promise.',
      },
    ]}
    processHeading="Move from assumptions to market evidence."
    processCopy="The process starts with the decision that needs to be made and builds only the evidence required to make it responsibly."
    processItems={[
      {
        title: 'Frame the commercial decision',
        description:
          'Set the launch objective, constraints, investment at risk and the evidence leaders need before approving the next stage.',
      },
      {
        title: 'Test the market assumptions',
        description:
          'Examine customer need, buying behaviour, alternatives, price logic, channel access and delivery requirements.',
      },
      {
        title: 'Design the go-to-market system',
        description:
          'Bring the offer, route, sales motion, demand plan, operating model and measures into one execution pathway.',
      },
      {
        title: 'Run a controlled market test',
        description:
          'Build evidence through a pilot, launch sprint or contained activation before a national or capital-heavy commitment.',
      },
    ]}
    comparisonHeading="What makes a go-to-market plan decision-ready?"
    comparisonCopy="The difference is not the number of slides. It is whether each commercial choice is specific, connected and measurable."
    comparisonRows={[
      {
        decision: 'Target market',
        weak: 'A broad market category and a long list of possible customers.',
        strong: 'A named beachhead segment, buying group, urgent use case and reason to act.',
      },
      {
        decision: 'Channel',
        weak: 'Use every available channel and hope activity creates reach.',
        strong: 'Choose the route that matches buying behaviour, economics and service responsibility.',
      },
      {
        decision: 'Launch plan',
        weak: 'A calendar of marketing tasks disconnected from product and delivery decisions.',
        strong: 'A staged commercial plan linking offer, demand, sales, delivery and investment gates.',
      },
      {
        decision: 'Success measure',
        weak: 'Traffic, awareness or partner sign-ups without revenue evidence.',
        strong: 'Customer, conversion, margin, pipeline and operating measures tied to the next decision.',
      },
    ]}
    faqs={[
      {
        question: 'What is a go-to-market strategy?',
        answer:
          'A go-to-market strategy is the commercial plan for taking a specific product or service to a defined customer. It aligns the target segment, value proposition, pricing, route to market, sales motion, demand plan and measures of success.',
      },
      {
        question: 'What does a go-to-market strategy consultant do?',
        answer:
          'A go-to-market strategy consultant tests the customer and market assumptions, defines how the offer will reach and convert buyers, and turns the result into an accountable launch plan with clear owners, evidence and decision gates.',
      },
      {
        question: 'Is a go-to-market strategy the same as a marketing strategy?',
        answer:
          'No. Marketing strategy focuses on awareness, demand and communication. Go-to-market strategy is broader. It also covers the target customer, offer, pricing, sales model, distribution, service delivery, conversion and commercial measurement.',
      },
      {
        question: 'When should an organisation review its go-to-market strategy?',
        answer:
          'Review it before launching a new offer, entering a new segment or country, changing the channel model, committing material launch spend, or when pipeline and conversion no longer support the growth plan.',
      },
      {
        question: 'What is the first step in a Divine Lab Worx engagement?',
        answer:
          'The first step is usually a contained diagnostic that defines the commercial decision, tests the critical assumptions and identifies the evidence required before a larger launch commitment.',
      },
    ]}
    ctaEyebrow="Contained first phase"
    ctaTitle="Turn the launch question into an evidence plan."
    ctaCopy="Begin with a Go-to-Market Diagnostic that clarifies the customer, offer, route, critical assumptions and next investment gate."
    ctaLabel="Request a GTM diagnostic"
    serviceName="Go-to-market strategy consulting"
    serviceType={[
      'Go-to-market strategy',
      'Launch strategy',
      'Product launch consulting',
      'Route to market design',
    ]}
  />
);

export default GoToMarketStrategy;
