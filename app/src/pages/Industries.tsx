import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Server } from 'lucide-react';

const consumerSectors = [
  'Home Appliances & Electronics',
  'Health & Wellness Products',
  'Smart Home Technology',
  'Premium Consumer Brands',
  'Sustainable Products',
];

const infrastructureSectors = [
  'Cloud & Data Center Companies',
  'AI & Machine Learning Infrastructure',
  'Digital Service Providers',
  'Telecommunications Networks',
  'Clean Energy Technology',
];

const Industries = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
              Strategic Verticals
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              Dual Market Coverage
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We architect market entry for consumer brands and infrastructure providers 
              seeking established presence in Australia's concentrated commercial landscape. 
              Our expertise spans both physical product distribution and mission-critical digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Consumer & Retail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-silver-steel/20 p-8 sm:p-10 hover:border-gold transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-silver-steel/30 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-silver-steel" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block">
                    Vertical
                  </span>
                  <h2 className="text-xl font-semibold text-optical-white tracking-tight">
                    Consumer & Retail
                  </h2>
                </div>
              </div>
              
              <p className="text-sm text-accent-muted leading-relaxed mb-6">
                Australia's retail market is dominated by two major players controlling 65% of distribution. 
                We help premium consumer brands navigate this concentrated landscape—ensuring compliant 
                market entry, preventing margin leakage, and building sustainable retail partnerships.
              </p>
              
              <div className="mb-6">
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block mb-3">
                  Focus Areas
                </span>
                <ul className="space-y-2">
                  {consumerSectors.map((sector) => (
                    <li key={sector} className="text-sm text-accent-muted flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                EXPLORE THIS VERTICAL
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Digital & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-silver-steel/20 p-8 sm:p-10 hover:border-gold transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-silver-steel/30 flex items-center justify-center">
                  <Server className="w-6 h-6 text-silver-steel" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block">
                    Vertical
                  </span>
                  <h2 className="text-xl font-semibold text-optical-white tracking-tight">
                    Infrastructure & Technology
                  </h2>
                </div>
              </div>
              
              <p className="text-sm text-accent-muted leading-relaxed mb-6">
                We provide full-lifecycle consulting for hyperscale data centers, semiconductor facilities, 
                and critical digital infrastructure. From site selection to energization, we manage the 
                physical complexities of deploying mission-critical compute assets in Australia.
              </p>
              
              <div className="mb-6">
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block mb-3">
                  Focus Areas
                </span>
                <ul className="space-y-2">
                  {infrastructureSectors.map((sector) => (
                    <li key={sector} className="text-sm text-accent-muted flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                EXPLORE THIS VERTICAL
                <ArrowRight size={14} />
              </Link>
            </motion.div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Deploy with Velocity
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              We eliminate friction from the development of critical infrastructure. If you are scaling 
              compute, securing sites, or engineering advanced thermal architectures, engage our consulting 
              team to accelerate your timeline.
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
  );
};

export default Industries;
