import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, ShieldCheck, Network, Layers, Rocket, TrendingUp, Cpu, GitMerge } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { capabilities as capabilityData } from '../data/capabilities';

const icons = [Target, ShieldCheck, Network, Layers, Rocket, TrendingUp, Cpu, GitMerge];

const capabilities = capabilityData.map((cap, i) => ({
  number: cap.number,
  title: cap.title,
  description: cap.description,
  icon: icons[i],
  link: cap.href,
  tags: cap.tags,
}));

const faqs = [
  {
    question: 'What does Divine Lab Worx do?',
    answer: 'Divine Lab Worx is the go-to-market strategist and consultancy arm of Sharktech Global. We take a product, a range or a build system from concept to after-sales in the Australian market. Strategy, compliance, distribution, launch and demand run as one accountable programme.',
  },
  {
    question: 'Who are these capabilities for?',
    answer: 'Retailers scaling a range, manufacturers bringing a new product to market, and homebuilders taking sustainable and 3D-printed homes to a market-ready offer. We also act as the local go-to-market partner for international manufacturers entering Australia.',
  },
  {
    question: 'How is this different from hiring separate advisers?',
    answer: 'Most launches split the work across a strategy firm, a compliance consultant, a distributor and an agency. Nobody owns the result. We connect the specification, the approval pathway, the channel economics and the launch evidence in one room, with one team accountable for the outcome.',
  },
  {
    question: 'How does an engagement start?',
    answer: 'With a contained Phase 1. We run a product reality check, set the target specification, scope compliance, build the evidence register and cost the critical path. The board gets evidence before capital is committed.',
  },
];

const capabilitiesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://divinelabworx.com/' },
        { '@type': 'ListItem', position: 2, name: 'Capabilities', item: 'https://divinelabworx.com/capabilities' },
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

const Capabilities = () => {
  return (
    <>
      <Helmet>
        <title>Capabilities | Divine Lab Worx - Go-to-Market Strategy Australia</title>
        <meta name="description" content="Market-entry strategy, compliance pathway, distribution design, CPPD, launch and demand, and programme integration. One accountable team from concept to after-sales in Australia." />
        <link rel="canonical" href="https://divinelabworx.com/capabilities" />
        <meta property="og:title" content="Capabilities | Divine Lab Worx" />
        <meta property="og:description" content="Six connected capabilities that take a product from concept to first sale in Australia, as one accountable programme." />
        <meta property="og:url" content="https://divinelabworx.com/capabilities" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(capabilitiesJsonLd)}</script>
      </Helmet>
      <div className="w-full" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
              Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              One Team from Strategy to First Sale
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              Most launches fail on execution, not idea. Our six capabilities connect the
              specification, the approval pathway, the channel economics and the launch evidence,
              so decisions are made in one room, against the same facts, by people accountable
              for the result.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="h-full border border-silver-steel/20 bg-obsidian/30 p-6 sm:p-8 transition-all duration-300 hover:border-gold flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-bold text-gold/20">{cap.number}</span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gold/50 text-gold flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-optical-white mb-3 tracking-tight">
                    {cap.title}
                  </h2>
                  <p className="text-sm text-accent-muted leading-relaxed flex-1">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.1em] text-accent-muted border border-silver-steel/20 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-mono tracking-widest text-gold">
                    VIEW CAPABILITY
                    <ArrowRight size={12} />
                  </span>
                </motion.div>
              );
              return (
                <Link key={cap.number} to={cap.link} className="block h-full">
                  {inner}
                </Link>
              );
            })}
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
              Common Questions
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Bring Your Product to Market with One Accountable Team
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Engage our strategists for a contained Phase 1 that turns your launch assumptions
              into board-grade evidence and a costed path to first sale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              INITIATE STRATEGIC ENGAGEMENT
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Capabilities;
