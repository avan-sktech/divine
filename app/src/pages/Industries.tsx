import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Server } from 'lucide-react';

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
              Infrastructure & Technology
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We architect market entry for infrastructure providers seeking established presence 
              in Australia's concentrated commercial landscape. Our expertise spans mission-critical 
              digital infrastructure and hyperscale compute deployments.
            </p>
            <p className="text-sm text-accent-muted/70 mt-4 leading-relaxed">
              <span className="text-gold">Coming soon:</span> Selective advisory services for premium 
              consumer brands navigating Australia's retail duopoly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-silver-steel/20 p-8 sm:p-10 hover:border-gold transition-all duration-300 max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-silver-steel/30 flex items-center justify-center">
                <Server className="w-6 h-6 text-silver-steel" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase block">
                  Primary Focus
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
      </section>
    </div>
  );
};

export default Industries;
