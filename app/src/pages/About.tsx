import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
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
              ABOUT US
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              Engineering the Physical Layer
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              Divine Lab Worx is the Australian infrastructure consulting arm of Sharktech Global. 
              We provide a single point of accountability for deploying mission-critical facilities, 
              turning complex capital projects into operational, high-yield assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Strategic Advantage */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gold">
                The Strategic Advantage
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base text-accent-muted leading-relaxed">
                In the deployment of digital infrastructure, velocity is the ultimate competitive advantage. 
                We secure and validate sites across Australia that are primed for hyperscale expansion. By 
                vertically integrating site selection, heavy utility engineering, and industrial safety 
                automation, we remove the friction from the development lifecycle. We manage the physical 
                complexities so you can scale your compute without delay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
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
                  CEO
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-optical-white mb-2 tracking-tight">
                  DAINU DEVIS
                </h3>
                <p className="text-sm font-mono text-silver-steel uppercase mb-6">
                  CEO OF SHARKTECH GLOBAL & DIVINE LAB WORX
                </p>
                <p className="text-sm text-accent-muted leading-relaxed">
                  Operating at the intersection of applied artificial intelligence and critical infrastructure. 
                  With a background as a technologist, research scientist, and serial entrepreneur, executive 
                  experience spans cloud architecture, data science, and R&D across tier-one Australian enterprises, 
                  including Telstra, Ventia, and Aldi.
                </p>
                <p className="text-sm text-accent-muted leading-relaxed mt-4">
                  The mandate for Divine Lab Worx is built on first-principles engineering: deploying 
                  capital-efficient, highly scalable physical infrastructure that serves as the enduring 
                  foundation for the next generation of global compute.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sharktech Global Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-xs tracking-widest text-gold uppercase mb-6 block">
                SHARKTECH GLOBAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-2">
                Enterprise AI built in Australia,
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gold">
                deployed for real-world impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base text-accent-muted leading-relaxed mb-6">
                Based in <span className="text-optical-white font-semibold">Liverpool, Sydney</span>, Sharktech Global builds AI technologies designed for 
                real-world business impact, balancing innovation with responsible, ethical use.
              </p>
              <p className="text-base text-accent-muted leading-relaxed">
                Our <span className="text-optical-white font-semibold">8-week implementation process</span> enables rapid deployment of functional AI 
                systems, delivering measurable ROI where standard enterprise projects take 12-18 months. 
                We serve Australian retail, manufacturing, fitness, restaurant, and infrastructure sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
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

      {/* Sub Footer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent-muted">
            © {new Date().getFullYear()} Divine Lab Worx. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-accent-muted">Backed by</span>
            <div className="w-24">
              <img 
                src="/images/sharktech-logo.png" 
                alt="Sharktech Global"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
