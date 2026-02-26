import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Network, ChevronDown } from 'lucide-react';
import { useViewMode } from '../contexts/ViewModeContext';
import HeroContent from '../components/content/HeroContent';

const Home = () => {
  const { isTechnical, isExecutive } = useViewMode();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-12 sm:pb-0">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-infrastructure.jpg"
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-obsidian/60" />
        </div>

        <HeroContent />
      </section>

      {/* Australia Market Section with Image */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/australia-skyline.jpg" 
            alt="Australia Skyline" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isTechnical && (
                <>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                    MARKET FOCUS
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
                    AUSTRALIA'S CONCENTRATED MARKETS
                  </h2>
                  <p className="text-sm text-accent-muted leading-relaxed mb-6">
                    Australia's unique market structure presents both opportunity and challenge. 
                    With two major retailers controlling 65% of consumer goods distribution, 
                    successful deployment requires precise architecture—not broad-stroke marketing.
                  </p>
                  <p className="text-sm text-accent-muted leading-relaxed">
                    Our frameworks are designed specifically for this concentration, 
                    ensuring your engineered systems achieve sustainable market presence.
                  </p>
                </>
              )}
              
              {isExecutive && (
                <>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                    THE MARKET REALITY
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
                    AUSTRALIA IS A DUOPOLY
                  </h2>
                  <p className="text-sm text-accent-muted leading-relaxed mb-6">
                    Two retailers control 65% of the market. This concentration creates 
                    massive risk for new entrants—one pricing mistake can cost millions in 
                    margin erosion across your entire distribution network.
                  </p>
                  <p className="text-sm text-accent-muted leading-relaxed">
                    We provide the market intelligence and channel monitoring that protects 
                    your bottom line while you scale.
                  </p>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {isTechnical ? (
                <img 
                  src="/images/australia-skyline.jpg" 
                  alt="Australia Skyline" 
                  className="w-full h-64 sm:h-80 object-cover border border-silver-steel/20"
                />
              ) : (
                <img 
                  src="/images/market-duopoly-chart.svg" 
                  alt="Australian Retail Market Share - 65% controlled by two retailers" 
                  className="w-full h-64 sm:h-80 object-contain border border-silver-steel/20 bg-obsidian"
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vertical Selection - The Dual Engine */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
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
                  DEPLOYMENT VERTICALS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  THE DUAL-ENGINE
                </h2>
              </>
            )}
            {isExecutive && (
              <>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                  HOW WE HELP
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  TWO WAYS WE PROTECT YOUR MARGINS
                </h2>
              </>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Consumer & Retail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/industries" className="group block h-full">
                <div className="border border-silver-steel/20 h-full transition-all duration-300 hover:border-gold hover:shadow-tile-hover overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="/images/retail-deployment.jpg" 
                      alt="Retail Deployment"
                      loading="lazy" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <Layers className="w-8 h-8 text-silver-steel group-hover:text-gold transition-colors" />
                    </div>
                    {isTechnical ? (
                      <>
                        <h3 className="text-lg font-semibold text-optical-white mb-3 tracking-tight">
                          CONSUMER & RETAIL
                        </h3>
                        <p className="text-sm text-accent-muted leading-relaxed mb-4">
                          Engineered products entering concentrated retail ecosystems. 
                          Structured deployment for premium appliances, smart devices, and regulated health products.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold text-optical-white mb-3 tracking-tight">
                          PHYSICAL PRODUCTS
                        </h3>
                        <p className="text-sm text-accent-muted leading-relaxed mb-4">
                          For companies selling appliances, electronics, or health products. 
                          We monitor your retail channels to catch pricing violations before they spread.
                        </p>
                      </>
                    )}
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-muted group-hover:text-gold transition-colors">
                      <span>EXPLORE VERTICAL</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Digital & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/industries" className="group block h-full">
                <div className="border border-silver-steel/20 h-full transition-all duration-300 hover:border-gold hover:shadow-tile-hover overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="/images/data-center.jpg" 
                      alt="Data Center Infrastructure"
                      loading="lazy" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <Network className="w-8 h-8 text-silver-steel group-hover:text-gold transition-colors" />
                    </div>
                    {isTechnical ? (
                      <>
                        <h3 className="text-lg font-semibold text-optical-white mb-3 tracking-tight">
                          DIGITAL & INFRASTRUCTURE
                        </h3>
                        <p className="text-sm text-accent-muted leading-relaxed mb-4">
                          Structured pathways for Cloud and AI-first infrastructure. 
                          Advisory deployment architecture for data centres and compute providers.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold text-optical-white mb-3 tracking-tight">
                          CLOUD & INFRASTRUCTURE
                        </h3>
                        <p className="text-sm text-accent-muted leading-relaxed mb-4">
                          For data center and cloud providers entering Australia. 
                          We navigate regulatory requirements and grid connection challenges.
                        </p>
                      </>
                    )}
                    <div className="flex items-center gap-2 text-xs font-mono text-accent-muted group-hover:text-gold transition-colors">
                      <span>EXPLORE VERTICAL</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Integrity Section with Image */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/integrity-visual.jpg" 
            alt="Market Integrity"
            loading="lazy" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="/images/market-analysis.jpg" 
                alt="Market Analysis"
                loading="lazy" 
                className="w-full h-64 sm:h-80 object-cover border border-silver-steel/20"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                CAPITAL PROTECTION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
                SOVEREIGN OBSERVATION
              </h2>
              <p className="text-sm text-accent-muted leading-relaxed mb-6">
                For MNCs entering Australia, margin leakage and channel conflict are existential threats. 
                Our Market Integrity Framework provides independent, always-on monitoring of your 
                distribution channels.
              </p>
              <p className="text-sm text-accent-muted leading-relaxed mb-8">
                We observe without interference, providing unfiltered visibility into pricing variance, 
                unauthorized distribution, and channel conflict—enabling you to protect your capital 
                before erosion begins.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                LEARN MORE ABOUT MARKET INTEGRITY
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Thesis */}
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
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-8 block">
              OPERATING PRINCIPLE
            </span>
            
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white leading-tight">
              "Without architecture, deployment fragments.
              <br />
              <span className="text-silver-steel">With architecture, deployment compounds."</span>
            </blockquote>

            <div className="mt-12 flex justify-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                READ OUR PHILOSOPHY
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/partnership.jpg" 
            alt="Partnership"
            loading="lazy" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              THE SHARKTECH ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              STRATEGIC INTELLIGENCE MEETS DEPLOYMENT ARCHITECTURE
            </h2>
            <p className="text-sm text-accent-muted max-w-2xl mx-auto leading-relaxed">
              As part of Sharktech Global, we bring intelligence-driven architecture 
              to every deployment. Our frameworks are informed by deep market intelligence 
              and validated against real-world execution data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-silver-steel/20 p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {isExecutive ? (
                <>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">$50M+</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Capital Deployed</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">$120M+</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Margin Unlocked</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">45MW</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Sovereign Compute</div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">100%</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">PSPF Compliant</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">100%</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">SCEC Standards</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-semibold text-gold mb-2">45MW</div>
                    <div className="text-xs font-mono text-accent-muted uppercase">Critical Infrastructure</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="border border-silver-steel/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/team-meeting.jpg" 
                alt="Team Meeting"
                loading="lazy" 
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
                  READY TO STRUCTURE YOUR DEPLOYMENT?
                </h2>
                <p className="text-sm text-accent-muted leading-relaxed">
                  Begin the structural audit process. Our team will review your market positioning 
                  against our Integrity Framework and architect a deployment pathway.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start lg:justify-end"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
                >
                  INITIATE DEPLOYMENT REVIEW
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
