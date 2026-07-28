import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  showSubheadline: boolean;
}

const Hero: React.FC<HeroProps> = ({ showSubheadline }) => {
  return (
    <section className="relative w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Part of Badge */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted uppercase">
          <span className="text-optical-white font-medium">DLW</span>
          <span className="text-silver-steel/50">//</span>
          <span>PART OF SHARKTECH GLOBAL</span>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-optical-white leading-tight">
            INITIATE DEPLOYMENT
            <br />
            ARCHITECTURE REVIEW
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {showSubheadline && (
            <motion.p 
              className="mt-6 sm:mt-8 text-sm sm:text-base text-accent-muted max-w-[60ch] mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Select your primary deployment pathway to begin the structural audit process. 
              Our team will review your market positioning against our Integrity Framework.
            </motion.p>
          )}
        </motion.div>

        {/* Decorative Line */}
        <motion.div 
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-steel/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
