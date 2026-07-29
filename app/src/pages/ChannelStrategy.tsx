import ServiceLanding from '../components/ServiceLanding';

/**
 * Channel strategy consulting capability page.
 * Copy ported verbatim from the approved 2026 design package
 * (channel-strategy.astro) and the channelStrategyFaqs array.
 */
const ChannelStrategy = () => (
  <ServiceLanding
    eyebrow="Channel strategy consulting"
    code="CHN / INTL"
    title="Build a channel that"
    titleAccent="produces revenue."
    lede="Design the partner roles, economics, service model and activation required to turn market coverage into customer outcomes."
    seoTitle="Distribution and channel strategy | Divine Lab Worx"
    metaDescription="Distribution and channel strategy consulting. Design direct, distributor, reseller, retail and partner models around productive revenue coverage."
    path="/capabilities/channel-strategy"
    answerQuestion="What does a channel strategy consultant do?"
    answer="A channel strategy consultant designs how a business should reach, convert and support customers through direct sales, distributors, resellers, retailers, digital channels or a hybrid model. The work aligns partner roles, economics, enablement, service ownership and performance measures."
    media={{
      src: '/images/editorial/executive-workshop.webp',
      alt: 'Channel and partner model design workshop',
      caption: 'Build a route to market that works for every participant.',
    }}
    audienceHeading="Use channel strategy when reach and control must be balanced."
    audienceCopy="A credible partner network is not a substitute for market demand. The model has to work for the customer, the partner and the provider at the same time."
    audienceItems={[
      {
        title: 'Entering a new market through partners',
        description: 'You need local reach without losing control of customer experience, economics, evidence or brand position.',
      },
      {
        title: 'Resetting an existing distributor network',
        description: 'Partner count has grown, but productive pipeline, conversion, service quality or role clarity has not.',
      },
      {
        title: 'Choosing direct, indirect or hybrid',
        description: 'The business needs a commercial decision based on buying behaviour, coverage, margin and support requirements.',
      },
      {
        title: 'Launching a partner programme',
        description: 'Recruitment, enablement, incentives and governance need to support a defined customer and sales motion.',
      },
    ]}
    scopeHeading="Productive coverage has an operating design."
    scopeCopy="The channel is built around the customer journey and the economic reason each participant has to act."
    scopeItems={[
      {
        title: 'Customer buying pathway',
        description: 'Map where buyers discover, assess, purchase, implement and seek support for the offer.',
      },
      {
        title: 'Route-to-market options',
        description: 'Compare direct, distributor, reseller, retail, marketplace and hybrid models against the commercial mandate.',
      },
      {
        title: 'Partner profile and coverage',
        description: 'Define the capabilities, relationships, geography and operating commitment required from productive partners.',
      },
      {
        title: 'Margin and unit economics',
        description: 'Make landed cost, partner margin, sales effort, service cost, working capital and customer economics visible.',
      },
      {
        title: 'Roles and service ownership',
        description: 'Assign lead generation, qualification, sales, implementation, training, warranty and account growth explicitly.',
      },
      {
        title: 'Activation and measurement',
        description: 'Build the enablement, demand support, pipeline rules and scorecard required to move from appointment to revenue.',
      },
    ]}
    processHeading="Move from appointed partners to productive partners."
    processCopy="The work clarifies what must be retained, reset or built before more channel investment is released."
    processItems={[
      {
        title: 'Diagnose the current route',
        description: 'Review customer behaviour, pipeline, conversion, partner activity, economics, service performance and ownership gaps.',
      },
      {
        title: 'Design the channel model',
        description: 'Choose the route, partner roles, customer coverage, incentives, commercial terms and operating requirements.',
      },
      {
        title: 'Build the activation plan',
        description: 'Define recruitment or reset priorities, enablement, sales material, demand support and the first productive opportunities.',
      },
      {
        title: 'Govern productive coverage',
        description: 'Measure qualified pipeline, conversion, service and repeat revenue rather than agreements or nominal territory coverage.',
      },
    ]}
    comparisonHeading="What separates a channel from a partner list?"
    comparisonCopy="A channel exists only when the commercial and operating system can repeatedly create and support customer revenue."
    comparisonRows={[
      {
        decision: 'Partner selection',
        weak: 'Choose the largest distributor or recruit as many partners as possible.',
        strong: 'Select partners against customer access, capability, incentive and operating commitment.',
      },
      {
        decision: 'Economics',
        weak: 'Set a headline margin without modelling delivery and support obligations.',
        strong: 'Model landed cost, sales effort, service, working capital and value created for every participant.',
      },
      {
        decision: 'Ownership',
        weak: 'Assume the partner will create demand, sell, implement and support the offer.',
        strong: 'Assign every stage of the customer journey and define hand-offs before launch.',
      },
      {
        decision: 'Performance',
        weak: 'Count signed partners, regions or training completions.',
        strong: 'Track active opportunities, conversion, service outcomes, repeat demand and profitable coverage.',
      },
    ]}
    faqs={[
      {
        question: 'What is a channel strategy?',
        answer: 'A channel strategy defines how a product or service reaches customers through direct sales, distributors, resellers, retailers, digital channels or a hybrid model. It sets roles, economics, coverage, service ownership and performance measures.',
      },
      {
        question: 'How do you choose between direct and indirect sales channels?',
        answer: 'The choice depends on customer buying behaviour, sales complexity, required coverage, margin, service obligations, local capability and the cost of acquiring and supporting each customer.',
      },
      {
        question: 'Why do distribution partnerships underperform?',
        answer: 'Common causes include weak customer demand, unclear partner roles, poor incentives, unrealistic margins, inadequate enablement, territory conflict and measuring signed partners instead of productive revenue coverage.',
      },
      {
        question: 'What does a channel strategy engagement produce?',
        answer: 'Typical outputs include a route-to-market recommendation, partner profile, direct and indirect role design, margin and unit economics, service model, partner activation plan and a performance scorecard.',
      },
      {
        question: 'Can you review an existing distributor or partner network?',
        answer: 'Yes. Divine Lab Worx can assess productive coverage, partner economics, pipeline, conversion, service performance and role clarity, then recommend where to retain, reset or redesign the model.',
      },
    ]}
    ctaEyebrow="Channel strategy review"
    ctaTitle="Make the route to customer commercially explicit."
    ctaCopy="Review the current model or design a new-market channel around productive coverage, clear ownership and accountable economics."
    ctaLabel="Request a channel review"
    serviceName="Channel strategy consulting"
    serviceType={[
      'Channel strategy consulting',
      'Distribution strategy',
      'Route to market design',
      'Partner programme design',
    ]}
  />
);

export default ChannelStrategy;
