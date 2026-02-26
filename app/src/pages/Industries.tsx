import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Cpu, Check } from 'lucide-react';
import { useViewMode } from '../contexts/ViewModeContext';

const consumerSectorsTechnical = [
  'Engineered Appliances',
  'Smart Home Devices',
  'Regulated Health Products',
  'Premium Consumer Electronics',
  'Sustainable Product Lines',
];

const consumerSectorsExecutive = [
  'Home Appliances & Electronics',
  'Health & Wellness Products',
  'Smart Home Technology',
  'Premium Consumer Brands',
  'Sustainable Products',
];

const infrastructureSectorsTechnical = [
  'Cloud Service Providers',
  'AI Compute Infrastructure',
  'Data Centre Operators',
  'Edge Computing Networks',
  'Renewable Energy Systems',
];

const infrastructureSectorsExecutive = [
  'Cloud & Data Center Companies',
  'AI & Machine Learning Infrastructure',
  'Digital Service Providers',
  'Telecommunications Networks',
  'Clean Energy Technology',
];

const Industries = () => {
  const { isTechnical, isExecutive } = useViewMode();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/australia-market.jpg" 
            alt="Australia Market"
            loading="lazy"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {isTechnical && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                  FOCUSED VERTICALS
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  THE COMBINED LANE
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  Divine Lab Worx owns the intersection of physical product deployment and 
                  digital infrastructure architecture. We operate where engineered systems 
                  meet market reality.
                </p>
              </>
            )}
            {isExecutive && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                  STRATEGIC VERTICALS
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  DUAL MARKET COVERAGE
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  We architect market entry for premium consumer brands and infrastructure 
                  providers seeking established presence in Australia's concentrated commercial landscape.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Consumer & Retail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-silver-steel/20 h-full overflow-hidden">
                {/* Header Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/images/retail-deployment.jpg" 
                    alt="Retail Deployment"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 border border-silver-steel/30 bg-obsidian/50 backdrop-blur-sm flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-silver-steel" />
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block">
                        {isTechnical ? 'VERTICAL' : 'FOCUS AREA'}
                      </span>
                      <h2 className="text-xl font-semibold text-optical-white tracking-tight">
                        {isTechnical ? 'CONSUMER & RETAIL' : 'CONSUMER PRODUCTS'}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 border-b border-silver-steel/10">
                  <p className="text-sm text-accent-muted leading-relaxed">
                    {isTechnical 
                      ? "Engineered products entering Australia's concentrated retail ecosystems. We structure deployment for brands seeking premium positioning and sustainable market presence."
                      : "Companies selling physical products through Australian retailers. We help you navigate the duopoly market structure and protect your pricing integrity."
                    }
                  </p>
                </div>

                {/* Sectors */}
                <div className="p-8 border-b border-silver-steel/10">
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                    {isTechnical ? 'FOCUS SECTORS' : 'TYPICAL CLIENTS'}
                  </span>
                  <ul className="space-y-3">
                    {(isTechnical ? consumerSectorsTechnical : consumerSectorsExecutive).map((sector, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-silver-steel">
                        <Check className="w-4 h-4 text-silver-steel/50" />
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Portfolio */}
                <div className="px-8 pb-8 pt-8 border-b border-silver-steel/10">
                  <div className="border border-silver-steel/10 p-4">
                    <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block mb-2">
                      FEATURED PORTFOLIO
                    </span>
                    <span className="text-sm font-semibold text-optical-white">
                      NATRIDY
                    </span>
                    <p className="text-xs text-accent-muted mt-1">
                      Premium engineered appliances for sustainable living
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
                  >
                    DISCUSS RETAIL DEPLOYMENT
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Digital & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="border border-silver-steel/20 h-full overflow-hidden">
                {/* Header Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/images/data-center.jpg" 
                    alt="Data Center Infrastructure" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 border border-silver-steel/30 bg-obsidian/50 backdrop-blur-sm flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-silver-steel" />
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block">
                        {isTechnical ? 'VERTICAL' : 'FOCUS AREA'}
                      </span>
                      <h2 className="text-xl font-semibold text-optical-white tracking-tight">
                        {isTechnical ? 'DIGITAL & INFRASTRUCTURE' : 'INFRASTRUCTURE & TECHNOLOGY'}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 border-b border-silver-steel/10">
                  <p className="text-sm text-accent-muted leading-relaxed">
                    {isTechnical 
                      ? "Structured pathways for Cloud and AI-first infrastructure providers seeking staged execution in Australia's regulated and concentrated digital markets."
                      : "Technology companies building data centers or cloud infrastructure in Australia. We navigate regulatory requirements and connection challenges."
                    }
                  </p>
                </div>

                {/* Sectors */}
                <div className="p-8 border-b border-silver-steel/10">
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                    {isTechnical ? 'FOCUS SECTORS' : 'TYPICAL CLIENTS'}
                  </span>
                  <ul className="space-y-3">
                    {(isTechnical ? infrastructureSectorsTechnical : infrastructureSectorsExecutive).map((sector, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-silver-steel">
                        <Check className="w-4 h-4 text-silver-steel/50" />
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advisory Note */}
                <div className="px-8 pb-8 pt-8 border-b border-silver-steel/10">
                  <div className="border border-silver-steel/10 p-4">
                    <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block mb-2">
                      SERVICE MODEL
                    </span>
                    <span className="text-sm font-semibold text-optical-white">
                      ADVISORY ONLY
                    </span>
                    <p className="text-xs text-accent-muted mt-1">
                      Architecture and pathway mapping. Execution through certified partners.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
                  >
                    DISCUSS INFRASTRUCTURE DEPLOYMENT
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/distribution-network.jpg" 
            alt="Distribution Network"
            loading="lazy" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              COMPETITIVE ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              WHY THESE VERTICALS?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'CONCENTRATED MARKETS',
                desc: 'Australia\'s retail and infrastructure markets are highly concentrated. Success requires precise architecture, not broad-stroke approaches.',
              },
              {
                title: 'REGULATED ENVIRONMENTS',
                desc: 'Both verticals operate under strict regulatory frameworks. We navigate AS/NZS compliance and industry-specific requirements.',
              },
              {
                title: 'LONG-ARC DEPLOYMENTS',
                desc: 'These are not quick-win markets. We architect for sustainable, compounding market presence over multi-year horizons.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-silver-steel/20 p-6 sm:p-8 text-center hover:border-gold transition-all duration-300"
              >
                <h4 className="text-sm font-semibold text-optical-white mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-accent-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
              WHICH VERTICAL DESCRIBES YOUR DEPLOYMENT?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              INITIATE VERTICAL ASSESSMENT
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
