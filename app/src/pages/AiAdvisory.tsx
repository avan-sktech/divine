import ServiceLanding from '../components/ServiceLanding';

/**
 * AI advisory and governance capability page.
 *
 * Copy ported from the approved 2026 design package
 * (src/pages/advisory.astro and the Applied AI workflow in
 * MethodologyCarousel.astro), rendered through the shared
 * ServiceLanding template.
 */

const AiAdvisory = () => (
  <ServiceLanding
    eyebrow="AI advisory"
    code="AI / 01"
    title="AI advisory for value you can"
    titleAccent="govern and measure."
    lede="Assess readiness, prioritise the right use cases and carry approved opportunities into implementation with accountable controls."
    seoTitle="AI advisory and governance consultants | Divine Lab Worx"
    metaDescription="AI advisory consulting for organisations across markets: readiness, use-case prioritisation, governance, business cases and implementation pathways."
    path="/capabilities/ai-advisory"
    answerQuestion="What does an AI advisory consultant do?"
    answer="An AI advisory consultant identifies where artificial intelligence can create measurable value, assesses organisational readiness, ranks use cases, defines governance and risk controls, builds the business case and plans a controlled implementation pathway."
    media={{
      src: '/images/editorial/digital-business-systems-poster.webp',
      alt: 'Connected digital business systems',
      caption: 'Prioritise valuable use cases with accountable controls.',
    }}
    audienceHeading="Turn broad ambition into a controlled operating use case."
    audienceCopy="AI creates value when the use case, data, controls, human ownership and measurement method are designed as one operating system. Value, data, risk, adoption and ownership are decided together."
    audienceItems={[
      {
        title: 'Boards testing an AI thesis',
        description: 'A defensible view of value, feasibility, data readiness, risk and time to evidence is required before broader AI investment is released.',
      },
      {
        title: 'Executive sponsors',
        description: 'The portfolio of ideas has to become a funded priority with a baseline, an expected benefit, agreed controls and a measurement method.',
      },
      {
        title: 'Delivery owners',
        description: 'A selected use case needs workflow design, data dependencies, integration and operating ownership before build work begins.',
      },
      {
        title: 'Public sector and policy programmes',
        description: 'AI policy and public-sector programmes need transparent assumptions, stakeholder participation, defensible benefits and clear safeguards.',
      },
    ]}
    scopeHeading="From a portfolio of ideas to a funded priority."
    scopeCopy="The work is designed to answer the decisions a board, executive sponsor and delivery owner actually need to make. Where a mandate affects more than one organisation, public value, economic outcomes and implementation constraints are considered together, and each market is assessed against its own legal, policy and institutional context."
    scopeItems={[
      {
        title: 'Opportunity portfolio',
        description: 'Identify operating constraints and rank use cases against value, feasibility, data readiness, risk and time to evidence.',
      },
      {
        title: 'Business case and controls',
        description: 'Define the baseline, expected benefit, adoption requirements, model risk, governance and measurement method.',
      },
      {
        title: 'Solution pathway',
        description: 'Translate the selected use case into workflow design, data dependencies, integration, operating ownership and delivery stages.',
      },
      {
        title: 'Contained implementation',
        description: 'Build and deploy a functional system, observe evidence in the real workflow and define the next scale decision.',
      },
      {
        title: 'Policy and economic analysis',
        description: 'Outcomes, affected groups, implementation levers and measurable public value.',
      },
      {
        title: 'Responsible AI controls',
        description: "Governance, transparency, human oversight, privacy and risk appropriate to the use case. For Australian engagements, the approach reflects the Australian Government's practical foundations for responsible AI: accountability, impact assessment, risk management, transparency, testing and meaningful human control.",
      },
      {
        title: 'Stakeholder evidence',
        description: 'Structured inputs that make competing needs and confidence levels visible.',
      },
    ]}
    processHeading="Value, workflow, data, controls and adoption develop together."
    processCopy="For applied AI, Divine Lab Worx develops the value case, target workflow, data pathway, governance controls and adoption model together. This moves AI strategy from a technology idea to a measurable and accountable operating use case."
    processItems={[
      {
        title: 'Operating need',
        description: 'Start with a valuable constraint in a real workflow. Identify the decision, delay, cost or service problem that creates a measurable reason to act.',
      },
      {
        title: 'Value baseline',
        description: 'Measure the current state before forecasting benefit. Establish volume, effort, quality, delay, risk and the human work affected.',
      },
      {
        title: 'Use-case design',
        description: 'Design model behaviour and workflow change together. Define data, integrations, human judgement, exceptions and the outcome the system must support.',
      },
      {
        title: 'Governance controls',
        description: 'Put accountability inside the operating design. Privacy, security, transparency, testing, oversight and decision ownership are explicit before deployment.',
      },
      {
        title: 'Measured pilot',
        description: 'Test value, control and adoption in the real workflow. A contained implementation verifies performance, user behaviour, operating burden and risk.',
      },
      {
        title: 'Governed scale',
        description: 'Expand only when value and control can repeat. Measured results release the next investment stage while monitoring and human ownership remain active.',
      },
    ]}
    faqs={[
      {
        question: 'What does an AI advisory consultant do?',
        answer: 'An AI advisory consultant helps an organisation identify valuable use cases, assess readiness, build the business case, establish governance and define how an approved priority should move into controlled implementation.',
      },
      {
        question: 'What is included in an AI readiness assessment?',
        answer: 'An AI readiness assessment reviews business priorities, current AI use, data, technology, security, privacy, workforce capability, governance, adoption effort and the evidence required to pursue specific use cases responsibly.',
      },
      {
        question: 'What does responsible AI governance require in Australia?',
        answer: 'Practical AI governance establishes accountability, assesses impacts and risk, documents AI use, supports transparency, tests and monitors systems, and maintains meaningful human oversight appropriate to each use case.',
      },
      {
        question: 'How do you identify the best AI use cases?',
        answer: 'Use cases are assessed against commercial value, feasibility, data readiness, adoption effort, risk and time to evidence. The result is a ranked portfolio rather than an unstructured list of ideas.',
      },
      {
        question: 'Do you only provide strategy?',
        answer: 'No. Divine Lab Worx can carry an approved use case into solution design and implementation with Sharktech Global while keeping benefits, controls and reporting connected to the original business case.',
      },
    ]}
    ctaEyebrow="AI opportunity assessment"
    ctaTitle="Find the use cases worth funding."
    ctaCopy="Begin with a contained assessment of value, feasibility, data readiness, risk and time to evidence."
    ctaLabel="Start a conversation"
    serviceName="AI advisory and governance"
    serviceType={[
      'AI advisory consulting',
      'AI governance consulting',
      'AI readiness assessment',
      'AI use-case prioritisation',
    ]}
  />
);

export default AiAdvisory;
