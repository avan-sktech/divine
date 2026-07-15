import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Factory, Home as HomeIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const industryBlocks = [
  {
    eyebrow: 'Industry 01',
    title: 'Retail',
    description: 'For retailers and wholesalers building and scaling a product range in Australia.',
    icon: ShoppingBag,
    cards: [
      {
        number: '01',
        title: 'Range strategy',
        description: 'What to stock, how to position it and where the margin and demand actually sit.',
      },
      {
        number: '02',
        title: 'Supplier & product readiness',
        description: 'Sourcing, compliance, warranty and parts, so a range is built to sell and to support.',
      },
      {
        number: '03',
        title: 'Channel & launch',
        description: 'Online and in-store launch, demand generation and measurable conversion.',
      },
    ],
  },
  {
    eyebrow: 'Industry 02',
    title: 'Manufacturing',
    description: 'For manufacturers and product developers bringing a new or improved product to market.',
    icon: Factory,
    cards: [
      {
        number: '01',
        title: 'Concurrent product & process design',
        description: 'We design the product, its process and its service together, so market realities shape the specification before launch.',
        link: '/capabilities/concurrent-product-process-design',
      },
      {
        number: '02',
        title: 'Compliance & standards',
        description: 'Australian standards, approvals and consumer-law obligations mapped and coordinated with specialists.',
      },
      {
        number: '03',
        title: 'Distribution & go-to-market',
        description: 'One accountable distributor or channel, a costed launch and a route to first sale.',
      },
    ],
  },
  {
    eyebrow: 'Industry 03',
    title: 'Sustainable & 3D homes',
    description: 'For homebuilders taking sustainable and 3D-printed homes from concept to a market-ready offer.',
    icon: HomeIcon,
    cards: [
      {
        number: '01',
        title: 'Build system to product',
        description: 'Turning a construction method into a defined, repeatable and sellable housing product.',
      },
      {
        number: '02',
        title: 'Compliance & approvals',
        description: 'Building standards, certification and approvals coordinated with qualified specialists.',
      },
      {
        number: '03',
        title: 'Route to market',
        description: 'Positioning, demand and a controlled path to first homes delivered and occupied.',
      },
    ],
  },
];

const faqs = [
  {
    question: 'Which industries does DivineLab Worx consult to?',
    answer: 'Retail, manufacturing and sustainable housing including 3D-printed homes. In each, we act as a go-to-market strategist that takes a product, a range or a build system from concept to after-sales.',
  },
  {
    question: 'Do you work with international manufacturers entering Australia?',
    answer: 'Yes. We act as the local go-to-market partner for manufacturers and product developers, handling positioning, compliance, distribution, launch and service so the product reaches the Australian market ready to sell.',
  },
  {
    question: 'How much experience does DivineLab Worx have?',
    answer: 'Nearly a decade of product launch and go-to-market strategy experience, backed by the wider Sharktech Global group.',
  },
];

const industriesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://divinelabworx.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://divinelabworx.com/industries' },
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

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries: Retail, Manufacturing & Sustainable Homes | DivineLab Worx</title>
        <meta name="description" content="DivineLab Worx, the consultancy arm of Sharktech Global, is the go-to-market strategist for retail, manufacturing and sustainable housing in Australia. Nearly a decade of product launch and go-to-market strategy experience." />
        <link rel="canonical" href="https://divinelabworx.com/industries" />
        <meta property="og:title" content="Industries: Retail, Manufacturing & Sustainable Homes | DivineLab Worx" />
        <meta property="og:description" content="Go-to-market strategy for retailers, manufacturers and homebuilders in Australia. Part of Sharktech Global." />
        <meta property="og:url" content="https://divinelabworx.com/industries" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(industriesJsonLd)}</script>
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
            <span className="inline-flex items-center gap-2 border border-silver-steel/20 rounded-full px-4 py-1.5 font-mono text-[10px] sm:text-xs text-accent-muted mb-6">
              Industries · <span className="text-gold">Nearly a decade</span> of product launch &amp; go-to-market experience
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              Retail, Manufacturing and <span className="text-gold">Sustainable Housing.</span>
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We work across three Australian industries. Retail. Manufacturing. Sustainable housing.
              In each one we take a product from concept to after sales. One team. One plan.
              DivineLab Worx is the consultancy arm of Sharktech Global.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Blocks */}
      {industryBlocks.map((block) => {
        const Icon = block.icon;
        return (
          <section key={block.title} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 max-w-3xl mb-10"
              >
                <div className="w-12 h-12 rounded-lg border border-gold/50 text-gold flex items-center justify-center flex-shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-2 block">
                    {block.eyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-2">
                    {block.title}
                  </h2>
                  <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {block.cards.map((card, index) => (
                  <motion.div
                    key={card.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-silver-steel/20 p-6 sm:p-8 hover:border-gold/50 transition-all duration-300"
                  >
                    <span className="text-3xl font-bold text-gold/20 block mb-4">{card.number}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-accent-muted leading-relaxed">
                      {card.description}
                      {'link' in card && card.link && (
                        <>
                          {' '}
                          <Link to={card.link} className="text-gold hover:text-gold-light transition-colors">
                            Explore CPPD →
                          </Link>
                        </>
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Selected Clients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Selected Clients
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              Trusted Across Retail and Manufacturing
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="https://www.natridy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-silver-steel/20 rounded-lg p-5 sm:p-6 hover:border-gold/50 transition-all duration-300"
            >
              <span className="block text-base font-semibold text-optical-white tracking-tight">Natridy</span>
              <span className="block text-xs text-accent-muted mt-1">Home appliances manufacturer</span>
            </a>
            <a
              href="https://samaria.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-silver-steel/20 rounded-lg p-5 sm:p-6 hover:border-gold/50 transition-all duration-300"
            >
              <span className="block text-base font-semibold text-optical-white tracking-tight">Samaria Australia</span>
              <span className="block text-xs text-accent-muted mt-1">Retail and wholesale</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
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
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Engage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Bring Your Product, Range or Build System to Market
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Engage our strategists for a contained Phase 1 that turns your launch assumptions
              into board-grade evidence and a costed route to first sale.
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
                to="/capabilities/concurrent-product-process-design"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-silver-steel/30 text-optical-white text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
              >
                SEE OUR CPPD CAPABILITY →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Industries;
