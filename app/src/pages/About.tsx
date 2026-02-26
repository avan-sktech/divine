import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useViewMode } from '../contexts/ViewModeContext';

const About = () => {
  const { isTechnical, isExecutive } = useViewMode();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/team-meeting.jpg" 
            alt="Team Meeting"
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
                  OPERATING PHILOSOPHY
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  BUILT FOR STRUCTURE
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  Divine Lab Worx exists to bridge the structural gap between engineering 
                  precision and market momentum. We are the deployment architecture layer 
                  for companies entering Australia's concentrated environments.
                </p>
              </>
            )}
            {isExecutive && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                  ABOUT US
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
                  WE PROTECT YOUR PROFITS
                </h1>
                <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
                  Divine Lab Worx helps international companies successfully enter Australia 
                  while avoiding the costly mistakes that erode margins. We're part of 
                  Sharktech Global, bringing intelligence-driven deployment to market entry.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* The Origin */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isTechnical && (
                <>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                    THE ORIGIN
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
                    BRIDGING THE GAP
                  </h2>
                  <div className="space-y-4 text-sm text-accent-muted leading-relaxed">
                    <p>
                      Divine Lab Worx was founded on a simple observation: the most brilliantly 
                      engineered products and infrastructure systems often fail in market deployment 
                      not because of technical flaws, but because of structural gaps in their 
                      entry architecture.
                    </p>
                    <p>
                      We observed companies with world-class engineering struggle against Australia's 
                      unique market concentration—where two retailers control 65% of consumer goods 
                      distribution, and where infrastructure deployment requires navigating complex 
                      regulatory, environmental, and grid-connection challenges.
                    </p>
                    <p>
                      DLW was built to solve this. As part of Sharktech Global, we bring 
                      institutional-grade architecture thinking to market deployment challenges.
                    </p>
                  </div>
                </>
              )}
              {isExecutive && (
                <>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                    WHY WE EXIST
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
                    SOLVING A REAL PROBLEM
                  </h2>
                  <div className="space-y-4 text-sm text-accent-muted leading-relaxed">
                    <p>
                      We saw great companies with excellent products fail in Australia—not 
                      because their products were bad, but because they didn't understand the 
                      market structure.
                    </p>
                    <p>
                      Australia's retail market is dominated by two major players controlling 
                      65% of distribution. Without proper guidance, companies lose 15-25% of 
                      their margins to pricing violations and channel conflicts.
                    </p>
                    <p>
                      We built Divine Lab Worx to stop this. We help you enter Australia 
                      profitably and protect your margins from day one.
                    </p>
                  </div>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="border border-silver-steel/20 p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/images/partnership.jpg" 
                    alt="Partnership"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian" />
                </div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">7+</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">10+</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Deployments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">98%</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-semibold text-optical-white mb-2">24h</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Response Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/command-center.jpg" 
            alt="Command Center"
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
              HOW WE THINK
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              OPERATING PHILOSOPHY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: 'FIRST PRINCIPLES',
                desc: 'We strip away assumptions and rebuild from fundamentals. Every deployment strategy starts with a blank slate and rigorous analysis of market structure, regulatory constraints, and competitive dynamics.',
              },
              {
                icon: Lightbulb,
                title: 'QUIET COMPOUNDING',
                desc: 'We do not chase quick wins. Our architecture is designed for sustainable, compounding market presence. Small, correct decisions made consistently create outsized long-term outcomes.',
              },
              {
                icon: TrendingUp,
                title: 'OPERATING LAYERS',
                desc: 'We do not build features; we build operating layers. Each framework we deploy becomes a permanent capability that strengthens your market position and creates defensive moats.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-silver-steel/20 p-8 sm:p-10 hover:border-gold transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-silver-steel/30 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-silver-steel" />
                  </div>
                  <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent-muted leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Long Arc */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="border border-silver-steel/20 p-8 sm:p-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-silver-steel/30 flex items-center justify-center">
                      <span className="font-mono text-xs text-silver-steel">01</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-optical-white">STRATEGIC INTELLIGENCE</div>
                      <div className="text-xs text-accent-muted">Sharktech Global</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-silver-steel/20 ml-5" />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-optical-white flex items-center justify-center bg-optical-white">
                      <span className="font-mono text-xs text-obsidian">02</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-optical-white">DEPLOYMENT ARCHITECTURE</div>
                      <div className="text-xs text-accent-muted">Divine Lab Worx</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-silver-steel/20 ml-5" />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-silver-steel/30 flex items-center justify-center">
                      <span className="font-mono text-xs text-silver-steel">03</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-optical-white">MARKET EXECUTION</div>
                      <div className="text-xs text-accent-muted">Certified Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
                THE LONG-ARC
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
                THE SHARKTECH ECOSYSTEM
              </h2>
              <div className="space-y-4 text-sm text-accent-muted leading-relaxed">
                <p>
                  Divine Lab Worx is positioned as the physical deployment engine of the 
                  Sharktech Global intelligence ecosystem. While Sharktech provides strategic 
                  intelligence and market analysis, DLW architects the deployment pathways 
                  that translate insight into market presence.
                </p>
                <p>
                  This ecosystem approach means our clients benefit from intelligence-driven 
                  architecture. Every deployment framework we build is informed by deep market 
                  intelligence and validated against real-world execution data.
                </p>
                <p>
                  Our long-arc vision is clear: become the definitive deployment architecture 
                  platform for engineered systems entering Australia—whether physical products 
                  or digital infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/australia-skyline.jpg" 
            alt="Australia Skyline"
            loading="lazy"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              COMMERCIAL ARCHITECT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-silver-steel/20 overflow-hidden hover:border-gold transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Photo */}
              <div className="aspect-[3/4] md:aspect-auto overflow-hidden">
                <img 
                  src="/images/dainu.jpg" 
                  alt="Dainu Devis" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  CEO & FOUNDER
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-optical-white mb-2 tracking-tight">
                  DAINU DEVIS
                </h3>
                <p className="text-sm font-mono text-silver-steel uppercase mb-6">
                  CEO of Sharktech Global & Divine Lab Worx
                </p>
                <p className="text-sm text-accent-muted leading-relaxed">
                  CEO of Sharktech Global and Divine Lab Worx, with end-to-end operational experience across Australian retail, logistics, and cloud infrastructure. Builders discipline: engineered commercial outcomes, not accidental ones.
                </p>
              </div>
            </div>
          </motion.div>
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
            <div className="w-16 h-16 mx-auto mb-8">
              <img 
                src="/images/logo.png" 
                alt="Divine Lab Worx"
                loading="lazy"
                className="w-full h-full object-contain opacity-50"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
              READY TO STRUCTURE YOUR DEPLOYMENT?
            </h2>
            <p className="text-sm text-accent-muted mb-8 max-w-xl mx-auto">
              Our Commercial Architects are ready to assess your current position and 
              design a deployment framework tailored to your objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              INITIATE ARCHITECTURE REVIEW
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
