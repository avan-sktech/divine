import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Factory, Home as HomeIcon, Crosshair } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const audiences = [
  {
    number: '01',
    title: 'Manufacturers entering Australia',
    description: 'International brands appointing a local go-to-market partner to make the product market-ready and compliant.',
    icon: Factory,
  },
  {
    number: '02',
    title: 'Sustainable & 3D homes',
    description: 'Homebuilders taking sustainable and 3D-printed homes from concept to a market-ready, compliant offer.',
    icon: HomeIcon,
  },
  {
    number: '03',
    title: 'Product redesign to beat a competitor',
    description: 'Benchmarking exact competitor models and setting a target specification that leads where it counts.',
    icon: Crosshair,
  },
];

const doctrine = [
  {
    number: '1',
    title: 'Concurrency with structure',
    description: 'Visible dependencies, named owners, resource allocation and controlled information release, not chaos.',
  },
  {
    number: '2',
    title: 'Product and process designed together',
    description: 'The architecture and the way it is manufactured are one decision, not two.',
  },
  {
    number: '3',
    title: 'Life-cycle planning from concept',
    description: 'Supply, use, service and end of life are planned before the specification is frozen.',
  },
  {
    number: '4',
    title: 'Decisions evaluated hierarchically',
    description: 'From feature and component through process, factory, supply network, use and service.',
  },
  {
    number: '5',
    title: 'Production is a design decision',
    description: 'Location, suppliers and logistics shape cost, quality and lead time, so they are designed, not assumed.',
  },
  {
    number: '6',
    title: 'Usage context sets the specification',
    description: 'Real Australian conditions, heat, dust, distance and duty cycle, define what performance actually means.',
  },
  {
    number: '7',
    title: 'Operational, measurable improvement',
    description: 'Strategy becomes requirements, tests, process plans, cost targets, owners and release criteria.',
  },
];

const evidenceRules = [
  'No specification without a test that proves it.',
  'No feature without a full burden analysis of its cost, weight, risk and service impact.',
  'No launch before after-sales, parts and support are ready.',
  'Marketing stays subordinate to a defensible product and a working supply and service chain.',
  'Every assumption becomes a written quote, a test record, a named owner or an issue on the register.',
];

const partnerReasons = [
  {
    number: 'A',
    title: 'One accountable programme',
    description: 'Specification, compliance, warranty, service, channel and launch aligned in one place, not across four advisers.',
  },
  {
    number: 'B',
    title: 'Australian market fluency',
    description: 'Operator-level command of homologation, consumer law, distribution and how launches actually work here.',
  },
  {
    number: 'C',
    title: 'Board-grade evidence',
    description: 'Written quotes, test records, verified partners and a costed critical path a board can approve with confidence.',
  },
];

const engagementSteps = [
  {
    number: '01',
    title: 'Phase 1 foundation',
    description: 'Product reality check, target specification, compliance scope, evidence register and a costed critical path.',
  },
  {
    number: '02',
    title: 'Programme',
    description: 'A monthly integrated programme that keeps specification, process, compliance, channel and launch aligned to first sale.',
  },
  {
    number: '03',
    title: 'Specialists coordinated',
    description: 'Engineering, homologation, legal, customs and logistics specialists coordinated under one accountable plan.',
  },
  {
    number: '04',
    title: 'Launch to scale',
    description: 'Controlled pilots, measured demand and a signed distributor before national inventory and spend.',
  },
];

const faqs = [
  {
    question: 'What is Concurrent Product and Process Design?',
    answer: 'CPPD is the discipline of designing a product together with its manufacturing process, compliance pathway, cost, quality and service, starting at the concept stage rather than in sequence. Market and manufacturing realities shape the specification before launch, not after.',
  },
  {
    question: 'Who is it for?',
    answer: 'Manufacturers, importers and brands bringing an engineered or physical product to the Australian market, especially where compliance, cost, quality and after-sales service decide success, such as retail, manufacturing and sustainable housing.',
  },
  {
    question: 'How much experience does Divine Lab Worx have?',
    answer: 'Divine Lab Worx, the consultancy arm of Sharktech Global, brings nearly a decade of product launch and go-to-market strategy experience across engineered and physical products in Australia.',
  },
  {
    question: 'How is this different from a marketing agency?',
    answer: 'A marketing agency promotes a product after it is designed. CPPD shapes the product, its process, its compliance and its service before launch, and keeps marketing subordinate to a defensible product and a working supply and service chain.',
  },
  {
    question: 'Where do you sit within Sharktech Global?',
    answer: 'Divine Lab Worx is the specialist consultancy arm of Sharktech Global, drawing on the wider group for marketing, technology and industry partnerships while running product-to-market strategy as a dedicated practice.',
  },
];

const cppdJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Concurrent Product and Process Design',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Divine Lab Worx',
        parentOrganization: { '@type': 'Organization', name: 'Sharktech Global' },
      },
      areaServed: 'AU',
      description: 'Designing a product together with its manufacturing process, compliance, cost, quality and service from the concept stage, so a launch starts ready.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://divinelabworx.com/' },
        { '@type': 'ListItem', position: 2, name: 'Capabilities', item: 'https://divinelabworx.com/capabilities' },
        { '@type': 'ListItem', position: 3, name: 'Concurrent Product & Process Design', item: 'https://divinelabworx.com/capabilities/concurrent-product-process-design' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

const CapabilityCPPD = () => {
  return (
    <>
      <Helmet>
        <title>Concurrent Product & Process Design (CPPD) | Divine Lab Worx</title>
        <meta name="description" content="Divine Lab Worx, the consultancy arm of Sharktech Global, applies Concurrent Product and Process Design (CPPD) to bring engineered products to market in Australia. Nearly a decade of product launch and go-to-market strategy experience." />
        <link rel="canonical" href="https://divinelabworx.com/capabilities/concurrent-product-process-design" />
        <meta property="og:title" content="Concurrent Product & Process Design (CPPD) | Divine Lab Worx" />
        <meta property="og:description" content="The go-to-market strategist that designs the product, its process and its service together, so a launch starts ready. Part of Sharktech Global." />
        <meta property="og:url" content="https://divinelabworx.com/capabilities/concurrent-product-process-design" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(cppdJsonLd)}</script>
      </Helmet>
      <div className="w-full" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
      {/* Breadcrumb + Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-6">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/capabilities" className="hover:text-gold transition-colors">Capabilities</Link>
              <span className="mx-2">/</span>
              <span className="text-optical-white">CPPD</span>
            </nav>
            <span className="inline-flex items-center gap-2 border border-silver-steel/20 rounded-full px-4 py-1.5 font-mono text-[10px] sm:text-xs text-accent-muted mb-6">
              Capability · <span className="text-gold">Nearly a decade</span> of product launch &amp; go-to-market experience
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              Concurrent Product &amp; <span className="text-gold">Process Design.</span>
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We design the product, its process, its compliance and its service together. From the
              concept stage, not after. The result is simple. A product that wins on the specs buyers
              care about, is built at cost and quality, and is ready to sell in Australia on day one.
              Divine Lab Worx is the consultancy arm of Sharktech Global.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              What It Is
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
              Design the Product and the Way It Reaches the Market as One System
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-5">
              Most launches are run in sequence. Engineering designs the product, then compliance is
              checked, then a factory is chosen, then a distributor is found, then marketing begins.
              By the time the Australian requirements are understood, the design, the sourcing and
              the commercial commitments are already made. The fixes are expensive and late.
            </p>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              Concurrent Product and Process Design, or CPPD, runs these decisions together and
              starts them at concept. The product architecture and the manufacturing process are
              designed as one. Life-cycle planning, from supply and use to service and end of life,
              begins before the specification is frozen. Production location, suppliers and logistics
              are treated as product-design decisions, because they are. It is the difference between
              a niche product and one that wins a market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Who It Is For
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              Engineered Products That Have to Earn Their Market
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              CPPD matters most where compliance, cost, quality and service decide success, not the launch price.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-silver-steel/20 p-6 sm:p-8 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold text-gold/20">{audience.number}</span>
                    <div className="w-10 h-10 rounded-lg border border-gold/50 text-gold flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-accent-muted leading-relaxed">{audience.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctrine */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              The CPPD Operating Doctrine
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              Seven principles turn a strategy into a product that can be built, certified, supported and sold.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {doctrine.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 border border-silver-steel/10 rounded-lg p-5 bg-obsidian/30 hover:border-gold/40 transition-all duration-300"
              >
                <span className="font-mono text-base text-gold font-bold min-w-[24px]">{item.number}</span>
                <div>
                  <span className="block text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                    {item.title}
                  </span>
                  <span className="block text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence discipline */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              What Makes It Different
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              Evidence Discipline, Not Opinion
            </h2>
          </motion.div>
          <ul className="max-w-3xl divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
            {evidenceRules.map((rule, index) => (
              <motion.li
                key={rule}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 py-4 items-start"
              >
                <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/40 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={11} />
                </span>
                <span className="text-sm sm:text-base text-accent-muted leading-relaxed">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Why Partner with Divine Lab Worx
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              The Reason a Retailer, Manufacturer or Homebuilder Engages Us
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              A product without distribution is a liability. We connect the specification, the
              approval pathway, the channel economics and the launch evidence so decisions are made
              in one room, by people accountable for the result. Nearly a decade of product launch
              and go-to-market strategy experience sits behind every engagement, backed by the wider
              Sharktech Global group.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {partnerReasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-silver-steel/20 p-6 sm:p-8 hover:border-gold/50 transition-all duration-300"
              >
                <span className="text-3xl font-bold text-gold/20 block mb-4">{reason.number}</span>
                <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-accent-muted leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              The Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              How a CPPD Engagement Runs
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              A contained, gated start that de-risks the whole launch before capital is committed.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {engagementSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 border border-silver-steel/10 rounded-lg p-5 bg-obsidian/30 hover:border-gold/40 transition-all duration-300"
              >
                <span className="font-mono text-base text-gold font-bold min-w-[32px]">{step.number}</span>
                <div>
                  <span className="block text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                    {step.title}
                  </span>
                  <span className="block text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed">
                    {step.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              Common Questions About CPPD
            </h2>
          </motion.div>
          <div className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-optical-white tracking-tight mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-accent-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Engage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Design Your Product to Win Its Market, Before You Commit Capital
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Engage our strategists for a contained Phase 1 that turns your launch assumptions
              into board-grade evidence and a costed path to first sale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
              >
                INITIATE STRATEGIC ENGAGEMENT
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-silver-steel/30 text-optical-white text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
              >
                OUR INDUSTRIES →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CapabilityCPPD;
