import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useViewMode } from '../../contexts/ViewModeContext';

const HeroContent = () => {
  const { isTechnical, isExecutive } = useViewMode();

  return (
    <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* TECHNICAL VIEW */}
        {isTechnical && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter text-optical-white leading-[1.05] mb-6 sm:mb-8">
              STRUCTURED
              <br />
              DEPLOYMENT OF
              <br />
              <span className="text-silver-steel">ENGINEERED SYSTEMS</span>
              <br />
              IN AUSTRALIA
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-accent-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              Divine Lab Worx is part of Sharktech Global, serving as the market deployment architecture arm. 
              We architect and structure commercial and digital infrastructure entry into 
              Australia's concentrated environments.
            </p>
          </>
        )}

        {/* EXECUTIVE VIEW */}
        {isExecutive && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter text-optical-white leading-[1.05] mb-6 sm:mb-8">
              ENTER AUSTRALIA
              <br />
              <span className="text-silver-steel">WITHOUT LOSING</span>
              <br />
              MONEY TO
              <br />
              CHANNEL VIOLATIONS
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-accent-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              We help international companies successfully enter Australia's retail market 
              while protecting your margins from pricing violations and unauthorized sellers.
              Our clients save an average of 15-20% on margin leakage in their first year.
            </p>
          </>
        )}

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-optical-white text-obsidian text-base font-semibold tracking-tight hover:bg-silver-steel transition-colors min-h-[52px] shadow-lg shadow-optical-white/10"
          >
            BOOK A CONSULTATION
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 border-2 border-silver-steel/30 text-optical-white text-base font-semibold tracking-tight hover:border-optical-white hover:bg-optical-white/5 transition-colors min-h-[52px]"
          >
            EXPLORE SERVICES
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-accent-muted uppercase">Scroll</span>
          <ChevronDown size={16} className="text-accent-muted" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
