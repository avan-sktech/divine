import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter text-optical-white leading-[1.05] mb-6 sm:mb-8">
          ENGINEERING THE
          <br />
          <span className="text-gold">PHYSICAL LAYER</span>
          <br />
          OF THE DIGITAL
          <br />
          ECONOMY
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-accent-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
          As the Australian infrastructure consulting arm of Sharktech Global, we provide a single point 
          of accountability for deploying mission-critical facilities. We design, site, and build hyperscale 
          data centres, semiconductor fabs, and advanced cleanrooms.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gold text-obsidian text-base font-semibold tracking-tight hover:bg-gold-light transition-colors min-h-[52px] shadow-lg shadow-gold/20"
          >
            ENGAGE DIVINE LAB WORX
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 border-2 border-silver-steel/30 text-optical-white text-base font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors min-h-[52px]"
          >
            EXPLORE CAPABILITIES
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
