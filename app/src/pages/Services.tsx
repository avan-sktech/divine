import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ClipboardCheck, Server, Shield, Eye, Lock, TrendingDown } from 'lucide-react';
import { useViewMode } from '../contexts/ViewModeContext';

const services = [
  {
    id: 'market-entry',
    title: 'MARKET ENTRY BLUEPRINT',
    subtitle: 'Framework',
    description: 'Comprehensive channel identification, margin architecture, SKU configuration, and structural risk mapping for new market penetration.',
    features: [
      'Channel identification & prioritization',
      'Margin architecture analysis',
      'SKU configuration strategy',
      'Structural risk mapping',
      'Regulatory pathway assessment',
    ],
    icon: MapPin,
    image: '/images/distribution-network.jpg',
  },
  {
    id: 'retail-readiness',
    title: 'RETAIL READINESS',
    subtitle: 'Architecture',
    description: 'Structured buyer alignment and compliance sequencing prior to listing engagement. Ensure your product meets retail ecosystem requirements.',
    features: [
      'Buyer alignment strategy',
      'Compliance sequencing',
      'Listing requirement analysis',
      'Packaging & labeling review',
      'AS/NZS standards verification',
    ],
    icon: ClipboardCheck,
    image: '/images/compliance.jpg',
  },
  {
    id: 'infrastructure',
    title: 'INFRASTRUCTURE DEPLOYMENT',
    subtitle: 'Architecture (Advisory Only)',
    description: 'Site feasibility, power density analysis, and regulatory pathway mapping for data centres and AI compute infrastructure.',
    features: [
      'Site feasibility assessment',
      'Power density analysis',
      'Regulatory pathway mapping',
      'Grid connection strategy',
      'Environmental impact review',
    ],
    icon: Server,
    image: '/images/data-center.jpg',
  },
  {
    id: 'integrity',
    title: 'MARKET INTEGRITY',
    subtitle: 'Framework',
    description: 'Sovereign observation and capital protection for MNCs entering Australia. We prevent margin leakage, channel conflict, and unauthorized distribution before they erode your market position.',
    features: [
      'Sovereign observation protocols',
      'Margin leakage detection',
      'Channel conflict prevention',
      'Unauthorized distribution monitoring',
      'Capital protection assurance',
    ],
    icon: Shield,
    highlight: true,
    image: '/images/integrity-visual.jpg',
  },
];

const integrityFeaturesTechnical = [
  {
    icon: Eye,
    title: 'SOVEREIGN OBSERVATION',
    description: 'Independent, always-on monitoring of your distribution channels. We observe without interference, providing unfiltered visibility into market execution.',
  },
  {
    icon: Lock,
    title: 'CAPITAL PROTECTION',
    description: 'Your margin is your capital. Our framework detects pricing variance, gray market activity, and channel conflict before they impact your bottom line.',
  },
  {
    icon: TrendingDown,
    title: 'MARGIN LEAKAGE PREVENTION',
    description: 'MNCs entering Australia consistently face margin compression. Our early-warning system identifies threats to your pricing integrity within 24 hours.',
  },
];

const integrityFeaturesExecutive = [
  {
    icon: Eye,
    title: '24/7 CHANNEL MONITORING',
    description: 'We watch your distribution channels continuously. When a retailer drops your price below agreed levels, we alert you immediately.',
  },
  {
    icon: Lock,
    title: 'PRICE VIOLATION PROTECTION',
    description: 'We catch unauthorized sellers and gray market products before they destroy your pricing structure and relationships with legitimate partners.',
  },
  {
    icon: TrendingDown,
    title: 'MARGIN RECOVERY',
    description: 'Our clients typically recover 15-20% of lost margins in their first year by catching violations early and enforcing pricing discipline.',
  },
];

const Services = () => {
  const { isTechnical, isExecutive } = useViewMode();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-infrastructure.jpg" 
            alt="Infrastructure"
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
            className="max-w-3xl mx-auto text-center"
          >
            {isTechnical && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                  FRAMEWORK REPOSITORY
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  ADVISORY ARCHITECTURE
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  All services are framed as "Advisory Architecture" to maintain executive posture. 
                  We do not execute; we architect the pathway for your deployment success.
                </p>
              </>
            )}
            {isExecutive && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                  HOW WE HELP
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  SERVICES THAT PROTECT YOUR MARGINS
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  We provide strategic guidance and monitoring to help you enter Australia successfully 
                  while avoiding the costly mistakes that erode profits.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`border h-full transition-all duration-300 hover:border-optical-white hover:shadow-tile-hover group overflow-hidden ${
                    service.highlight ? 'border-optical-white/40' : 'border-silver-steel/20'
                  }`}>
                    {/* Service Image */}
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy" 
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                          service.highlight ? 'opacity-70' : 'opacity-50'
                        } group-hover:opacity-80`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-10 h-10 border flex items-center justify-center backdrop-blur-sm ${
                          service.highlight ? 'border-optical-white/50 bg-obsidian/50' : 'border-silver-steel/30 bg-obsidian/50'
                        }`}>
                          <Icon className={`w-5 h-5 ${service.highlight ? 'text-optical-white' : 'text-silver-steel'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block mb-2">
                        {isTechnical ? service.subtitle : 'SERVICE'}
                      </span>
                      <h3 className="text-lg font-semibold text-optical-white tracking-tight mb-4">
                        {isTechnical ? service.title : service.title.replace('MARKET ENTRY BLUEPRINT', 'MARKET ENTRY STRATEGY').replace('RETAIL READINESS', 'RETAIL PREPARATION').replace('INFRASTRUCTURE DEPLOYMENT', 'INFRASTRUCTURE SETUP').replace('MARKET INTEGRITY', 'MARGIN PROTECTION')}
                      </h3>
                      <p className="text-sm text-accent-muted leading-relaxed mb-6">
                        {isTechnical ? service.description : 
                          service.id === 'market-entry' ? 'We help you identify the right channels and pricing strategy to enter Australia profitably.' :
                          service.id === 'retail-readiness' ? 'We ensure your products meet retailer requirements and compliance standards before launch.' :
                          service.id === 'infrastructure' ? 'We guide data center and cloud providers through regulatory and grid connection requirements.' :
                          'We monitor your distribution channels 24/7 to catch pricing violations and unauthorized sellers before they hurt your profits.'
                        }
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-silver-steel">
                            <span className="w-1 h-1 bg-silver-steel/50 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted group-hover:text-optical-white transition-colors"
                      >
                        REQUEST CONSULTATION
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Integrity Deep Dive */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/integrity-visual.jpg" 
            alt="Market Integrity" 
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
            {isTechnical && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                  CAPITAL PROTECTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
                  THE MARKET INTEGRITY FRAMEWORK
                </h2>
                <p className="text-base text-accent-muted max-w-2xl mx-auto leading-relaxed">
                  For MNCs entering Australia, margin leakage and channel conflict are existential threats. 
                  Our Sovereign Observation protocol provides independent verification and early warning 
                  before capital erosion begins.
                </p>
              </>
            )}
            {isExecutive && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                  MARGIN PROTECTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
                  HOW WE STOP MONEY LEAKING FROM YOUR BUSINESS
                </h2>
                <p className="text-base text-accent-muted max-w-2xl mx-auto leading-relaxed">
                  Most companies entering Australia lose 15-25% of their margins to pricing violations 
                  and unauthorized sellers. We catch these issues within 24 hours—before they spread 
                  across your distribution network.
                </p>
              </>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {(isTechnical ? integrityFeaturesTechnical : integrityFeaturesExecutive).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-silver-steel/20 p-8 text-center hover:border-optical-white transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-6 border border-silver-steel/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-silver-steel" />
                  </div>
                  <h4 className="text-sm font-semibold text-optical-white mb-3 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-accent-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Integrity Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 border border-silver-steel/20 p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/market-analysis.jpg" 
                alt="Market Analysis" 
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">24h</div>
                <div className="text-xs font-mono text-accent-muted uppercase">Detection Window</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">100%</div>
                <div className="text-xs font-mono text-accent-muted uppercase">Channel Coverage</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">0.5%</div>
                <div className="text-xs font-mono text-accent-muted uppercase">Margin Variance Alert</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">AUD</div>
                <div className="text-xs font-mono text-accent-muted uppercase">Local Pricing Benchmark</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              ENGAGEMENT MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              THE ARCHITECTURE PROCESS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'DISCOVERY', desc: 'Deep-dive into your deployment objectives and constraints' },
              { step: '02', title: 'ANALYSIS', desc: 'Market integrity assessment and structural gap identification' },
              { step: '03', title: 'ARCHITECTURE', desc: 'Blueprint development with phased implementation roadmap' },
              { step: '04', title: 'VALIDATION', desc: 'Framework testing and refinement against market realities' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 border border-silver-steel/20 flex items-center justify-center">
                  <span className="font-mono text-lg text-silver-steel">{item.step}</span>
                </div>
                <h4 className="text-sm font-semibold text-optical-white mb-2 tracking-tight">
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
              WHICH FRAMEWORK FITS YOUR DEPLOYMENT?
            </h2>
            <p className="text-sm text-accent-muted mb-8 max-w-xl mx-auto">
              Our Commercial Architects will assess your current position and recommend 
              the appropriate advisory framework for your market entry.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              SCHEDULE ARCHITECTURE REVIEW
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
